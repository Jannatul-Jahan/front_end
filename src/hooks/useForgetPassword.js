import { useState } from 'react';
import axiosInstance from '../utils/axiosinstance';

function useForgetPassword() {
  const [loginData, setLoginData] = useState(null);
  const [error, setError] = useState(null);

  const forgetpassword = async (formData) => {
    try {
      const response = await axiosInstance.post('/users/forgetpassword', formData);
      
      if (response.status === 200) {
        console.log(response.data.data);
        setLoginData(response.data); 
        setError(null);
      } else {
        setError('Registration failed'); 
      }
    } catch (error) {
      setError('Internal server error');
      console.error('Error:', error);
    }
  };

  return { loginData, error, forgetpassword };
}

export default useForgetPassword;
