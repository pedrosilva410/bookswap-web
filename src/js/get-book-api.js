var GetBookApi = (() => {

        let getBook = (bookId) => {
    
            return fetch(`http://localhost:8080/books/${bookId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
        }
    
        return {
            getBook: getBook
        }
    
    })();

export default GetBookApi;