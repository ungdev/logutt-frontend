import ApiService from "./api.service";

const API_URL = process.env.VUE_APP_API_URL;

const association = {
    ressource: API_URL + "associations",
    get(associationId = "") {
      return ApiService.get(this.ressource, associationId);
    },
    post(params) {
      return ApiService.post(this.ressource, params);
    },
    update(associationId, params) {
      return ApiService.update(this.ressource, associationId, params)
    },
    delete(associationId) {
      return ApiService.delete(this.ressource, associationId)
    }
}

const category = {
  ressource: API_URL + "categories",
  get(categoryId = "") {
    return ApiService.get(this.ressource, categoryId);
  },
  post(params) {
    return ApiService.post(this.ressource, params);
  },
  update(categoryId, params) {
    return ApiService.update(this.ressource, categoryId, params)
  },
  delete(categoryId) {
    return ApiService.delete(this.ressource, categoryId)
  }
};

const object = {
  ressource: API_URL + "objects",
  get(objectId = "") {
    return ApiService.get(this.ressource, objectId);
  },
  post(params) {
    return ApiService.post(this.ressource, params);
  },
  update(objectId, params) {
    return ApiService.update(this.ressource, objectId, params)
  },
  delete(objectId) {
    return ApiService.delete(this.ressource, objectId)
  }
};

const objectInstance = {
  ressource: (objectId) => {
    return API_URL + "objects/" + objectId + "/instances";
  },
  get(objectId, instanceId = "") {
    return ApiService.get(this.ressource(objectId), instanceId);
  },
  post(objectId, params) {
    return ApiService.post(this.ressource(objectId), params);
  },
  update(objectId, instanceId, params) {
    return ApiService.update(this.ressource(objectId), instanceId, params);
  },
  delete(objectId, instanceId) {
    return ApiService.delete(this.ressource(objectId), instanceId);
  },
};

const storage = {
  ressource: API_URL + "storages",
  get(storageId = "") {
    return ApiService.get(this.ressource, storageId);
  },
  post(params) {
    return ApiService.post(this.ressource, params);
  },
  update(storageId, params) {
    return ApiService.update(this.ressource, storageId, params);
  },
  delete(storageId) {
    return ApiService.delete(this.ressource, storageId);
  },
};

const user = {
  ressource: API_URL + "users/",
  login(code) {
    return ApiService.post(API_URL + "login", {code});
  },
  get(userId = "") {
    return ApiService.get(this.ressource, userId);
  },
  post(params) {
    return ApiService.post(this.ressource, params);
  },
  update(userId, params) {
    return ApiService.update(this.ressource, userId, params)
  },
  delete(userId) {
    return ApiService.delete(this.ressource, userId)
  }
}

export {
  association,
  category,
  object,
  objectInstance,
  storage,
  user
}