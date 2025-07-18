<script setup lang="ts">
import { get } from "./lib/request";
import { ref, onMounted } from "vue";
import type { RedisResponse } from "./types";

const data = ref<RedisResponse[]>([]);

async function handleKeys() {
  data.value = await get("keys");
}

async function handleSeed() {
  await get("seed");
  handleKeys();
}

onMounted(async () => {
  handleKeys();
});
</script>

<template>
  <main
    class="w-screen h-screen flex flex-col bg-slate-900 text-slate-200 font-sans"
  >
    <div class="flex flex-col items-center p-4 md:p-6 gap-4 flex-shrink-0">
      <h1
        class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent select-none"
      >
        Readicts 🌪️
      </h1>
      <p class="text-slate-400 text-sm md:text-base">
        A simple Redis viewer with Vue.js and TailwindCSS
      </p>
      <button
        @click="handleSeed"
        class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg shadow-emerald-500/20"
      >
        Popular
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-4 md:px-8">
      <div class="overflow-x-auto rounded-lg ring-1 ring-white/10">
        <table class="min-w-full">
          <thead class="bg-slate-800">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Key
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Country
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-700 bg-slate-800/50">
            <tr v-for="item in data" :key="item.key" class="hover:bg-slate-800">
              <td
                class="px-6 py-4 whitespace-nowrap text-sm text-slate-400 font-mono"
              >
                {{ item.key }}
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
              >
                {{ item.value.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {{ item.value.email }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {{ item.value.country }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
