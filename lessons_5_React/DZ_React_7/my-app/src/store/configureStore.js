import { reducer } from "./reducer";
import { applyMiddleware, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const timeout = store => next => action => {
    const delay = action?.meta?.delayMs
    if (!delay) {
        return next(action)
    }

    const result = setTimeout(() => next(action), delay)

    return () => {
        clearTimeout(result)
    }
}

const config = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer, applyMiddleware(timeout));

export const persist = persistStore(store);
