import axios from "axios";
const apiRoot = process.env.REACT_APP_ROOT_API;
const adminAPI = apiRoot + "/admin";
const categoryAPI = apiRoot + "/category";
const paymentOptionsAPI = apiRoot + "/payment-options";

export const axiosProcessor = async ({ url, method, objDt }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: objDt,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

export const postAdminUser = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI,
    objDt,
  };
  return axiosProcessor(obj);
};

export const verifyAdminUser = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/verify-email",
    objDt,
  };
  return axiosProcessor(obj);
};

export const fetchAdminLogin = async (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/login",
    objDt,
  };
  return axiosProcessor(obj);
};

export const fetchReqOtp = (objDt) => {
  const obj = {
    method: "post",
    url: adminAPI + "/request-otp",
    objDt,
  };
  return axiosProcessor(obj);
};
export const fetchResetPassword = (objDt) => {
  const obj = {
    method: "patch",
    url: adminAPI + "/reset-password",
    objDt,
  };
  return axiosProcessor(obj);
};

//post category
export const postcategory = (objDt) => {
  const obj = {
    method: "post",
    url: categoryAPI,
    objDt,
  };
  return axiosProcessor(obj);
};
//getcategory
export const fetchCategories = () => {
  
  return axiosProcessor({
    method: "get",
    url: categoryAPI,
    
  });
};
//getcategory
export const updateCategory = (objDt) => {
  
  return axiosProcessor({
    method: "put",
    url: categoryAPI,
    objDt,
  });
};
//delete category
export const deleteCategory = (_id) => {
  
  return axiosProcessor({
    method: "delete",
    url: categoryAPI + "/" + _id,
    
  });
};


//post payment-options
export const postPaymentOptions = (objDt) => {
  const obj = {
    method: "post",
    url: paymentOptionsAPI,
    objDt,
  };
  return axiosProcessor(obj);
};
//post payment-options
export const fetchPaymentOptions = () => {
  const obj = {
    method: "get",
    url: paymentOptionsAPI,
    
  };
  return axiosProcessor(obj);
};