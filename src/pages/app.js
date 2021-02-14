import React from "react"
import { Router } from "@reach/router"
import Dashboard from "../components/dashboard"
import Layout from "../components/layout"
import Market from "../components/Market/marketpage"
import Rent from "../components/Rent/rentcomponent"
import PrivateRoute from "../components/privateRoute"


const App = () => (
 <Layout>
    <Router>  
      <PrivateRoute path="/app/profile" component={Dashboard} />
      <PrivateRoute path="/app/market" component={Market} />
      <PrivateRoute path="/app/rent" component={Rent} />
    </Router>
  </Layout>
)

export default App
