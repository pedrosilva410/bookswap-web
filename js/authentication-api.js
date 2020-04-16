var AuthenticationApi = (() => {
    let isEmpty = (value) => value === ""  || value === undefined || value === null

    let isValid = (user, password) => {
        return user == "user1" && password == "pwd123"
    };

    let login = (user, password, callback) => {
        if (isEmpty(user)) {
            callback({ message: "username-empty" }, undefined);
            return;
        }

        if (isEmpty(password)) {
            callback({ message: "password-empty" }, undefined);
            return;
        }

        if(isValid(user, password)) {
            callback(undefined, { token: "mock-token" }) 
        } else {
            callback({ message: "autententication-failed" }, undefined) 
        }
    }

    return {
        login: login
    }
})();