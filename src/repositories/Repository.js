import axios from "axios";

// You can use your own logic to set your local or production domain
// const baseDomain = "http://itjobs.test";
//  const baseDomain = "http://itjobs.test";
// The base URL is empty this time due we are using the jsonplaceholder API

const baseDomain = "http://vueadminapi.local/api";
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});
