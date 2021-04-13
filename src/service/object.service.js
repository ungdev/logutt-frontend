import ApiService from "./api.service";

const ressource = "objects"

export default {
    get(objectId = "") {
      return ApiService.get(ressource, objectId);
    },
    post(params) {
      return ApiService.post(ressource, params);
    },
    update(objectId, params) {
      return ApiService.update(ressource, objectId, params)
    },
    delete(objectId) {
      return ApiService.delete(ressource, objectId)
    }
};
  