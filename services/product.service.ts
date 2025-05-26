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
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/fetch_categories`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setCategories(data));
    }
    return [res, error];
  },
  // home page sliders
  async getHomeSlider() {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/home_slider`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setSliderImages(data));
    }

    return [res, error];
  },
  async getHomeMobSlider() {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/mobile_slider`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setMobSliderImages(data));
    }

    return [res, error];
  },
  // admin Ui () sections apis )
  async getHomeDesktopSections() {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/home_desktop_sections`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setDesktopSections(data));
    }

    return [res, error];
  },
  // mumz data list needs to update for updated deisgn Rehan/5/24/25 commented
  async getMumzData() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_mumz_data`,
    );

    return [res, error];
  },
  // home page un knwo apis ( need placement not in figma)

  // top_brand list
  async getTopBrandList() {
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_top_brand_list`,
    );

    return [res, error];
  },
  async getSuggestedProducts() {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_suggesstion`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setSuggestedCategories(data));
    }

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
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_fav_list`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setTopCategories(data));
    }

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
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/top_products`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setTopProducts(data));
    }
    return [res, error];
  },
  async getTrendingItem() {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_trending_item`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setTrendingItems(data));
    }
    return [res, error];
  },
  async getFlashSaleProducts() {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_flash_sale_products`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setFlashSaleproducts(data));
    }
    return [res, error];
  },
  async getUserLikedProducts() {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/get_likes_products`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setUserLikeproducts(data));
    }
    return [res, error];
  },
  async getMostWishedForProducts() {
    const dispatch = getDispatch();

    const [res, error] = await http.get(
      `https://www.babystore.ae/api/most_wished_for`,
    );
    const { data = [] } = res?.data;
    if (res?.data?.success) {
      dispatch(productAction.setMostWishedProducts(data));
    }

    return [res, error];
  },
};

export default productServices;
