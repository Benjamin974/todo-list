import { authenticationService } from "../_services/authentication.service";
import router from "../routes";


export default {
  data() {
    return {
      menu: false,
      currentUser: null
    }
  },

  computed: {
    isChecked() {
      return this.currentUser;
    },
  },

  created() {
    authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
  },

  methods: {
    logout() {
      authenticationService.logout();
      router.push("/login");
    }
  }
}