import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage";
import TodoPage from "@/pages/TodoPage";
import MainPage from "@/pages/MainPage";
import TodoInputPage from "@/pages/todo/TodoInputPage";
import TodoListPage from "@/pages/todo/TodoListPage";
import TodoReadPage from "@/pages/todo/TodoReadPage";

const routes = [
    {path: "/",component: MainPage},
    {path: "/home",component: HomePage},
    {path: "/todo",
        component: TodoPage,
        children: [
            {
                path:'input',
                component: TodoInputPage
            },
            {
                path:'list',
                component: TodoListPage
            },
            {
                path:'read/:id',
                component: TodoReadPage
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;