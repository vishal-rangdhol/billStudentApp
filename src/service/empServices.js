import axios from "axios";
import axiosInstance from "../components/AxiosInstance/instance";

let empServices = {

    regiUser : async(payload) => {
        try {
            let data = await axiosInstance.post("/register", payload)
            return data

        } catch (error) {
            return error
        }
    },
    loginUser : async(payload) => {
        try {
            let data = await axiosInstance.post("/login", payload)
            return data

        } catch (error) {
            return error
        }
    }
}


export default empServices