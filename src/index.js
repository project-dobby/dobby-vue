import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from 'src/components/Hello';
import Counter from 'src/components/Counter';
import store from 'src/store';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/', component: Hello },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/counter', component: Counter },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  store,
}).$mount('#app');
