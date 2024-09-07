import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BaseUrl="http://localhost:8080";

export const getProducts=createAsyncThunk('shop/getProducts',async ()=>{
    return axios.get(`${BaseUrl}/products`)
    .then(res=>res.data)
    .catch(err=>console.log(err))
})