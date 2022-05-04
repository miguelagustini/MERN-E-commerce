import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login =async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
};



//Get all products
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await publicRequest.get("/products");
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  };

//Delete product
export const deleteProduct = async (id,dispatch) => {
    dispatch(deleteProductStart());
    try {
      //const res = await userRequest.delete("/products/"{id});
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };


  
//Update product
export const updateProduct = async (id,product,dispatch) => {
  const res = await userRequest.put("/products/",{id});
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({id, product}));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};


//Add product
export const addProduct = async (product,dispatch) => {
  const res = await userRequest.post("/products/",product);
  dispatch(addProductStart());
  try {
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
  