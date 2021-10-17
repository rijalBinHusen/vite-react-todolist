import React from 'react';
import propTypes from "prop-types";
import "./index.css"

export default function Button() {
    return (
        <div>
            <button className="button-18 primary" role="button">Button 18</button>
        </div>)

}

Button.prototype = {
    isPrimary: propTypes.bool,
    isDanger: propTypes.bool,
    isWarn: propTypes.bool
}