import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import useReset from '../../hooks/useReset';
import "./registrationForm.css";

const ResetForm = ({ token, id, navigate }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
    
  const { registrationData, error, ResetPassword } = useReset(); 
  

  const handlerOnSubmit = async (formData) => {
    try {
      await ResetPassword(token, id, formData); 
      navigate("/login");
      diffToast();
    } catch (error) {
      toast("Password reset failed. Please try again.");
    }
  };

  const diffToast = () =>{
    toast("Password reset Successfull!");
  }

  return (
    <>
    <div>
      <h1 style={{textAlign: 'center'}}>Password Reset Form</h1>
      <form onSubmit={handleSubmit(handlerOnSubmit)} className="form-container">
        
        <div>
          <h4>Password</h4>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Maximum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{ border: errors.password ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.password && <h5>{errors.password.message}</h5>}
        </div>

        <div>
          <h4>Confirm Password</h4>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Max length must be 20",
              },
              validate: (value) =>
                value === watch("password") ||
                "Confirm password should match given password",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{
                  border: errors.confirmPassword ? "1px solid red" : "",
                }}
              />
            )}
          />
          {errors.confirmPassword && <h5>{errors.confirmPassword.message}</h5>}
        </div>

        <br></br>
        <button type="submit" className="submit-button" onClick={diffToast}>Submit</button>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
};

export default ResetForm;