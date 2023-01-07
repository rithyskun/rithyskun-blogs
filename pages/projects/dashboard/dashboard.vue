<script setup lang="ts">
definePageMeta({
  layout: "projects",
});
</script>

<template>
  <div class="mt-5 rounded-xl bg-gray-500">
    <div class="grid mb-6 w-full md:grid-cols-1">
    <div class="flex gap-5 p-5">
      <div class="flex h-[278px] w-2/6">
        <div
          class="flex-1 items-center justify-center rounded-xl bg-gray-700 text-center"
        >
          Chart
        </div>
      </div>
      <div class="flex-1 space-y-5">
        <div class="flex">
          <div class="flex w-full gap-5">
            <div class="contents">
              <div class="flex rounded-xl text-center">
                <div
                  class="flex h-32 flex-col items-center justify-center rounded-xl bg-gray-300 text-center text-sm"
                >
                  Total sales this month
                  <span class="items-center text-xl font-bold text-cyan-500"
                    >120</span
                  >
                </div>
              </div>

              <div class="flex-1">
                <div
                  class="flex h-32 flex-col items-center justify-center rounded-xl bg-gray-200 text-center text-sm text-white"
                >
                  Best selling category ever
                  <span class="items-center text-xl font-bold text-gray-900"
                    >Fresh</span
                  >
                </div>
              </div>
              <div class="flex-1">
                <div
                  class="flex h-32 flex-col items-center justify-center rounded-xl bg-cyan-500 text-center text-sm"
                >
                  Most sales this month
                  <span class="items-center text-xl font-bold text-white"
                    >Name One</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex">
            <div class="flex flex-1 gap-5">
              <div class="flex rounded-xl text-center">
                <div
                  class="flex h-32 w-72 flex-col items-center justify-center rounded-xl bg-gray-100 text-center text-sm"
                >
                  Best selling product ever
                  <span class="items-center text-xl font-bold text-cyan-500"
                    >Yorkshie pudds</span
                  >
                </div>
              </div>

              <div class="flex-1">
                <div
                  class="flex h-32 flex-col items-center justify-center rounded-xl bg-gray-200 text-center text-sm text-white"
                >
                  Total margin this month
                  <span class="items-center text-xl font-bold text-gray-900"
                    >$10,365.56</span
                  >
                </div>
              </div>
              <div class="flex">
                <div
                  class="flex w-44 flex-col items-center justify-center rounded-xl bg-cyan-500 text-center text-sm"
                >
                  Monthly sales
                  <span class="items-center text-xl font-bold text-white"
                    >list</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-5 flex gap-5">
      <div class="flex-2 h-[278px] w-4/6">
        <div
          class="flex items-center justify-center rounded-xl bg-gray-700 text-center"
        >
          Table
        </div>
        <div class="flex w-32 rounded-xl bg-gray-400">box</div>
      </div>
    </div>
  </div>
  </div>
</template>
