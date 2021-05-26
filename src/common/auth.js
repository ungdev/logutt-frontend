import UserService from '../service/logutt/user.service';

const ETU_URL = "https://etu.utt.fr/api/";
const CLIENT_ID = process.env.VUE_APP_ETU_UTT_CLIENT_ID;
// const CLIENT_SECRET = process.env.VUE_APP_ETU_UTT_CLIENT_SECRET;

const Auth = {

  redirectURL: ETU_URL + "oauth/authorize?client_id=" + CLIENT_ID,

  async login(code) {
    const user = await UserService.login(code)
      .catch(error => console.log(error))
    ;
    console.log(user);
    // localStorage.setItem('user-data', user);
  },
  logout() {
    localStorage.removeItem('user-data');
  }
};

export default Auth;