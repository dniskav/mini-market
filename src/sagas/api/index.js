

export const apiCall = (method, url) => {
    return fetch(url, {
        method,
    })
    .then( res => res.json());
};

export const apiCallMocked = async (method, url, expectedResponse = {}) => {
    return await new Promise(resolve => {
        return setTimeout(() => resolve(expectedResponse) , 3000);
    });
};
