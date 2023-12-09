import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "../../utils/constants";
import axios from "axios";

export const getCategories = createAsyncThunk('categories/getCategories',
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: [
            {
                id: "new",
                name: "Новинки",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            },
            {
                id: "dresses",
                name: "Платья",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            },
            {
                id: "top",
                name: "Вверх",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            },
            {
                id: "bottom",
                name: "Низ",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            },
            {
                id: "jackets",
                name: "Куртки",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            },
            {
                id: "things",
                name: "Мелочи",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            },
            {
                id: "suits",
                name: "Костюмы",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            },
            {
                id: "boorivagirls",
                name: "#Boorivagirls",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
            }
        ],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state) => {
            // state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getCategories.rejected, (state,) => {
            state.isLoading = false;
        });
    },
});

export default categoriesSlice.reducer;