import {Router as MyRouter} from "@reach/router"
import Layout3 from "../components/Layout3"
import React, {useState, useEffect} from "react"
import Feed from "../components/Feed"
import Query from "../components/Stream/Query"


const Router = () =>{

    return(
        <Layout3>
            <MyRouter>
                <Feed path="/app/feed"/>
            </MyRouter>
        </Layout3>
    )
}

export default Router