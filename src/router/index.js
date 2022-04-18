import { createRouter, createWebHistory } from "vue-router";
import WordleGame from "../components/wordle/WordleGame.vue";

const routes = [
    {
        path: '/',
        name: 'WordleGame',
        component: WordleGame,

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router