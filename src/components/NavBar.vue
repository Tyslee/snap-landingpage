<script setup>
import SnapLogoIcon from "./icons/SnapLogoIcon.vue";
import TodoIcon from "./icons/dropdowns/TodoIcon.vue";
import CalendarIcon from "./icons/dropdowns/CalendarIcon.vue";
import ReminderIcon from "./icons/dropdowns/ReminderIcon.vue";
import PlanningIcon from "./icons/dropdowns/PlanningIcon.vue";
import NavHamburger from "./NavHamburger.vue";
</script>

<template>
  <div>
    <SnapLogoIcon class="float-left mr-20" />
    <div class="hidden lg:block">
      <div
        class="hs-dropdown relative inline-flex [--placement:bottom-right] float-left"
      >
        <button
          id="hs-dropdown-transform-style"
          type="button"
          class="hs-dropdown-toggle px-4 font-epilogue focus:text-black text-neutral-500 inline-flex items-center gap-x-2 text-md"
        >
          Features
          <svg
            class="hs-dropdown-open:rotate-180 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <div
          class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10"
        >
          <div
            class="hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-0 origin-top-left bg-white shadow-md rounded-lg p-2 mr-4"
            aria-labelledby="hs-dropdown-transform-style"
            data-hs-transition
          >
            <a
              class="flex font-epilogue items-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <TodoIcon class="mb-1 w-5" />
              Todo List
            </a>
            <a
              class="flex font-epilogue items-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <CalendarIcon class="mb-1 w-5" />
              Calendar
            </a>
            <a
              class="flex font-epilogue items-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <ReminderIcon class="mb-1 w-5" />
              Reminders
            </a>
            <a
              class="flex font-epilogue items-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              href="#"
            >
              <PlanningIcon class="mb-1 w-5" />
              Planning
            </a>
          </div>
        </div>
      </div>
      <div
        class="hs-dropdown relative inline-flex [--placement:bottom-right] float-left"
      >
        <button
          id="hs-dropdown-transform-style"
          type="button"
          class="hs-dropdown-toggle px-4 font-epilogue focus:text-black text-neutral-500 inline-flex items-center gap-x-2 text-md"
        >
          Company
          <svg
            class="hs-dropdown-open:rotate-180 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <div
          class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10"
        >
          <div
            class="hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-0 origin-top-left bg-white shadow-md rounded-lg p-2 mr-4"
            aria-labelledby="hs-dropdown-transform-style"
            data-hs-transition
          >
            <a
              class="flex font-epilogue items-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              href="#"
            >
              History
            </a>

            <a
              class="flex font-epilogue items-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              href="#"
            >
              Our Team
            </a>
            <a
              class="flex font-epilogue items-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              href="#"
            >
              Blog
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="hs-dropdown-toggle px-6 font-epilogue hover:text-black text-neutral-500 inline-flex items-center gap-x-2 text-md"
      >
        Careers
      </button>
      <button
        type="button"
        class="hs-dropdown-toggle px-6 font-epilogue hover:text-black text-neutral-500 inline-flex items-center gap-x-2 text-md"
      >
        About
      </button>
      <button
        id="hs-dropdown-transform-style"
        type="button"
        class="hs-dropdown-toggle px-6 -mt-2 border-2 py-2 rounded-lg float-right font-epilogue hover:text-black text-neutral-500 border-neutral-400 hover:border-black inline-flex items-center gap-x-2 text-md"
      >
        Register
      </button>
      <button
        id="hs-dropdown-transform-style"
        type="button"
        class="hs-dropdown-toggle px-6 float-right font-epilogue hover:text-black text-neutral-500 inline-flex items-center gap-x-2 text-md"
      >
        Login
      </button>
    </div>
    <NavHamburger class="lg:hidden z-10" />
  </div>
</template>
