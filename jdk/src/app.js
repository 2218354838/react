import React from 'react';
import ReactDom from 'react-dom';
import Home from './commp/home';
import Chanpin from './commp/chanpin';
import Anli from './commp/anli';
import {BrowserRouter,Route, HashRouter, Switch, NavLink} from 'react-router-dom';
class Hello extends React.Component{
render(){
    return(
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/Chanpin" component={Chanpin}/>
                    <Route path="/Anli" component={Anli}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Anli" component={Anli}/>
                </Switch>
                </HashRouter>
        </div>
    )
}
}
ReactDom.render(
   <Hello/>,
    document.getElementById('root')
)     