"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:C:\Users\Kevin\workspace\app-remix-react-1\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\Kevin\\workspace\\app-remix-react-1\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = "/build/css-bundle-24NQHO4B.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// server.ts
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react3 = require("@remix-run/react");

// app/components/MainNav.tsx
var import_material = require("@mui/material"), import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function MainNav() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "Welcome Products" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.Stack, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
      {
        displayName: "Core",
        path: "/core",
        id: "core"
      },
      {
        displayName: "About",
        path: "/about",
        id: "about"
      },
      {
        displayName: "Products",
        path: "/products",
        id: "products"
      },
      {
        displayName: "Login",
        path: "/login",
        id: "login"
      }
    ].map((navItem) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, { to: navItem.path, children: navItem.displayName }, navItem.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {})
  ] });
}

// app/root.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MainNav, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
}

// app/routes/core.level1.$userId.tsx
var core_level1_userId_exports = {};
__export(core_level1_userId_exports, {
  default: () => core_level1_userId_default
});
var import_jsx_runtime4 = require("react/jsx-runtime");
function CoreLevel1UserPage({ userId }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: "This is Core Level 1 User profile:" });
}
var core_level1_userId_default = CoreLevel1UserPage;

// app/routes/core.level1._index.tsx
var core_level1_index_exports = {};
__export(core_level1_index_exports, {
  default: () => core_level1_index_default
});
var import_jsx_runtime5 = require("react/jsx-runtime");
function CoreLevel1Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: "Core Level 1 users have Level One Access." }) });
}
var core_level1_index_default = CoreLevel1Index;

// app/routes/products.add-new.tsx
var products_add_new_exports = {};
__export(products_add_new_exports, {
  action: () => action,
  default: () => products_add_new_default
});
var import_material5 = require("@mui/material");

// app/api/Product.action.ts
var import_node2 = require("@remix-run/node");

// app/api/fetch.ts
async function fetchGet(url, method, body) {
  let extraHeaders = {};
  method === "POST" && (extraHeaders = {
    ...extraHeaders,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  let response = await fetch(`${url}`, {
    method,
    ...extraHeaders
  });
  if (!response.ok) {
    let message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
}

// app/api/Product.action.ts
async function productionCreateAction({ request, context, params }) {
  let body = await request.formData();
  console.log("METHOD: ", request.method, Object.fromEntries(body));
  let create$ = await fetchGet("https://kq-1-1a499.firebaseio.com/remix-1-products.json", "POST", Object.fromEntries(body));
  return (0, import_node2.json)(create$);
}

// app/components/ProductList.tsx
var import_material2 = require("@mui/material"), import_react4 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime");
function ProductList() {
  let data = (0, import_react4.useRouteLoaderData)("routes/products");
  return data ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material2.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 1, children: data.map((res) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    "Name: ",
    res.name,
    " | Price: ",
    res.price,
    " | Id: ",
    res.id
  ] }, res.fireId)) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: "No data" });
}
var ProductList_default = ProductList;

// app/components/Products.tsx
var import_material4 = require("@mui/material");

// app/shared/hook-forms/TextField.tsx
var import_material3 = require("@mui/material"), import_react_hook_form = require("react-hook-form"), import_colors = require("@mui/material/colors"), import_jsx_runtime7 = require("react/jsx-runtime");
function HFTextField({ name, label, control, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_react_hook_form.Controller,
    {
      name,
      control,
      render: ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState
      }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material3.FormControl, { fullWidth: props.fullWidth, size: props.size ?? "medium", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material3.TextField, { id: name, label, ...props, ...field, error: !!error, helperText: void 0 }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material3.FormHelperText, { id: `${name}-helper-text`, error: !!error, sx: { ml: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_material3.Typography, { variant: "caption", color: import_colors.red, component: "span", children: [
          " ",
          error ? error.message : props.helperText,
          " "
        ] }) })
      ] })
    }
  );
}
var TextField_default = HFTextField;

// app/components/Products.tsx
var import_react_hook_form2 = require("react-hook-form"), import_yup = require("@hookform/resolvers/yup");

// app/constants/schemas.ts
var yup = __toESM(require("yup")), productSchema = yup.object({
  id: yup.string().trim().required("ID is required"),
  name: yup.string().trim().required("Name is required").min(2, "Name has to be at least 2 characters"),
  price: yup.number().required("Price is required").min(1)
});

// app/components/Products.tsx
var import_react5 = require("@remix-run/react"), import_jsx_runtime8 = require("react/jsx-runtime"), initValue = {
  name: "Cool product",
  id: "1",
  price: 5
}, renderCount = 0;
function Products({ actionUrl = "/products" }) {
  let submit = (0, import_react5.useSubmit)(), transition = (0, import_react5.useNavigation)(), { handleSubmit, control, reset } = (0, import_react_hook_form2.useForm)({
    defaultValues: initValue,
    resolver: (0, import_yup.yupResolver)(productSchema)
    //mode: "onChange"
  }), handleFormSubmit = (product, event) => {
    submit(product, {
      action: actionUrl,
      method: "post"
    });
  }, handleOnReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material4.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material4.Typography, { variant: "h6", children: "Add a new Product" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
      "Render count: ",
      renderCount
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material4.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "12rem", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react5.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TextField_default, { name: "name", label: "Name", control, variant: "standard", type: "text", helperText: " name", fullWidth: !0 }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TextField_default, { name: "id", label: "ID", control, type: "text", variant: "standard", helperText: " ID", fullWidth: !0 }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TextField_default, { name: "price", label: "Price", control, type: "number", variant: "standard", helperText: "Price", fullWidth: !0 }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material4.Divider, { variant: "fullWidth", flexItem: !0, sx: { my: 3 } }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material4.Button, { type: "submit", disabled: transition.state === "submitting" || transition.state === "loading", children: transition.state === "submitting" ? "Creating..." : "Create" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_material4.Button, { type: "reset", onClick: handleOnReset, children: "Reset" })
    ] }) })
  ] });
}
var Products_default = Products;

// app/routes/products.add-new.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function ProductsAdd() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_material5.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Products_default, { actionUrl: "/products/add-new" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ProductList_default, {})
  ] });
}
async function action(args) {
  return productionCreateAction(args);
}
var products_add_new_default = ProductsAdd;

// app/routes/products._index.tsx
var products_index_exports = {};
__export(products_index_exports, {
  default: () => products_index_default
});
var import_material6 = require("@mui/material"), import_react6 = require("@remix-run/react"), import_jsx_runtime10 = require("react/jsx-runtime");
function ProductsIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_material6.Stack, { direction: "row", justifyContent: "start", alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material6.Typography, { variant: "body2", children: [
    "You can ",
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react6.Link, { to: "./add-new", children: " add " }),
    " new products, or view other products."
  ] }) });
}
var products_index_default = ProductsIndex;

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_jsx_runtime11 = require("react/jsx-runtime"), meta = () => [
  { title: "Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: "This app is built with Remix! Feel free to look around." });
}

// app/routes/products.view.tsx
var products_view_exports = {};
__export(products_view_exports, {
  action: () => action2,
  default: () => products_view_default
});
var import_material8 = require("@mui/material"), import_react7 = require("@remix-run/react"), import_react8 = require("react");

// app/components/DialogLayout.tsx
var import_material7 = require("@mui/material"), import_jsx_runtime12 = require("react/jsx-runtime");
function DialogLayout({ open, title, maxWidth = "lg", onClose, children }) {
  let handleClose = () => {
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_material7.Dialog,
    {
      fullWidth: !0,
      maxWidth,
      open,
      onClose: handleClose,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material7.DialogTitle, { sx: { backgroundColor: "background.default", color: "text.primary" }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_material7.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
          title,
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material7.Button, { "aria-label": "close", onClick: handleClose, children: " Close " })
        ] }) }),
        children
      ]
    }
  );
}
var DialogLayout_default = DialogLayout;

// app/routes/products.view.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function ProductsView() {
  let transition = (0, import_react7.useNavigation)(), [open, setOpen] = (0, import_react8.useState)(!1), [searchParams, setSearchParams] = (0, import_react7.useSearchParams)(), handleClickOpen = () => {
    setOpen(!0), setSearchParams({
      openCreateDialog: "true"
    });
  }, handleClose = () => {
    setOpen(!1), setSearchParams();
  };
  return (0, import_react8.useEffect)(() => {
    JSON.parse(searchParams.get("openCreateDialog") || "false") ? setOpen(!0) : setOpen(!1);
  }, [searchParams]), /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_material8.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_material8.Stack, { direction: "row", justifyContent: "start", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: "View Products" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material8.Button, { variant: "outlined", onClick: handleClickOpen, children: transition.state === "submitting" ? "Creating..." : "Create" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ProductList_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogLayout_default, { open, title: "Add Product", onClose: handleClose, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material8.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Products_default, { actionUrl: "/products/view" }) }) })
  ] });
}
async function action2(args) {
  return productionCreateAction(args);
}
var products_view_default = ProductsView;

// app/routes/core.$userId.tsx
var core_userId_exports = {};
__export(core_userId_exports, {
  default: () => core_userId_default
});
var import_jsx_runtime14 = require("react/jsx-runtime");
function CoreUserDisplay() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: "Core User Profile:" });
}
var core_userId_default = CoreUserDisplay;

// app/routes/_public.team.tsx
var public_team_exports = {};
__export(public_team_exports, {
  default: () => Team
});
var import_jsx_runtime15 = require("react/jsx-runtime");
function Team() {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: "Meet the team!" });
}

// app/routes/core.level1.tsx
var core_level1_exports = {};
__export(core_level1_exports, {
  default: () => core_level1_default
});
var import_react9 = require("@remix-run/react"), import_jsx_runtime16 = require("react/jsx-runtime");
function CoreLevel1() {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
      "Welcome to ",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react9.Link, { to: "/core/level1", children: "Level 1" }),
      ". You can view our Core Level 1 users."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react9.Link, { to: "./bekah", children: "Bekah" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react9.Link, { to: "./joe", children: "Joe" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react9.Link, { to: "./jack", children: "Jack" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react9.Outlet, {})
  ] });
}
var core_level1_default = CoreLevel1;

// app/routes/core._index.tsx
var core_index_exports = {};
__export(core_index_exports, {
  default: () => core_index_default
});
var import_jsx_runtime17 = require("react/jsx-runtime");
function CoreIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { children: "Core users can be viewed here." });
}
var core_index_default = CoreIndex;

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  default: () => auth_login_default,
  meta: () => meta2
});
var import_jsx_runtime18 = require("react/jsx-runtime"), meta2 = () => [
  { title: "Login | Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function AuthLogin() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: "Log in here." });
}
var auth_login_default = AuthLogin;

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action3,
  default: () => products_default,
  loader: () => loader
});
var import_material9 = require("@mui/material"), import_react11 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/components/GenericErrorPage.tsx
var import_react10 = require("@remix-run/react"), import_jsx_runtime19 = require("react/jsx-runtime");
function GenericErrorPage() {
  let error = (0, import_react10.useRouteError)();
  if (console.log("is error", error), (0, import_react10.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { children: "Oops" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { children: [
        "Status: ",
        error.status
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: JSON.stringify(error) })
    ] });
  let errorMessage = "Unknown error";
  return errorMessage = JSON.stringify(error), /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { children: "Uh oh ..." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "Something went wrong." }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("pre", { children: errorMessage })
  ] });
}
var GenericErrorPage_default = GenericErrorPage;

// app/models/products.model.ts
var navOptions = [
  {
    displayName: "New",
    path: "add-new",
    id: "new"
  },
  {
    displayName: "View",
    path: "view",
    id: "view"
  }
];

// app/routes/products.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function Products2() {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_material9.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { style: { marginTop: "30px" }, className: "cool-font", children: [
      "Welcome to ",
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react11.NavLink, { to: "/products", children: "Products" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_material9.Stack, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, my: 3, children: navOptions.map((navItem) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react11.NavLink, { to: navItem.path, children: navItem.displayName }, navItem.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react11.Outlet, {}) })
  ] });
}
async function action3(args) {
  return productionCreateAction(args);
}
async function loader({ request, params }) {
  let { searchParams } = new URL(request.url), someSearchParam = Number(searchParams.get("myCoolParams") ?? 0);
  if (!1)
    return (0, import_node3.json)({ error: "missing teamId" }, 400);
  let result = await fetchGet("https://kq-1-1a499.firebaseio.com/remix-1-products.json", "GET"), keys = Object.keys(result), products = [];
  return keys.forEach((key) => {
    products.push({
      fireId: key,
      ...result[key]
    });
  }), products.reverse(), (0, import_node3.json)(products);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(GenericErrorPage_default, {});
}
var products_default = Products2;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
var import_jsx_runtime21 = require("react/jsx-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: "ABOUT!!!" });
}
var about_default = About;

// app/routes/core.tsx
var core_exports = {};
__export(core_exports, {
  default: () => core_default,
  meta: () => meta3
});
var import_material10 = require("@mui/material"), import_react12 = require("@remix-run/react"), import_jsx_runtime22 = require("react/jsx-runtime"), meta3 = (res) => [
  { title: "Core" },
  { name: "description", content: "Welcome to Remix!" }
];
function Core() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_material10.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: { marginTop: "30px" }, className: "cool-font", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react12.Link, { to: "/core", children: "Core" }),
      " is where you can view our Core users."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react12.Link, { to: "./john", children: "John" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react12.Link, { to: "./lucy", children: "Lucy" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react12.Link, { to: "./kevin", children: "Kevin" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react12.Link, { to: "./level1", children: "Go to Core Level 1 Users" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react12.Outlet, {}) })
  ] });
}
var core_default = Core;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QAB5XWOV.js", imports: ["/build/_shared/chunk-3RVWVZ2O.js", "/build/_shared/chunk-PC6FDMSM.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G7ZFIZGG.js", imports: ["/build/_shared/chunk-5TPGNEVA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-HRP2ZV2Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-Z3TJXP4V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.team": { id: "routes/_public.team", parentId: "root", path: "team", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.team-NNQ3QATI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-5LZIBPVE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core": { id: "routes/core", parentId: "root", path: "core", index: void 0, caseSensitive: void 0, module: "/build/routes/core-YB6PXTBM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.$userId": { id: "routes/core.$userId", parentId: "routes/core", path: ":userId", index: void 0, caseSensitive: void 0, module: "/build/routes/core.$userId-BJJWTTBI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core._index": { id: "routes/core._index", parentId: "routes/core", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/core._index-RQGO4HOL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1": { id: "routes/core.level1", parentId: "routes/core", path: "level1", index: void 0, caseSensitive: void 0, module: "/build/routes/core.level1-CTJIZSNC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1.$userId": { id: "routes/core.level1.$userId", parentId: "routes/core.level1", path: ":userId", index: void 0, caseSensitive: void 0, module: "/build/routes/core.level1.$userId-ZDDG2FP4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1._index": { id: "routes/core.level1._index", parentId: "routes/core.level1", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/core.level1._index-KRECBXPW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-6EE6MDG6.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/products._index": { id: "routes/products._index", parentId: "routes/products", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/products._index-CODO3GPN.js", imports: ["/build/_shared/chunk-5TPGNEVA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.add-new": { id: "routes/products.add-new", parentId: "routes/products", path: "add-new", index: void 0, caseSensitive: void 0, module: "/build/routes/products.add-new-GKH7RKNC.js", imports: ["/build/_shared/chunk-6LEN55X3.js", "/build/_shared/chunk-5TPGNEVA.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.view": { id: "routes/products.view", parentId: "routes/products", path: "view", index: void 0, caseSensitive: void 0, module: "/build/routes/products.view-VAGGOXY3.js", imports: ["/build/_shared/chunk-6LEN55X3.js", "/build/_shared/chunk-5TPGNEVA.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "8c954056", hmr: void 0, url: "/build/manifest-8C954056.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/core.level1.$userId": {
    id: "routes/core.level1.$userId",
    parentId: "routes/core.level1",
    path: ":userId",
    index: void 0,
    caseSensitive: void 0,
    module: core_level1_userId_exports
  },
  "routes/core.level1._index": {
    id: "routes/core.level1._index",
    parentId: "routes/core.level1",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: core_level1_index_exports
  },
  "routes/products.add-new": {
    id: "routes/products.add-new",
    parentId: "routes/products",
    path: "add-new",
    index: void 0,
    caseSensitive: void 0,
    module: products_add_new_exports
  },
  "routes/products._index": {
    id: "routes/products._index",
    parentId: "routes/products",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: products_index_exports
  },
  "routes/_public._index": {
    id: "routes/_public._index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: public_index_exports
  },
  "routes/products.view": {
    id: "routes/products.view",
    parentId: "routes/products",
    path: "view",
    index: void 0,
    caseSensitive: void 0,
    module: products_view_exports
  },
  "routes/core.$userId": {
    id: "routes/core.$userId",
    parentId: "routes/core",
    path: ":userId",
    index: void 0,
    caseSensitive: void 0,
    module: core_userId_exports
  },
  "routes/_public.team": {
    id: "routes/_public.team",
    parentId: "root",
    path: "team",
    index: void 0,
    caseSensitive: void 0,
    module: public_team_exports
  },
  "routes/core.level1": {
    id: "routes/core.level1",
    parentId: "routes/core",
    path: "level1",
    index: void 0,
    caseSensitive: void 0,
    module: core_level1_exports
  },
  "routes/core._index": {
    id: "routes/core._index",
    parentId: "routes/core",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: core_index_exports
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/core": {
    id: "routes/core",
    parentId: "root",
    path: "core",
    index: void 0,
    caseSensitive: void 0,
    module: core_exports
  }
};

// server.ts
var import_node4 = require("@remix-run/node"), import_vercel = require("@remix-run/vercel");
(0, import_node4.installGlobals)();
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.18.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
