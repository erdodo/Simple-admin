import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/list/:table_name",
    name: "list",
    component: function () {
      return import("@/views/services/list.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;