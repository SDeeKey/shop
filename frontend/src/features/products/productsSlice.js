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

const doesSizeMatch = (productSizeRanges, selectedSizeRange) => {
    // Получаем индексы для выбранных размеров
    const [selectedMinSize, selectedMaxSize] = selectedSizeRange.split(' — ').map(size => sizeOrder.indexOf(size));
    // Перебираем каждый диапазон размеров продукта
    return productSizeRanges.some(productSizeRange => {
        const [productMinSize, productMaxSize] = productSizeRange.split(' — ').map(size => sizeOrder.indexOf(size));
        // Проверяем, что выбранный диапазон находится внутри диапазона продукта
        return selectedMinSize >= productMinSize && selectedMaxSize <= productMaxSize;
    });
};


const sizeOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];


const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [
            {
                id: 1,
                title: "Cвитшот вставка\n" +
                    "клетка",
                price: 1099,
                sizes: ["S — M", "M — L", "L — XL"],
                description: "Этот уникальный свитшот выделяется своей оригинальной вставкой в клетку." +
                    " Имея классический крой, свитшот обеспечивает комфорт и универсальность." +
                    " Вставка в клетку добавляет нотку элегантности и делает его идеальным как для" +
                    " повседневного ношения, так и для случаев, когда требуется немного более официальный" +
                    " образ. Свитшот выполнен из мягкого и приятного на ощупь материала, обеспечивая уют и" +
                    " тепло в холодные дни.",
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
                sizes: ["XS — S", "M — L", "L — XL"],
                description: "Это платье - настоящий шедевр для тех, кто любит сочетать романтику и смелость" +
                    " в своем стиле. Оно выполнено из прозрачной ткани с нежным цветочным узором, создавая" +
                    " игривый и загадочный образ. Черный цвет придает ему универсальность и элегантность," +
                    " делая его подходящим как для вечерних выходов, так и для специальных случаев." +
                    " Легкость и воздушность материала обеспечивают комфорт при ношении.",
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
                sizes: ["XS — S", "S — M", "L — XL"],
                description: "Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура " +
                    "выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые " +
                    "карманы и капюшон, который отстёгивается. Один из ключевых элементов этого бомбера" +
                    " - его универсальность. Благодаря отстёгивающемуся капюшону, он легко адаптируется к" +
                    " различным стилям и погодным условиям. Особенно выделяются объемные нашитые карманы," +
                    " которые добавляют практичности и удобства. Бомбер идеально подходит как для повседневного" +
                    " ношения, так и для более официальных мероприятий, благодаря своему стильному дизайну и" +
                    " функциональности. Серебряная фурнитура придает изделию особый шик. Этот бомбер -" +
                    " идеальный выбор для тех, кто ценит комфорт, стиль и универсальность.",

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
                sizes: ["XS — S", "S — M", "M — L"],
                description: "Это платье сочетает в себе необычность и практичность. Имея простой и удобный" +
                    " крой футболки, оно декорировано ярким и живописным принтом с изображением рыб в аквариуме." +
                    " Цветастый и веселый дизайн делает это платье идеальным выбором для повседневного ношения," +
                    " добавляя яркости и оригинальности в обыденный гардероб. Платье изготовлено из мягкого," +
                    " дышащего материала, обеспечивая комфорт на весь день.",
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
        activeCategory: null,
        productDetails: {},
    },
    reducers: {
        filterByCategory: (state, action) => {
            // Фильтрация по категории
            state.filtered = state.list.filter(product => product.category.id === action.payload.category);
        },
        filterByPrice: (state, action) => {
            // Фильтрация по цене
            state.filtered = state.list.filter(product => {
                if (action.payload.price === 'all') {
                    return true; // Все продукты
                } else if (action.payload.price === '0-500') {
                    return product.price <= 500;
                } else if (action.payload.price === '500-1000') {
                    return product.price > 500 && product.price <= 1000;
                } else if (action.payload.price === '1000-1500') {
                    return product.price > 1000 && product.price <= 1500;
                } else if (action.payload.price === '1500+') {
                    return product.price > 1500;
                }
            });
        },
        filterBySize: (state, action) => {
            const selectedSizeRange = action.payload.size; // Например, 'S — M'
            state.filtered = state.list.filter(product =>
                doesSizeMatch(product.sizes, selectedSizeRange)
            );
        },
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
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

export const {setActiveCategory, filterByCategory, filterByPrice, filterBySize, sortProducts} = productsSlice.actions;

export default productsSlice.reducer;