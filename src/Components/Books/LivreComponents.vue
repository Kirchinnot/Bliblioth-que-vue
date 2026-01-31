<script setup>
import LivreItem from "./LivreItemComponents.vue";

const props = defineProps({
  users: Array,
  totalUsers: Number,
  activeUsers: Number,
});

const emit = defineEmits(["remove-user", "toggle"]);
</script>

<template>
  <p v-if="users.length === 0">
    <em>Aucun Livre enregistré</em>
  </p>

  <ol>
    <LivreItem
      v-for="user in users"
      :key="user.id"
      :user="user"
      @remove="emit('remove-user', $event)"
      @toggle="emit('toggle', $event)"
    />
  </ol>

  <p>Total : {{ totalUsers }}</p>
  <p>Lus : {{ activeUsers }}</p>
</template>
<style scoped>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* FORMULAIRE */
form {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

input:focus,
select:focus {
  outline: none;
  border-color: #42b883;
}

/* BOUTON */
button {
  width: 100%;
  padding: 10px;
  background: #42b883;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #369f6e;
}

/* STATS */
p {
  margin: 8px 0;
  font-weight: 500;
  color: #333;
}

/* LISTE */
ol {
  margin-top: 15px;
  padding-left: 20px;
}

li {
  background: #fff;
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

/* BOUTON SUPPRIMER */
li button {
  width: auto;
  background: #e74c3c;
  padding: 5px 10px;
  font-size: 14px;
}

li button:hover {
  background: #c0392b;
}

/* STATUS */
.actif {
  color: green;
  font-weight: bold;
}

.inactif {
  color: red;
  font-weight: bold;
}
</style>
