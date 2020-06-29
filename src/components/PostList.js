import React from 'react';
import { connect } from 'react-redux';
import {fetchPostsAndUsers} from '../actions';

import UserHeader from './userHeader';

class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPostsAndUsers()
    }

    listPosts() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large user middle aligned icon"></i>
                    <div className="content">
                    <h2 className="header">{post.title}</h2>
                    <div className="description">{post.body}</div>
                    <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.listPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList)