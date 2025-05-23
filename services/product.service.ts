import http from "@/utils/https";
import { searchClientIndex } from "@/config/config";
import { getDispatch } from "@/utils/dispatch.util";
import { productAction } from "@/store/slices/products";

const productServices = {
  async storeSearchDataToAlgolia() {
    const [res, error] = await http.get(
      `https://dummyjson.com/products?limit=0`,
    );
    const { products = [] } = res?.data || {};
    const objectsToIndex = products.map((product: any) => ({
      ...product,
      objectID: String(product.id),
      //  _tags: [product.category, product.brand], array to seach form
    }));
    try {
      await searchClientIndex.saveObjects(objectsToIndex);
    } catch (error) {
      console.log("searchClientIndex.saveObjects", error);
    }
    return [res, error];
  },
  // search api
  async getAllProducts() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/fetch_search/{s}`,
    );

    return [res, error];
  },
  // home categories
  async getCategories() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/fetch_categories`,
    );
    return [res, error];
  },
  // home page sliders
  async getHomeSlider() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/home_slider`,
    );

    return [res, error];
  },
  async getHomeMobSlider() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/mobile_slider`,
    );

    return [res, error];
  },

  async getHomeDesktopSections() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/home_desktop_sections`,
    );

    return [res, error];
  },
  //  top_brand list
  async getTopBrandList() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_top_brand_list`,
    );

    return [res, error];
  },
  //  mumdadata list
  async getMumzData() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_mumz_data`,
    );

    return [res, error];
  },

  async getSuggestedProducts() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_suggesstion`,
    );

    return [res, error];
  },

  async getCustomizedCategoryListUi() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_customize_categories_list`,
    );

    return [res, error];
  },

  async getbannerImage() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/banner_image`,
    );

    return [res, error];
  },

  async getFavouriteList() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_fav_list`,
    );

    return [res, error];
  },

  // get products
  async getYouAlsoLike() {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/you_may_also_like`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setYouMayAlosLike(data));
    }
    return [res, error];
  },
  async getTopProducts() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/top_products`,
    );

    return [res, error];
  },
  async getTrendingItem() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_trending_item`,
    );

    return [res, error];
  },
  async getFlashSaleProducts() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_flash_sale_products`,
    );

    return [res, error];
  },
  async getUserLikedProducts() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_likes_products`,
    );

    return [res, error];
  },
  async getMostWishedForProducts() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/most_wished_for`,
    );

    return [res, error];
  },
};

export default productServices;
