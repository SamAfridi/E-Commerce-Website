import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "./App.css";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";
import Header from "./container/Header";

function App() {
  return (
    <div className="App">

       <Router>
        <Header />
       
        <Switch>
          <Route path="/" exact component={ProductListing} />
           <Route path="/product/:productId" exact component={ProductDetail} /> 
          {/* <Route path="/product/:productId">
               <ProductDetail />
          </Route> */}
          <Route>404 not found</Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
