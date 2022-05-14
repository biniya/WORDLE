<template>
  <transition name="modal-fade">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h1
                  class="text-2xl leading-6 font-medium text-gray-900 uppercase my-3"
                >
                  How To Play
                </h1>
                <li class="my-3 text-lg leading-6 font-medium text-gray-900">
                  Guess the word in 6 tries.
                </li>
                <li class="text-lg leading-6 font-medium text-gray-900">
                  Each guess must be a valid 5 letter word. Hit the enter button
                  to submit.
                </li>
                <li class="my-3 text-lg leading-6 font-medium text-gray-900">
                  After each guess, the color of the tiles will change to show
                  how close your guess was to the word.
                </li>
                <li class="my-3 text-lg leading-6 font-medium text-gray-900">
                  A green letter is in the word and in the correct spot.
                </li>
                <li class="my-3 text-lg leading-6 font-medium text-gray-900">
                  A yellow letter is in the word but in the wrong spot.
                </li>
                <li class="my-3 text-lg leading-6 font-medium text-gray-900">
                  And all the other dark gray letters indicate that they are not
                  in the word in any spot.
                </li>
                <p
                  class="my-3 px-4 py-3 text-lg leading-6 font-medium text-green-500"
                >
                  Good luck!
                </p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              @click="close"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
   export default {
    name: 'HowToPlay',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
