import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import AnalyticsSection from "./components/AnalyticsSection";
import UserProfile from "./components/UserProfile";
import PostList from "./components/PostList";
import { Body } from "./components/Body";

function App() {
  return (
    <Router>
        <div>
            <Body/>
            <main>
              <Routes>
                <Route path="/analytics" component={AnalyticsSection}/>
                <Route path="/profile" component={UserProfile}/>
                <Route path="/postlist" component={PostList}/>
              </Routes> 
            </main>
        </div>  
    </Router>
  );
}

export default App;
