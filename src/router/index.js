import Vue from "vue";
import VueRouter from "vue-router";
import Cards from "../views/Cards.vue";
import CardBody from "../views/CardBody.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cards",
    component: Cards
  },
  {
    path: "/card/:id",
    name: "CardBody",
    component: CardBody,
    props: true
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
