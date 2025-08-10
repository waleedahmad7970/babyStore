import http from "@/utils/https";
import { baseAPIUrl } from "@/config/config";
import { getDispatch } from "@/utils/dispatch.util";
import { brandAction } from "@/store/slices/brand.slice";

const categoryServices = {
  async getBrandDetails(id: any) {
    const dispatch = getDispatch();

    const [res, error] = await http.get(`${baseAPIUrl}/${"fetch_brand"}/${id}`);
    const { data = {} } = res?.data || {};
    if (res?.data?.success) {
      dispatch(brandAction.setCBSDetails(data));
    }
    return [res, error];
  },
  async getCategoryPageProducts(idOrPath: any, maybePath?: string) {
    const id = maybePath ? idOrPath : undefined;
    const path = maybePath || idOrPath;
    const dispatch = getDispatch();

    const url = id ? `${baseAPIUrl}/${path}/${id}` : `${baseAPIUrl}/${path}`;

    const [res, error] = await http.get(url);

    const { data = [] } = res?.data || {};
    if (res?.data?.success && data.length > 0) {
      //  resetting slectef filter top right

      dispatch(brandAction.reserAllAppliedFilter());

      dispatch(brandAction.setCBSPageProducts(data));
      // dispatch(categoriesAction.setCategoryPageProducts(data));

      // Extract brands (unique)
      const brands = [
        ...new Set(
          data.map((item: any) => item.attribute_array?.brand).filter(Boolean),
        ),
      ];

      // Extract filters from attribute_array except brand, category, price
      const filterMap: Record<string, Set<any>> = {};
      data.forEach((product: any) => {
        const attrs = product.attribute_array || {};
        Object.entries(attrs).forEach(([key, value]) => {
          if (!["brand", "category", "price"].includes(key)) {
            if (!filterMap[key]) filterMap[key] = new Set();
            filterMap[key].add(value);
          }
        });
      });

      // Category nested structure
      const categoryTree: Record<string, Set<string>> = {};
      data.forEach((product: any) => {
        const category = product.attribute_array?.category;
        if (!category) return;

        // Group feeding subcategories
        if (category.includes("Feeding")) {
          if (!categoryTree["Feeding"]) categoryTree["Feeding"] = new Set();
          if (category !== "Feeding") categoryTree["Feeding"].add(category);
        } else {
          if (!categoryTree[category]) categoryTree[category] = new Set();
        }
      });

      // Convert categoryTree to nested structure with children array
      const formattedCategories = Object.entries(categoryTree).map(
        ([label, children]) => ({
          label,
          value: label,
          children: Array.from(children).map((child) => ({
            label: child,
            value: child,
            // You can add count or further nested children here if available
          })),
        }),
      );

      // Price ranges - keep as is or calculate dynamically
      // const priceRanges = [
      //   "0 - 50",
      //   "51 - 100",
      //   "101 - 250",
      //   "251 - 500",
      //   "501 - 1000",
      //   "1000+",
      // ].map((range) => ({ label: range, value: range }));

      const prices = data
        .map((item: any) => item.price)
        .filter((p: any) => typeof p === "number");

      const lowestPrice = Math?.min(...prices);
      const highestPrice = Math?.max(...prices);

      const priceRange = [lowestPrice, highestPrice];
      // Convert filterMap to array with children (no nested here, but you can add if needed)
      const otherFilters = Object.entries(filterMap).map(([key, set]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        value: key,
        children: Array.from(set).map((val) => ({
          label: val,
          value: val,
        })),
      }));

      // Compose your final filters array following your FilterSection[] format
      const filters = [
        {
          title: "Filter By",
          showCount: false,
          options: otherFilters,
        },
        {
          title: "Category",
          showCount: true,
          options: formattedCategories,
        },
        {
          title: "Brand",
          showCount: true,
          options: brands?.map((brand) => ({ label: brand, value: brand })),
        },
        {
          title: "Price",
          showCount: true,
          options: priceRange,
          isPriceFilter: true,
          // options: priceRanges,
        },
      ];

      const categoryCountMap: Record<string, number> = {};

      // Collect all relevant keys (even if no product has them as `1`)
      data?.forEach((product: any) => {
        Object.keys(product).forEach((key) => {
          if (
            key === "recommended" ||
            key === "best_seller" ||
            key.startsWith("new_")
          ) {
            // Initialize key to 0 if not already present
            if (!(key in categoryCountMap)) {
              categoryCountMap[key] = 0;
            }

            // Increase count if product has 1
            if (product[key] === 1) {
              categoryCountMap[key]++;
            }
          }
        });
      });

      // Format name (e.g. new_arrival → New Arrival)
      const formatKey = (str: string) =>
        str
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      // Final array
      const categoryStatsArray = Object.entries(categoryCountMap).map(
        ([key, count]) => ({
          name: formatKey(key),
          value: key,
          count,
        }),
      );

      const priceSortOptions = [
        { name: "Low to High", value: "lowToHigh" },
        { name: "High to Low", value: "highToLow" },
      ];

      // ✅ Append them at the end
      const finalCategoryStatsArray = [
        ...categoryStatsArray,
        ...priceSortOptions.map((option) => ({
          name: option.name,
          value: option.value,
          count: 0, // or omit if not needed
        })),
      ];

      // Dispatch to redux
      dispatch(brandAction.setCBSPageFilters(filters));
      dispatch(brandAction.setCBSTopFilters(finalCategoryStatsArray));

      // dispatch(categoriesAction.setCategoryPageFilters(filters));
      // dispatch(categoriesAction.setCategoryTopFilters(categoryStatsArray));

      const filterCategories: { name: string; options: string[] }[] = [
        // From otherFilters
        ...otherFilters.map((filter) => ({
          name: filter.label,
          options: filter.children.map((child) => child.label),
        })),

        // From categories
        {
          name: "Category",
          options: formattedCategories.flatMap((cat) => [
            cat.label,
            ...(cat.children?.map((child) => child.label) || []),
          ]),
        },

        // From brands
        {
          name: "Brand",
          options: brands,
        },

        // From priceRanges
        // {
        //   name: "Price",
        //   // options: priceRanges.map((price) => price.label),
        //   options: [],
        // },
      ];
      dispatch(brandAction.setCBSPageFiltersMob(filterCategories));
      // dispatch(categoriesAction.setCategoryPageFiltersMob(filterCategories));
    }

    return [res, error];
  },
};

export default categoryServices;
