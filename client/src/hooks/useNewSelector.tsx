import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;