var BookApi = (() => {

    let createBook = (title, description, location, genres, image, userId) => {

        return fetch(`http://localhost:8080/account/${userId}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "title": title, "description": description, "location": location, "genres": genres, "image": image, "userId": userId })
        }).then(res => res.json())
    }

    return {
        createBook: createBook
    }

})();

export default BookApi;