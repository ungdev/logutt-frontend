import ApiService from "./api.service";

const ressource = (objectId) => {
  return "objects/"+objectId+"/instances"
};

export default {
    get(objectId, instanceId = "") {
      return ApiService.get(ressource(objectId), instanceId);
    },
    post(objectId, params) {
      return ApiService.post(ressource(objectId), params);
    },
    update(objectId, instanceId, params) {
      return ApiService.update(ressource(objectId), instanceId, params)
    },
    delete(objectId, instanceId) {
      return ApiService.delete(ressource(objectId), instanceId)
    }
};
  