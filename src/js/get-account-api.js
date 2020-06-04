var GetAccountApi = (() => {

    let getAccount = (userId) => {

        return fetch(`http://localhost:8080/account/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
    }

    return {
        getAccount: getAccount
    }

})();

export default GetAccountApi;