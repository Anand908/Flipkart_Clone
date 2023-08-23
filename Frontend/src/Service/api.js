import axios from 'axios';

const URL = '';

export const authenticateSignUp = async (data) => {
    try{
        return await axios.post(`${URL}/signup`, data);
    }catch(error) {
        console.log("Error While calling Sign Up Api", error)
    }
}

export const authenticateLogin = async (data) => {
    try{
        return await axios.post(`${URL}/login`, data);
    }
    catch(error) {
        // console.log("Error While calling Login Api", error);
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log("Error While Calling Payment API")
    }
}