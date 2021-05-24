import ApiService from '../service/api.service';
import etuUTTService from '../service/etuUtt.service';
import UserService from '../service/logutt/user.service';

const Auth = {
  async login(code) {
    const token = await etuUTTService.auth.getToken(code);
    ApiService.setHeader(token);
    UserService.login()
    .then(response => {
      localStorage.setItem('user-data', response.data)
    })
    .catch(error => console.log(error))
  },
  logout() {
    localStorage.removeItem('user-data');
  }
};

export default Auth;