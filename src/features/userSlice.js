import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};


// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    logout: (state) => {
      state.user = null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action) => {
      state.user = action.payload;
    },
  },
  
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
