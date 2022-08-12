import login from "@/views/login";
import {createRouter,createWebHistory} from "vue-router";
import Home from "@/views/Home";
import ProManger from "@/Menu/ProManger";
import UserManager from "@/User/UserManager";
import sale from "@/Menu/sale";
import addproduct from "@/Menu/addproduct"
import adduser from "@/User/adduser"
import addsonglist from "@/song/addsonglist";
import SongListall from "@/song/SongListall";
import shop from "@/Menu/shop";

const routes=[
    {
        path:'/',
        name:'Login',
        component:login
    },
    {
        path:'/Home',
        name:'Home',
        component:Home,
        children:[
            {
                path:'ProManger',
                name:'ProManger',
                component:ProManger
            },
            {
                path:'UserManager',
                name:'UserManager',
                component:UserManager
            },
            {
                path:'sale',
                name:'sale',
                component:sale
            },
            {
                path:'addproduct',
                name:'addproduct',
                component:addproduct
            },
            {
                path:'adduser',
                name:'adduser',
                component:adduser
            },
            {
                path:'addsonglist',
                name:'addsonglist',
                component:addsonglist
            },
            {
                path:'SongListall',
                name:'SongListall',
                component:SongListall
            },
            {
                path:'shop',
                name:'shop',
                component:shop
            },
        ]
    },
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export {
    router
}