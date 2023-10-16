import { useState } from 'react';
import axiosInstance from '../utils/axiosinstance';

function useReset() {
  const [registrationData, setRegistrationData] = useState(null);
  const [error, setError] = useState(null);

  const ResetPassword = async (formData) => {
    try {
      const response = await axiosInstance.patch('/users/resetpassword', formData);
      
      if (response.status === 200) {
        setRegistrationData(response.data); 
        setError(null);
      } else {
        setError('Registration failed'); 
      }
    } catch (error) {
      setError('Internal server error');
      console.error('Error:', error);
    }
  };

  return { registrationData, error, ResetPassword };
}

export default useReset;
