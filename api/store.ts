import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {rickAndMortyAPI} from "./rickAndMortyAPI";

export const store = configureStore({
        reducer: combineSlices(rickAndMortyAPI),
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rickAndMortyAPI.middleware),
        devTools: true
    })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;