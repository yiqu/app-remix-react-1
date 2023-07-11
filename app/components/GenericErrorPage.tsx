import { Form, useSubmit, useNavigation, useRouteError, isRouteErrorResponse, } from "@remix-run/react";

function GenericErrorPage() {
  const error = useRouteError();
  console.log("is error", error);
  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = "Unknown error";
  errorMessage = JSON.stringify(error);
  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}

export default GenericErrorPage;