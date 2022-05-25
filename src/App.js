import logo from './logo.svg';
import './App.css';
import LeaderBoard from './components/LeaderBoard';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';


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
         {/* <Redirect to="/" /> */}
      </Switch>
      {/* <LandingPage /> */}

    </div>
  );
}

export default App;
