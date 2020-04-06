<template>
  <div>
    <div class="text-center mb-12">
      <v-btn x-large color="primary">
        <!-- <v-img src="../assets/cloud-upload.svg" class="mr-3"></v-img> -->
        Add Cheque Now
      </v-btn>
    </div>
    <div id="say">Your Current Cheques Status</div>
    <table id="firstTable">
      <thead>
        <tr>
          <th>Cheque-ID</th>
          <th>Type</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="col in columns" :key="col">
            <a v-if="col === 'status'" :href="row[col]">Check</a>
            <div v-else>{{ row[col] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
#say {
  font-family: "Nunito", sans-serif;
  font-size: 3rem;
  margin-left: 10%;
}
.v-btn {
  font-family: "Nunito", sans-serif;
}
.v-btn.v-size--x-large {
  font-size: 2rem;
}
table {
  font-family: "Nunito", sans-serif;
  font-size: 2em;
  width: 80%;
  border-collapse: collapse;
  border: 3px solid #1976d2;
  margin: 0 auto 5% auto;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #1976d2;
  color: #fff;
  padding: 8px;
  min-width: 20px;
}

table td {
  text-align: center;
  padding: 8px;
  border-right: 2px solid #90caf9;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #e3f2fd;
}
</style>
<script>
export default {
  data: () => ({
    drawer: false,
    rows: [
      {
        id: 1,
        type: "Bearer",
        date: "32-01-14",
        status: "adsad",
      },
      {
        id: 2,
        type: "Order",
        date: "14-01-07",
        status: "adsd",
      },
      {
        id: 3,
        type: "Order",
        date: "14-01-07",
        status: "adsd",
      },
      {
        id: 4,
        type: "Order",
        date: "14-01-07",
        status: "adsd",
      },
      {
        id: 5,
        type: "Order",
        date: "14-01-07",
        status: "adsd",
      },
      {
        id: 6,
        type: "Bearer",
        date: "14-01-07",
        status: "adsd",
      },
    ],
  }),
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    },
  },
};
</script>
