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
                  <div class="title my-2">My Users</div>
              </div>
              <div class="pa-2">
                  <v-btn color="primary"  @click.stop="adduser = true">Add A New User</v-btn>
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
                          label="Search Users"
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
              <v-col class="myBtn userListButtonPosition" cols="12" sm="12">
                  <v-card
                          :class="`d-flex justify-space-between mb-6`"
                          color="dgrey ldighten-2"
                          outlined
                  >
                      <div class="pa-2">
                          <div class="tiftle my-2">Noman Kabeer</div>
                      </div>
                      <div class="pa-2">
                          <div class="tfitle my-2">my@gmail.com</div>
                      </div>
                      <div class="pa-2">
                          <div class="row">
                              <span class="ftitle my-2">admin</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span>
                              <v-btn
                                      class=""
                                      @click.stop="dialog = true"
                              >
                              <i class="fa fa-cog " aria-hidden="true"></i>
                          </v-btn>
                          </span>
                          </div>
                      </div>
                  </v-card>
                  <v-card
                          :class="`d-flex justify-space-between mb-6`"
                          color="dgrey ldighten-2"
                          outlined
                  >
                      <div class="pa-2">
                          <div class="tiftle my-2">Noman Kabeer</div>
                      </div>
                      <div class="pa-2">
                          <div class="tfitle my-2">my@gmail.com</div>
                      </div>
                      <div class="pa-2">
                          <div class="row">
                              <span class="ftitle my-2">admin</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <span>
                              <v-btn
                                      class=""
                                      @click.stop="dialog = true"
                              >
                              <i class="fa fa-cog " aria-hidden="true"></i>
                          </v-btn>
                          </span>
                          </div>
                      </div>
                  </v-card>
              </v-col>
          </v-row>
      </v-card>




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
    name: 'UserList',
    data () {
      return {
        dialog: false,
          adduser: false,
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