export const validateEmail = () => {
    // Email validation logic here
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };

  export const validatePhone = () => {
    // Phone validation logic here
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };