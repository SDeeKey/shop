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
                name: "Верх",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
                subcategories: [
                    {id: 'combinezons', title: "Комбинезоны"},
                    {id: 'sweaters', title: "Пиджаки"},
                    {id: 'sweatshirts', title: "Рубашки"},
                    {id: 'hoodies', title: "Свитшоты"},
                    {id: 'tshirts', title: "Худи"},
                    {id: 'shirts', title: "Толстовки"},
                    {id: 'shirts', title: "Футболки"},
                ],
            },
            {
                id: "bottom",
                name: "Низ",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
                subcategories: [
                    {id: 'trousers', title: "Брюки"},
                    {id: 'cycling_shorts', title: "Велосипедки"},
                    {id: 'jeans', title: "Джинсы"},
                    {id: 'track_trousers', title: "Штаны"},
                    {id: 'shorts', title: "Шорты"},
                    {id: 'skirts', title: "Юбки"},
                ],
            },
            {
                id: "jackets",
                name: "Куртки",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
                subcategories: [
                    {id: 'bombers', title: "Бомберы"},
                    {id: 'denim', title: "Джинсовки"},
                    {id: 'mackintoshes', title: "Дождевики"},
                    {id: 'jackets', title: "Куртки"},
                    {id: 'coats', title: "Пальто"},
                    {id: 'down_jackets', title: "Пуховики"},
                    {id: 'trench_coats', title: "Тренчи"},
                ],
            },
            {
                id: "things",
                name: "Мелочи",
                creationAt: '2023-12-08T04:03:48.000Z',
                updatedAt: '2023-12-08T04:03:48.000Z',
                subcategories: [
                    {id: 'jewelry', title: "Украшения"},
                    {id: 'bags', title: "Сумки"},
                    {id: 'belts', title: "Ремни"},
                    {id: 'scarves', title: "Шарфы"},
                    {id: 'hats', title: "Головные уборы"},
                    {id: 'gloves', title: "Перчатки"},
                    {id: 'sunglasses', title: "Очки"},
                    {id: 'watches', title: "Часы"},
                    {id: 'hair_accessories', title: "Аксессуары для волос"},
                    {id: 'keychains', title: "Брелоки"},
                    {id: 'tech_accessories', title: "Аксессуары для техники"},
                    {id: 'face_masks', title: "Маски для лица"},
                    {id: 'wallets', title: "Кошельки"},
                    {id: 'cosmetic_cases', title: "Косметички"},
                    {id: 'socks', title: "Носки"},
                    {id: 'tights', title: "Колготки"}
                ],
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