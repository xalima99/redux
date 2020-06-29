import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{

    render() {
        let {user} = this.props
        if(!user){
            return null
        }

        return (
             <div>{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader)