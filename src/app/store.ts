import { configureStore} from '@reduxjs/toolkit';
import { Catalog } from './Catalog';
import { useDispatch } from "react-redux"
import { ItemPage } from './ItemPage';

export const store = configureStore({
  reducer: {
    Catalog,
    ItemPage,
  },
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>