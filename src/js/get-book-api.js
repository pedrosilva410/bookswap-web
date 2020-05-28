var GetBookApi = (() => {

    let getBook = (userId) => {

        return fetch(`http://localhost:8080/account/${userId}/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
    }

    return {
        getBook: getBook
    }

})();

export default GetBookApi;