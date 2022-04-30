import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialStateV2 = {
    name: '',
}

const sneakersState = createSlice({
    name: 'sneakersState',
    initialState: initialStateV2,

    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        }
    }
})

export const { setName } = sneakersState.actions;

export default sneakersState.reducer;