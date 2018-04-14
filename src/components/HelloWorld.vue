<template>
<div>

   <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
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
        // see the options API
      },
    };
  },
};
</script>

<style lang="scss">
@import "../custom-bootstrap.scss";
@import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>

