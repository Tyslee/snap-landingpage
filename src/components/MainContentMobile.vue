<script setup>
import AudiophileLogo from "./icons/clients/AudiophileLogo.vue";
import DatabizLogo from "./icons/clients/DatabizLogo.vue";
import MakerLogo from "./icons/clients/MakerLogo.vue";
import MeetLogo from "./icons/clients/MeetLogo.vue";
</script>

<template>
  <div class="lg:hidden">
    <div>
      <img
        src="./../assets/image-hero-mobile.png"
        class="relative object-contain h-[70%] mt-8 z-0"
      />
    </div>
    <div class="block justify-center">
      <h1 class="font-epilogue font-black text-6xl mt-12 text-align-center">
        Make remote work
      </h1>
      <div class="font-epilogue text-lg py-8 text-gray-500">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </div>
      <button
        class="mx-auto font-epilogue text-lg border-2 w-40 rounded-lg px-6 py-2 bg-black text-white hover:text-black border-black hover:border-black hover:bg-slate-100"
      >
        Learn more
      </button>
    </div>
    <!-- Bottom child with a fixed height of 20px -->
    <div class="h-20 mb-10 justify-center items-center mt-16">
      <!-- Bottom child content -->
      <DatabizLogo class="float-left" />
      <AudiophileLogo class="float-left ml-[8%] mb-10" />
      <MeetLogo class="float-left ml-[8%] mb-10" />
      <MakerLogo class="float-left ml-[8%]" />
    </div>
  </div>
</template>
