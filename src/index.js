import Vue from "vue";
import VueRouter from "vue-router";
import Hello from "./components/Hello";

Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};

const routes = [
	  {path: '/', component: Hello},
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router
}).$mount('#app');