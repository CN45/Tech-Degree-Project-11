import React from 'react';
//this component is displayed if there are no matching photos to display that match the users input
const NoResults = () => {
    return (
        <div>
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
        </div>
    );
}

export default NoResults;
