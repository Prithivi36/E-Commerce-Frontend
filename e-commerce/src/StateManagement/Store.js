import {configureStore} from '@reduxjs/toolkit';
import shopSlice from './Slice';

const store=configureStore({
    reducer:{
        shop:shopSlice.reducer
    }
})
export default store;
