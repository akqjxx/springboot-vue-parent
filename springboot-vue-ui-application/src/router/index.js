import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
// import About from '@/components/About'
import About from '../components/About'*/

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const routes = [
    {
        path: '/',
        redirect: "/home",
    },
    {
        path: '/home',
        name: 'Home',
        // component: Home,
        component: () => import("../components/Home"),
        children: [
            {
              path:"",
              redirect: "news"
            },
            {
                path: "news",
                component: () => import("../components/HomeNews"),
            }, {
                path: "message",
                component: () => import("../components/HomeMessage"),
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () => import("../components/About"),
    }
];
export default new Router({
  //  mode: 'history',
    routes,
    linkActiveClass: "active"
})
