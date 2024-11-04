import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { rickAndMortyAPI } from "./rickAndMortyAPI";
import { charactersSlice } from "./charactersSlice";

// Используем combineReducers для удобного объединения всех редьюсеров
const rootReducer = combineReducers({
    [rickAndMortyAPI.reducerPath]: rickAndMortyAPI.reducer,
    characters: charactersSlice.reducer,
});

// Настраиваем store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rickAndMortyAPI.middleware),
    devTools: true,
});

// Типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
