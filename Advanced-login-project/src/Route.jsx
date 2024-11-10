import{createBrowserRouter as Router,Route,createRoutesFromElements, RouterProvider} from 'react-router-dom';
import {home} from "./pages/home";
export const Route = () => {
    
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<home />}>
            {/* <Route index element={<home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} /> */}
          </Route>
        )
      )
    return (
            
            <BrowserRouter>
            <Router>
        
        <Switch>
        <RouterProvider router={router}/>
            {/* <Route exact path="/" render={() => <home />} /> */}
            
        </Switch>

        </Router>
    </BrowserRouter>
    )

}
export default Route;

