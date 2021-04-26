import ApiService from "./api.service";

const ressource = "storages"

export default {
    get(storageId = "") {
      return ApiService.get(ressource, storageId);
    },
    post(params) {
      return ApiService.post(ressource, params);
    },
    update(storageId, params) {
      return ApiService.update(ressource, storageId, params)
    },
    delete(storageId) {
      return ApiService.delete(ressource, storageId)
    }
};
  