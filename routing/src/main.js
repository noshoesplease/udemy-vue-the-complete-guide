import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import TheNotFound from "./components/not-found/TheNotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "team",
      path: "/teams",
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log("Users beforeEnter");
        console.log(to, from);
        next();
      }
    },
    { path: "/:notFound(.*)", component: TheNotFound },
  ],
  linkActiveClass: "custom-class",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  console.log("Global beforeEach");
  console.log(to, from);
  next();

  // Navigation Guard example
  // if (to.name === "team-members") {
  //   next();
  // }
  // next({
  //   name: "team-members",
  //   params: { teamId: "t2" },
  // });
});

router.afterEach((to, from) => {
  console.log("Global afterEach");
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount("#app");
