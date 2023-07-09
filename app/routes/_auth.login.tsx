import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Login | Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function AuthLogin() {

  return (
    <div>
      Log in here.
    </div>
  )
}

export default AuthLogin;