import React from "react";
import "./App.css";
import {db} from'./firebase';
import HomePage from "./pages/HomePage/HomePage";
import FAQ from "./pages/FAQ/FAQ";
import LuAthletics from "./pages/LuAthletics/LuAthleticsPage";
import StaffPage from "./pages/Staff/StaffPage";
import AskAnything from "./pages/AskAnything/AskAnything";
import Handbook from "./pages/Handbook/Handbook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";


function App() {
    
    
      const question = {
    question: "how many meters in a mile?",
    answer: null,
    createdAt: Date.now()
  };

  db.collection("questions").add(question);
  
  
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/homepage" exact component={HomePage} />
          <Route path="/athletics" component={LuAthletics} />
          <Route path="/staff" component={StaffPage} />
          <Route path="/handbook" component={Handbook} />
          <Route path="/faq" component={FAQ} />
          <Route path="/ask" component={AskAnything} />
        </Switch>
      </MainLayout>
    </Router>
  );
}


export default App;
