import logo from './logo.svg';
import './App.css';
import Home from './UIcomponents/selectRoute';
import "./StyledComponents/index.css"
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// import JourneyDetails from './UIcomponents/journeyDetails';
import BidRs from './UIcomponents/bidRupees';
import Price from './UIcomponents/price';
import BidRate from './UIcomponents/bidRate';
import FinalPrice from './UIcomponents/finalPrice';
function App() {
  return (
    <Router>
    {/* <Switch> */}
  <Route exact path="/" component={Home}/>
  <Route exact path="/bid-contract" component={BidRs}/>
  <Route exact path="/bidPricePage" component={Price}/>
  <Route exact path="/bidRate" component={BidRate}/>
  <Route exact path="/finalPrice" component={FinalPrice}/>
    {/* </Switch> */}
    </Router>
  );
}

export default App;
