import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AlimentosView from "@/views/AlimentosView.vue";
import BrinquedosView from "@/views/BrinquedosView.vue";
import HigieneView from "@/views/HigieneView.vue";
import AcessoriosView from "@/views/AcessoriosView.vue";

const routes = [
  { path: '/', component: HomeView},
  { path: '/alimentos', component: AlimentosView },
  { path: '/brinquedos', component: BrinquedosView},
  { path: '/higiene', component: HigieneView},
  {path: '/acessorios', component: AcessoriosView}
]

const router = createRouter({
history: createWebHistory(),
routes,
})
export default router
