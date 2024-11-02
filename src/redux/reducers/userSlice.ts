import {createSlice} from '@reduxjs/toolkit';

//SCOPE KAVRAMI
// if () {

// } else {

// }

// const globaldegisken = "buğra"
// // bu alan global scope olarak isimlendirilir.

// var sadece function scope'u tanır
// let ve const tüm scopelara duyarlıdır.

// if (true) {
//   console.log(globaldegisken);

//   var degisken = "buğra"
//   let degisken2 = "buğra"
//   const degisken3 = "buğra"
//   if(true) {
//     console.log(degisken2);
//     console.log(degisken3);
//   }
// }

// const functiondegisken = () => {
//   var funcDegisken = "buğra"
// }

// console.log(funcDegisken);

// console.log(degisken);
// console.log(degisken2);
// console.log(degisken3);

// EŞİTTİR VE DENKTİR ARASINDAKİ FARK

// 5 == '5' bu eşitlik sağlandığı için true
// 5 === '5' burada denklik aranır type dahil her şeyin aynı olması beklenir o nedenle false döner

// HIGHER ORDER COMPONENT NEDİR
// İçine props ya da children olarak başka componentleri alabilen ve başka komponentleri return eden componentlere denir.

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
