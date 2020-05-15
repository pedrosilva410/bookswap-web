var AuthenticationApi = (() => {

    let login = (userName, password) => {

        return fetch("http://localhost:8080/authentication", {
            method: 'POST',
             headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ "userName": userName, "password": password })
        }).then(res => res.json())
    }

    return {
        login: login
    }
})();

export default AuthenticationApi;