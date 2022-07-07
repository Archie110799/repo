import React from "react";
import PropTypes from "prop-types";
import "./user.css";

function User(props) {
  const { user } = props;
  return (
    <div className="card-zone">
      <div className="div-image">
        <img src={user.image} width={100} height={100} alt={user.name}></img>
      </div>
      <div className="div-info">
        <span className="info-title"> {user.name}</span>
        <span className="info-age">{user.age}</span>
        <span className="info-about">{user.lane}</span>
      </div>
    </div>
  );
}

// Khai bao props dung trong component
User.propTypes = {
  user: PropTypes.object.isRequired,
};

// set default value cho non-required props
User.defaultProps = {
  exam: true,
};

export default User;
