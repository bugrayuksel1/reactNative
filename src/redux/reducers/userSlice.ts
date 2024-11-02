import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      userName: '',
      name: '',
      surName: '',
      age: '',
      gender: '',
    },
    isLoggedIn: false,
  },
  reducers: {
    setUserData(state, action) {
      state.isLoggedIn = true;
      state.userInfo = {
        userName: action.payload.username,
        name: action.payload.firstName,
        surName: action.payload.lastName,
        age: '22',
        gender: action.payload.gender,
      };
    },
    logout(state) {
      state.userInfo = {
        userName: '',
        name: '',
        surName: '',
        age: '',
        gender: '',
      };
      state.isLoggedIn = false;
    },
  },
});

export const {setUserData, logout} = userSlice.actions;
export default userSlice.reducer;
