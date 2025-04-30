import React from 'react';
import { Button, CssBaseline, Container, Typography } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <h1>Hello from React 16 + MUI v4 + SSR!</h1>
        <Typography variant="h6" gutterBottom>
          This is a simple example of server-side rendering with Material-UI.
        </Typography>
        <Button variant="contained" color="primary">Click Me</Button>
      </Container>
    </React.Fragment>
  );
}

export default App;
