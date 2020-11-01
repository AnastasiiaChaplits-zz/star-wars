import React from 'react';

const ErrorNotification = ({
    errorMessage = "URL address is incorrect. Please, go to the main page and try again"
}) => {
    return (
        <div className="ui negative message">
            <div className="header">
                Ooops! Something went wrong
            </div>
            <p>{errorMessage}</p>
        </div>
    )
};

export default ErrorNotification;