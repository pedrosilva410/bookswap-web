var GetUserBooksApi = (() => {

    let getBooks = (userId) => {

        return fetch(`http://localhost:8080/account/${userId}/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
    }

    return {
        getBooks: getBooks
    }

})();

export default GetUserBooksApi;