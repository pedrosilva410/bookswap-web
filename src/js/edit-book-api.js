var EditBookApi = (() => {

    let editBook = (title, description, location, genres, bookId) => {

        return fetch(`http://localhost:8080/books/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "title": title, "description": description, "location": location, "genres": genres})
        }).then(res => res.json())
    }

    return {
        editBook: editBook
    }

})();

export default EditBookApi;