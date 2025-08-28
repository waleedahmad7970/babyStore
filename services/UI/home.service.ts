import http from "@/utils/https";
import { getDispatch } from "@/utils/dispatch.util";
import { homeActions } from "@/store/slices/home.slice";

const homeServices = {
  async getHomeSections() {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://babystore.ae/api/home_sections_v2`,
    );

    const { data = [] } = res || {};
    if (res?.data) {
      dispatch(homeActions.setHomeSections(data));
    }
    return [res, error];
  },
};

export default homeServices;
