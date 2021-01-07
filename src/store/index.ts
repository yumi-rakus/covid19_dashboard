import {configureStore} from "@reduxjs/toolkit";
import {useSelector as rawUseSelector, TypedUseSelectorHook} from "react-redux";

export const store = configureStore({
    reducer: {

    }
});

// 複数のreducerをまとめた場合に、最終的なStateの型を取り出す（今回はreducerは１つだが）
export type RootState = ReturnType<typeof store.getState>;

// 型情報付きのuseSelectorをここで宣言
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;