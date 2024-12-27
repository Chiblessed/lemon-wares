<template>
    <main>
        <section class="flex items-center justify-center gap-20 lg:mx-36 md:mx-4 mx-36 sm:mx-4 sm:flex-col overflow-x-hidden">
<div class="flex flex-col items-center justify-center gap-3">
    <h2 class="text-[#18191F] text-5xl font-sec font-bold">
        We serve over 100
Nigerian Websites
    </h2>
    <p class="text-[#18191F] text-lg font-sec">
        Connect LemonWares with your favourite 
        tools that you use daily and keep things on track.
    </p>
</div>
<div class="grid grid-cols-3 place-items-center gap-5 sm:grid-cols-2">
    <FlipCard>
          <template #front>
            <img src="/src/assets/companylogo1.png" alt="Company Logo 1" class="w-[15rem] cursor-pointer" />
          </template>
        </FlipCard>
        <FlipCard>
          <template #front>
            <img src="/src/assets/companylogo2.png" alt="Company Logo 1" class="w-[15rem] cursor-pointer" />
          </template>
        </FlipCard>
        <FlipCard>
          <template #front>
            <img src="/src/assets/companylogo3.png" alt="Company Logo 1" class="w-[15rem] cursor-pointer" />
          </template>
        </FlipCard>
        <FlipCard>
          <template #front>
            <img src="/src/assets/companylogo4.png" alt="Company Logo 1" class="w-[15rem] cursor-pointer" />
          </template>
        </FlipCard>
        <FlipCard>
          <template #front>
            <img src="/src/assets/companylogo5.png" alt="Company Logo 1" class="w-[15rem] cursor-pointer" />
          </template>
        </FlipCard>
        <FlipCard>
          <template #front>
            <img src="/src/assets/companylogo6.png" alt="Company Logo 1" class="w-[15rem] cursor-pointer" />
          </template>
        </FlipCard>    
</div>
        </section>

    </main>
</template>

<script setup>
  import { FlipCard } from '@swarmakit/vue';

</script>

<style  scoped>
body{
    overflow-x: hidden;
}
.font-for {
   font-family: Poppins, sans-serif;
 }
 .font-sec{
    font-family: 'Inter' , sans-serif
}

</style>