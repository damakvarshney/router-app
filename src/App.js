import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Route path="/" component={Home} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
        </div>
      </div>
    );
  }
}

export default App;
