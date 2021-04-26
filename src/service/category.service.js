import ApiService from "./api.service";

const ressource = "categories"

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
  