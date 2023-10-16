import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForgetPassword from '../../hooks/useForgetPassword';
import { Link, useParams } from "react-router-dom";
import "./registrationForm.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const { loginData, error, forgetpassword } = useForgetPassword(); 

  const handlerOnSubmit = (formData) => {
    forgetpassword(formData); 
    navigate("/forgetpassword");
  };

  const diffToast = () =>{
    toast("Reset email link sent!");
  }


  return (
    <>
    <div>
      <h1 style={{textAlign: 'center'}}>Forget Password?</h1>
      <form onSubmit={handleSubmit(handlerOnSubmit)} className="form-container">
        <div className="form-group">
          <h4>Email</h4>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
            }}
            render={({ field }) => (
              <input placeholder="Enter email" {...field} />
            )}
          />
        </div>

        <br></br>
        <button type="submit" className="submit-button" onClick={diffToast}>Submit</button>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
};

export default ForgetPassword;