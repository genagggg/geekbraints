import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Not found page <Link to={'/'}>Home</Link>
        </div>
    );
};

export default NotFound;