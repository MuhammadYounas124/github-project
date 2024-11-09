import{BrowseRouter as Router,Switch,Route} from 'react-router-dom';
import {home} from "./pages/home"
export const routes = () => {
   
    return (

    <Router>
    
    <Switch>
        <Route path='/'>

        <home/>

        </Route>
    </Switch>

    </Router>
    )

}

