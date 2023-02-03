import React, { } from "react";

const Champ = (props) => {
    return (
        <div>
            <label className="form-label" for={props.label}>{props.label}</label>
            <input id={props.name} type={props.type} name={props.name} class="form-control" min={props.min} max={props.max} value={props.value} placeholder={props.placeholder} onChange={props.onchange} ></input>
        </div >
    );
};
export default Champ;