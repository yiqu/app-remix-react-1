import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function MainNav() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Link to="/"><h1>Welcome to Remix!!</h1></Link>
      
      Look around the app.

      <div>
        <Link to="./core">Core</Link>
        <Link to="./about">About</Link>
        <Link to="login">Login</Link>
        <Link to="products">Products</Link>
      </div>

      <Outlet />

    </div>
  );
}
  