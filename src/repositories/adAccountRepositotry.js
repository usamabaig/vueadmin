import Repository from "./Repository";

const resource = "/ad_account";
export default {
    getUserAdAccounts(payload) {
        return Repository.post(`/get/user/ad_account`, payload);
    },

    updateUserAdAccount(payload) {
        return Repository.post(`update/user/ad_account`, payload);
    },

    saveUserAdAccount(payload) {
        return Repository.post(`/store/user/ad_account`, payload);
    }
};

