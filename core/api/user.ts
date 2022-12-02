//모두 예시로 남겨둡니다
// import LocalStorage from '../localStorage';
// import { baseInstance } from '../axios';
// import {
//   PostLoginBody,
//   PostSignUpBody,
//   ResponseLoginDto,
// } from '../../types/user';

// export const loginUser = async (userLoginData: PostLoginBody) => {
//   const data = (await baseInstance.post(
//     '/auth/login',
//     userLoginData,
//   )) as ResponseLoginDto;

//   if (data.status === 200) {
//     LocalStorage.setUserSession(
//       data.data.data.accessToken,
//       data.data.data.refreshToken,
//     );
//     return data.data.data.isSignup;
//   }
// };
// export const getRefreshToken = () => {
//   return baseInstance.get('/auth/refresh');
// };
// export const postNickname = (nicknameBody: PostSignUpBody) => {
//   return baseInstance.post('/auth/nickname', nicknameBody);
// };
// export const putSignup = (signUpBody: PostSignUpBody) => {
//   return baseInstance.put('/auth/signup', signUpBody);
// };
