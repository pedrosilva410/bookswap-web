var DeleteBookApi = (() => {

    let deleteBook = (bookId) => {

        return fetch(`http://localhost:8080/books/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).catch(error=>console.log(error))
    }

    return {
        deleteBook: deleteBook
    }

})();

export default DeleteBookApi;