import ApiService from "../api.service";
import { API_URL } from "@/common/config";

const ressource = API_URL + "users/"

export default {
    login(code) {
      return ApiService.post(API_URL + "login", {code});
    },
    get(userId = "") {
      return ApiService.get(ressource, userId);
    },
    post(params) {
      return ApiService.post(ressource, params);
    },
    update(userId, params) {
      return ApiService.update(ressource, userId, params)
    },
    delete(userId) {
      return ApiService.delete(ressource, userId)
    }
};
  