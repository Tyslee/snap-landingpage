<script setup>
import AudiophileLogo from "./icons/clients/AudiophileLogo.vue";
import DatabizLogo from "./icons/clients/DatabizLogo.vue";
import MakerLogo from "./icons/clients/MakerLogo.vue";
import MeetLogo from "./icons/clients/MeetLogo.vue";
import MainContentMobile from "./MainContentMobile.vue";
</script>

<template>
  <div class="flex-grow hidden lg:flex">
    <!-- Div taking up remaining height -->
    <div class="flex-grow flex">
      <!-- Left child with two children stacked vertically -->
      <div class="flex flex-col flex-grow xl:pl-44 w-3/5">
        <!-- Top child taking up remaining space -->
        <div class="flex-grow flex flex-col justify-center">
          <h1 class="font-epilogue font-black text-8xl">Make remote work</h1>
          <div class="font-epilogue text-lg py-12 text-gray-500">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>
          <button
            class="font-epilogue text-lg border-2 w-40 rounded-lg px-6 py-2 bg-black text-white hover:text-black border-black hover:border-black hover:bg-slate-100"
          >
            Learn more
          </button>
        </div>
        <!-- Bottom child with a fixed height of 20px -->
        <div class="h-20 mb-10 justify-center items-center">
          <!-- Bottom child content -->
          <DatabizLogo class="float-left" />
          <AudiophileLogo class="float-left ml-[8%] mb-10" />
          <MeetLogo class="float-left ml-[8%] mb-10" />
          <MakerLogo class="float-left ml-[8%]" />
        </div>
      </div>

      <!-- Right child -->
      <div class="w-1/2 pt-20 pl-10 xl:p-20 overflow-hidden">
        <img
          src="./../assets/image-hero-desktop.png"
          class="absolute object-contain h-[70%] overflow-hidden"
        />
      </div>
    </div>
  </div>
  <MainContentMobile />
</template>
