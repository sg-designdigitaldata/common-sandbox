<template>
  <div class="postcode-lookup">
    <h2>Postcode Address Lookup</h2>
    <input v-model="postcode" placeholder="Enter postcode" />
    <button @click="lookupPostcode">Lookup</button>

    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="address">
      <p><strong>Postcode:</strong> {{ address.postcode }}</p>
      <p><strong>Region:</strong> {{ address.region }}</p>
      <p><strong>Country:</strong> {{ address.country }}</p>
      <p><strong>Admin District:</strong> {{ address.admin_district }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postcode: '',
      address: null,
      error: ''
    };
  },
  methods: {
    async lookupPostcode() {
      this.error = '';
      this.address = null;

      if (!this.postcode) {
        this.error = 'Please enter a postcode.';
        return;
      }

      try {
        const response = await fetch(`https://api.postcodes.io/postcodes/${this.postcode}`);
        const data = await response.json();

        if (data.status === 200) {
          this.address = data.result;
        } else {
          this.error = 'Postcode not found.';
        }
      } catch (err) {
        this.error = 'Error fetching postcode data.';
      }
    }
  }
};
</script>

<style scoped>
.postcode-lookup {
  max-width: 400px;
  margin: 20px auto;
}
.error {
  color: red;
}
</style>
