import React from 'react';
import ProfilePicture from './ProfilePicture';
import FollowButton from './FollowButton';

const UserProfile = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePicture username={this.props.username} />
        <FollowButton username={this.props.username} />
      </div>
    );
  }
});

export default UserProfile;
