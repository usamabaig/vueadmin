import Repository from "./Repository";

const resource = "/login";
export default {
    loginUser(payload) {
        return Repository.post(resource, payload);
    },
};

