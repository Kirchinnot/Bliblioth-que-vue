<script setup>
import { ref } from "vue";
const props = defineProps({
  user: Object,
});

const emit = defineEmits(["remove", "toggle"]);
</script>

<template>
  <li :class="{ read: user.isRead }">
    {{ user.Titre }} — {{ user.Auteur }} — {{ user.Annee }} —
    {{ user.Categorie }}
    <span>{{ user.isRead ? "Lu" : "A lire" }}</span>

    <button @click="emit('toggle', user.id)">
      {{ user.isRead ? "Marquer non lu" : "Marquer lu" }}
    </button>
    <button @click="emit('remove', user)">❌</button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

button {
  /* background: #e74c3c; */
  border: none;
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.read {
  text-decoration: line-through;
  opacity: 0.6;
  background-color: #e8f5e9;
}
</style>
