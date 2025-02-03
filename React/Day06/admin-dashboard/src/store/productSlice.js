import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewProduct, getProductById, getProducts } from "../API/productAPI";
const initialState = {
	products: [{ id: 1, name: "toolkitProduct" }],
	errors: null,
	isLoading: false,
	product: null,
};

// thunk

export const getAllProductAction = createAsyncThunk(
	"product/getAllProductAction",
	async (args, thunkAPI) => {
		let { rejectWithValue } = thunkAPI;
		try {
			let response = await getProducts();
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getProductByIdAction = createAsyncThunk(
	"product/getProductByIdAction",
	async (id, { rejectWithValue }) => {
		try {
			let response = await getProductById(id);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addProductAction = createAsyncThunk(
	"product/addProductAction",
	async (product, { rejectWithValue }) => {
		try {
			let response = await addNewProduct(product);
			return response.data;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductAction.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getAllProductAction.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		builder.addCase(getAllProductAction.rejected, (state, action) => {
			state.isLoading = false;
			state.errors = action.payload.message;
		});

		/**---------------------- get Product By Id ----------- */
		builder.addCase(getProductByIdAction.fulfilled, (state, action) => {
			state.product = action.payload;
		});
	},
});

export const productReducer = productSlice.reducer; //
