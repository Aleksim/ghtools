import React, {useState, useEffect} from 'react'

const Query = () => {    
    const [data, setData] = useState([])

    const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


    useEffect(() => {
            fetch('https://hidden-eyrie-68310.herokuapp.com',{
                method:'GET',
                headers:{
                    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDJiYWUzYzE2NDhjYzM0MWNhZWJkMGEiLCJpYXQiOjE2MTM0NzU2MDd9.ixdpF2dLn8N4EwcMycUvktS773D-QHWQl1fbr-g_NoU'
                }
            }).then(res => {
                return res.json()
            }).then(data=>setData(data))
            .catch(error => console.log('error'))
        },[])

return(
        <div className="section item-bg">
            <div className="container is-max-desktop">
                <ul>
                
            {data ? 
            data.map(i=> {return(
            <ul className="item">
                <li className="list-items">
                    <div className="packaged">
                        <div className="flexed">
                            <div className="section-topic">
                                <h2 className="daily-title"><span className="tool-name">Tool Name:</span> {i.Name}</h2>
                            </div>
                            <p className="tool-text">{i.Description}</p>
                            <div className="date-button-score">
                                <p className="date"><span>Date published: </span>{i.Published}</p>
                                <button onClick={()=>{openInNewTab(`${i.Link}`)}} class="button is-primary is-outlined is-small">Check It Out</button>
                            </div>
                        
                        </div>
                    </div>
                </li> 
            </ul>  
        
            
            ) })
                : "loading"}
                </ul>
            </div>
        </div>
)
}

export default Query
