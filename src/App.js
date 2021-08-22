import SideBar from './sidebar';
import Sign from './SignUp';
import ClientData from './singleClient';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <SideBar>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Sign} />
            <Route path="/cliente" component={ClientData} />
          </Switch>
        </BrowserRouter>

      </SideBar>
     
      
      
    </div>
  );
}

export default App;
