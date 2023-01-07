<script setup lang="ts">
definePageMeta({
  layout: "projects",
});

const category = [
  { id: 1, name: "Category-1" },
  { id: 2, name: "Category-2" },
  { id: 3, name: "Category-3" },
  { id: 4, name: "Category-4" },
  { id: 5, name: "Category-5" },
];
const products = [
  { id: 1, name: "Product-1" },
  { id: 2, name: "Product-2" },
  { id: 3, name: "Product-3" },
  { id: 4, name: "Product-4" },
  { id: 5, name: "Product-5" },
];
const persons = [
  { id: 1, name: "Name-1" },
  { id: 2, name: "Name-2" },
  { id: 3, name: "Name-3" },
  { id: 4, name: "Name-4" },
  { id: 5, name: "Name-5" },
];

const address = [
  { id: 1, name: "Cambodia-1" },
  { id: 2, name: "Cambodia-2" },
  { id: 3, name: "Cambodia-3" },
  { id: 4, name: "Cambodia-4" },
  { id: 5, name: "Cambodia-5" },
];

const saleItems = [
  {
    id: 1,
    productName: "Product-1",
    price: "9.50",
    productCategory: "Category-1",
    quantity: 3,
  },
  {
    id: 2,
    productName: "Product-2",
    price: "15.00",
    productCategory: "Category-2",
    quantity: 3,
  },
  {
    id: 3,
    productName: "Product-3",
    price: "10.50",
    productCategory: "Categort-3",
    quantity: 5,
  },
  {
    id: 4,
    productName: "Product-4",
    price: "15.50",
    productCategory: "Category-4",
    quantity: 2,
  },
  {
    id: 5,
    productName: "Product-5",
    price: "25.50",
    productCategory: "Category-5",
    quantity: 1,
  },
];

const salePrice = ref<number>(13.5);
const quantify = ref<number>(1);
</script>

<template>
  <div class="p-2 mt-2 rounded-xl bg-gray-400 dark:bg-gray-800">
    <div class="grid mb-6 p-1 w-full md:grid-cols-1">
      <div class="flex-1 flex gap-5 w-full">
        <div class="w-full justify-between">
          <SharedSelect :items="products" label="Product" />
        </div>
        <div class="w-full justify-between">
          <SharedSelect :items="category" label="Category" />
        </div>
        <div class="w-full">
          <SharedSelect :items="persons" label="Sale Person" />
        </div>
      </div>
    </div>
    <div class="grid mb-6 p-1 w-full md:grid-cols-1 justify-start items-end">
      <div class="flex-1 items-end justify-end flex gap-5 w-full">
        <div class="w-full">
          <SharedSelect :items="address" label="Country ship to" />
        </div>
        <div class="w-full">
          <SharedBaseInput
            label="Price"
            type="number"
            :modelValue="salePrice"
          />
        </div>
        <div class="w-full">
          <SharedBaseInput
            label="Quantity"
            type="number"
            :modelValue="quantify"
          />
        </div>
        <div class="w-full flex justify-start items-end">
          <SharedButton label="Add" class="bg-gray-600" />
        </div>
      </div>
    </div>
    <div
      class="flex-1 mb-5 bg-[#40f2dd] border border-white px-3 py-2.5 text-md font-bold rounded-full text-sm items-center justify-center flex text-start"
    >
      <div class="w-full">
        <div>Product Name</div>
      </div>
      <div class="w-full">
        <div>Product Category</div>
      </div>
      <div class="w-full text-white">
        <div>Price</div>
      </div>
      <div class="w-full text-white md:text-start">
        <div>Quantity</div>
      </div>
      <div class="w-full text-center">
        <div>Action</div>
      </div>
    </div>
    <div
      class="grid-cols-2 p-2 w-full h-full justify-between items-center md:grid-cols-1"
    >
      <ul class="bg-gray-600 rounded-xl p-2">
        <li v-for="item in saleItems" :key="item.id">
          <div
            class="flex-1 py-2 text-sm font-bold truncate items-center justify-center flex gap-5 w-full"
          >
            <div class="md:w-full text-[#40f2dd]">
              <div>{{ item.productName }}</div>
            </div>
            <div class="w-full text-[#40f2dd]">
              <div>{{ item.productCategory }}</div>
            </div>
            <div class="w-full text-white">
              <div>£ {{ item.price }}</div>
            </div>
            <div class="w-full text-white md:text-start text-center">
              <div>{{ item.quantity }}</div>
            </div>
            <div
              class="w-full dark:bg-gray-800 items-center text-center bg-white rounded-full py-2.5 px-2.5"
            >
              <div>Remove</div>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex grid-cols-1 p-2 mt-2 items-center justify-between">
        <div class="font-bold text-xl text-white">Total: £ 76.00</div>
        <div class="space-x-2 flex">
          <SharedButton label="Cancel" class="bg-white hover:text-white dark:bg-white text-gray-800"/>
          <SharedButton label="Save" class="bg-gray-600"/>
        </div>
      </div>
    </div>
  </div>
</template>
