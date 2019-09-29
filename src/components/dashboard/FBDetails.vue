  <template>
  <div>
      <div class="container">
          <div
                  class="d-flex justify-space-between mb-6"
                  color="dgrey lighten-2"
                  flat
                  tile>
              <div class="pa-2" style="margin-left: 165px;">
                  <v-btn color="grey"  @click.stop="adduser = true">Back To Dashboard</v-btn>
              </div>
              <div class="pa-2" style="margin-right: 165px;">
                  <login-f-b></login-f-b>
              </div>
          </div>
      </div>

      <v-card max-width="900" class="container">

          <div >
              <div>
                  <v-tabs
                          v-model="tab"
                          background-color="white"
                          color="blue"
                          centered
                          text
                  >
                      <v-tabs-slider></v-tabs-slider>

                      <v-tab href="#tab-1" color="#2E4686">
                          Account
                      </v-tab>

                      <v-tab href="#tab-2" color="#2E4686" disabled>
                          User
                      </v-tab>

                      <v-tab href="#tab-3" color="#2E4686" disabled>
                          Subscriptions
                      </v-tab>

                      <v-tab href="#tab-4" color="#2E4686" disabled>
                          Payment Method
                      </v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                      <br>
                      <v-tab-item
                              :value="'tab-1'"
                      >
                          <div>                            
                              <v-container class=" lightenw-5">
                                  <v-text-field
                                      label="Account Name"
                                      outlined
                                      clearable
                                  ></v-text-field>
                                  <v-row no-gutters>
                                      <template >
                                          <v-col class="pa-2">
                                              <v-file-input
                                                      label="Profile Picture"
                                                      filled
                                                      prepend-icon="mdi-camera"
                                              ></v-file-input>
                                          </v-col>

                                          <v-col class="pa-2" >
                                              <v-file-input
                                                      label="Account Logo"
                                                      filled
                                                      prepend-icon="mdi-camera"
                                              ></v-file-input>
                                          </v-col>

                                      </template>
                                  </v-row>
                              </v-container>
                              <div
                                      :class="`d-flex justify-space-between mb-6`">
                                  <div class="pa-2">
                                      <v-btn small color="#16AF91" @click="dialog = false">Save Settings</v-btn>
                                  </div>
                                  <div class="pa-2">
                                  </div>
                              </div>
                          </div>

                      </v-tab-item>



                      <v-tab-item
                              :value="'tab-2'"
                      >
                          <div>
                              <v-text-field
                                      label="Account Name"
                                      outlined
                                      clearable
                              ></v-text-field>

                              <v-text-field
                                      label="Your Email"
                                      outlined
                                      clearable
                              ></v-text-field>

                              <v-text-field
                                      label="Current Password"
                                      outlined
                                      clearable
                              ></v-text-field>

                              <v-text-field
                                      label="New Password"
                                      outlined
                                      clearable
                              ></v-text-field>



                              <div
                                      :class="`d-flex justify-space-between mb-6`">
                                  <div class="pa-2">
                                      <v-btn small color="primary" @click="dialog = false">Save User Info</v-btn>
                                  </div>
                                  <div class="pa-2">
                                  </div>
                              </div>
                          </div>

                      </v-tab-item>


                      <v-tab-item
                              :value="'tab-4'"
                      >
                          <div>

                              <v-container class=" lightenw-5">
                                  <v-row no-gutters justify="center">
                                      <template >
                                          <v-col class="pa-2">

                                              <v-text-field
                                                      label="Card Number"
                                                      outlined
                                                      clearable
                                              ></v-text-field>
                                              <v-text-field
                                                      label="MM/YY"
                                                      outlined
                                                      clearable
                                              ></v-text-field>
                                              <v-text-field
                                                      label="CVC"
                                                      outlined
                                                      clearable
                                              ></v-text-field>

                                          </v-col>

                                          <v-col class="pa-2 justify-center">
                                              <v-btn small color="primary" @click="dialog = false">Pay With PAypal</v-btn>
                                          </v-col>

                                      </template>
                                  </v-row>
                              </v-container>
                              <div
                                      :class="`d-flex justify-space-between mb-6`">
                                  <div class="pa-2">
                                      <v-btn small color="primary" @click="dialog = false">Update Card</v-btn>
                                  </div>
                                  <div class="pa-2">
                                  </div>
                              </div>
                          </div>

                      </v-tab-item>


                  </v-tabs-items>
              </div>
          </div>
      </v-card>



  </div>
</template>

<script>
import LoginFB from './LoginFB.vue';

  export default {
    name: 'UserList',
    components: {
        LoginFB
    },
    data () {
      return {
        dialog: false,
          adduser: false,
          tab: null,
        role: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      }
    },
  }
</script>

<style scoped>
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
.userListButtonPosition button {
    top: 7px;
}
.userListButtonPosition .justify-space-between
{
    padding: 0px 50px !important;
}
</style>