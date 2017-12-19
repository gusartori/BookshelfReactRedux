export function selectBook(book){
    //action creators sempre retornam uma action, um objeto com uma propriedade type
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
