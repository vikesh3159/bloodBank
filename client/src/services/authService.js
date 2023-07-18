//import { userLogin, userRegister } from "../redux/features/auth/authActions";
import {userLogin,userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Privde All Feilds");
    }
     store.dispatch(userLogin({ email, password, role }));
    console.log("login",e,email,password,role);//maine add kiya hai
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
       //maine add kiya hai hatana hoga
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      })
    )
  } catch (error) {
    console.log(error);
  }
};
