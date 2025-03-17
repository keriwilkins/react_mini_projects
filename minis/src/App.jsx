import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Form, RefactorForm, Joke, Feed } from './components';
import FilterFeed from "./components/FilterFeed";

function App() {
  return (
    <div className="App">   
      <h1>Welcome</h1>
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Feed />} /> 
            <Route path="/FilterFeed" exact element={<FilterFeed />} /> 
            <Route path="/RefactorForm" exact element={<RefactorForm />} /> 
          </Routes>
      </BrowserRouter>
      {/* <Form /> */}
      {/* <RefactorForm /> */}
      {/* <Joke />  */}
      {/* <ToDo />  */}
    </div>
  );
}

export default App;
