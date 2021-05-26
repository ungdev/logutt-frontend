import ApiService from "../api.service";
import { API_URL } from "@/common/config";

const ressource = API_URL + "categories"

export default {
    get(categoryId = "") {
      return ApiService.get(ressource, categoryId);
    },
    post(params) {
      return ApiService.post(ressource, params);
    },
    update(categoryId, params) {
      return ApiService.update(ressource, categoryId, params)
    },
    delete(categoryId) {
      return ApiService.delete(ressource, categoryId)
    }
};
  