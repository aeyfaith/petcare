import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/Homepage.vue";
import Service from "../views/Service.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "",
      component: () => import('../layout/Layout.vue'),
      children : [
        {
          path: "",
          name: "Home",
    
          component: HomePage
        },
        {
          path: "/service",
          name: "Service",
    
          component: Service
        },
        {
          path: "/about",
          name: "About",
    
          component: About
        },
        {
          path: "/blog",
          name: "Blog",
    
          component: Blog
        },
      ]
    },
    
    
  ],
});

export default router;
