<template>
    <div id="table-container">
        <div v-show="isLoading">
            <h2>Loading data ... </h2>
        </div>
        <div v-show="!isLoading">
            <table id="dt">
                <thead>
                    <tr>
                        <th>First Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="user" v-for="user in users">
                        <td>{{ user }}</td>
                    </tr>
                </tbody>
            </table>
            <button @click="refreshData">Refresh</button>
        </div>
    </div>
</template>

<script>
import fetchData from "../util/fakeServer";
import $ from "jquery";
import dt from "datatables.net";
import dtcss from "datatables.net-dt/css/jquery.dataTables.css";
// See https://github.com/DataTables/DataTables/issues/434
$.DataTable = dt;

export default {
  data() {
    return {
      isLoading: false,
      users: null
    };
  },
  methods: {
    drawDT() {
      $("#dt")
        .DataTable({ bSort: false })
        .draw();
    },
    async refreshData() {
      this.isLoading = true;
      $("#dt")
        .DataTable()
        .destroy();
      try {
        this.users = await fetchData();
        await this.$nextTick(this.drawDT);
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.refreshData();
  }
};
</script>

<style scoped>
#table-container {
  width: 30%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>
