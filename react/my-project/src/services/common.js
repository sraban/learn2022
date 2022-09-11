import axios from 'axios';

// process.env.NODE_ENV
// process.env.PUBLIC_URL

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.create({
   baseURL: `http://jsonplaceholder.typicode.com/`
});


// Add a request interceptor and pass the token here to header
axios.interceptors.request.use( (config) => {
    // config.method get or post
    config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
    };
    config.headers['csrf'] = '1212';
    return config;
  },  (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use( (response) => {
    return response;
  }, (error) => {
     if(error == 'Network error' && !error.response) {
        alert("No Internet");
     }
     const {status, data, config} = error.response;

     if(status === 400 || status === 404 ) {
        alert("Page Not Found");
     }
     if(status === 500 ) {
        alert("Server Error, Pls Check backend log");
     }
    return Promise.reject(error);
});

const all = (urls) => {
    let urlGet = [];
    urls.forEach(url => {
        urlGet.push( axios.get(url) );
    });
    return axios.all(urlGet);
};

const gets = (url) => {
    console.log(url);
    return axios.get(url);
};

const posts = (url, data={}) => {
    return axios.post(url, data);
};

const anything = (url, data={}) => {
    if(data) 
        return axios.post(url, data);
    else
        return axios.get(url);
};

const formData = (url, formData) => {
    return axios({
        url, 
        data: formData, 
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
      });
};

export default { all, gets, posts, anything, formData };