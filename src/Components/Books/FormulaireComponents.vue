<script setup>
import { ref, computed } from "vue";
const emit = defineEmits(["add-user"]); //nom de l'événement

const newTitre = ref("");
const newAuteur = ref("");
const newAnnee = ref("");
const newCategorie = ref("");

const isFormValid = computed(
  () =>
    newTitre.value && newAuteur.value && newAnnee.value && newCategorie.value,
);

function submitForm() {
  if (!isFormValid.value) return;

  emit("add-user", {
    Titre: newTitre.value,
    Auteur: newAuteur.value,
    Annee: newAnnee.value,
    Categorie: newCategorie.value,
    isRead: false,
  });

  newTitre.value = "";
  newAuteur.value = "";
  newAnnee.value = "";
  newCategorie.value = "";
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="newTitre" type="text" placeholder="Titre" />
    <input v-model="newAuteur" type="text" placeholder="Auteur" />
    <input v-model="newAnnee" type="number" placeholder="Année" />
    <input v-model="newCategorie" type="text" placeholder="Catégorie" />

    <button :disabled="!isFormValid">Ajouter</button>
  </form>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
</style>
