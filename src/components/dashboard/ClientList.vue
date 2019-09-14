  <template>
  <div>
      <div class="container">
          <div
                  :class="`d-flex justify-space-between mb-6`"
                  color="dgrey lighten-2"
                  flat
                  tile
          >
              <div class="pa-2">
                  <div class="title my-2">My Client List</div>
              </div>
              <div class="pa-2">
                  <v-btn color="primary"  @click.stop="addNewDashboard = true">Add New Dashboard</v-btn>
              </div>


          </div>
      </div>
      <v-card class="container">
          <div
                  class="d-flex justify-space-between"
                  color="dgrey lighten-1"
                  flat
          >
              <div class="pa-3 col-md-4 col-sm-6 ">
                  <v-text-field
                          solo
                          label="Search Clients"
                          prepend-inner-icon="fa fa-search"
                  ></v-text-field>
              </div>
              <div class="pa-3 col-md-4 col-sm-6">
                  <v-text-field
                          solo
                          label="Arrange  By Newest"
                          append-icon="fa fa-chevron-left"
                  ></v-text-field>
              </div>
          </div>
          <v-row>
              <v-col class="myBtn clientListButtonPosition" cols="12" sm="6">
                  <v-btn
                          class="first_btn"

                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-cog " aria-hidden="true"></i>
                  </v-btn>
                  <v-btn
                          class="second_btn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </v-btn>
                  <v-text-field
                          v-model="cost_per_lead"
                          label="Cost Per Lead"
                          outlined
                          clearablea
                          prepend-outer-icon="place"
                  ></v-text-field>
              </v-col>
              <v-col class="myBtn clientListButtonPosition" cols="12" sm="6">
                  <v-btn
                          class="first_btn"

                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-cog " aria-hidden="true"></i>
                  </v-btn>
                  <v-btn
                          class="second_btn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </v-btn>
                  <v-text-field
                          v-model="offer_price"
                          label="Offer Price"
                          outlined
                          clearabled
                  ></v-text-field>
              </v-col>
              <v-col class="myBtn clientListButtonPosition" cols="12" sm="6">
                  <v-btn
                          class="first_btn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-cog " aria-hidden="true"></i>
                  </v-btn>
                  <v-btn
                          class="second_btn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </v-btn>
                  <v-text-field
                          v-model="traffic_cost"
                          label="Traffic Cost"
                          outlined
                          clearable
                  ></v-text-field>
              </v-col>
              <v-col class="myBtn clientListButtonPosition" cols="12" sm="6">
                  <v-btn
                          class="first_btn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-cog " aria-hidden="true"></i>
                  </v-btn>
                  <v-btn
                          class="second_btn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </v-btn>
                  <v-text-field
                          v-model="message"
                          label="Traffc Cost To Auto Generate"
                          outlined
                          clearable
                  ></v-text-field>
              </v-col>
          </v-row>
      </v-card>




<!-- Modal -->
      <!--Edit Client-->
      <v-row justify="center">
          <v-dialog
                  v-model="dialog"
                  max-width="800"
          >
              <v-card>
                  <div class=" textCenter modalHeading headline">Edit Client</div>
                  <div class="container">
                      <v-text-field
                              v-model="message"
                              label="Traffc Cost To Auto Generate"
                              outlined
                              clearable
                      ></v-text-field>

                      <v-text-field
                              v-model="message"
                              label="Traffc Cost To Auto Generate"
                              outlined
                              clearable
                      ></v-text-field>
                      <div
                              :class="`d-flex justify-space-between mb-6`"
                              color="dgrey lighten-2"
                              flat
                              tile
                      >
                          <div class="pa-2">
                              <v-btn small color="error" @click="dialog = false">Delete Client</v-btn>
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

      <!--Add New Dashboard-->
      <v-row justify="center">
          <v-dialog
                  v-model="addNewDashboard"
                  max-width="800"
          >
              <v-card>
                  <div class=" textCenter modalHeading headline">Add New Dashboard</div>
                  <div class="container">
                      <v-text-field
                              v-model="message"
                              label="Traffc Cost To Auto Generate"
                              outlined
                              clearable
                      ></v-text-field>

                      <v-text-field
                              v-model="message"
                              label="Traffc Cost To Auto Generate"
                              outlined
                              clearable
                      ></v-text-field>
                      <div
                              :class="`d-flex justify-space-between mb-6`"
                              color="dgrey lighten-2"
                              flat
                              tile
                      >
                          <div class="pa-2">
                          </div>
                          <div class="pa-2">
                              <v-btn small color="grey" @click="addNewDashboard = false">Close</v-btn> &nbsp;
                              <v-btn small color="success" @click="addNewDashboard = false">Create Dashboard</v-btn>
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
    name: 'ClientList',
    data () {
      return {
        dialog: false,
        addNewDashboard: false,
      }
    },
  }
</script>

<style>
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
.myBtn {
    position:relative;
}
.myBtn button {
    background: white !important;
    color: grey !important;
    border: 1px solid #9d9d9d !important;
    border-radius: 7px !important;
    height: 25px !important;
    min-width: 6px !important;
    padding: 5px 6px !important;

}
.clientListButtonPosition button {
    position: absolute;
    z-index: 10;
    top: 27px;
}
@media(max-width: 599px){
  .clientListButtonPosition .first_btn { right:13%; }
  .clientListButtonPosition .second_btn {  right:4%; }
}

@media(min-width:600px){
  .clientListButtonPosition .second_btn { right:5%; }
  .clientListButtonPosition .first_btn { right:14%; }
}
</style>