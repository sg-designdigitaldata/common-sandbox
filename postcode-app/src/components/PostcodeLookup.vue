<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Postcode Lookup</h2>

    <input
      v-model="postcode"
      @keyup.enter="fetchAddresses"
      placeholder="Enter postcode"
      class="border p-2 w-full rounded"
    />

    <button
      @click="fetchAddresses"
      class="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Search
    </button>

    <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>

    <ul v-if="addresses.length" class="mt-4">
      <li v-for="(addr, idx) in addresses" :key="idx" class="border-b py-1">
        {{ addr }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const postcode = ref('')
const addresses = ref([])
const error = ref('')

const fetchAddresses = async () => {
  error.value = ''
  addresses.value = []

  if (!postcode.value.trim()) {
    error.value = 'Please enter a postcode.'
    return
  }

  try {
    console.log("API KEY:", process.env.VUE_APP_API_KEY);

    const apiKey = process.env.VUE_APP_API_KEY;
    const res = await fetch(`https://api.os.uk/search/places/v1/postcode?postcode=${postcode.value}&key=${apiKey}`)

    console.log(apiKey);
    if (!res.ok) throw new Error(`Error: ${res.status}`)

    const data = await res.json()
    console.log(data)

    addresses.value = data.addresses || []

    
  } catch (err) {
    console.error("Fetch failed:", err)
    error.value = err.message || 'Failed to fetch data.'
  }
}

</script>
