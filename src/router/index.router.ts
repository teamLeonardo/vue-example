import { RouteRecordName, RouteRecordRaw, createRouter, createWebHistory } from "vue-router";


import { loadLayoutMiddleware } from "./loadLayoutMiddleware";

//pages
import HomeVue from "../pages/Home.vue"
import ProductVue from "../pages/product/Product.vue";
import ProductByIdVue from "../pages/product/ProductById.vue";
import CartVue from "../pages/Cart.vue";
import { PATH } from "@/router/path.const";
import IndexProductVue from "@/pages/product/IndexProduct.vue";

const routes: RouteRecordRaw[] = [
    {
        path: PATH.HOME,
        component: HomeVue,
        name: "home",
        meta: {
            layout: "app.layout"
        }
    },
    {
        path: PATH.PRODUCT,
        component: IndexProductVue,
        name: "product",
        children: [
            {
                path: "",
                component: ProductVue,
                name: "product.all",
                meta: {
                    layout: "app.layout"
                }
            },
            {
                path: ":id",
                name: "product.id",
                component: ProductByIdVue,
                meta: {
                    layout: "app.layout"
                },
            }
        ]
    },
    {
        path: PATH.CART,
        component: CartVue,
        meta: {
            layout: "app.layout"
        }
    }
]

const mapRouter: { name: string | RouteRecordName, path: string }[] = routes.map(
    ({ path, name }) => (
        { path: path || "", name: name || "" }
    )
).filter(({ name }) => !!name)

const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach(loadLayoutMiddleware)

export {
    router,
    mapRouter
}

