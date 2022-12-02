// import axios from 'axios';
// import LocalStorage from './localStorage';

// console.log(process.env.NEXT_PUBLIC_BASE_URL);
// const baseInstance = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // // client side base instance (default)
// // // 로컬스토리지 접근이 가능하고 token이 필요한 api 호출에서 사용
// baseInstance.interceptors.request.use((config) => {
//   const headers = {
//     ...config.headers,
//     accessToken: LocalStorage.getItem('accessToken'),
//     refreshToken: LocalStorage.getItem('refreshToken'),
//   };
//   console.log('req', headers);

//   return { ...config, headers };
// });

// baseInstance.interceptors.response.use(
//   async function (res) {
//     return res;
//   },
//   async function (error: { config: any; response: { status: any } }) {
//     const { config, response } = error;
//     console.log(error);
//     const originalRequest = config;
//     if (response?.status === 401) {
//       // token refresh 요청
//       const { data } = await axios.post(
//         `/auth/token/refresh`, // token refresh api
//         {},
//         {
//           headers: {
//             accessToken: LocalStorage.getItem('accessToken'),
//             refreshToken: LocalStorage.getItem('refreshToken'),
//           },
//         },
//       );
//       const accessToken = data.data.accessToken;
//       const refreshToken = data.data.refreshToken;

//       LocalStorage.setItem('accessToken', accessToken);
//       LocalStorage.setItem('refreshToken', refreshToken);

//       originalRequest.headers = {
//         accessToken: accessToken,
//         refreshToken: refreshToken,
//       };
//       return axios(originalRequest);
//     }
//     return error.response;
//   },
// );

// export { baseInstance };
