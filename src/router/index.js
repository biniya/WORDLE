import { createRouter, createWebHistory } from "vue-router";
import WordleGame from "../components/wordle/WordleGame.vue";
import TicTacToe from "../components/tictactoe/TicTacToeGame.vue"

const routes = [
    {
        path: '/',
        name: 'WordleGame',
        component: WordleGame,

    },
    {
        path: '/tictactoe',
        name: 'TicTacToe',
        component: TicTacToe,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router