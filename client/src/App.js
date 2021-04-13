import './App.css';
import { BrowserRoute as Router,Route, Link} from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage'

function App() {
  return (
    <Router>
      <div>
        <div>
          <h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </h1>
        </div>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage}/>
      </div>
    </Router>
  );
}

export default App;
