// import ApiService from "./api.service";
import Vue from "vue";

const API_URL = "https://etu.utt.fr/api/";
const CLIENT_ID = process.env.VUE_APP_ETU_UTT_CLIENT_ID;
const CLIENT_SECRET = process.env.VUE_APP_ETU_UTT_CLIENT_SECRET;

const auth = {
  redirectURL: process.env.VUE_APP_DEV ? '/login?code=localhost' : API_URL + "oauth/authorize?client_id=" + CLIENT_ID,

  async getToken(code) {
    if(process.env.VUE_APP_DEV) {
      return process.env.VUE_APP_ETU_UTT_TOKEN
    }
    return await Vue.axios.post(API_URL + "oauth/token", 
      {
        "code": code,
        "grant_type": "client_credentials"
      },
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET
        },
        headers: {
          'Access-Control-Allow-Origin': "*"
        }
      }
    )
    .then(response => {response.data.access_token})
    // TODO TRAITEMENT ERREUR
    .catch(error => console.log(error))
    ;
  },
}

export default {
  auth,
}