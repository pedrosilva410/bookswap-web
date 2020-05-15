var AccountApi = (() => {

    let createAccount = (userName, email, password) => {

        return fetch("http://localhost:8080/account", {
            method: 'POST',
             headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ "userName": userName, "email": email, "password": password })
        }).then(res => res.json())
    }

    return {
        createAccount:createAccount
    }

})();

export default AccountApi;