function Validation(values){
    let error={}
    const email_pattern =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    




      
    if (values.email==="") {
        error.email = 'Required'
      }
      if (!email_pattern.test(values.email)) {
        error.email = 'Invalid email address'
      }
    
    if (values.password==="") {
        error.password = 'Required'
      } 
      if (!password_pattern.test(values.email)) {
        error.passowrd = 'Invalid passowrd'
      }
      if(values.confirm_password==="" || values.confirm_password !== values.passowrd){
        error.confirm_password="Pasword not match"
      }


      return error;
  

}

    

export default Validation