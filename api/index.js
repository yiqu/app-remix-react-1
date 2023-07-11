var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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

// <define:process.env.REMIX_DEV_HTTP_ORIGIN>
var init_define_process_env_REMIX_DEV_HTTP_ORIGIN = __esm({
  "<define:process.env.REMIX_DEV_HTTP_ORIGIN>"() {
  }
});

// css-bundle-update-plugin-ns:C:\Users\Kevin\workspace\app-remix-react-1\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\Kevin\\workspace\\app-remix-react-1\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = "/build/css-bundle-CR3DSCR7.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  dev: () => dev,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// server-entry-module:@remix-run/dev/server-build
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_css_bundle = __toESM(require_dist()), import_react3 = require("@remix-run/react");

// app/components/MainNav.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material = require("@mui/material"), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function MainNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Welcome to Remix!!" }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 40,
      columnNumber: 20
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Stack, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
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
    ].map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: navItem.path, children: navItem.displayName }, navItem.id, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 46,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNav.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNav, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/core.level1.$userId.tsx
var core_level1_userId_exports = {};
__export(core_level1_userId_exports, {
  default: () => core_level1_userId_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function CoreLevel1UserPage({ userId }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "This is Core Level 1 User profile:" }, void 0, !1, {
    fileName: "app/routes/core.level1.$userId.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var core_level1_userId_default = CoreLevel1UserPage;

// app/routes/core.level1._index.tsx
var core_level1_index_exports = {};
__export(core_level1_index_exports, {
  default: () => core_level1_index_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function CoreLevel1Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Core Level 1 users have Level One Access." }, void 0, !1, {
    fileName: "app/routes/core.level1._index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/core.level1._index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var core_level1_index_default = CoreLevel1Index;

// app/routes/products.add-new.tsx
var products_add_new_exports = {};
__export(products_add_new_exports, {
  action: () => action,
  default: () => products_add_new_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material5 = require("@mui/material");

// app/api/Product.action.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_node2 = require("@remix-run/node");

// app/api/fetch.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material2 = require("@mui/material"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ProductList() {
  let data = (0, import_react4.useRouteLoaderData)("routes/products");
  return data ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material2.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 1, children: data.map((res) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    "Name: ",
    res.name,
    " | Price: ",
    res.price,
    " | Id: ",
    res.id
  ] }, res.fireId, !0, {
    fileName: "app/components/ProductList.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/ProductList.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this) : null;
}
var ProductList_default = ProductList;

// app/components/Products.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material4 = require("@mui/material");

// app/shared/hook-forms/TextField.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material3 = require("@mui/material"), import_react_hook_form = require("react-hook-form"), import_colors = require("@mui/material/colors"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function HFTextField({ name, label, control, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react_hook_form.Controller,
    {
      name,
      control,
      render: ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.FormControl, { fullWidth: props.fullWidth, size: props.size ?? "medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.TextField, { id: name, label, ...props, ...field, error: !!error, helperText: void 0 }, void 0, !1, {
          fileName: "app/shared/hook-forms/TextField.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.FormHelperText, { id: `${name}-helper-text`, error: !!error, sx: { ml: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material3.Typography, { variant: "caption", color: import_colors.red, component: "span", children: [
          " ",
          error ? error.message : props.helperText,
          " "
        ] }, void 0, !0, {
          fileName: "app/shared/hook-forms/TextField.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/shared/hook-forms/TextField.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/hook-forms/TextField.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/hook-forms/TextField.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
var TextField_default = HFTextField;

// app/components/Products.tsx
var import_react_hook_form2 = require("react-hook-form"), import_yup = require("@hookform/resolvers/yup");

// app/constants/schemas.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var yup = __toESM(require("yup")), productSchema = yup.object({
  id: yup.string().trim().required("ID is required"),
  name: yup.string().trim().required("Name is required").min(2, "Name has to be at least 2 characters"),
  price: yup.number().required("Price is required").min(1)
});

// app/components/Products.tsx
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), initValue = {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Typography, { variant: "h6", children: "Add a new Product" }, void 0, !1, {
      fileName: "app/components/Products.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: [
      "Render count: ",
      renderCount
    ] }, void 0, !0, {
      fileName: "app/components/Products.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "12rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextField_default, { name: "name", label: "Name", control, variant: "standard", type: "text", helperText: " name", fullWidth: !0 }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextField_default, { name: "id", label: "ID", control, type: "text", variant: "standard", helperText: " ID", fullWidth: !0 }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextField_default, { name: "price", label: "Price", control, type: "number", variant: "standard", helperText: "Price", fullWidth: !0 }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Divider, { variant: "fullWidth", flexItem: !0, sx: { my: 3 } }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Button, { type: "submit", disabled: transition.state === "submitting" || transition.state === "loading", children: transition.state === "submitting" ? "Creating..." : "Create" }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material4.Button, { type: "reset", onClick: handleOnReset, children: "Reset" }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Products.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Products.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Products.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var Products_default = Products;

// app/routes/products.add-new.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ProductsAdd() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Products_default, { actionUrl: "/products/add-new" }, void 0, !1, {
      fileName: "app/routes/products.add-new.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ProductList_default, {}, void 0, !1, {
      fileName: "app/routes/products.add-new.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.add-new.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material6 = require("@mui/material"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ProductsIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Stack, { direction: "row", justifyContent: "start", alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Typography, { variant: "body2", children: [
    "You can ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react6.Link, { to: "./add-new", children: " add " }, void 0, !1, {
      fileName: "app/routes/products._index.tsx",
      lineNumber: 9,
      columnNumber: 17
    }, this),
    " new products, or view other products."
  ] }, void 0, !0, {
    fileName: "app/routes/products._index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/products._index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var products_index_default = ProductsIndex;

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  default: () => Index,
  meta: () => meta
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "This app is built with Remix! Feel free to look around." }, void 0, !1, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/products.view.tsx
var products_view_exports = {};
__export(products_view_exports, {
  action: () => action2,
  default: () => products_view_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material8 = require("@mui/material"), import_react7 = require("@remix-run/react"), import_react8 = require("react");

// app/components/DialogLayout.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material7 = require("@mui/material"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function DialogLayout({ open, title, maxWidth = "lg", onClose, children }) {
  let handleClose = () => {
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_material7.Dialog,
    {
      fullWidth: !0,
      maxWidth,
      open,
      onClose: handleClose,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_material7.DialogTitle, { sx: { backgroundColor: "background.default", color: "text.primary" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_material7.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
          title,
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_material7.Button, { "aria-label": "close", onClick: handleClose, children: " Close " }, void 0, !1, {
            fileName: "app/components/DialogLayout.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/DialogLayout.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/DialogLayout.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        children
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/DialogLayout.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
var DialogLayout_default = DialogLayout;

// app/routes/products.view.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
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
  }, [searchParams]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Stack, { direction: "row", justifyContent: "start", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: "View Products" }, void 0, !1, {
        fileName: "app/routes/products.view.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Button, { variant: "outlined", onClick: handleClickOpen, children: transition.state === "submitting" ? "Creating..." : "Create" }, void 0, !1, {
        fileName: "app/routes/products.view.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ProductList_default, {}, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogLayout_default, { open, title: "Add Product", onClose: handleClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Products_default, { actionUrl: "/products/view" }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.view.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function CoreUserDisplay() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: "Core User Profile:" }, void 0, !1, {
    fileName: "app/routes/core.$userId.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var core_userId_default = CoreUserDisplay;

// app/routes/_public.team.tsx
var public_team_exports = {};
__export(public_team_exports, {
  default: () => Team
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Team() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "Meet the team!" }, void 0, !1, {
    fileName: "app/routes/_public.team.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/core.level1.tsx
var core_level1_exports = {};
__export(core_level1_exports, {
  default: () => core_level1_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function CoreLevel1() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      "Welcome to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react9.Link, { to: "/core/level1", children: "Level 1" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 8,
        columnNumber: 20
      }, this),
      ". You can view our Core Level 1 users."
    ] }, void 0, !0, {
      fileName: "app/routes/core.level1.tsx",
      lineNumber: 7,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react9.Link, { to: "./bekah", children: "Bekah" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react9.Link, { to: "./joe", children: "Joe" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react9.Link, { to: "./jack", children: "Jack" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/core.level1.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/core.level1.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/core.level1.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var core_level1_default = CoreLevel1;

// app/routes/core._index.tsx
var core_index_exports = {};
__export(core_index_exports, {
  default: () => core_index_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function CoreIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "Core users can be viewed here." }, void 0, !1, {
    fileName: "app/routes/core._index.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var core_index_default = CoreIndex;

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  default: () => auth_login_default,
  meta: () => meta2
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Login | Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function AuthLogin() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: "Log in here." }, void 0, !1, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
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
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material9 = require("@mui/material"), import_react11 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/components/GenericErrorPage.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function GenericErrorPage() {
  let error = (0, import_react10.useRouteError)();
  if (console.log("is error", error), (0, import_react10.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { children: "Oops" }, void 0, !1, {
        fileName: "app/components/GenericErrorPage.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: [
        "Status: ",
        error.status
      ] }, void 0, !0, {
        fileName: "app/components/GenericErrorPage.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: JSON.stringify(error) }, void 0, !1, {
        fileName: "app/components/GenericErrorPage.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/GenericErrorPage.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this);
  let errorMessage = "Unknown error";
  return errorMessage = JSON.stringify(error), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { children: "Uh oh ..." }, void 0, !1, {
      fileName: "app/components/GenericErrorPage.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Something went wrong." }, void 0, !1, {
      fileName: "app/components/GenericErrorPage.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("pre", { children: errorMessage }, void 0, !1, {
      fileName: "app/components/GenericErrorPage.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/GenericErrorPage.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var GenericErrorPage_default = GenericErrorPage;

// app/models/products.model.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
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
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Products2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { style: { marginTop: "30px" }, className: "cool-font", children: [
      "Welcome to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react11.NavLink, { to: "/products", children: "Products" }, void 0, !1, {
        fileName: "app/routes/products.tsx",
        lineNumber: 21,
        columnNumber: 20
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_material9.Stack, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, my: 3, children: navOptions.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react11.NavLink, { to: navItem.path, children: navItem.displayName }, navItem.id, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(GenericErrorPage_default, {}, void 0, !1, {
    fileName: "app/routes/products.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
var products_default = Products2;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: "ABOUT!!!" }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var about_default = About;

// app/routes/core.tsx
var core_exports = {};
__export(core_exports, {
  default: () => core_default,
  meta: () => meta3
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material10 = require("@mui/material"), import_react12 = require("@remix-run/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), meta3 = (res) => [
  { title: "Core" },
  { name: "description", content: "Welcome to Remix!" }
];
function Core() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_material10.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { marginTop: "30px" }, className: "cool-font", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react12.Link, { to: "/core", children: "Core" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      " is where you can view our Core users."
    ] }, void 0, !0, {
      fileName: "app/routes/core.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react12.Link, { to: "./john", children: "John" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react12.Link, { to: "./lucy", children: "Lucy" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react12.Link, { to: "./kevin", children: "Kevin" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react12.Link, { to: "./level1", children: "Go to Core Level 1 Users" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/core.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
      fileName: "app/routes/core.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/core.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/core.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var core_default = Core;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var assets_manifest_default = { entry: { module: "/build/entry.client-GVLYEY6D.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-PI7TTO4D.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-A6HGE4TO.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PMOPVL7S.js", imports: ["/build/_shared/chunk-YSK3FRTS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-2YCYCT4L.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-LH4S2RSR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.team": { id: "routes/_public.team", parentId: "root", path: "team", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.team-IBFLN7JG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-JMHX5VSC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core": { id: "routes/core", parentId: "root", path: "core", index: void 0, caseSensitive: void 0, module: "/build/routes/core-QZWBM2VG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.$userId": { id: "routes/core.$userId", parentId: "routes/core", path: ":userId", index: void 0, caseSensitive: void 0, module: "/build/routes/core.$userId-UPYT2BKS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core._index": { id: "routes/core._index", parentId: "routes/core", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/core._index-NMVV7GJL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1": { id: "routes/core.level1", parentId: "routes/core", path: "level1", index: void 0, caseSensitive: void 0, module: "/build/routes/core.level1-L3RAVHPY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1.$userId": { id: "routes/core.level1.$userId", parentId: "routes/core.level1", path: ":userId", index: void 0, caseSensitive: void 0, module: "/build/routes/core.level1.$userId-2W4EYJ6E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1._index": { id: "routes/core.level1._index", parentId: "routes/core.level1", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/core.level1._index-4UEPE3AC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-WL3SEXHX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/products._index": { id: "routes/products._index", parentId: "routes/products", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/products._index-J2O4MJ6X.js", imports: ["/build/_shared/chunk-YSK3FRTS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.add-new": { id: "routes/products.add-new", parentId: "routes/products", path: "add-new", index: void 0, caseSensitive: void 0, module: "/build/routes/products.add-new-ELR6Z4PE.js", imports: ["/build/_shared/chunk-DKV33D6I.js", "/build/_shared/chunk-YSK3FRTS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.view": { id: "routes/products.view", parentId: "routes/products", path: "view", index: void 0, caseSensitive: void 0, module: "/build/routes/products.view-IJZNA6J3.js", imports: ["/build/_shared/chunk-DKV33D6I.js", "/build/_shared/chunk-YSK3FRTS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ad35050a", hmr: { runtime: "/build/_shared\\chunk-A6HGE4TO.js", timestamp: 1689043671216 }, url: "/build/manifest-AD35050A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, dev = { port: 3001 }, routes = {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
});
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
//# sourceMappingURL=index.js.map
