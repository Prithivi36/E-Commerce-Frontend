import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getProducts } from '../API/Api';

const shopSlice=createSlice({
    name:'shop',
    initialState:{
        products:[],
        fullpage:{
            name:"",
            desc:"",
            price:"",
            owner:"",
            code:"",
            id:""
        }
    },
    reducers:{
        addProduct:(state,action)=>{
            console.log(action.payload);
        },
        setFullPage:(state,action)=>{
            state.fullpage.name=action.payload.name
            state.fullpage.desc=action.payload.desc
            state.fullpage.price=action.payload.price
            state.fullpage.owner=action.payload.owner
            state.fullpage.code=action.payload.code
            state.fullpage.id=action.payload.id
        }
    },
    extraReducers(builder){
        builder.addCase(
            getProducts.fulfilled,(state,action)=>{
                console.log(action);
                state.products=(action.payload);
            }
        )
    }
})
export default shopSlice;