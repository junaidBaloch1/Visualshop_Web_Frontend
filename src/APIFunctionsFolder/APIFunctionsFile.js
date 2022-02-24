import Axios from 'axios';


const UserLoginHandler= async (email,password) => {

    try{
      const response = await Axios.post('https://visualshopp.herokuapp.com/api/customer/auth/login', 
      {
        username: email,
        password:password,
        timeout: 30000,
    
      });
    
      return {
        data:response.data,
        status:response.status,
      }
    }
  
    catch (error) {
      if (error.response.status == 400) // Data is Incorect
      {
          const keys=Object.keys(error.response.data)
         console.log(keys);
          if(keys.includes("username"))
          {
            return { 
              data: error.response.data.username[0], 
              status: error.response.status 
            }
          }
          else if(keys.includes("password"))
          {
            return { 
              data: error.response.data.password[0], 
              status: error.response.status 
            }
          }
          else
          {
            return { 
              data: "An unknown error occured", 
              status: error.response.status 
            }
          }
      }
      else if (error.response.status == 401) // Unauthorize
      {
          return {
             data: error.response.data.detail, 
             status: error.response.status 
            }
      }
      else // Ahh Someunknown error occured
      {
          return {
             data: "Something went wrong please try later!", 
             status: error.response.status 
            }
      }
  
   
  
  }
}


const UserSignupHandler= async (email,password) => {
  // console.log(email,password)
  try{
    const response = await Axios.post('https://visualshopp.herokuapp.com/api/customer/auth/register', 
    {
      email: email,
      password:password,
      timeout: 30000,
  
    });
  
    return {
      data:response.data,
      status:response.status,
    }
  }

  catch (error) {
    // console.log(error.response)
    if (error.response.status == 400) // Data is Incorect
    {
        const keys=Object.keys(error.response.data)
        if(keys.includes("email"))
        {
          return { 
            data: error.response.data.email[0], 
            status: error.response.status 
          }
        }
        else if(keys.includes("password"))
        {
          return { 
            data: error.response.data.password[0], 
            status: error.response.status 
          }
        }
        else
        {
          return { 
            data: "An unknown error occured", 
            status: error.response.status 
          }
        }
    }
    else if (error.response.status == 401) // Unauthorize
    {
        return {
           data: error.response.data.detail, 
           status: error.response.status 
          }
    }
    else // Ahh Someunknown error occured
    {
        return {
           data: "Something went wrong please try later!", 
           status: error.response.status 
          }
    }

 

}
}


const ValidateEmail = (email) => {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) 
    {
      return (true)
    }

     return (false)
  }


 const diff_minutes = (t2, t1) => {

    var diff = (t2 - t1) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
  

 

export {UserLoginHandler, UserSignupHandler,ValidateEmail, diff_minutes}
  