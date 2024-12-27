<template>
    <main>
      <section class="flex flex-col items-center justify-center mt-32 overflow-x-hidden" v-motion-fade-visible>
        <h2 class="font-for font-semibold text-[54px] text-center lg:px-[20rem] md:px-52 px-[20rem] sm:px-0 leading-[60px] mb-5">
          Ready to get started with Lemon Wares?
        </h2>
        <p class="font-for text-[25px]">Choose the package that suits you</p>
        <div class="flex items-center justify-around mb-10 mt-10 gap-10">
          <p class="font-for text-2xl">Monthly</p>
          <Button
            @click="toggle"
            :class="toggleState ? 'bg-red-600' : 'bg-primary-color'"
            class="w-16 h-8 rounded-full bg-primary-color p-1 duration-300 cursor-pointer"
          >
            <div
              :class="{ 'translate-x-8': toggleState }"
              class="w-6 h-6 rounded-full bg-white shadow-dark-400 transform transition-all duration-500"
            ></div>
          </Button>
          <p class="font-for text-2xl">Yearly</p>
        </div>
  
        <div class="flex items-center justify-center mx-44 lg:mx-44 md:mx-2  sm:flex-col sm:mx-4 sm:gap-10 font-for mb-20 overflow-x-hidden">
          <div v-for="(plan, index) in plans" :key="index" class="flex flex-col items-center px-3 pt-5 justify-start mx-[2rem] border-2 border-solid border-gray-300 rounded-[25px]">
            <h2 class="text-left font-for font-semibold text-3xl mr-44">{{ plan.name }}</h2>
            <p class="font-for text-[16px] pb-4">{{ plan.description }}</p>
            <h2 class="text-[42px] font-for font-semibold mr-44 ">{{ toggleState ? plan.yearlyPrice : plan.monthlyPrice }}</h2>
            <p class="font-for font-light text-sm mr-[12rem] ">{{ toggleState ? 'Per year' : 'Per month' }}</p>
            <Button class="px-8 mt-3 mb-5 rounded-[15px] py-2 border-2 border-solid border-black bg-transparent hover:bg-black hover:text-white">Choose Plan</Button>
            <div class="flex flex-col">
                    <p class="flex items-center justify-center gap-14 mb-5 pr-20 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        2GB SSD</p>
                    <p class="flex items-center justify-center gap-12 mb-5 pr-10 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        10GB Bandwidth</p>
                    <p class="flex items-center justify-center gap-11 mb-5 pr-10 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        15 Email Accounts</p>
                    <p class="flex items-center justify-center gap-8 mb-5 pr-10 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        Unlimited Database</p>
                    <p class="flex items-center justify-center gap-14 mb-5 pr-14 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        4 Subdomains</p>
                    <p class="flex items-center justify-center gap-14 mb-5 pr-10 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        1 Parked Domain</p>
                    <p class="flex items-center justify-center gap-[3.5rem] mb-5 pr-20 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        2 Websites</p>
                    <p class="flex items-center justify-center gap-16 mb-5 pr-20 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        Free SSL</p>
                    <p class="flex items-center justify-center gap-11 mb-5 pr-20 text-[#808080] font-sec font-bold">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99301 12.421L0.286011 5.58L1.71401 4.18L7.00701 9.579L16.293 0.292999L17.707 1.707L6.99301 12.421Z" fill="black"/>
</svg>
                        Softaculous</p>
                   </div>


          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const toggleState = ref(false);  
  
  const toggle = () => {
    toggleState.value = !toggleState.value;
  };
  

  const plans = [
    {
      name: 'Starter',
      description: 'with all your customers via all conversation channels in one central dashboard.',
      monthlyPrice: '$2.80',
      yearlyPrice: '$28.00',
    },
    {
      name: 'Standard',
      description: 'with all your customers via all conversation channels in one central dashboard.',
      monthlyPrice: '$4.20',
      yearlyPrice: '$42.00',
     },
    {
      name: 'Supreme',
      description: 'with all your customers via all conversation channels in one central dashboard.',
      monthlyPrice: '$7.00',
      yearlyPrice: '$70.00',
    }
  ];
  </script>
 
 <style scoped>
 body{
  overflow-x: hidden;
 }
 .font-for {
   font-family: Poppins, sans-serif;
 }
 .card-content {
   border-color: #f4a261; /* Default border color */
 }
 </style>  