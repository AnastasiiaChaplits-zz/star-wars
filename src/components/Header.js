import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui segment">
            <Link to="/">
                <h1 className="ui header">Welcome to Star Wars world!</h1>
            </Link>
        </div>
    )
};

export default Header;