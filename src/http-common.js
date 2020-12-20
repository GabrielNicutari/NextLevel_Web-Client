import axios from "axios";

export default axios.create({
    //environment variable - development is localhost, production is cloud
    //REACT_APP_API_URL is taken from env.development or env.production file
    baseURL: "http://nextlevelserver-env.eba-6rp8py3s.us-east-1.elasticbeanstalk.com:8001",
    headers: {
        "Content-type": "application/json",
    },
});
