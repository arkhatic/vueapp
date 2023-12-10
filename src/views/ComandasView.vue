<script setup>
import { getComandas, setComandaOpened } from "../database"
import { ref, onMounted } from 'vue'

const comandas = ref([])
const comandasAtivas = ref([])
const comandasSorted = ref([])

const clickHandler = (e) => {
  var id = 0;
  comandas.value.forEach(d => {
    if (d.mesaId == e) {
      id = d.id
      comandasAtivas.value.push(d)
      const index = comandas.value.indexOf(d);
      if (index > -1) {
        comandas.value.splice(index, 1);
      }
      setComandaOpened(id, true)
      sortAll(comandas.value + comandasAtivas.value)
    }
  })
  sortComandas(comandas.value)
  sortComandasAtivas(comandasAtivas.value)
}

const clickHandlerActive = (e) => {
  var id = 0
  comandasAtivas.value.forEach(d => {
    if (d.mesaId == e) {
      id = d.id
      const index = comandasAtivas.value.indexOf(d);
      comandas.value.push(d);
      if (index > -1) {
        comandasAtivas.value.splice(index, 1);
      }
      setComandaOpened(id, false)

    }
  })
  sortComandas(comandas.value)
  sortComandasAtivas(comandasAtivas.value)
}

function sortAll(data) {
  comandas.value = data.filter((p) => (p.isOpened == false)).sort((p1, p2) => (p1.mesaId - p2.mesaId));
  comandasAtivas.value = data.filter((p) => (p.isOpened == true)).sort((p1, p2) => (p1.mesaId - p2.mesaId));
}

function sortComandas(data) {
  comandas.value = data.filter((p) => (p.isOpened == false)).sort((p1, p2) => (p1.mesaId - p2.mesaId));
}
function sortComandasAtivas(data) {
  comandasAtivas.value = data.filter((p) => (p.isOpened == true)).sort((p1, p2) => (p1.mesaId - p2.mesaId));
}
onMounted(() => {
  getComandas().then(data => {
    sortAll(data);
  })
})
</script>

<template>
  <form id="formTab">
    <input type="number" placeholder="Buscar número..." id="searchbar">
    <button type="submit" id="srch">Search</button>
    </form>
  
    <div class="info unselectable">
        <div class="submenu" id="andamento">
          
            <h1 class="title"></h1>
            <div class="ongoing">
              <div v-for="comanda in comandasAtivas">
                <div class="ativa" @click="clickHandlerActive(comanda.mesaId)">
                  <div class="id">{{ comanda.mesaId }}</div>
                  <!-- <div class="name">{{ comanda.isOpened }}</div> -->
                  <!-- <div class="price">{{ comanda.sub }}</div> -->
                </div>
              </div>
            </div>

            <h1 class="title">Comandas Disponiveis</h1>
            <div class="available">
              <div v-for="comanda in comandas">
                <div class="comanda" @click="clickHandler(comanda.mesaId)">
                  <div class="id">{{ comanda.mesaId }}</div>
                  <!-- <div class="name">{{ comanda.isOpened }}</div> -->
                  <!-- <div class="price">{{ comanda.sub }}</div> -->
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.comanda {
  display: flex;
	height: 100px;
	width: 100px;
	justify-content: center;
	align-items: center;
	background-color: #454545;
	margin-right: 20px;

	margin-bottom: 20px;
}

.ativa {
  display: flex;
	height: 100px;
	width: 100px;
	justify-content: center;
	align-items: center;
	background-color: #275fa0;
	margin-right: 20px;

	margin-bottom: 20px;
}
</style>