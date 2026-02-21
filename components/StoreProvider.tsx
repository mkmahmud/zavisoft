"use client";
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { AppStore, makeStore } from '@/lib/store';
import Loading from '@/app/loading';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | undefined>(undefined);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    const persistor = persistStore(storeRef.current);

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={<Loading />} persistor={persistor} >
                {children}
            </PersistGate>
        </Provider>
    );
}