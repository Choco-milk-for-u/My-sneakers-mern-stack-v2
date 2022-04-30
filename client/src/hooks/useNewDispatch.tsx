import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { setError, setClick, setCartPrice, deleteCartPrice } from '../store/statusState';
import { setName } from "../store/sneakersState";

export const useNewDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ setError, setClick, setCartPrice, deleteCartPrice, setName }, dispatch);
}