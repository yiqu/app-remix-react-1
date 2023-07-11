import type { ActionArgs} from "@remix-run/node";
import { json } from "@remix-run/node";
import type { FirebaseResponse} from "./fetch";
import { fetchGet } from "./fetch";

export async function productionCreateAction({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  console.log("METHOD: ", request.method, Object.fromEntries(body));
  const create$ = await fetchGet<FirebaseResponse>(`https://kq-1-1a499.firebaseio.com/remix-1-products.json`, "POST", Object.fromEntries(body));
  return json(create$);
}