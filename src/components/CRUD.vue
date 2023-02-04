<template>
<div class="home">  

<!--CRUD-->
 <main class="mainP">
  <table>
    <thead>
      <tr class="titel">
        <h1>Pizzen</h1>
      </tr>
    </thead>
    
    <tbody>
      <div v-for="pizzaDaten in pizzen" :key="pizzaDaten">
        <input v-model="pizzaDaten.NAME" type="text">
        <input v-model="pizzaDaten.PREIS" type="text">
        <button @click="updatePizza(pizzaDaten)" class="button">update</button>
        <button @click="deletePizza(pizzaDaten.PRODUKT_ID)"  class="button">delete</button>
      </div>
    </tbody>
  </table>
</main>

<main class="mainP">
  <table>
    <thead>
      <tr class="titel">
        <h1>Eingabe: Pizza hinzufügen</h1>
      </tr>
    </thead>
    <tbody>
      <input ref="newname" placeholder="new Name" type="text">
      <input ref="newid" placeholder="new ID" type="number">
      <input ref="newkategorie" placeholder="new Kategorie" type="text">
      <input ref="newpreis" placeholder="new Preis" type="number">
      <button @click="addData" class="button">Neue Pizza</button>
    </tbody>
  </table>
</main>
</div>

</template>

<script>
import axios from "axios";
import {onMounted, onUnmounted, ref} from 'vue'


export default {
    name:'CRUD',
  data() {
    return {
      pizzen:ref([])
      //pizzen:[]
    };
  },
  mounted() {
    this.readData();
    
  },
  methods: {

    async readData() {
      try {
        const response = await axios.get("http://localhost:3000/pizzen");
        this.pizzen = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async addData() {
  const newName = this.$refs.newname.value;
  const newId = this.$refs.newid.value;
  const newKategorie = this.$refs.newkategorie.value;
  const newPreis = this.$refs.newpreis.value;

  if (!newName || !newId || !newKategorie || !newPreis) {
    console.error("Alle Felder müssen ausgefüllt sein");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/data", {
     produkt_id: newId,
     name: newName,
      kategorie: newKategorie,
      preis: newPreis
    });

    console.log(response)
    if (response.status === 201) {
      console.log("Daten erfolgreich übertragen");
    } else {
      console.error("Übertragung fehlgeschlagen");
    }
  } catch (error) {
    console.error(error);
  }
}
    /*async addData() {
    try {
      const response = await axios.post('http://localhost:3000/data', {
              name:this.$refs.newname.value,
            produkt_id: this.$refs.newid.value,
          kategorie: this.$refs.newkategorie.value,
        preis: this.$refs.newpreis.value,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  },*/
  }
};
</script>

<style scoped>
.home {
    display: flex;
}
</style>