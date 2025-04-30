import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom>
       Home Page
      </Typography>
      <Button variant="contained" color="primary" href="/about">
        Go to About Page
      </Button>
    </>
  );
}

function About() {
  return (
    <>
      <h2>About page</h2>
    </>
  );
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
