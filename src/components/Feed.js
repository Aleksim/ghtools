
import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby'
import Query from './Stream/Query'

const Feed = () => {

    const [tabz, setTab] = useState(false);
    const tabz_value = tabz ? 'is-active' : '';
    const tabz_value2 = tabz ? 'linear-wipe' : 'is-active';

    return (
        <div>
            <div className="outer-tabs">
                <div className="tabs is-boxed selectors">
                    <ul>
                        <li onClick={()=>{setTab(true)}} className={`${tabz_value} feed-text`}>
                        <Link to="/">
                            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                            <span>HACKER'S PICKS</span>
                        </Link>
                        </li>
                        
                        <li onClick={()=>{setTab(false)}} className={`${tabz_value2} feed-text`}>
                        <Link to="/app/feed">
                            <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                            <span>DAILY STREAM</span>
                        </Link>
                        </li>

                    </ul>
                </div>
            </div>
            <Query/>
        </div>
    )
}

export default Feed
