import React from 'react';
import propTypes from "prop-types";
import "./index.css"

export default function Button(props) {
    const { value } = props
    let className = []
    if (props.isPrimary) className.push("primary")
    if (props.isDanger) className.push("danger")
    if (props.isWarning) className.push("warning")

    return (
        <button id={props.id} onClick={props.onClick} className={["button-18", className].join(" ")} role="button">{value}</button>
    )

}

Button.prototype = {
    isPrimary: propTypes.bool,
    isDanger: propTypes.bool,
    isWarning: propTypes.bool,
    value: propTypes.string
}