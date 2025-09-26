import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slice/counter/counterSlice";
import productReducer from "./slice/products/productsSlice";
import { productApi } from "./slice/products/productApi";
import { todoApi } from "./slice/todo/todoApi";
import { loginApi } from "./slice/login/loginApi";
import { authReducer } from "./slice/login/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      todoApi.middleware,
      loginApi.middleware
    ),

  // DevTools are enabled by default in development
  devTools: import.meta.env.MODE !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
