import React from 'react';

function NoPage() {
    document.title = 'Page Not Found | Feline Holdings'
    
    return (
        <div>
            <h1>Page not found!</h1>
            <h2>Double check that you entered the URL correctly.</h2>
        </div>
    )
}

export default NoPage;