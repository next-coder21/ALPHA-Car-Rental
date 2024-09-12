import axios from "axios";

const API_URL = "https://alpha-server-9861.onrender.com/";

const signUp = async (signInData) => {
  try {
    const response = await axios.post(`${API_URL}/sign-in`, signInData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    };
    return signUp;
}

export default signUp;

