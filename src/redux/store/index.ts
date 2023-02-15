import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';



export default configureStore({
    reducer: reducers,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});