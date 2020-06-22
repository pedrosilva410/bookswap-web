var EditAccountApi = (() => {

    let editAccount = (userName, email, password, bio, contact, userId) => {

        return fetch(`http://localhost:8080/account/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "userName": userName, "email": email, "password": password, "bio": bio, "contact": contact })
        }).then(res => res.json())
    }

    return {
        editAccount: editAccount
    }

})();

export default EditAccountApi;