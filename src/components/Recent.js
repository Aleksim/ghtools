import React from 'react'
import {Link} from 'gatsby'

const Recent = () => {

    const recent = "/"
    const acquisition = "/acquisition"
    const activation ="/activation"
    const referral ="/referral"
    const retention ="/retention"
    const revenue ="/revenue"

    return (
        <div className="recent-bg">
            <div className="flex-bg">
            <div className="recent-flex">
                <h2 className="filter">
                    Filter by:
                </h2>
                <Link to={recent}>
                    <h2 className="recent">
                        recent
                    </h2>
                </Link>
                <Link to={acquisition}>
                    <h2 className="recent">
                        acquisition
                    </h2>
                </Link>
                
                <Link to={activation}>
                    <h2 className="recent">
                        activation
                    </h2>
                </Link>
                
                <Link to={referral}>
                    <h2 className="recent">
                        referral
                    </h2>
                </Link>
                
                <Link to={retention}>
                    <h2 className="recent">
                        retention
                    </h2>
                </Link>
                
                <Link to={revenue}>
                    <h2 className="recent">
                        revenue
                    </h2>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Recent
