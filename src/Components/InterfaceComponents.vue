<script setup>
import Home from "./HomeComponents.vue";
import Formulaire from "./BookFormulaire.vue";
import FormUsers from "./FormUsersComponents.vue";
import Orders from "./OrdersComponents.vue";
import Settings from "./SettingsComponents.vue";
import Users from "./UsersComponents.vue";
import Reports from "./ReportsComponents.vue";

const props = defineProps({
  page: String,
});
</script>

<template>
  <main class="main">
    <Home v-if="page === 'home'" />
    <Formulaire v-if="page === 'book'" />
    <FormUsers v-if="page === 'form'" />
    <Orders v-if="page === 'orders'" />
    <Settings v-if="page === 'settings'" />
    <Users v-if="page === 'users'" />
    <Reports v-if="page === 'reports'" />
  </main>
</template>

<style scoped>
.main {
  flex: 1;
}
</style>
