// module.exports = {
//       __esModule: true,
//       default: {
//         get: () => ({
//           data: { id: 1, name: "John" },
//         }),
//       }
// }

// module.exports = {
//     get: jest.fn((url) => {
//         if (url === '/something') {
//             return Promise.resolve({
//                 data: 'data'
//             });
//         }
//     }),
//     post: jest.fn((url) => {
//         if (url === '/something') {
//             return Promise.resolve({
//                 data: 'data'
//             });
//         }
//         if (url === '/something2') {
//             return Promise.resolve({
//                 data: 'data2'
//             });
//         }
//     }),
//     create: jest.fn(function () {
//         return this;
//     })
// };



/* Dynamically loading the mockjson Start */
// https://github.com/vspedr/movile-messaging/pull/8/files#
// const fs = require('fs');

// const mock = jest.fn((url) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(`./__mockData__${url}.json`, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       }
//       resolve(JSON.parse(data));
//     })
//   })
// });

// module.exports = {
//   get: mock,
//   post: mock,
//   create: jest.fn(function() {
//     return this;
//   })
// };
/* Dynamically loading the mockjson end */



module.exports = {
      __esModule: true,
      default: {
        get: (response, url) => {
            return ({
              data: response
            });
        },
        post: (response, url) => ({
          data: response,
        }),
        create: jest.fn(function () {
            return this;
        })
      }
}