<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <a href="#">test</a>
        <v-card-title>
          Your Current Cheques Status
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="cheques" :search="search"></v-data-table>
      </v-card>
    </v-app>
  </div>
</template>
<style >
.v-card {
  max-width: 90%;
  margin: 0 10%;
  padding-bottom: 5%;
}
.v-data-table {
  font-family: "Nunito", sans-serif;
  border-collapse: collapse;
  border: 5px solid #1976d2;
}
/* .v-text-field input {
  
} */
.v-card__title {
  font-size: 2rem;
}

.v-data-table th {
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: left;
  background: #1976d2;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}
.v-data-table td {
  font-size: 1.25rem;
  text-align: left;
  padding: 8px;
  border-right: 2px solid #90caf9;
}
.v-data-table td:last-child {
  border-right: none;
}
.v-data-table tbody tr:nth-child(2n) td {
  background: #e3f2fd;
}

.theme--light.v-data-table thead tr th {
  color: #fff;
}
</style>
<script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Cheque-ID",
        align: "start",
        value: "id"
      },
      { text: "Type", value: "type" },
      { text: "Date", value: "date" },
      { text: "Status", value: "status" }
    ],
    cheques: [
      {
        id: "01",
        type: "Bearer",
        date: "32/12/2020",
        status: "check"
      },
      {
        id: "02",
        type: "Bearer",
        date: "34/12/2020",
        status: "check"
      },
      {
        id: "03",
        type: "Order",
        date: "30/12/2020",
        status: "check"
      },
      {
        id: "04",
        type: "Bearer",
        date: "31/12/2020",
        status: "check"
      }
    ]
  })
};
</script>