import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import Illustrations from './Illustrations.js';
import Illustration from './Illustration.js';
import Detail from './Detail.js';
import {BrowserRouter, Switch, Route,} from "react-router-dom";

function App() {
  return (
    <div> 
      <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Illustrations} />
                    <Route exact path='/detail/title=:title/src=:src' component={Detail} />
                    {/* <PrivateRoute exact path='/insertrate' component={InsertRate} /> */}
                </Switch>
            </div>
        </BrowserRouter>
    </div>

  );
}

export default App;
