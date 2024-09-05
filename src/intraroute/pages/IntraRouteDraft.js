import React from 'react';
import { useState, useEffect } from 'react';
import intraRoute from '@kyle11231/intraroute';

import Search from '../components/draft/Search';

function IntraRouteDraft() {
    const [stopsList, setStopsList] = useState([]);
    const [stopsListLoaded, setStopsListLoaded] = useState(false);

    useEffect(() => {
        intraRoute.getStopsList({
            excludeModes: []
        }).then(response => {
            setStopsList(response);
            setStopsListLoaded(true);
        });
    }, [])

    return (
        <div>
            <Search
                stopsList={stopsList}
                stopsListLoaded={stopsListLoaded}
            />
        </div>
    )
}

export default IntraRouteDraft;