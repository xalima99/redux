import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const uniqIds = _.uniq(_.map(getState().posts, 'userId'));
    uniqIds.map(id => dispatch(fetchUser(id)))
}


export const fetchPosts = () => async (dispatch) => {
    const res = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: res.data})
}

export const fetchUser = (id) => async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({type: 'FETCH_USER', payload: res.data})
}