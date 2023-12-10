<script setup>
  import { ref }  from "vue"; 
  import { getComandas, addComandaById, deleteComandaById } from "../database";

  const comandas = ref(0);
  const comandasActive = ref(0);
  const lastId = ref(1);

  function clickHandler() {
    getComandas().then(data => {
      if (data === null) return;
      var arr = data;
      comandasActive.value = data.length;
      lastId.value = 0;
      data.forEach(d => {
        if (d.mesaId > lastId.value) lastId.value = d.mesaId
      })
      console.log(lastId.value)

      if (comandasActive.value < comandas.value) {
        console.log("add")
        const val = Math.abs(comandasActive.value - comandas.value)
        for (let i = 1; i <= val; i++) {
          console.log(lastId.value + i)
          addComandaById(lastId.value + i).then(data => {
            console.log(data)
          })
        }
      } 
      else if (comandasActive.value > comandas.value) {
        const val = Math.abs(comandas.value - comandasActive.value)
        for (let i = 0; i < val; i++) {
          var id = 0
          arr.forEach(d => {
            console.log(d.mesaId, lastId.value - i)
            if (d.mesaId == (lastId.value - i)) id = d.id;
          })
          deleteComandaById(id).then(data => {
            console.log(data)
          })
        }
      }
    })
    
  }
</script>

<template>
  <span>Total de comandas: </span>
  <input type="number" v-model="comandas" id="srcmd" />
  <div id="subcfg" @click="clickHandler">Salvar</div>
              
</template>