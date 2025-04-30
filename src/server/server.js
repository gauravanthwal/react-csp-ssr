// src/server/server.js

import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (client bundle, etc.)
app.use('/static', express.static(path.resolve(__dirname, '../../dist')));

// CSP nonce middleware
app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString('base64');
  next();
});

// Handle all GET requests with SSR
app.get('*', (req, res) => {
  const nonce = res.locals.nonce;

  // Collect styles using MUI's ServerStyleSheets
  const sheets = new ServerStyleSheets();
  const jsx = sheets.collect(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
  const reactHtml = ReactDOMServer.renderToString(jsx);
  const css = sheets.toString();

  // Read HTML template
  const templatePath = path.join(process.cwd(), 'public', 'index.html');
  let html = fs.readFileSync(templatePath, 'utf8');

  // Inject styles, markup, and nonce
  html = html
    .replace('<!-- STYLES -->', `<style id="jss-server-side" nonce="${nonce}">${css}</style>`)
    .replace('<!-- APP -->', reactHtml)
    .replace(/__NONCE__/g, nonce); // For any script/style tag nonce attr

  // Set strict CSP header
  res.setHeader(
    'Content-Security-Policy',
    `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'`
  );

  // Send final response
  res.send(html);
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
