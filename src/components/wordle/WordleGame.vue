<template>
  <Header />
  <div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
    <div>
      <grid
        v-for="(guess, i) in state.guesses"
        :key="i"
        :value="guess"
        :solution="state.solution"
        :submitted="i < state.currentGuessIndex"
      />
    </div>
    <modal v-if="wonGame" v-show="!isModalVisble" result="Congrats you Win!" />
    <modal
      v-else-if="lostGame"
      v-show="!isModalVisble"
      result="Incorrect! "
      :answer="'The answer is: ' + state.solution"
    />
    <simple-keyboard @onKeyPress="handleInput" :guessedLetters="state.guessedLetters" />
  </div>
</template>

<script setup>
import SimpleKeyboard from "./sub/SimpleKeyboard.vue";
import Grid from "./sub/Grid.vue";
import { reactive, onMounted, computed, ref } from "vue";
import Modal from "./sub/Modal.vue";
import { words, common } from "./sub/word/words";
import { getRandomWord } from "./sub/word/start";
import Header from "../Header.vue";

const isModalVisble = false;
const word = ref(getRandomWord());
const row = ref(0);

// const closeModal = () => {
//         this.isModalVisble = false;
//       }
const logWord = () => {
  if (import.meta.env.DEV) console.log("[development] secret word:", word.value);
};
logWord();

const state = reactive({
  solution: word.value,
  guesses: ["", "", "", "", "", ""],
  currentGuessIndex: 0,
  guessedLetters: {
    miss: [],
    found: [],
    hint: [],
  },
});

const wonGame = computed(
  () => state.guesses[state.currentGuessIndex - 1] === state.solution
);
const lostGame = computed(() => !wonGame.value && state.currentGuessIndex >= 6);

const handleInput = (key) => {
  if (state.currentGuessIndex >= 6 || wonGame.value) {
    return;
  }
  const currentGuess = state.guesses[state.currentGuessIndex];
  // const isValidWord = words.includes(common);
  // const isValidWord = computed(
  //   () => state.guesses.includes(common)
  // )
  if (key == "{enter}") {
    // SEND GUESS
    if (currentGuess.length == 5) {
      state.currentGuessIndex++;
      setTimeout(() => {
        for (var i = 0; i < currentGuess.length; i++) {
          let c = currentGuess.charAt(i);
          if (c == state.solution.charAt(i)) {
            state.guessedLetters.found.push(c);
          } else if (state.solution.indexOf(c) != -1) {
            state.guessedLetters.hint.push(c);
          } else {
            state.guessedLetters.miss.push(c);
          }
        }
      }, 2500);
    } else alert("Not Enough Words");
    // INCLUDES IN WORD LIST
    // if ( currentGuess !== isValidWord) {
    //   alert("Not in Word List");
    // }
  } else if (key == "{bksp}") {
    // REMOVE LAST LETTER
    state.guesses[state.currentGuessIndex] = currentGuess.slice(0, -1);
  } else if (currentGuess.length < 5) {
    // ADD LETTER IF ALPHABETICAL
    const alphaRegex = /[a-zA-Z]/;
    if (alphaRegex.test(key)) {
      state.guesses[state.currentGuessIndex] += key;
    }
  }
};
onMounted(() => {
  window.addEventListener("keyup", (e) => {
    e.preventDefault();
    let key =
      e.keyCode == 13
        ? "{enter}"
        : e.keyCode == 8
        ? "{bksp}"
        : String.fromCharCode(e.keyCode).toLowerCase();
    handleInput(key);
  });
});
</script>
