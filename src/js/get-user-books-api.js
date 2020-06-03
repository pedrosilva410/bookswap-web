var GetUserBooksApi = (() => {

    let getUserBooks = (userId) => {

        return fetch(`http://localhost:8080/account/${userId}/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
    }

    return {
        getUserBooks: getUserBooks
    }

})();

export default GetUserBooksApi;