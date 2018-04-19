<template>
  <div class="my-3 p-3 bg-white rounded box-shadow">


    <div class="row">
      <div class="lead">

        <button type="button" class="btn btn-outline-secondary" v-on:click="listaOsProdutosPrecoPontos">Pontuam Mais</button>
      </div>
      <v-client-table :ref="100" :data="tableData" :columns="columns" :options="options"></v-client-table>
    </div>
  </div>
</template>

<script>
import { produtos } from '../hinodeExport';

export default {
  name: 'HelloWorld',
  data() {
    return {
      columns: ['uso', 'linha', 'id', 'descricao', 'valor', 'pontos'],
      tableData: produtos,
      options: {
        filterByColumn: true,
        perPage: 100,
        // see the options API
      },
    };
  },
  methods: {
    listaOsProdutosPrecoPontos() {
      produtos.sort((a, b) => {
        const vA = a.pontos / a.valor;
        const vB = b.pontos / b.valor;
        // a.media = vA;
        // b.media = vB;
        if (vA > vB) {
          return -1;
        }
        return 1;
      });
      this.tableData = produtos;
      // this.tableData
    },
  },
};
</script>

<style lang="scss">
  @import "../custom-bootstrap.scss";
  @import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>
