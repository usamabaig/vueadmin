<template>
    <div>
      <div class="title">Performance Estimator</div>
      <v-card max-width="900" class="container">
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field
                        v-model="cost_per_lead"
                        label="Insert your cost per lead"
                        @input="estimate"
                        outlined
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field
                        v-model="offer_price"
                        label="Insert your offer price"
                        @input="estimate"
                        outlined
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field
                        v-model="traffic_cost"
                        label="Insert your traffic cost"
                        @input="estimate"
                        outlined
                ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field
                        v-model="traffic_cost_to_generate"
                        label="Insert traffic cost to auto generate"
                        @input="estimate"
                        outlined
                ></v-text-field>
            </v-col>
        </v-row>

        <v-data-table
                :headers="headers"
                :items="performance_estimator"
                :sort-by="['calories', 'fat']"
                hide-default-footer
                :sort-desc="[false, true]"
                multi-sort
                class="my_style"
        ></v-data-table>
    </v-card>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        cost_per_lead: '',
        offer_price: '',
        traffic_cost: '',
        traffic_cost_to_generate: '',
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
            conversational_rate: '1.0%',
            unit: 0,
            sales: 0.0,
            gross_profit: 0,
            cpa: 0.0,
            conversational_rate_calc: 1.0 / 100,
          },
           {
            conversational_rate: '2.0%',
            unit: 0,
            sales: 0.0,
            gross_profit: 0,
            cpa: 0.0,
            conversational_rate_calc: 2.0 / 100,
          },
           {
            conversational_rate: '5.0%',
            unit: 0,
            sales: 0.0,
            gross_profit: 0,
            cpa: 0.0,
            conversational_rate_calc: 5.0 / 100,
          },
           {
            conversational_rate: '10.0%',
            unit: 0,
            sales: 0.0,
            gross_profit: 0,
            cpa: 0.0,
            conversational_rate_calc: 10.0 / 100,
          },
        ],
      }
    },
    methods: {
      estimate() {
        this.traffic_cost_to_generate = (this.traffic_cost / this.cost_per_lead).toFixed(5);

        var first_row = this.performance_estimator[0];
        var second_row = this.performance_estimator[1];
        var third_row = this.performance_estimator[2];
        var fourth_row = this.performance_estimator[3];

        first_row.unit = (this.traffic_cost_to_generate * first_row.conversational_rate_calc).toFixed(5);
        second_row.unit = (this.traffic_cost_to_generate * second_row.conversational_rate_calc).toFixed(5);
        third_row.unit = (this.traffic_cost_to_generate * third_row.conversational_rate_calc).toFixed(5);
        fourth_row.unit = (this.traffic_cost_to_generate * fourth_row.conversational_rate_calc).toFixed(5);

        first_row.sales = (first_row.unit * this.offer_price).toFixed(5);
        second_row.sales = (second_row.unit * this.offer_price).toFixed(5);
        third_row.sales = (third_row.unit * this.offer_price).toFixed(5);
        fourth_row.sales = (fourth_row.unit * this.offer_price).toFixed(5);

        first_row.gross_profit = (first_row.sales - this.traffic_cost).toFixed(5);
        second_row.gross_profit = (second_row.sales - this.traffic_cost).toFixed(5);
        third_row.gross_profit = (third_row.sales - this.traffic_cost).toFixed(5);
        fourth_row.gross_profit = (fourth_row.sales - this.traffic_cost).toFixed(5);

        first_row.cpa = (this.traffic_cost / (first_row.unit)).toFixed(5);
        second_row.cpa = (this.traffic_cost / (second_row.unit)).toFixed(5);
        third_row.cpa = (this.traffic_cost / (third_row.unit)).toFixed(5);
        fourth_row.cpa = (this.traffic_cost / (fourth_row.unit)).toFixed(5);
      },
    }
    
  }
</script>

<style>
.v-data-table-header{
  background: #6A6F8B;
}
.v-data-table-header th
{
color: white !important;
}
.title {
color: #2E4686;
margin-left: 225px;
margin-bottom: 15px;
}
</style>