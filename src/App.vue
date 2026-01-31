<script setup>
import { ref } from "vue";
import Dashboard from "./Components/DashboardComponents.vue";
import Interface from "./Components/InterfaceComponents.vue";

const page = ref("home");
</script>

<template>
  <div class="layout">
    <Dashboard @change-page="page = $event" />
    <Interface :page="page" />
  </div>
</template>


<style scoped>
/* STRUCTURE GLOBALE */
.layout {
  display: flex;
  min-height: 100vh;
  background: #a9adb1;
}

/* SIDEBAR */
.sidebar {
  width: 260px;
  background: #1f2a3a;
  color: white;
  padding: 20px;
}

.title {
  margin-bottom: 30px;
}

/* MENU */
nav button {
  width: 100%;
  text-align: left;
  padding: 12px;
  margin-bottom: 10px;
  border: none;
  background: white;
  cursor: pointer;
}

nav button.active {
  background: #2c3e50;
  color: white;
}

/* ZONE GRISE */
.main {
  flex: 1;
  padding: 40px;
}
</style>

