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
                  <v-btn color="#2E4686" small  @click.stop="adduser = true"><i class="fa fa-refresh" aria-hidden="true"></i>Refresh Now</v-btn>
                    &nbsp;
                  <v-btn
                          class="myAgencyBtn"
                          @click.stop="dashboardSettings = true"
                  >
                      <i class="fa fa-cog " aria-hidden="true"></i>
                  </v-btn>
                  &nbsp;
                  <v-btn
                          class="myAgencyBtn"
                          @click.stop="dashboardSettings = true"
                  >
                      <i class="fa fa-plus " aria-hidden="true"></i>
                  </v-btn>
                  &nbsp;
                  <v-btn
                          class="myAgencyBtn"
                          @click.stop="shareDashboard = true"
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


              <div
                      :class="`d-flex justify-space-between mb-6`"
                      color="dgrey lighten-2"
                      flat
                      tile
              >
                  <div class="pa-2">
                      <div class="title my-2">TraficAnalytic</div>
                  </div>
                  <div class="pa-2">

                      <v-btn
                              class="myAgencyBtn"
                              @click.stop="dialog = true"
                      >
                          <i class="fa fa-cog " aria-hidden="true"></i>
                      </v-btn>
                  </div>
              </div>

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
                      :sort-by="['calories', 'fat']"
                      :sort-desc="[false, true]"
                      multi-sort
                      class="my_style"
              ></v-data-table>
          </v-card>
          </div>


<!-- Modal -->
      <!--Dashboard Settings-->
      <v-row justify="center">
          <v-dialog
                  v-model="dashboardSettings"
                  max-width="800"
          >
              <v-card>
                  <div class=" textCenter modalHeading headline">Dashboard Settings</div>
                  <div class="container">
                      <div>
                          <v-tabs
                                  v-model="tab"
                                  background-color="white"
                                  color="blue"
                                  centered
                                  text
                          >
                              <v-tabs-slider></v-tabs-slider>

                              <v-tab href="#tab-1" color="basil">
                                  Generals
                              </v-tab>

                              <v-tab href="#tab-2" color="red">
                                  Facebook Filters
                              </v-tab>
                          </v-tabs>

                          <v-tabs-items v-model="tab">
                              <br>
                              <v-tab-item
                                      :value="'tab-1'"
                              >
                                  <div>
                                      <v-text-field
                                              v-model="message"
                                              label="Dashboard Title"
                                              outlined
                                              clearable
                                      ></v-text-field>
                                      <div
                                              :class="`d-flex justify-space-between mb-6`">
                                          <div class="pa-2">
                                          </div>
                                          <div class="pa-2">
                                              <v-btn small color="grey" @click="dialog = false">Close</v-btn> &nbsp;
                                              <v-btn small color="primary" @click="dialog = false">Save & Close</v-btn>
                                          </div>
                                      </div>
                                  </div>

                              </v-tab-item>


                              <v-tab-item
                                      :value="'tab-2'"
                              >
                                  <div>
                                      <v-text-field
                                              v-model="message"
                                              label="Facebook Ad Account"
                                              outlined
                                              clearable
                                      ></v-text-field>
                                      <v-text-field
                                              v-model="message"
                                              label="Facebook Campaign Filter"
                                              outlined
                                              clearable
                                      ></v-text-field>
                                      <v-text-field
                                              v-model="message"
                                              label="Facebook Adset Filter"
                                              outlined
                                              clearable
                                      ></v-text-field>
                                      <v-text-field
                                              v-model="message"
                                              label="Facebook Ad Filter"
                                              outlined
                                              clearable
                                      ></v-text-field>

                                      <div class="d-flex justify-space-around mb-6">
                                          <div>Facebook Attribution Window
                                              <v-row>
                                                  <div class="pa-2 myCheckBoxStyle">
                                                      <label>View</label>
                                                      <v-container fluid>
                                                          <v-checkbox
                                                                  v-model="checkbox"
                                                                  label="1 Day"
                                                          ></v-checkbox>
                                                          <v-checkbox
                                                                  v-model="checkbox"
                                                                  label="7 Days"
                                                          ></v-checkbox>
                                                          <v-checkbox
                                                                  v-model="checkbox"
                                                                  label="28 Days"
                                                          ></v-checkbox>
                                                      </v-container>
                                                  </div>

                                                  <div class="pa-2 myCheckBoxStyle">
                                                      <label>Click</label>
                                                      <v-container fluid>
                                                          <v-checkbox
                                                                  v-model="checkbox"
                                                                  label="1 Day"
                                                          ></v-checkbox>
                                                          <v-checkbox
                                                                  v-model="checkbox"
                                                                  label="7 Days"
                                                          ></v-checkbox>
                                                          <v-checkbox
                                                                  v-model="checkbox"
                                                                  label="28 Days"
                                                          ></v-checkbox>
                                                      </v-container>

                                                  </div>
                                              </v-row>
                                          </div>
                                          <div class="pa-2">

                                          </div>


                                          <div>
                                              <v-card
                                                      max-width="3244"
                                                      width="300"
                                                      class="mx-auto indigo lighten-4"
                                                      color="grrey"
                                                      style="padding: 15px;"
                                              >
                                                  <v-card-text>Use Default Ad Account Attribution</v-card-text>

                                                  <v-switch
                                                          v-model="switch1"
                                                          label="default"
                                                  ></v-switch>

                                              </v-card>
                                          </div>


                                      </div>


                                      <div
                                              :class="`d-flex justify-space-between mb-6`"
                                      >
                                          <div class="pa-2">
                                          </div>
                                          <div class="pa-2">
                                              <v-btn small color="#506AEE" @click="dialog = false">Apply Filters to All
                                                  cards
                                              </v-btn>&nbsp;
                                              <v-btn small color="grey" @click="dialog = false">Close</v-btn>&nbsp;
                                              <v-btn small color="#16AF91" @click="dialog = false">Save & Close</v-btn>

                                              <!-- <div class="can-toggle demo-rebrand-1">
                                                   <input id="d" type="checkbox">
                                                   <label for="d">
                                                       <div class="can-toggle__switch" data-checked="Default" data-unchecked="Disabled"></div>
                                                       <div class="can-toggle__label-text"></div>
                                                   </label>
                                               </div>-->
                                          </div>
                                      </div>
                                  </div>
                              </v-tab-item>
                          </v-tabs-items>
                      </div>
                  </div>
              </v-card>
          </v-dialog>
      </v-row>



      <!--Share  Dashboard-->
      <v-row justify="center">
          <v-dialog
                  v-model="shareDashboard"
                  max-width="800"
          >
              <v-card>
                  <div class=" textCenter modalHeading headline">Share Dashboard</div>
                  <div class="container">
                      <br>
                      <div>
                          <v-col class="d-flex" cols="12" sm="12">
                              <v-select
                                      :items="['1 Day' , '7 Days' , '30 Days']"
                                      label="Expiration Time"
                                      outlined
                              ></v-select>
                          </v-col>
                          <div
                                  :class="`d-flex justify-space-between mb-6`">
                              <div class="pa-2">
                              </div>
                              <div class="pa-2">
                                  <v-btn small color="grey" @click="shareDashboard = false">Close</v-btn> &nbsp;
                                  <v-btn small color="primary" @click="shareDashboard = false">Save & Close</v-btn>
                              </div>
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
      mounted() {
        this.ad_account_id = this.$store.getters.getAdAccountId;
        console.log(this.ad_account_id);
      },
      data() {
          return {
              ad_account_id: null,
              dashboardSettings: false,
              message: null,
              checkbox: null,
              switch1: null,
              shareDashboard: false,
              adduser: false,
              tab: null,
              // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              role: ['Foo', 'Bar', 'Fizz', 'Buzz'],
              range: {},
              dateRangeOptions: {
                  startDate: 'YYYY-MM-DD',
                  endDate: 'YYYY-MM-DD',
                  format: 'YYYY-MM-DD',
              },
              items: 5,
              search: '',
              headers: [
                  {text: 'Ad Spend', value: 'ad_spend'},
                  {text: 'CPM', value: 'cpm'},
                  {text: 'Leads', value: 'leads'},
                  {text: 'CPL', value: 'cpl'},
                  {text: 'CTR', value: 'ctr'},
                  {text: 'Links Click', value: 'links_click'},
                  {text: 'LCTR', value: 'lctr'},

                  {text: 'CPLC', value: 'cplc'},
                  {text: 'LPCV', value: 'lpcv'},
                  {text: 'Add 2 Cart', value: 'add_to_cart'},
                  {text: 'Apps', value: 'apps'},
                  {text: 'Cost / App', value: 'cost_app'},
                  {text: 'L2AC %', value: 'l2ac'},
                  {text: 'APCV %', value: 'apcv'},
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

<style scoped>
    .v-data-table-header{
        background: #8e8e8e;;
    }
    .v-data-table-header th
    {
        color: white !important;
    }

.modalHeading {
    background: #2E4686;
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
    border: 0px solid #9d9d9d !important;
    border-radius: 7px !important;
    height: 29px !important;
    min-width: 3px !important;
    padding: 0px 7px !important;
    font-size: 17px !important;
}
 .myCheckBoxStylee div div div
    {
        margin-bottomd: -30px !important;
        margin-top: 0px !important;
        padding-top: 0px !important;
    }
    .can-toggle {
        position: relative;
    }
    .can-toggle *, .can-toggle *:before, .can-toggle *:after {
        box-sizing: border-box;
    }
    .can-toggle input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    .can-toggle input[type="checkbox"][disabled] ~ label {
        pointer-events: none;
    }
    .can-toggle input[type="checkbox"][disabled] ~ label .can-toggle__switch {
        opacity: 0.4;
    }
    .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:before {
        content: attr(data-unchecked);
        left: 0;
    }
    .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
        content: attr(data-checked);
    }
    .can-toggle label {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;
        display: flex;
        align-items: center;
    }
    .can-toggle label .can-toggle__label-text {
        flex: 1;
        padding-left: 32px;
    }
    .can-toggle label .can-toggle__switch {
        position: relative;
    }
    .can-toggle label .can-toggle__switch:before {
        content: attr(data-checked);
        position: absolute;
        top: 0;
        text-transform: uppercase;
        text-align: center;
    }
    .can-toggle label .can-toggle__switch:after {
        content: attr(data-unchecked);
        position: absolute;
        z-index: 5;
        text-transform: uppercase;
        text-align: center;
        background: white;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .can-toggle input[type="checkbox"][disabled] ~ label {
        color: rgba(119, 119, 119, 0.5);
    }
    .can-toggle input[type="checkbox"]:focus ~ label .can-toggle__switch, .can-toggle input[type="checkbox"]:hover ~ label .can-toggle__switch {
        background-color: #777;
    }
    .can-toggle input[type="checkbox"]:focus ~ label .can-toggle__switch:after, .can-toggle input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
        color: #5e5e5e;
    }
    .can-toggle input[type="checkbox"]:hover ~ label {
        color: #6a6a6a;
    }
    .can-toggle input[type="checkbox"]:checked ~ label:hover {
        color: #55bc49;
    }
    .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch {
        background-color: #70c767;
    }
    .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
        color: #4fb743;
    }
    .can-toggle input[type="checkbox"]:checked:focus ~ label .can-toggle__switch, .can-toggle input[type="checkbox"]:checked:hover ~ label .can-toggle__switch {
        background-color: #5fc054;
    }
    .can-toggle input[type="checkbox"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle input[type="checkbox"]:checked:hover ~ label .can-toggle__switch:after {
        color: #47a43d;
    }
    .can-toggle label .can-toggle__label-text {
        flex: 1;
    }
    .can-toggle label .can-toggle__switch {
        transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
        background: #848484;
    }
    .can-toggle label .can-toggle__switch:before {
        color: rgba(255, 255, 255, 0.5);
    }
    .can-toggle label .can-toggle__switch:after {
        transition: -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);
        transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
        transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1), -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);
        color: #777;
    }
    .can-toggle input[type="checkbox"]:focus ~ label .can-toggle__switch:after, .can-toggle input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
    }
    .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
        -webkit-transform: translate3d(65px, 0, 0);
        transform: translate3d(65px, 0, 0);
    }
    .can-toggle input[type="checkbox"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle input[type="checkbox"]:checked:hover ~ label .can-toggle__switch:after {
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
    }
    .can-toggle label {
        font-size: 14px;
    }
    .can-toggle label .can-toggle__switch {
        height: 36px;
        flex: 0 0 134px;
        border-radius: 4px;
    }
    .can-toggle label .can-toggle__switch:before {
        left: 67px;
        font-size: 12px;
        line-height: 36px;
        width: 67px;
        padding: 0 12px;
    }
    .can-toggle label .can-toggle__switch:after {
        top: 2px;
        left: 2px;
        border-radius: 2px;
        width: 65px;
        line-height: 32px;
        font-size: 12px;
    }
    .can-toggle label .can-toggle__switch:hover:after {
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
    }
    .can-toggle.can-toggle--size-large label .can-toggle__switch:hover:after {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"][disabled] ~ label {
        color: rgba(181, 62, 116, 0.5);
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-1 input[type="checkbox"]:hover ~ label .can-toggle__switch {
        background-color: #b53e74;
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-1 input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
        color: #8f315c;
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:hover ~ label {
        color: #a23768;
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked ~ label:hover {
        color: #39916a;
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked ~ label .can-toggle__switch {
        background-color: #44ae7f;
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
        color: #368a65;
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:hover ~ label .can-toggle__switch {
        background-color: #3d9c72;
    }
    .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:hover ~ label .can-toggle__switch:after {
        color: #2f7757;
    }
    .can-toggle.demo-rebrand-1 label .can-toggle__label-text {
        flex: 1;
    }
    .can-toggle.demo-rebrand-1 label .can-toggle__switch {
        transition: background-color 0.3s ease-in-out;
        background: #c14b81;
    }
    .can-toggle.demo-rebrand-1 label .can-toggle__switch:before {
        color: rgba(255, 255, 255, 0.6);
    }
    .can-toggle.demo-rebrand-1 label .can-toggle__switch:after {
        transition: -webkit-transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
        color: #b53e74;
    }


</style>