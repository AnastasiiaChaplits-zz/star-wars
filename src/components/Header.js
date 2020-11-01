import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui segment">
            <Link to="/" style={{textDecoration: "none"}}>
                <h1 className="ui center aligned header">Welcome to Star Wars world!
                <div className="sub header">Find information about planets from Star Wars Universe.</div>
                </h1>
            </Link>
        </div>
    )
};

export default Header;