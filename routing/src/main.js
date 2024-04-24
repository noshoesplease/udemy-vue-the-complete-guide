import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/teams/TeamsList.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    { path: "/teams", component:  TeamsList},
    { path: "/users", component: () => import("./components/users/UsersList.vue") },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
