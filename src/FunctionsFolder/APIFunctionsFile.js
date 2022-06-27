import Axios from "axios";

const UserLoginHandler = async (email, password) => {
  try {
    const response = await Axios.post(
      "http://127.0.0.1:8000/api/customer/auth/login",
      {
        username: email,
        password: password,
        timeout: 30000,
      }
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    if (error.response.status == 400) {
      // Data is Incorect
      const keys = Object.keys(error.response.data);
      console.log(keys);
      if (keys.includes("username")) {
        return {
          data: error.response.data.username[0],
          status: error.response.status,
        };
      } else if (keys.includes("password")) {
        return {
          data: error.response.data.password[0],
          status: error.response.status,
        };
      } else {
        return {
          data: "An unknown error occured",
          status: error.response.status,
        };
      }
    } else if (error.response.status == 401) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    } // Ahh Someunknown error occured
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }
  }
};
// <--------------------------------------signupHandler -------------------------------------->

const UserSignupHandler = async (email, password) => {
  // console.log(email,password)
  try {
    const response = await Axios.post(
      "http://127.0.0.1:8000/api/customer/auth/register",
      {
        email: email,
        password: password,
        timeout: 30000,
      }
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    // console.log(error.response)
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    if (error.response.status == 400) {
      // Data is Incorect
      const keys = Object.keys(error.response.data);
      if (keys.includes("email")) {
        return {
          data: error.response.data.email[0],
          status: error.response.status,
        };
      } else if (keys.includes("password")) {
        return {
          data: error.response.data.password[0],
          status: error.response.status,
        };
      } else {
        return {
          data: "An unknown error occured",
          status: error.response.status,
        };
      }
    } else if (error.response.status == 401) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    } // Ahh Someunknown error occured
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }
  }
};
// <-----------------------------------Reset Email to code is sent----------------------------------->

const UserEmailHandler = async (email) => {
  // console.log(email,password)
  try {
    const response = await Axios.post(
      "http://127.0.0.1:8000/api/customer/auth/password_reset/",
      {
        email: email,
      }
    );

    return {
      status: response.status,
    };
  } catch (error) {
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    // console.log(error.response)
    if (error.response.status == 400) {
      // Data is Incorect
      const keys = Object.keys(error.response.data);
      if (keys.includes("email")) {
        return {
          data: error.response.data.email[0],
          status: error.response.status,
        };
      } else {
        return {
          data: "An unknown error occured",
          status: error.response.status,
        };
      }
    } else if (error.response.status == 401) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    } // Ahh Someunknown error occured
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }
  }
};

//<----------------------------------userTokenHandler---------------------------------------->

const UserTokenHandler = async (token, password) => {
  // console.log(email,password)
  try {
    const response = await Axios.post(
      "http://127.0.0.1:8000/api/customer/auth/password_reset/confirm/",
      {
        token: token,
        password: password,
      }
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    // console.log(error.response)
    if (error.response.status === 400) {
      // Data is Incorect
      const keys = Object.keys(error.response.data);
      if (keys.includes("token")) {
        return {
          data: error.response.data.token[0],
          status: error.response.status,
        };
      } else if (keys.includes("password")) {
        return {
          data: error.response.data.password[0],
          status: error.response.status,
        };
      } else {
        return {
          data: "An unknown error occured",
          status: error.response.status,
        };
      }
    } else if (error.response.status === 401) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    } // Ahh Someunknown error occured
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }
  }
};

// <------------------------------------------loginWithGoogle-------------------------------->

const GoogleAuthHandler = async (access_token) => {
  // console.log(email,password)
  try {
    const response = await Axios.post(
      "http://127.0.0.1:8000/api/customer/auth/google",
      {
        token: access_token,
      }
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    // console.log(error.response)
    if (error.response.status === 400) {
      // Data is Incorect
      const keys = Object.keys(error.response.data);
      if (keys.includes("token")) {
        return {
          data: error.response.data.token[0],
          status: error.response.status,
        };
      } else {
        return {
          data: "An unknown error occured",
          status: error.response.status,
        };
      }
    } else if (error.response.status === 401) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    } // Ahh Someunknown error occured
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }
  }
};

// <------------------------------------------EmailValidation---------------------------------->

const ValidateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }

  return false;
};

const diff_minutes = (t2, t1) => {
  var diff = (t2 - t1) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
};
  
// <------------------------------------------Product -------------------------------------------->
const GetProductHandler = async (count) => {

  try {
    const response = await Axios.get(
      `http://127.0.0.1:8000/api/shop/products/?page=${count}`
     
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    else if (error.response.status === 404) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    }
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }  
   
 
  }
};


// <------------------------------------------FilterProductByText -------------------------------------------->
const FilterProductHandler = async (price,tags,categoryId,subcategoryId,searchText) => {

  try {
    const response = await Axios.post(
      "http://127.0.0.1:8000/api/shop/filterProducts", 
      {
        price: price,
        tags: tags,
        categoryId: categoryId,
        subcategoryId:subcategoryId,
        searchText:searchText,
      }
     
    );

    return {
      data: response.data,

      status: response.status,
    };
  } catch (error) {
    console.log("only error",error);
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    else if (error.response.status === 404) {
      // Unauthorize
      console.log("")
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    }
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }  
   
 
  }
};


// <-----------------------------------------getAllCategories -------------------------------------------->
const GetCategoriesHandler = async () => {

  try {
    const response = await Axios.get(
      'http://127.0.0.1:8000/api/shop/getAllCategories/'
     
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    else if (error.response.status === 404) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    }
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }  
   
 
  }
};




//< --------------------------------productDetails ------------------------------------>

const ProductDetailHandler = async (count) => {

  try {
    const response = await Axios.get(
      `http://127.0.0.1:8000/api/shop/product/${count}`
     
    );

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (error.message === "Network Error") {
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    else if (error.response.status === 404) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    }
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }  
   
 
  }
};
// <----------------------------------SearchByImage -------------------------------->
const SearchImageHandler = async (image) => {
  // event.preventDefault()
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await Axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/shop/products/search-by-image",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
 
      return { status: response.status, data: response.data}
  }
  catch (error) {
      if (error.message == 'Network Error')
      {
          return { data: "Unable to get data because of network error", status: null }
      } 
      if (error.response.status == 400) {
          const keys = Object.keys(error.response.data)
          if (keys.includes("image")) {
              return { status: null, data: error.response.data.image[0]}
          }
          else
          {
              return { status: null, data: "Parrameter missing"}
          }
      }
      else if(error.response.status == 404)
      {
          return {status: 404, data: error.response.data}
      }
      else {
          return { status: null, data: "Unable to get result because of unknown error"}
      }
  }
}

// -----------------------------feedbackcal--------------------------------->

const feedbackCalculator = (feedbacks) =>{

  if(feedbacks == null || feedbacks.length == 0)
    return 0;

  let Sum = 0;
  var totalFeedback=0;

  feedbacks.map(feedback => {
      if(feedback.feedback)
      {
        Sum = Sum + feedback.feedback.rating
      //  var sum = Math.floor(Sum);
      //   var Remainder = Sum % 
        totalFeedback++;
      }
  })
  
  const review = Sum/(totalFeedback)

   return parseInt(review);


}
// <---------------------------------Get CITY And STATE -------------------------------------------->

const GetCityState = async() =>{
  try{
    const response = await Axios.get('http://127.0.0.1:8000/api/customer/getProvinceAndCities')
    
    return{
      data:response.data,
      status:response.status

    }
  }
  catch(error){
    if(error.message === "Network Error"){
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    else if (error.response.status === 404) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    }
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }  
   
 

  }

}
// ------------------------------ Create order -----------------------------------------//
const PlaceOrder = async (shippingAddress, receiverName, receiverContact, cuopenId,cityId,orderedProducts,paymentMethod  ) =>{

  try{
    const response = await Axios.post('http://127.0.0.1:8000/api/order/createOrder/',
    
    {
      shippingAddress: shippingAddress,
      receiverName: receiverName,
      receiverContact: receiverContact,
      cuopenId:cuopenId,
      cityId:cityId,
      orderedProducts:orderedProducts,
      paymentMethod:paymentMethod,
    }

    )
    
    return{
      data:response.data,
      status:response.status

    }
  }
  catch(error){
    if(error.message === "Network Error"){
      return {
        data: "Please try again Your INTERNET DISCONNECTED !!",
        status: null,
      };
    }
    else if (error.response.status === 404) {
      // Unauthorize
      return {
        data: error.response.data.detail,
        status: error.response.status,
      };
    }
    else {
      return {
        data: "Something went wrong please try later!",
        status: error.response.status,
      };
    }  
   
 

  }

}


  

export  {
  UserLoginHandler,
  UserSignupHandler,
  UserEmailHandler,
  UserTokenHandler,
  GoogleAuthHandler,
  FilterProductHandler,
  ValidateEmail,
  diff_minutes,
  GetProductHandler,
  GetCategoriesHandler,
  ProductDetailHandler,
  feedbackCalculator,
  SearchImageHandler,
  GetCityState,
  PlaceOrder,
};
