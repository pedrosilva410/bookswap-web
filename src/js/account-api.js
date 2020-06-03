var AccountApi = (() => {

    let createAccount = (userName, email, password, bio, contact) => {

        return fetch("http://localhost:8080/account", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "userName": userName, "email": email, "password": password, "bio": bio, "contact": contact })
        }).then(res => res.json())
    }

    return {
        createAccount: createAccount
    }

})();

export default AccountApi;