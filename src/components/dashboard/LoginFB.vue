<template>
<div>
    <fb-signin-button
            :params="fbSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
        Connect to Facebook
    </fb-signin-button>

    {{this.$store.state.fb_token}}
</div>
</template>

<script>
    import FBSignInButton from 'vue-facebook-signin-button'

    export default {
        data () {
            return {
                fbSignInParams: {
                    scope: 'email,user_likes, pages_show_list, manage_pages, ads_management, ads_read, business_management, read_insights',
                    return_scopes: true
                }
            }
        },
        comments:{FBSignInButton},
        methods: {
            onSignInSuccess (response) {
                console.log(response.authResponse)
                this.$store.commit('setFacebookAuth', response.authResponse)
            },
            onSignInError (error) {
                console.log('OH NOES', error)
            }
        }
    }
</script>

<style>
    .fb-signin-button {
        /* This is where you control how the button looks. Be creative! */
        display: inline-block;
        padding: 8px 8px;
        border-radius: 5px;
        background-color: #2E4686;
        color: #fff;
    }
</style>