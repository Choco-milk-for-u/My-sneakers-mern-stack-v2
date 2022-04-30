import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import interfaces
import { IInitial, IError, IClick } from '../interfaces/Store';


const initialState = {
    error: { isError: false, code: 0, message: '' },
    isClicked: [{ isClick: false, code: 0, id: '0' }],
    cartPrice: 0
} as IInitial

const statusState = createSlice({
    name: 'statusState',
    initialState: initialState,
    reducers: {
        setError(state, action: PayloadAction<IError>) {
            state.error = action.payload;
        },
        setClick(state, action: PayloadAction<IClick>) {
            let result = false;

            state.isClicked.map((prop, index) => {
                if (prop.code === action.payload.code && prop.id === action.payload.id) {
                    state.isClicked[index] = action.payload;
                    result = true;
                }
            })
            if (!result) {
                state.isClicked.push(action.payload);
            }
        },
        setCartPrice(state, action: PayloadAction<number>) {
            state.cartPrice += action.payload;
        },
        deleteCartPrice(state, action: PayloadAction<number>) {
            console.log(state.cartPrice);
            state.cartPrice -= action.payload;
        }
    }
})

export const { setError, setClick, setCartPrice, deleteCartPrice, } = statusState.actions;

export default statusState.reducer;