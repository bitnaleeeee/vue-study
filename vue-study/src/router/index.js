import Vue from "vue";
import Router from "vue-router";
import TodoHeader from "@/components/TodoHeader";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TodoHeader",
      component: TodoHeader
    }
  ]
});
