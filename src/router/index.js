import Vue from "vue"
import Router from "vue-router"
import Dashboard from "@/components/Boards/Dashboard.vue"
import TaskBoard from "@/components/Boards/TaskBoard.vue"

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/dashboard"
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/boards/:id",
      name: "task-board",
      component: TaskBoard
    }
  ]
})

export default router
