<script setup>
import HambugerIcon from "./icons/HambugerIcon.vue";
import TodoIcon from "./icons/dropdowns/TodoIcon.vue";
import CalendarIcon from "./icons/dropdowns/CalendarIcon.vue";
import ReminderIcon from "./icons/dropdowns/ReminderIcon.vue";
import PlanningIcon from "./icons/dropdowns/PlanningIcon.vue";
</script>

<template>
  <div
    class="hs-dropdown relative inline-flex [--placement:bottom-right] -mt-2 float-right"
  >
    <button
      id="hs-dropdown-with-title"
      type="button"
      class="hs-dropdown-toggle py-3 px-4 inline-flex rounded-lg hover:bg-white disabled:opacity-50 disabled:pointer-events-none"
    >
      <HambugerIcon />
    </button>

    <div
      class="hs-dropdown-menu transition-[opacity,margin] overflow-auto max-h-[calc(100%-100px)] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200"
      aria-labelledby="hs-dropdown-with-title"
    >
      <div class="py-2 first:pt-0 last:pb-0">
        <span
          class="block py-2 px-3 text-xs font-medium font-epilogue uppercase text-gray-400 dark:text-gray-500"
        >
          Features
        </span>
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
      <div class="py-2 first:pt-0 last:pb-0">
        <span
          class="block py-2 px-3 text-xs font-medium font-epilogue uppercase text-gray-400 dark:text-gray-500"
        >
          Company
        </span>
        <a
          class="flex font-epilogue items-center gap-x-3.5 py-2 pr-4 pl-12 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          href="#"
        >
          History
        </a>

        <a
          class="flex font-epilogue items-center gap-x-3.5 py-2 pr-4 pl-12 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          href="#"
        >
          Our Team
        </a>
        <a
          class="flex font-epilogue items-center gap-x-3.5 py-2 pr-4 pl-12 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          href="#"
        >
          Blog
        </a>
      </div>
      <div class="py-2 first:pt-0 last:pb-0">
        <a
          class="flex font-epilogue items-center justify-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          href="#"
        >
          Careers
        </a>
      </div>
      <div class="py-2 first:pt-0 last:pb-0">
        <a
          class="flex font-epilogue items-center justify-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          href="#"
        >
          About
        </a>
      </div>
      <div class="py-2 first:pt-0 last:pb-0">
        <a
          class="flex font-epilogue items-center justify-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          href="#"
        >
          Login
        </a>
      </div>
      <div class="py-2 first:pt-0 last:pb-0">
        <a
          class="flex font-epilogue items-center border-2 hover:border-black justify-center gap-x-3.5 py-2 px-4 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
          href="#"
        >
          Register
        </a>
      </div>
    </div>
  </div>
</template>
