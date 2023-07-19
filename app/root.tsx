import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import MainNav from "./components/MainNav";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource-variable/josefin-sans/wght.css';
import './styles/index.css';

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

function Document({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainNav children={ children } />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document title="Kevin's Grocery List">
      <Outlet />
    </Document>
  );
}


export function ErrorBoundary({ error }: { error: any }) {
  
  const err: any = useRouteError();
  
  let comp = <div>Error: {err.status} - {err.statusText}</div>;
  
  if (isRouteErrorResponse(error)) {
    comp = (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status} - {error.statusText}</p>
        <p>{error.data.message}</p>
        <Link to={ '/items/list' }>Back to Safely</Link>
      </div>
    );
  }
  
  return (
    <Document title="Error! | Kevin's Grocery List">
      <h1>{ comp } </h1>
    </Document>
  );
}

