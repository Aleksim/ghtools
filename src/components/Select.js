import React, {useState} from 'react'
import {Link} from 'gatsby'
import "../css/main.css"

const Select = () => {

    const [tabz, setTab] = useState(true);
    const tabz_value = tabz ? 'is-active' : '';
    const tabz_value2 = tabz ? 'linear-wipe' : 'is-active';
    return (
            <div className="outer-tabs">
                <div className="tabs is-boxed selectors">
                    <ul>
                        <li onClick={()=>{setTab(true)}} className={`${tabz_value} feed-text`}>
                        <Link to="/">
                            <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                            <span>TOP PICKS</span>
                        </Link>
                        </li>
                        
                        <li onClick={()=>{setTab(false)}} className={`${tabz_value2} feed-text`}>
                        <Link to="/app/feed">
                            
                                <div>
                                    DAILY STREAM   
                                    <span>
                                        <div class="tag is-small daily-beta">     
                                        BETA
                                        </div>
                                    </span>
                                </div>
                        </Link>
                        </li>


                    </ul>
                </div>
            </div>
    )
}

export default Select
