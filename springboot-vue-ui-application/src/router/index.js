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
        meta:{
            title:"主页"
        },
        // component: Home,
        component: () => import("../components/Home"),
        children: [
            {
                path: "",
                redirect: "news"
            },
            {
                path: "news",
                meta:{
                    title:"新闻"
                },
                component: () => import("../components/HomeNews"),
            },
            {
                path: "message",
                meta:{
                    title:"消息"
                },
                component: () => import("../components/HomeMessage"),
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        meta:{
            title:"关于"
        },
        component: () => import("../components/About"),
    },
    {
        path: '/profile',
        name: 'About',
        meta:{
            title:"个人档案"
        },
        component: () => import("../components/Profile"),
    }
];
const router  = new Router({
    //  mode: 'history',
    routes,
    linkActiveClass: "active"
});
router.beforeEach((to,from,next)=>{
  next();
  document.title = to.matched[0].meta.title;
});
export default   router;