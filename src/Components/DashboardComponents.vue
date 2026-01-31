<script setup>
import { ref } from "vue";
const emit = defineEmits(["change-page"]);
</script>

<template>
  <aside class="sidebar">
    <h1 class="title">Dashboard</h1>

    <nav>
    <button @click="emit('change-page', 'home')">Home</button>
    <button @click="emit('change-page', 'book')">Book</button>
    <button @click="emit('change-page', 'users')">Users</button>
    <button @click="emit('change-page', 'form')">FormUsers</button>
    <button @click="emit('change-page', 'orders')">Orders</button>
    <button @click="emit('change-page', 'reports')">Reports</button>
    <button @click="emit('change-page', 'settings')">Settings</button>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
}

nav button {
  width: 100%;
  text-align: left;
  padding: 12px;
  margin-bottom: 10px;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
