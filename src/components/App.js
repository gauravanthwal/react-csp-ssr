import React from "react";
import {  Link } from "react-router-dom";
import { Button, CssBaseline, Container } from "@material-ui/core";
import Routes from "./router/routes";

const Navbar = () => {
  return (
    <nav style={{ marginBottom: 20 }}>
      <Button component={Link} to="/" color="primary">
        Home
      </Button>
      <Button component={Link} to="/about" color="secondary">
        About
      </Button>
    </nav>
  );
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Navbar />
        <Routes/>
      </Container>
    </React.Fragment>
  );
}

export default App;
