
export function getPosts(){

    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
             .then(res => res.json())
             .then(posts => {
                 dispatch({type:"GET_POSTS", data: posts});
             })
    }
}