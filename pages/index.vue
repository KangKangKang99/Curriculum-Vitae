<template>
  <div class="w-screen max-w-screen min-h-screen overflow-x-hidden">
    <div
        class="bg-fixed bg-center bg-[url('~/assets/images/code_bg.jpg')] h-[800px] h-screen relative flex items-center justify-center">
      <div class="absolute left-0 top-0 bg-black/50 w-full h-full z-[1]"></div>
      <div class="relative z-[2] select-none">
        <p class="text-slate-200 text-[22px] uppercase font-light">{{ $t('my_name_is_khuong') }}</p>
        <div class="font-bold text-[56px] text-white uppercase text-center leading-[1] mt-6">
          <p class="font-shantell-san">{{ $t('i_am_a') }}</p>
          <p class="font-shantell-san">{{ $t('web') }}</p>
          <p class=" text-[#E3DCA4]">{{ $t('developer') }}</p>
        </div>
      </div>
      <div class="fixed bottom-[50px] right-[50px] z-[10]">
        <arrow-to-bottom/>
      </div>
    </div>
    <div id="container_2" class="w-full h-screen bg-gradient-to-b from-red-400 ">
      <p id="text_1" class="opacity-0">How old are you</p>
    </div>
    <div id="mousepointer" :style="`left:${x}px; top: ${y - 6}px`"></div>
  </div>
</template>
<script setup lang="ts">
import ArrowToBottom from "~/components/wigets/arrow-to-bottom.vue";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useMousePosition} from "~/composables/mouse-move";
import {ref, onMounted} from "vue";

gsap.registerPlugin(ScrollTrigger)
const {x, y, el} = useMousePosition();
// refs
const tl = ref()
// hooks
onMounted(() => {
  const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      tl.reverse();
    }
  });
  const text1 = document.getElementById('text_1');
  tl.to(text1, {
    opacity: 1,
    duration: 0.5,
    delay: 0.5
  });

  const container2 = document.getElementById('container_2');
  ScrollTrigger.create({
    trigger: container2,
    start: 'top bottom-=50%',
    end: 'bottom top',
    onEnter: () => tl.play(),
    onLeaveBack: () => tl.reverse()
  })
})
// methods
const handleScroll = () => {
  tl.value = gsap.timeline({
    paused: true,
    onComplete: () => {
      tl.value.reverse();
    }
  });
  const text1 = document.getElementById('text_1');
  tl.value.to(text1, {
    opacity: 1,
    duration: 0.5,
    delay: 0.5
  });

  const container2 = document.getElementById('container_2');

  ScrollTrigger.create({
    trigger: container2,
    start: 'top bottom-=50%',
    end: 'bottom top',
    onEnter: () => tl.value.play(),
    onLeaveBack: () => tl.value.reverse(),
    onEnterBack: () => tl.value.play(),
  });
}
</script>
