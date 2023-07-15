<template>
  <div class="container">
    <h2 class="title">Student Registration Form</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="name" class="label">Name:</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          class="input"
          required
        />
      </div>
      <div class="form-group">
        <label for="email" class="label">Email:</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="input"
          required
        />
      </div>
      <div class="form-group">
        <label for="contact" class="label">Contact:</label>
        <input
          type="tel"
          id="contact"
          v-model="formData.contact"
          class="input"
          required
        />
      </div>
      <div class="form-group">
        <label for="address" class="label">Address:</label>
        <textarea
          id="address"
          v-model="formData.address"
          class="input"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-btn">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { saveData } from "../../api/api";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    submitForm() {
      // console.log(JSON.stringify(this.formData));
      saveData(this.formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => err);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #45a049;
}
</style>
