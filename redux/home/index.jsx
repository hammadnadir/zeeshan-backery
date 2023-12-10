import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { setLoading } from "../global";
import { baseURL } from "../request";

const initialState = {
    homeBanner: {},
    loading: false,
};

export const homeDataRequest = createAsyncThunk(
    "banner/homeDataRequest",
    async (_, thunkAPI) => {
        try {
            let response;
            thunkAPI.dispatch(setLoading(true));
            response = await axios
                .get(`${baseURL}americana-home?id=2`)
                .then((response) => response.data);
            thunkAPI.dispatch(setLoading(false));
            return response;
        } catch (error) {
            // console.log("Error", error);
            return null;
        }
    }
);

export const homeDataSlice = createSlice({
    name: "homeData",
    initialState,
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            // console.log("HYDRATE", action.payload);
            state.homeBanner = action?.payload?.home?.homeBanner ? action.payload.home.homeBanner : state?.homeBanner;
        });
        builder.addCase(homeDataRequest.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(homeDataRequest.fulfilled, (state, action) => {
            state.homeBanner = action.payload;
            state.loading = false;
        });
        builder.addCase(homeDataRequest.rejected, (state, action) => {
            state.loading = false;
            console.log("Error:", { message: action.payload.message });
        });
    },
});


export const {
    setShow
  } = homeDataSlice.actions;

export default homeDataSlice.reducer;

