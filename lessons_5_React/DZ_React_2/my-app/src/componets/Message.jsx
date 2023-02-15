import React from "react";

const Message = (props) => {
    return (
        <div style={{ color: 'green' }}>
            {props.someText}
        </div>
    );
}

export default Message;