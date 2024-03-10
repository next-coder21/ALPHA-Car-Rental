import axios from "axios";

function useSigninService(){
 const signUp =async (SignUpdata)=>{
try {
    const res=await axios.post("http://localhost:8080/alpha/sign-in",{
        fullName:SignUpdata.fullName,
email:SignUpdata.email,
mobileNumber:SignUpdata.mobileNumber,
password:SignUpdata.password,

    });
    console.log(res);
} catch (error) {
    console.error(error);
}
 };
 return{
    signUp,
 };
}

export default useSigninService;