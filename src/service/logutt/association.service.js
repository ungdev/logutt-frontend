import ApiService from "../api.service";
import { API_URL } from "@/common/config";

const ressource = API_URL + "associations"

export default {
    get(associationId = "") {
      return ApiService.get(ressource, associationId);
    },
    post(params) {
      return ApiService.post(ressource, params);
    },
    update(associationId, params) {
      return ApiService.update(ressource, associationId, params)
    },
    delete(associationId) {
      return ApiService.delete(ressource, associationId)
    }
};
  