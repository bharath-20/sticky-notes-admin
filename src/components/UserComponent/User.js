import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/user.css'; 
import '../images/avatar.png';  

const User = ({ user, onPromoteClick }) => {
  const { name, email, role , avatar} = user;
  
  return (
    <div className="user-container">
      <img className="user-avatar"  src={avatar || "avatar.png"} alt="User Avatar" />
      <div className="user-details">
        <h3>{name}</h3>
        <p className='user-p'>{email}</p>
        <p className='user-p'>Role: {role}</p>
        {role === 'USER' && (
          <button className="promote-button" onClick={onPromoteClick}>
            Promote
          </button>
        )}
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  onPromoteClick: PropTypes.func,
};

export default User;
