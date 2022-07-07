import React from "react";
import PropTypes from 'prop-types';

function Menu(props) {
    const { color, size } = props // color = props.color

  return (
    <>
        {/* <p style={{color}} className={`font-size-${size}`}>
            Menu color:{color} size:{size}
        </p> */} 
        <p style={{color : color}} className={`size-${size}`}>
            abc color: {color} size: size-{size}
        </p>
    </>
  );
}

Menu.propTypes = {
    color : PropTypes.string.isRequired,
    size: PropTypes.number
}

Menu.defaultProps = {
    size : 200
}


export default Menu;

