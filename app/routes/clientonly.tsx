import { ClientOnly, useHydrated } from "remix-utils";
import { BrokenOnTheServer } from "~/client-components/BrokenOnServer.client";
import { ComplexComponent } from "~/components/ComplexComponent";


export default function Screen() {
  const hydrated = useHydrated();
  return (
    <>
      <ClientOnly fallback={ <>Loading...</> }>
        {() => <BrokenOnTheServer />}
      </ClientOnly>

      <ClientOnly fallback={ <>Loading...</> }>
        {() => <ComplexComponent />}
      </ClientOnly>

      <button
        type="button"
        disabled={ !hydrated }
        onClick={ () => alert("I has JS loaded!") }
      >
        Try me!
      </button>
    </>
  );
}