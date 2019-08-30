  <template>
  <div style="padding: 0px 30px;">
      <div class="container--fluid">
          <div
                  :class="`d-flex justify-space-between mb-6`"
                  color="dgrey lighten-2"
                  flat
                  tile
          >
              <div class="pa-2">
                  <div class="title my-2">3D Client Acquisition Matrix</div>
              </div>
              <div class="pa-2">
                  <v-btn color="primary" small  @click.stop="adduser = true"><i class="fa fa-refresh" aria-hidden="true"></i>Refresh Now</v-btn>
                    &nbsp;
                  <v-btn
                          class="myAgencyBtn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-cog " aria-hidden="true"></i>
                  </v-btn>
                  &nbsp;
                  <v-btn
                          class="myAgencyBtn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-share-alt " aria-hidden="true"></i>
                  </v-btn>
                  &nbsp;
                  <v-btn
                          class="myAgencyBtn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-download " aria-hidden="true"></i>
                  </v-btn>

                 <!-- <v-daterange :options="dateRangeOptions" v-model="range"></v-daterange>
                  <v-daterange :options="dateRangeOptions" ></v-daterange>-->

              </div>
          </div>





          <div class="d-flex flex-wrap jusftify-space-between mb-6">

              <div class="pa-2" v-for="(item ,index) in items">
                  <v-card
                          max-width="300"
                          class="mx-auto"
                  >
                      <div class="flex-grow-1"></div>
                      <div >
                          <v-btn color="grey" icon>
                              <i class="fa fa-question-circle" aria-hidden="true"></i>
                          </v-btn>
                          <v-btn color="grey" icon>
                              <i class="fa fa-cog" aria-hidden="true"></i>
                          </v-btn>
                      </div>

                      <v-row justify="center">
                          <div class="font-weight-light">Total cost per link click</div>
                      </v-row>
                      <v-row justify="center">
                          <div class="font-weight-black font-weight-bold headline">$0.04</div>
                      </v-row>
                      <div
                              :class="`d-flex justify-space-between mb-6`"
                      >
                          <div class="pa-2">
                              <div class="my-2">KPT: $100.00</div>
                          </div>
                          <div class="pa-2">
                              <div class="my-2">KPT: $100.00</div>
                          </div>
                      </div>

                  </v-card>
              </div>

          </div>








          <v-card class="container--fluid">
              <div class="title">Performance Estimator</div>


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
          </div>






<!-- Modal -->
      <!--Edit User-->
      <v-row justify="center">
          <v-dialog
                  v-model="dialog"
                  max-width="800"
          >
              <v-card>
                  <div class=" textCenter modalHeading headline">Edit User</div>
                  <div class="container">
                      <v-text-field
                              v-model="message"
                              label="Email"
                              outlined
                              clearable
                      ></v-text-field>

                      <v-text-field
                              v-model="message"
                              label="First Name"
                              outlined
                              clearable
                      ></v-text-field>
                      <v-text-field
                              v-model="message"
                              label="Last Name"
                              outlined
                              clearable
                      ></v-text-field>
                          <v-select
                                  :items="role"
                                  label="Role"
                                  outlined
                          ></v-select>
                      <div
                              :class="`d-flex justify-space-between mb-6`"
                              color="dgrey lighten-2"
                              flat
                              tile
                      >
                          <div class="pa-2">
                              <v-btn small color="error" @click="dialog = false">Delete User</v-btn>
                          </div>
                          <div class="pa-2">
                              <v-btn small color="grey" @click="dialog = false">Close</v-btn> &nbsp;
                              <v-btn small color="primary" @click="dialog = false">Save Changes</v-btn>
                          </div>
                      </div>
                  </div>
              </v-card>
          </v-dialog>
      </v-row>


      <!--Add User-->
      <v-row justify="center">
          <v-dialog
                  v-model="adduser"
                  max-width="800"
          >
              <v-card>
                  <div class=" textCenter modalHeading headline">Add User</div>
                  <div class="container">
                      <v-text-field
                              v-model="message"
                              label="Email"
                              outlined
                              clearable
                      ></v-text-field>

                      <v-text-field
                              v-model="message"
                              label="First Name"
                              outlined
                              clearable
                      ></v-text-field>
                      <v-text-field
                              v-model="message"
                              label="Last Name"
                              outlined
                              clearable
                      ></v-text-field>
                          <v-select
                                  :items="role"
                                  label="Role"
                                  outlined
                          ></v-select>
                      <div
                              :class="`d-flex justify-space-between mb-6`"
                              color="dgrey lighten-2"
                              flat
                              tile
                      >
                          <div class="pa-2">
                          </div>
                          <div class="pa-2">
                              <v-btn small color="grey" @click="adduser = false">Close</v-btn> &nbsp;
                              <v-btn small color="primary" @click="adduser = false">Add User</v-btn>
                          </div>
                      </div>
                  </div>
              </v-card>
          </v-dialog>
      </v-row>
      <!-- End Modal -->

  </div>
</template>

<script>






  export default {
      name: 'MyAgency',
      data() {
          return {
              dialog: false,
              adduser: false,
              role: ['Foo', 'Bar', 'Fizz', 'Buzz'],
              range: {},
              dateRangeOptions: {
                  startDate: 'YYYY-MM-DD',
                  endDate: 'YYYY-MM-DD',
                  format: 'YYYY-MM-DD',
              },
              items: 6,
              search: '',
              headers: [
                  {
                      text: 'Conversation Rate',
                      align: 'left',
                      sortable: false,
                      value: 'conversational_rate',
                  },
                  {text: 'Units', value: 'unit'},
                  {text: 'Sales', value: 'sales'},
                  {text: 'Gross Profit', value: 'gross_profit'},
                  {text: 'CPA', value: 'cpa'},
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
      }
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

.modalHeading {
    background: blue;
    color: white;
    padding: 15px 0px;
    font-weight: bold !important;
    font-size: 12px !important;
}
.textCenter{
    text-align:center;
}
.myAgencyBtn {
    background: white !important;
    color: grey !important;
    border: 1px solid #9d9d9d !important;
    border-radius: 7px !important;
    height: 29px !important;
    min-width: 3px !important;
    padding: 0px 7px !important;
    font-size: 17px !important;
}

</style>