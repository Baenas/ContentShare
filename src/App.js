import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Login} path="/" exact />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
