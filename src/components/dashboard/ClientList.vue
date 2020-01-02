  <template>
  <div>
      <div :class="`d-flex justify-space-between mb-6`"
                  color="dgrey lighten-2"
                  flat
                  tile>
              <div class="pa-2">
                  <div class="title my-2">My Client List</div>
              </div>
              <div class="pa-2" style="margin-right: 215px;"><v-btn color="#2E4686"  @click.stop="addNewAdAccount">Add New Dashboard</v-btn></div>


          </div>
      <v-card max-width="900" class="container">
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
              <v-col v-for="account in show_ad_account" :key="account.ad_account_id" class="myBtn clientListButtonPosition" cols="12" sm="6">
                  <v-btn
                          class="first_btn"
                          @click.stop="dialog = true"
                  >
                      <i class="fa fa-cog " aria-hidden="true"></i>
                  </v-btn>
                  <v-btn
                          class="second_btn"
                          @click="navigateToAgencyPage(account.ad_account_id)"
                  >
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </v-btn>
                  <v-text-field
                          :label="account.ad_account_name"
                          outlined
                          clearable
                          disabled
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
                              label="Traffc Cost To Auto Generate"
                              outlined
                              clearable
                      ></v-text-field>

                      <v-text-field
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
          <v-dialog v-model="addNewDashboard" max-width="600">
              <v-card>
                  <div class="textCenter modalHeading headline">Add New Dashboard</div>
                  <div class="container">
                      <v-select
                        :items="select_ad_accounts"
                        item-text="ad_account_name"
                        item-value="ad_account_id"
                        v-model="account_id"
                        label="Select an Ad Account"
                        solo
                      ></v-select>
                      <v-text-field
                              label="Custom Client Name (Leave blank to use Default)"
                              solo
                              v-model="custom_name"
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
                              <v-btn small color="success" @click="addNewAdAccountPost">Create Dashboard</v-btn>
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
import FBSignInButton from 'vue-facebook-signin-button';
import { mapGetters } from 'vuex';
import { RepositoryFactory } from '../../repositories/RepositoryFactory';

const AdAccountRepository = RepositoryFactory.get('adAccount');

  export default {
    name: 'ClientList',
    comments:{FBSignInButton},
    mounted() {
        this.user_id = this.$store.state.user_id;
        let fb_user_id = this.$store.state.facebookAuthObject.userID;
        
        if(fb_user_id != undefined) {
            var self = this;
            getAdAccountIds(function(check, response) {
                if(check){
                    var ids = response.data;
                    var bar = new Promise((resolve, reject) => {
                        ids.forEach((element, index, array) => {
                            getAdAccountDetails(element.id,function(check, response) {
                                self.ad_accounts[index] = response;
                                if (index === array.length -1) resolve();
                            });
                        });
                    });
                    bar.then(() => {
                        AdAccountRepository.saveUserAdAccount(self.ad_accounts);
                    });
                }
            });  
            function getAdAccountDetails(ad_account_id,callback) {
                FB.api('/'+ad_account_id+'/?fields=name', function(response) {
                    if (!response || response.error) {
                        callback(false, response);
                    } else {
                        callback(true, response);
                    }
                });
            }
            function getAdAccountIds(callback) {
                FB.api('/'+fb_user_id+'/adaccounts', function(response) {
                    if (!response || response.error) {
                        callback(false);
                    } else {
                        callback(true, response);
                    }
                });
            }
        }

        AdAccountRepository.getUserAdAccounts({'user_id': this.user_id, 'is_show': 1})
            .then((response) => {
                this.show_ad_account = response.data;
            });
    },
    data () {
      return {
        dialog: false,
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        addNewDashboard: false,
        select_ad_accounts: [],
        ad_accounts: [],
        user_id: null,
        account_id: null,
        custom_name: null,
        show_ad_account: []
      }
    },
    methods: {
        addNewAdAccount() {
            this.addNewDashboard = true;
            AdAccountRepository.getUserAdAccounts({'user_id': this.user_id, 'is_show': 0})
            .then((response) => {
                this.select_ad_accounts = response.data;
            });
        },
        addNewAdAccountPost() {
            AdAccountRepository.updateUserAdAccount({'ad_account_id': this.account_id, 'custom_name': this.custom_name, 'user_id': this.user_id})
            .then((response) => {
                this.show_ad_account = response.data;
                this.addNewDashboard = false;
            });
        },
        navigateToAgencyPage(ad_account_id) {
            this.$store.commit('setadAccountId', ad_account_id);
            window.location.href = '/#/my/agency';
        }
    }
  }
</script>

<style scoped>
.modalHeading {
    background: #2E4686;
    color: white;
    padding: 15px 0px;
    font-weight: bold !important;
    font-size: 15px !important;
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