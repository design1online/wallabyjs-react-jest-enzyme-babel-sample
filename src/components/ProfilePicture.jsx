import React from 'react';

const ProfilePicture = React.createClass({
  render: function () {
    return (
      <img className="image" src={'assets/' + this.props.username + '.jpg'}/>
    );
  }
});


export default ProfilePicture;
