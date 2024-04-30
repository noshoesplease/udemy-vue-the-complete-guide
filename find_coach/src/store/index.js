import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index.js";
import requestsModule from "./modules/requests/index.js";

export default createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
});
