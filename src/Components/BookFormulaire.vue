<script setup>
import Formulaire from "./Books/FormulaireComponents.vue";
import Livre from "./Books/LivreComponents.vue";
import { ref, computed, watch, onMounted } from "vue";

const users = ref([
  {
    id: 0,
    Titre: "Père riche Père pauvre",
    Auteur: "Robert Kyosaki",
    Annee: 2008,
    Categorie: "Developpement personel",
    isRead: true,
  },
  {
    id: 1,
    Titre: "Plus Malin que le Diable",
    Auteur: "Lucas Graham",
    Annee: 1917,
    Categorie: "Développement personel",
    isRead: false,
  },
  {
    id: 2,
    Titre: "Les 48 lois du pouvoir",
    Auteur: "Robert Green",
    Annee: "1947",
    Categorie: "Développement personel",
    isRead: false,
  },
]);

onMounted(() => {
  const saved = localStorage.getItem("users");
  if (saved) {
    users.value = JSON.parse(saved);
  }
});

watch(
  users,
  (newUsers) => {
    localStorage.setItem("users", JSON.stringify(newUsers));
  },
  { deep: true }
);

function addUser(user) {
  users.value.push({ id: Date.now(), ...user });
}

function removeUser(user) {
  users.value = users.value.filter((u) => u !== user);
}

function toggleRead(id) {
  const user = users.value.find((u) => u.id === id);
  if (user) user.isRead = !user.isRead;
}

const totalUsers = computed(() => users.value.length);
const activeUsers = computed(
  () => users.value.filter((u) => u.isRead === true).length,
);
</script>

<template>
  <Formulaire @add-user="addUser" />
  <Livre
    :users="users"
    :total-users="totalUsers"
    :active-users="activeUsers"
    @remove-user="removeUser"
    @toggle="toggleRead"
  />
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
