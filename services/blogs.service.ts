import http from "@/utils/https";
import { getDispatch } from "@/utils/dispatch.util";
import { blogActon } from "@/store/slices/blogs.slice";

const blogService = {
  async getAllBlogs() {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      "https://www.babystore.ae/api/fetch_blogs",
    );
    if (res?.data?.success) {
      dispatch(blogActon.setBlogs(res?.data?.data));
    }
    return [res, error];
  },
  async getBlogDetails(id: number | string) {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/fetch_blog/${id}`,
    );
    if (res?.data?.success) {
      dispatch(blogActon.setBlogDetails(res?.data?.data));
    }
    return [res, error];
  },
  async getBlogSlider() {
    const dispatch = getDispatch();
    const [res, error] = await http.get(
      `https://www.babystore.ae/api/blog_slider`,
    );
    if (res?.data?.success) {
      dispatch(blogActon.setBlogSlider(res?.data?.data));
    }
    return [res, error];
  },
};
export default blogService;
