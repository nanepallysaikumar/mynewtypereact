import {FETCH_POSTS} from './types';

export const fetchposts = () => (dispatch: any) => {   
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts
    })
});
}
