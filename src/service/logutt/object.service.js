import ApiService from "../api.service";
import { API_URL } from "@/common/config";

const ressource = API_URL + "objects"

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
  