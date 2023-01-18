<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

definePageMeta({
  layout: "projects",
});

const chartData = {
  labels: ["Ambient", "Fresh", "Frozen", "Fruit & veg", "Other"],
  datasets: [
    {
      data: [40, 20, 12, 25, 30],
      fill: false,
      label: "Total sales by category",
      backgroundColor: "#40f2dd",
      borderColor: "#ed64a6",
      barThickness: 44,
    },
  ],
};

const chartOptions = {
  responsive: true,
};

const saleItems = [
  {
    id: 1,
    name: "Product-1",
    ambient: "9",
    fresh: "1",
    frozen: "343",
    fruit: "125",
    sale_total: "2323",
    sale_margin: "34834",
  },
  {
    id: 2,
    name: "Product-2",
    ambient: "9",
    fresh: "2",
    frozen: "343",
    fruit: "125",
    sale_total: "2323",
    sale_margin: "34834",
  },
  {
    id: 3,
    name: "Product-3",
    ambient: "9",
    fresh: "3",
    frozen: "343",
    fruit: "125",
    sale_total: "2323",
    sale_margin: "34834",
  },
  {
    id: 4,
    name: "Product-4",
    ambient: "5",
    fresh: "4",
    frozen: "343",
    fruit: "125",
    sale_total: "2323",
    sale_margin: "34834",
  },
  {
    id: 5,
    name: "Product-5",
    ambient: "20",
    fresh: "5",
    frozen: "343",
    fruit: "125",
    sale_total: "2323",
    sale_margin: "34834",
  },
];
</script>

<template>
  <div class="bg-gray-700 mt-2 p-5 rounded-xl container mx-auto">
    <div class="grid grid-cols-2 gap-5">
      <div class="h-32 w-full rounded-xl">
        <div class="flex h-64 bg-gray-500 text-gray-900 w-full rounded-xl">
          <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
      </div>
      <div class="h-32 rounded-xl flex">
        <div class="flex w-full gap-2">
          <div
            class="flex w-full flex-col items-center text-center justify-center rounded-xl bg-gray-400"
          >
            Total sales this month
            <span class="items-center text-[#40f2dd] text-xl py-2 font-bold"
              >120</span
            >
          </div>
          <div
            class="flex w-full flex-col items-center justify-center text-center rounded-xl bg-gray-300"
          >
            Best selling category ever
            <span class="items-center text-xl py-2 font-bold text-gray-900"
              >Fresh</span
            >
          </div>
          <div
            class="flex w-full bg-[#40f2dd] text-gray-900 text-center dark:bg-[#40f2dd] flex-col items-center justify-center rounded-xl"
          >
            Most sales this month
            <span class="items-center text-xl py-2 font-bold text-white"
              >Name One</span
            >
          </div>
        </div>
      </div>
      <div></div>
      <div class="h-32 rounded-xl flex">
        <div class="flex w-full gap-2">
          <div
            class="flex flex-col text-gray-900 text-center items-center justify-center w-full rounded-xl bg-gray-300"
          >
            Best selling product ever
            <span class="items-center text-xl py-2 font-bold text-white"
              >Yorkshie pudds</span
            >
          </div>
          <div
            class="flex w-full rounded-xl bg-gray-400 text-center flex-col items-center justify-center"
          >
            Total margin this month
            <span
              class="items-center text-[#40f2dd] text-xl py-2 font-bold text-gray-900"
              >£ 10,365.56</span
            >
          </div>
          <div
            class="flex w-4/6 truncate text-gray-900 items-center flex flex-col py-2 h-72 rounded-xl bg-gray-500"
          >
            <span class="items-center flex justify-between"
              >Monthly sales</span
            >
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Jan 23 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Feb 26 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Mar 30 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Jun-25 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Apr-30 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Dec-29 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Aug-07 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Nov-30 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Jan-01 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Jul-28 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Nov-30 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Jan-01 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Jul-28 </span>
              <span> £ 23.00</span>
            </div>
            <div class="flex flex-row justify-between text-xs text-white">
              <span> Nov-30 </span>
              <span> £ 23.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-5">
      <div class="grid grid-cols-1 mt-5 w-5/6">
        <div class="h-full rounded-xl">
          <div
            class="flex flex-col text-md text-gray-900 font-bold items-start p-2 bg-gray-500 w-full rounded-xl"
          >
            Sales by person this month

            <div
              class="flex w-full mb-5 bg-[#40f2dd] mt-2 border border-white px-3 py-2.5 text-md font-bold rounded-full text-sm items-center justify-center flex text-start"
            >
              <div class="w-full text-gray-900">
                <div>Name</div>
              </div>
              <div class="w-full">
                <div>Ambient</div>
              </div>
              <div class="w-full text-white">
                <div>Fresh</div>
              </div>
              <div class="w-full text-white md:text-start">
                <div>Frozen</div>
              </div>
              <div class="w-full text-white md:text-start">
                <div>Fruit & veg</div>
              </div>
              <div class="w-full text-gray-900 md:text-start">
                <div>Sales total</div>
              </div>
              <div class="w-full text-gray-900 md:text-start">
                <div>Sales margin</div>
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
                      <div>{{ item.name }}</div>
                    </div>
                    <div class="w-full text-[#40f2dd]">
                      <div>{{ item.ambient }}</div>
                    </div>
                    <div class="w-full text-white">
                      <div>{{ item.fresh }}</div>
                    </div>
                    <div class="w-full text-white">
                      <div>{{ item.frozen }}</div>
                    </div>
                    <div class="w-full text-white">
                      <div>{{ item.fruit }}</div>
                    </div>
                    <div class="w-full text-white">
                      <div>{{ item.sale_total }}</div>
                    </div>
                    <div class="w-full text-white md:text-start text-center">
                      <div>£ {{ item.sale_margin }}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="grid w-2/6 mt-5 space-y-5">
        <div class="w-1/2">
          <div
            class="bg-gray-400 text-gray-900 rounded-xl flex flex-col items-center justify-center w-full h-full"
          >
            Most shipped
            <span class="items-center text-xl py-2 font-bold text-[#40f2dd]"
              >England</span
            >
          </div>
        </div>
        <div
          class="bg-gray-300 p-2 text-gray-900 text-xl rounded-xl flex flex-col items-center justify-center"
        >
          Total sales
          <span class="items-center text-2xl py-2 font-bold text-[#40f2dd]"
            >1503</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
