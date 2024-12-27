<template>
    <section>
        <main class="flex items-center justify-center gap-10 sm:mt-20 md:mx-4 md:mt-20 font-for mx-20 lg:mx-20 sm:mx-4 sm:flex-col overflow-x-hidden">
<div v-motion-slide-visible-left>
    <h2 class="text-[72px] text-text-primary-color font-bold leading-[70px] mb-3">
        Premium Web Hosting for Your Website
    </h2>
    <p class="text-[16px] text-text-primary-color font-sec md:pr-2 sm:pr-3 lg:pr-[15rem] pr-[15rem] mt-5 mb-5">
        Blazing fast web hosting for individuals 
        and businesses of all sizes backed by 24x7x365 Support.
    </p>
    <div>
        <Button class="bg-primary-color hover:border-2 hover:border-solid hover:border-primary-color hover:bg-transparent hover:text-black font-for text-white text-[16px] px-5 py-3 mr-3 shadow-custom-shadow rounded-[10px]">Create an Account</Button>
        <Button class="btn px-5 py-3 font-for border-2 border-solid text-[16px] rounded-[10px] border-black text-black bg-transparent">Choose your plan</Button>
    </div>
   

</div>
<img src="/src/assets/Group 6.png" alt=""  class="bouncing"  v-motion-slide-visible-right>
        </main>
    </section>
</template>

<script setup>
import { Button } from '@swarmakit/vue';

</script>

<style  scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.bouncing {
  animation: bounce 1s infinite;
}
.font-for{
    font-family: Poppins;
}
.font-sec{
    font-family: 'Inter' , sans-serif
}
.btn {
  position: relative;
}

.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 16px;
}


.btn:hover::after {
  content: 'Get Started'; 
  opacity: 1; 
  color:black;
}

.btn:hover {
  color: transparent; 
}
</style>