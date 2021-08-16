import './App.css';
import Header from './components/header/header.component'
import NavList from './components/header/nav.component'
import NewsList from './components/newslist/newslist.component'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <NavList/>
      <Switch>
         <Route path='/:country' component={<NewsList key={match.params.country} />}/>
      </Switch>
    </div>
  );
}

export default App;
