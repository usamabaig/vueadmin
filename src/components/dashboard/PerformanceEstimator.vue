  <template>
  <v-card class="container">
    <div class="title">Performance Estimator</div>
    <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="cost_per_lead"
            label="Cost Per Lead"
            outlined
            clearable
          ></v-text-field>
        </v-col>

<v-col cols="12" sm="6">
          <v-text-field
            v-model="offer_price"
            label="Offer Price"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="traffic_cost"
            label="Traffic Cost"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="message"
            label="Traffc Cost To Auto Generate"
            outlined
            clearable
          ></v-text-field>
        </v-col>
</v-row>
   
    <v-card-title>
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        append-icon=""
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="performance_estimator"
      :search="search"
      :sort-by="['calories', 'fat']"
      :sort-desc="[false, true]"
      multi-sort
      class="my_style"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Conversation Rate',
            align: 'left',
            sortable: false,
            value: 'conversational_rate',
          },
          { text: 'Units', value: 'unit' },
          { text: 'Sales', value: 'sales' },
          { text: 'Gross Profit', value: 'gross_profit' },
          { text: 'CPA', value: 'cpa' },
        ],
        performance_estimator: [
          {
            conversational_rate: 'Frozen Yogurt',
            unit: 159,
            sales: 6.0,
            gross_profit: 24,
            cpa: 4.0,
          
          },
           {
            conversational_rate: 'Frozen Yogurt',
            unit: 159,
            sales: 6.0,
            gross_profit: 24,
            cpa: 4.0,
          
          },
           {
            conversational_rate: 'Frozen Yogurt',
            unit: 159,
            sales: 6.0,
            gross_profit: 24,
            cpa: 4.0,
          
          },
           {
            conversational_rate: 'Frozen Yogurt',
            unit: 159,
            sales: 6.0,
            gross_profit: 24,
            cpa: 4.0,
          
          },
           {
            conversational_rate: 'Frozen Yogurt',
            unit: 159,
            sales: 6.0,
            gross_profit: 24,
            cpa: 4.0,
          
          },
        ],
      }
    },
  }
</script>

<style>
.v-data-table-header{
  background: #8e8e8e;;
}
.v-data-table-header th
{
color: white !important;
}

</style>