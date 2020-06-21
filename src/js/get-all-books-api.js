var GetAllBooksApi = (() => {

    let getBooks = (title) => {

        if (title) {
            return fetch(`http://localhost:8080/books?title=${title}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
        } else {
            return fetch(`http://localhost:8080/books`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
        }
    }

    return {
        getBooks: getBooks
    }

})();

export default GetAllBooksApi;