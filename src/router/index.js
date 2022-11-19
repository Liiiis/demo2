import login from "@/views/login";
import {createRouter,createWebHistory} from "vue-router";
import Home from "@/views/Home";
import ProManger from "@/Menu/ProManger";
import UserManager from "@/User/UserManager";
import sale from "@/Menu/sale";
import addproduct from "@/Menu/addproduct"
import adduser from "@/User/adduser"
import shop from "@/Menu/shop";
import Detial from "@/Menu/Detial";
import ShopCar from "@/Menu/ShopCar";
import sale2 from "@/Menu/sale2";
import PhoneList from "@/Menu/PhoneList";
import WatchList from "@/Menu/WatchList";
import NootBook from "@/Menu/NootBook";
import OrderList from "@/User/OrderList";
import addemployee from "@/employee/addemployee";
import EmployeeList from "@/employee/EmployeeList";
import AppLiance from "@/Menu/AppLiance";

const routes=[
    {
        path:'/login',
        name:'Login',
        component:login
    },
    {
        path:'/',
        name:'shop',
        component:shop
    },
    {
        path:'/Detial',
        name:'Detial',
        component:Detial
    },
    {
        path:'/ShopCar',
        name:'ShopCar',
        component:ShopCar
    },
    {
        path:'/PhoneList',
        name:'PhoneList',
        component:PhoneList
    },
    {
        path:'/WatchList',
        name:'WatchList',
        component:WatchList
    },
    {
        path:'/NootBook',
        name:'NootBook',
        component:NootBook
    },
    {
        path:'/AppLiance',
        name:' AppLiance',
        component: AppLiance
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
                path:'sale2',
                name:'sale2',
                component:sale2
            },
            {
                path:'OrderList',
                name:'OrderList',
                component:OrderList
            },
            {
                path:'addemployee',
                name:'addemployee',
                component: addemployee
            },
            {
                path:'EmployeeList',
                name:'EmployeeList',
                component:EmployeeList
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