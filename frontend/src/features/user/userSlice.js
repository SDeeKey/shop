import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";

export const createUser = createAsyncThunk(
    "users/createUser",
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/users`, payload);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const loginUser = createAsyncThunk(
    "users/loginUser",
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, payload);
            const login = await axios(`${BASE_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${res.data.access_token}`,
                },
            });

            return login.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (payload, thunkAPI) => {
        try {
            const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const addCurrentUser = (state, {payload}) => {
    state.currentUser = payload;
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
        isLoading: false,
        formType: "signup",
        showForm: false,
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
            let newCart = [...state.cart];
            const foundIndex = state.cart.findIndex(item => item.id === payload.id);

            const itemQuantity = payload.quantity ?? 1;

            if (foundIndex !== -1) {
                // Проверяем, содержит ли товар уже данный размер
                if (!newCart[foundIndex].sizes[payload.size]) {
                    newCart[foundIndex].sizes[payload.size] = itemQuantity;
                } else {
                    newCart[foundIndex].sizes[payload.size] += itemQuantity;
                }
            } else {
                newCart.push({
                    ...payload,
                    sizes: { [payload.size]: itemQuantity }
                });
            }

            state.cart = newCart;
            localStorage.setItem('cart', JSON.stringify(newCart));
        },





        removeItemFromCart: (state, {payload}) => {
            const newCart = state.cart.filter(({id}) => id !== payload);
            state.cart = newCart;
            localStorage.setItem('cart', JSON.stringify(newCart)); // Обновление localStorage
        },
        toggleForm: (state, {payload}) => {
            state.showForm = payload;
        },
        toggleFormType: (state, {payload}) => {
            state.formType = payload;
        },
        toggleFavorite: (state, {payload}) => {
            const isFavorite = state.favorites.includes(payload);
            if (isFavorite) {
                state.favorites = state.favorites.filter(id => id !== payload);
            } else {
                state.favorites.push(payload);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, addCurrentUser);
        builder.addCase(loginUser.fulfilled, addCurrentUser);
        builder.addCase(updateUser.fulfilled, addCurrentUser);
    },
});

export const {addItemToCart, removeItemFromCart, toggleForm, toggleFormType, toggleFavorite} =
    userSlice.actions;

export default userSlice.reducer;