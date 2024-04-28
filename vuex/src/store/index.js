import { createStore } from "vuex";

import counterModule from "./counter/index.js";
import authModule from "./auth/index.js";

const store = createStore({
  modules: {
    numbers: counterModule,
    auth: authModule,
  },
});

export default store;
