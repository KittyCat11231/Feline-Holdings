import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home | Feline Holdings</title>
                <meta property="og:title" content="Home | Feline Holdings" />
                <meta name="twitter:title" content="Home | Feline Holdings" />
            </Helmet>
            <h1>Placeholder</h1>
            <h2><a href='intraroute'>Click here for IntraRoute</a></h2>
            <h2><a href='test'>Click here for test page</a></h2>
        </div>
    );
}

export default Home;