<script setup>
import { ref } from "vue";
const emit = defineEmits(["change-page"]);
</script>

<template>
  <aside class="sidebar">
    <h1 class="title">Dashboard</h1>

    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/formulaire">Formulaire</router-link>
    <router-link to="/formusers">FormUsers</router-link>
    <router-link to="/orders">Orders</router-link>
    <router-link to="/settings">Settings</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/reports">Reports</router-link>
    </nav>
  </aside>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sidebar {
  width: 260px;
}

nav{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-inline: 5%;
  text-align: left;
  margin-bottom: 10px;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
