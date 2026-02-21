import { configureStore, combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit';
import { apiSlice } from './baseApi';
import cartReducer from './features/cartSlice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//   reducers
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
});


export type RootState = ReturnType<typeof rootReducer>;

//   Persist Config
const persistConfig = {
    key: 'kicks_root',
    version: 1,
    storage,
    whitelist: ['cart'],
};

//  persisted reducer
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer as Reducer<RootState & any, AnyAction>,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(apiSlice.middleware),
    });
};

// Types for hooks
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];