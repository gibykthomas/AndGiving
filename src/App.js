import './App.css';
import LeaderBoard from './components/LeaderBoard';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route
          exact
          path="/leaderboard"
          render={() => {
            return <LeaderBoard />;
          }}
        />
      </Switch>

    </div>
  );
}

export default App;
