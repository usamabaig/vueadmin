<template>
<div>
    <fb-signin-button
            :params="fbSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
        Sign in with Facebook
    </fb-signin-button>
</div>
</template>

<script>
    import FBSignInButton from 'vue-facebook-signin-button'


    export default {
        data () {
            return {
                fbSignInParams: {
                    scope: 'email,user_likes, pages_show_list',
                    return_scopes: true
                }
            }
        },
        comments:{FBSignInButton},
        methods: {
            onSignInSuccess (response) {
                console.log(response);
                FB.api('/me', dude => {
                    console.log(`Good to see you, ${dude.name}.`)
                });
                // have to test this first
                // FB.api(
                //     "/{user-id}/accounts",
                //     function (response) {
                //         if (response && !response.error) {
                //             /* handle the result */
                //         }
                //     }
                // );
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
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #4267b2;
        color: #fff;
    }
</style>