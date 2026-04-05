import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { matchRoutes } from 'react-router-dom';
import {
  initializeFaro,
  createReactRouterV6DataOptions,
  ReactIntegration,
  getWebInstrumentations,
  faro,
} from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

// Guard: don't re-initialize Faro if the PWA service worker reloads the page.
// The SW lifecycle (install → skipWaiting → clientsClaim) can trigger multiple
// page reloads, each of which would re-run this module and fire duplicate views.
// 'faro.api' is null/undefined before initializeFaro is called.
// This guard prevents double-initialization on PWA service worker reloads.
if (!faro.api) {
  initializeFaro({
    url: 'https://faro-collector-prod-eu-west-2.grafana.net/collect/3365d35cf77ec86a0381b3b41436f2f8',
    app: {
      name: 'Wedding Website',
      version: '1.0.0',
      environment: 'production'
    },

    instrumentations: [
      // getWebInstrumentations() includes a ViewInstrumentation by default.
      // ReactIntegration below ALSO tracks views via the router, causing doubles.
      // We filter it out here so ReactIntegration is the single source of truth.
      ...getWebInstrumentations().filter(i => i.constructor.name !== 'ViewInstrumentation'),

      // Tracing package to get end-to-end visibility for HTTP requests.
      new TracingInstrumentation(),

      // React integration: this is the single source of truth for page views.
      new ReactIntegration({
        router: createReactRouterV6DataOptions({
          matchRoutes,
        }),
      }),
    ],
  });
}

createRoot(document.getElementById("root")!).render(<App />);
