import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

import {BASE_URL} from "../../utils/constants";
import {shuffle} from "../../utils/common";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [
            {
                id: 1,
                title: "Cвитшот вставка\n" +
                    "клетка",
                price: 1099,
                images: [
                    "https://i.ibb.co/wRs7MV8/Sweatshirt.png",
                ],
                creationAt: "2023-12-09T04:06:50.000Z",
                updatedAt: "2023-12-09T04:06:50.000Z",
                category: {
                    id: 'new',
                    name: "Новинки",
                    creationAt: "2023-12-09T04:06:50.000Z",
                    updatedAt: "2023-12-09T04:06:50.000Z"
                }
            },
            {
                id: 2,
                title: "Платье прозрачное\n" +
                    "в цветочек черное",
                price: 1299,
                images: [
                    "https://i.ibb.co/HNgqVct/sheer-dress.png",
                ],
                creationAt: "2023-12-09T04:06:50.000Z",
                updatedAt: "2023-12-09T04:06:50.000Z",
                category: {
                    id: 'new',
                    name: "Новинки",
                    creationAt: "2023-12-09T04:06:50.000Z",
                    updatedAt: "2023-12-09T04:06:50.000Z"
                }
            },
            {
                id: 3,
                title: "Бомбер Gone Crazy\n" +
                    "хаки",
                price: 2499,
                images: [
                    "https://i.ibb.co/VjbZSrZ/bomber-jacket.png",
                ],
                creationAt: "2023-12-09T04:06:50.000Z",
                updatedAt: "2023-12-09T04:06:50.000Z",
                category: {
                    id: 'new',
                    name: "Новинки",
                    creationAt: "2023-12-09T04:06:50.000Z",
                    updatedAt: "2023-12-09T04:06:50.000Z"
                }
            },
            {
                id: 4,
                title: "Платье-футболка рыбы\n" +
                    "в аквариуме",
                price: 899,
                images: [
                    "https://i.ibb.co/StfVht8/T-shirt-dress.png",
                ],
                creationAt: "2023-12-09T04:06:50.000Z",
                updatedAt: "2023-12-09T04:06:50.000Z",
                category: {
                    id: 'new',
                    name: "Новинки",
                    creationAt: "2023-12-09T04:06:50.000Z",
                    updatedAt: "2023-12-09T04:06:50.000Z"
                }
            },


        ],
        filtered: [],
        related: [],
        isLoading: false,
    },
    reducers: {
        filterByPrice: (state, {payload}) => {
            state.filtered = state.list.filter(({price}) => price < payload);
        },
        getRelatedProducts: (state, {payload}) => {
            const list = state.list.filter(({category: {id}}) => id === payload);
            state.related = shuffle(list);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state) => {
            // state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const {filterByPrice, getRelatedProducts} = productsSlice.actions;

export default productsSlice.reducer;