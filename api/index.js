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
    var cssBundleHref2 = "/build/css-bundle-2S76IFVK.css";
    exports.cssBundleHref = cssBundleHref2;
  }
});

// empty-module:~/client-components/DateDisplay.client
var require_DateDisplay = __commonJS({
  "empty-module:~/client-components/DateDisplay.client"(exports, module2) {
    init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
    module2.exports = {};
  }
});

// empty-module:~/client-components/BrokenOnServer.client
var require_BrokenOnServer = __commonJS({
  "empty-module:~/client-components/BrokenOnServer.client"(exports, module2) {
    init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
    module2.exports = {};
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
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_css_bundle = __toESM(require_dist()), import_react3 = require("@remix-run/react");

// app/components/MainNav.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material = require("@mui/material"), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function MainNav({ children }) {
  let navigation = (0, import_react2.useNavigation)(), location = (0, import_react2.useLocation)(), showLoading = navigation.state === "loading" || navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Stack, { direction: "column", justifyContent: "start", alignItems: "center", spacing: 2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Stack, { direction: "row", justifyContent: "center", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/mixing.png", alt: "logo", height: "29px" }, void 0, !1, {
        fileName: "app/components/MainNav.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { style: { marginLeft: "10px" }, children: "Kevin's Grocery List" }, void 0, !1, {
        fileName: "app/components/MainNav.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Stack, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: navOptions.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.NavLink,
      {
        prefetch: getPrefetch(navItem.id),
        to: navItem.path,
        className: ({ isActive, isPending }) => location.pathname.includes("/item/") ? location.pathname.includes(navItem.path.split("/")[1]) ? "active" : "" : isPending ? "pending" : isActive ? "active" : "",
        children: navItem.displayName
      },
      navItem.id,
      !1,
      {
        fileName: "app/components/MainNav.tsx",
        lineNumber: 33,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Box, { height: "4px", width: "23rem", children: showLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.LinearProgress, { color: navigation.state === "submitting" ? "warning" : "primary" }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 52,
      columnNumber: 26
    }, this) }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Stack, { id: "main-content", direction: "row", justifyContent: "center", alignItems: "start", width: "100%", height: "100vh", children }, void 0, !1, {
      fileName: "app/components/MainNav.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNav.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var navOptions = [
  {
    displayName: "Home",
    path: "/",
    id: "home"
  },
  {
    displayName: "Wishlist",
    path: "/wishlist",
    id: "wishlist"
  },
  {
    displayName: "Deals",
    path: "/deals",
    id: "deals"
  },
  {
    displayName: "Items",
    path: "/items/list",
    id: "items"
  },
  {
    displayName: "About",
    path: "/about",
    id: "about"
  },
  {
    displayName: "Client Only (no SSR)",
    path: "/clientonly",
    id: "clientonly"
  },
  {
    displayName: "Team",
    path: "/team",
    id: "team"
  },
  {
    displayName: "Login",
    path: "/login",
    id: "login"
  },
  {
    displayName: "Doesnt exist",
    path: "/aaa",
    id: "aaa"
  }
], getPrefetch = (routeId) => {
  switch (routeId) {
    case "items":
    case "core":
      return "intent";
    default:
      return "none";
  }
};

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function Document({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNav, { children }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: "Kevin's Grocery List", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  let err = (0, import_react3.useRouteError)(), comp = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    "Error: ",
    err.status,
    " - ",
    err.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 67,
    columnNumber: 14
  }, this);
  return (0, import_react3.isRouteErrorResponse)(error) && (comp = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Oops" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Status: ",
      error.status,
      " - ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.data.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/items/list", children: "Back to Safely" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: "Error! | Kevin's Grocery List", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
    comp,
    " "
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/items.list.edit.$itemId.tsx
var items_list_edit_itemId_exports = {};
__export(items_list_edit_itemId_exports, {
  default: () => items_list_edit_itemId_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material4 = require("@mui/material"), import_react4 = require("@remix-run/react");

// app/components/DialogLayout.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material2 = require("@mui/material"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function DialogLayout({ open, title, maxWidth = "lg", onClose, children }) {
  let handleClose = () => {
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_material2.Dialog,
    {
      fullWidth: !0,
      maxWidth,
      open,
      onClose: handleClose,
      transitionDuration: 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material2.DialogTitle, { sx: { backgroundColor: "background.default", color: "text.primary" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material2.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
          title,
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material2.Button, { "aria-label": "close", onClick: handleClose, children: " Close " }, void 0, !1, {
            fileName: "app/components/DialogLayout.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/DialogLayout.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/DialogLayout.tsx",
          lineNumber: 27,
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

// app/routes/items.list.edit.$itemId.tsx
var import_yup = require("@hookform/resolvers/yup");

// app/constants/schemas.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var yup = __toESM(require("yup")), productSchema = yup.object({
  name: yup.string().trim().required("Name is required").min(2, "Name has to be at least 2 characters"),
  price: yup.number().required("Price is required").min(1)
});

// app/routes/items.list.edit.$itemId.tsx
var import_react_hook_form2 = require("react-hook-form");

// app/shared/hook-forms/TextField.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material3 = require("@mui/material"), import_react_hook_form = require("react-hook-form"), import_colors = require("@mui/material/colors"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function HFTextField({ name, label, control, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react_hook_form.Controller,
    {
      name,
      control,
      render: ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.FormControl, { fullWidth: props.fullWidth, size: props.size ?? "medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.TextField, { id: name, label, ...props, ...field, error: !!error, helperText: void 0 }, void 0, !1, {
          fileName: "app/shared/hook-forms/TextField.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.FormHelperText, { id: `${name}-helper-text`, error: !!error, sx: { ml: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Typography, { variant: "caption", color: import_colors.red, component: "span", children: [
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

// app/routes/items.list.edit.$itemId.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ItemsEdit() {
  var _a;
  let nav = (0, import_react4.useNavigate)(), location = (0, import_react4.useLocation)(), match = (0, import_react4.useMatches)(), params = (0, import_react4.useParams)(), submit = (0, import_react4.useSubmit)(), transition = (0, import_react4.useNavigation)(), currentItem = (((_a = match.find((route) => route.id === "routes/items")) == null ? void 0 : _a.data) ?? []).find((item) => item.id === params.itemId) ?? { name: "", price: 0 }, { handleSubmit, control, reset } = (0, import_react_hook_form2.useForm)({
    defaultValues: { ...currentItem },
    resolver: (0, import_yup.yupResolver)(productSchema),
    mode: "onChange"
  }), handleFormSubmit = (product, event) => {
    submit({ ...product, intent: "update" }, {
      action: "/items/list",
      method: "post"
    });
  }, handleOnReset = () => {
    reset();
  }, handleClose = () => {
    nav("/items/list", {
      preventScrollReset: !1
    });
  };
  return currentItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogLayout_default, { open: !0, onClose: handleClose, title: "Edit Item", maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Typography, { variant: "h6", children: "Edit:" }, void 0, !1, {
      fileName: "app/routes/items.list.edit.$itemId.tsx",
      lineNumber: 79,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TextField_default, { name: "name", label: "Name", control, variant: "standard", type: "text", helperText: " name", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/items.list.edit.$itemId.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TextField_default, { name: "price", label: "Price", control, type: "number", variant: "standard", helperText: "Price", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/items.list.edit.$itemId.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.DialogActions, { sx: { width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Button, { type: "submit", disabled: transition.state === "submitting" || transition.state === "loading", name: "intent", value: "update", children: transition.state === "submitting" ? "Updating..." : "Update" }, void 0, !1, {
          fileName: "app/routes/items.list.edit.$itemId.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Button, { type: "reset", onClick: handleOnReset, children: "Reset" }, void 0, !1, {
          fileName: "app/routes/items.list.edit.$itemId.tsx",
          lineNumber: 89,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/items.list.edit.$itemId.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/items.list.edit.$itemId.tsx",
      lineNumber: 82,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 78,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 77,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogLayout_default, { open: !0, onClose: handleClose, title: "Edit Item", maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Typography, { variant: "h6", children: "Item not found!" }, void 0, !1, {
      fileName: "app/routes/items.list.edit.$itemId.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Divider, {}, void 0, !1, {
      fileName: "app/routes/items.list.edit.$itemId.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.DialogActions, { sx: { width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material4.Button, { onClick: handleClose, children: "Close" }, void 0, !1, {
      fileName: "app/routes/items.list.edit.$itemId.tsx",
      lineNumber: 63,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/items.list.edit.$itemId.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 57,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.edit.$itemId.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this);
}
var items_list_edit_itemId_default = ItemsEdit;

// app/routes/core.level1.$userId.tsx
var core_level1_userId_exports = {};
__export(core_level1_userId_exports, {
  default: () => core_level1_userId_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function CoreLevel1UserPage({ userId }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "This is Core Level 1 User profile:" }, void 0, !1, {
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
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function CoreLevel1Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "Core Level 1 users have Level One Access." }, void 0, !1, {
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

// app/routes/item.$itemId.edit.tsx
var item_itemId_edit_exports = {};
__export(item_itemId_edit_exports, {
  default: () => item_itemId_edit_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material5 = require("@mui/material"), import_react5 = require("@remix-run/react");
var import_yup2 = require("@hookform/resolvers/yup");
var import_react_hook_form3 = require("react-hook-form");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function EditItem() {
  var _a;
  let params = (0, import_react5.useParams)(), nav = (0, import_react5.useNavigate)(), match = (0, import_react5.useMatches)(), submit = (0, import_react5.useSubmit)(), transition = (0, import_react5.useNavigation)(), [search, setSearchParams] = (0, import_react5.useSearchParams)(), afterCloseRedirectUrl = search.get("dialogCloseRedirect") || `/item/${params.itemId}`, item = (_a = match.find((route) => route.id === "routes/item.$itemId")) == null ? void 0 : _a.data, { handleSubmit, control, reset } = (0, import_react_hook_form3.useForm)({
    defaultValues: { ...item ?? {} },
    resolver: (0, import_yup2.yupResolver)(productSchema),
    mode: "onChange"
  }), handleFormSubmit = (product, event) => {
    submit({ ...product, intent: "update" }, {
      action: "/item/item.$itemId",
      method: "patch",
      replace: !0
    });
  }, handleOnReset = () => {
    reset();
  }, handleClose = () => {
    nav(`${afterCloseRedirectUrl}`, { replace: !0 });
  };
  return item ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DialogLayout_default, { open: !0, onClose: handleClose, title: "Edit Item", maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Typography, { variant: "h6", children: "Edit:" }, void 0, !1, {
      fileName: "app/routes/item.$itemId.edit.tsx",
      lineNumber: 75,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextField_default, { name: "name", label: "Name", control, variant: "standard", type: "text", helperText: " name", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/item.$itemId.edit.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextField_default, { name: "price", label: "Price", control, type: "number", variant: "standard", helperText: "Price", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/item.$itemId.edit.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.DialogActions, { sx: { width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Button, { type: "submit", disabled: transition.state === "submitting" || transition.state === "loading", name: "intent", value: "update", children: transition.state === "submitting" ? "Updating..." : "Update" }, void 0, !1, {
          fileName: "app/routes/item.$itemId.edit.tsx",
          lineNumber: 82,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Button, { type: "reset", onClick: handleOnReset, children: "Reset" }, void 0, !1, {
          fileName: "app/routes/item.$itemId.edit.tsx",
          lineNumber: 85,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/item.$itemId.edit.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/item.$itemId.edit.tsx",
      lineNumber: 78,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 74,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 73,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DialogLayout_default, { open: !0, onClose: handleClose, title: "Edit Item", maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Typography, { variant: "h6", children: [
      "Item ",
      params.itemId,
      " not found!"
    ] }, void 0, !0, {
      fileName: "app/routes/item.$itemId.edit.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Divider, {}, void 0, !1, {
      fileName: "app/routes/item.$itemId.edit.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.DialogActions, { sx: { width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material5.Button, { onClick: handleClose, children: "Close" }, void 0, !1, {
      fileName: "app/routes/item.$itemId.edit.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/item.$itemId.edit.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/item.$itemId.edit.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this);
}
var item_itemId_edit_default = EditItem;

// app/routes/products.add-new.tsx
var products_add_new_exports = {};
__export(products_add_new_exports, {
  action: () => action,
  default: () => products_add_new_default,
  loader: () => loader
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material7 = require("@mui/material"), import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

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

// app/components/Products.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material6 = require("@mui/material");
var import_react_hook_form4 = require("react-hook-form"), import_yup3 = require("@hookform/resolvers/yup");
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), initValue = {
  name: "Cool product",
  id: "1",
  price: 5
}, renderCount = 0;
function Products({ actionUrl = "/products" }) {
  let submit = (0, import_react6.useSubmit)(), transition = (0, import_react6.useNavigation)(), { handleSubmit, control, reset } = (0, import_react_hook_form4.useForm)({
    defaultValues: initValue,
    resolver: (0, import_yup3.yupResolver)(productSchema)
    //mode: "onChange"
  }), handleFormSubmit = (product, event) => {
    submit(product, {
      action: actionUrl,
      method: "post"
    });
  }, handleOnReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Typography, { variant: "h6", children: "Add a new Product" }, void 0, !1, {
      fileName: "app/components/Products.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: [
      "Render count: ",
      renderCount
    ] }, void 0, !0, {
      fileName: "app/components/Products.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "12rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react6.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextField_default, { name: "name", label: "Name", control, variant: "standard", type: "text", helperText: " name", fullWidth: !0 }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextField_default, { name: "id", label: "ID", control, type: "text", variant: "standard", helperText: " ID", fullWidth: !0 }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TextField_default, { name: "price", label: "Price", control, type: "number", variant: "standard", helperText: "Price", fullWidth: !0 }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Divider, { variant: "fullWidth", flexItem: !0, sx: { my: 3 } }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Button, { type: "submit", disabled: transition.state === "submitting" || transition.state === "loading", children: transition.state === "submitting" ? "Creating..." : "Create" }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_material6.Button, { type: "reset", onClick: handleOnReset, children: "Reset" }, void 0, !1, {
        fileName: "app/components/Products.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Products.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Products.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Products.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
var Products_default = Products;

// app/routes/products.add-new.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function ProductsAdd() {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material7.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Products_default, { actionUrl: "/products/add-new" }, void 0, !1, {
      fileName: "app/routes/products.add-new.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_material7.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 1, children: data.map((res) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
      "Name: ",
      res.name,
      " | Price: ",
      res.price,
      " | Id: ",
      res.id
    ] }, res.fireId, !0, {
      fileName: "app/routes/products.add-new.tsx",
      lineNumber: 23,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/products.add-new.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.add-new.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
async function action(args) {
  return productionCreateAction(args);
}
async function loader({ request, params }) {
  let result = await fetchGet("https://kq-1-1a499.firebaseio.com/remix-1-products.json", "GET"), keys = Object.keys(result), products = [];
  return keys.forEach((key) => {
    products.push({
      fireId: key,
      ...result[key]
    });
  }), products.reverse(), (0, import_node3.json)(products);
}
var products_add_new_default = ProductsAdd;

// app/routes/products._index.tsx
var products_index_exports = {};
__export(products_index_exports, {
  default: () => products_index_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ProductsIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: { marginTop: "30px" }, className: "cool-font", children: [
    "Welcome to ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react8.NavLink, { to: "/products", children: "Products Index Page" }, void 0, !1, {
      fileName: "app/routes/products._index.tsx",
      lineNumber: 11,
      columnNumber: 18
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products._index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var products_index_default = ProductsIndex;

// app/routes/items.list.add.tsx
var items_list_add_exports = {};
__export(items_list_add_exports, {
  default: () => items_list_add_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material8 = require("@mui/material"), import_react9 = require("@remix-run/react");
var import_yup4 = require("@hookform/resolvers/yup");
var import_react_hook_form5 = require("react-hook-form"), import_faker = require("@faker-js/faker"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), initValue2 = {
  name: import_faker.faker.commerce.product(),
  price: import_faker.faker.number.float({ min: 10, max: 1e3, precision: 0.01 })
};
function ItemsAdd() {
  let nav = (0, import_react9.useNavigate)(), submit = (0, import_react9.useSubmit)(), transition = (0, import_react9.useNavigation)(), { handleSubmit, control, reset } = (0, import_react_hook_form5.useForm)({
    defaultValues: {
      name: import_faker.faker.commerce.product(),
      price: import_faker.faker.number.float({ min: 10, max: 1e3, precision: 0.01 })
    },
    resolver: (0, import_yup4.yupResolver)(productSchema)
    //mode: "onChange"
  }), handleFormSubmit = (product, event) => {
    submit(product, {
      action: "/items/list",
      method: "post"
    });
  }, handleOnReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(DialogLayout_default, { open: !0, onClose: () => {
    nav("/items");
  }, title: "Add New Item", maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react9.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Typography, { variant: "h6", children: "What do you want to add?" }, void 0, !1, {
      fileName: "app/routes/items.list.add.tsx",
      lineNumber: 52,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TextField_default, { name: "name", label: "Name", control, variant: "standard", type: "text", helperText: " name", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/items.list.add.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TextField_default, { name: "price", label: "Price", control, type: "number", variant: "standard", helperText: "Price", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/items.list.add.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.DialogActions, { sx: { width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Button, { type: "submit", disabled: transition.state === "submitting" || transition.state === "loading", children: transition.state === "submitting" ? "Creating..." : "Create" }, void 0, !1, {
          fileName: "app/routes/items.list.add.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material8.Button, { type: "reset", onClick: handleOnReset, children: "Reset" }, void 0, !1, {
          fileName: "app/routes/items.list.add.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/items.list.add.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/items.list.add.tsx",
      lineNumber: 55,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.list.add.tsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.add.tsx",
    lineNumber: 50,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.add.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.add.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/items.list.add.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var items_list_add_default = ItemsAdd;

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader2,
  meta: () => meta
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_node5 = require("@remix-run/node"), import_material10 = require("@mui/material"), import_react11 = require("@remix-run/react");

// app/components/Item.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material9 = require("@mui/material"), import_Delete = __toESM(require("@mui/icons-material/Delete")), import_Edit = __toESM(require("@mui/icons-material/Edit")), import_react10 = require("@remix-run/react"), import_remix_utils = require("remix-utils"), import_DateDisplay = __toESM(require_DateDisplay());

// app/shared/css.utils.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var ellipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%"
}, ellipsisBlock = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
  display: "block"
};

// app/components/Item.tsx
var import_LocalGroceryStore = __toESM(require("@mui/icons-material/LocalGroceryStore")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Item({ item, onAction }) {
  let deleteFetcher = (0, import_react10.useFetcher)(), handleActionClick = (action8) => () => {
    if (action8 === "delete") {
      if (!confirm(`Are you sure you want to delete ${item.name}?`))
        return;
      deleteFetcher.submit({ id: item.id }, {
        method: "delete",
        action: "/?index"
      });
    } else
      action8 === "edit" && onAction(action8);
  }, apiWorking = deleteFetcher.state === "submitting" || deleteFetcher.state === "loading";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_material9.ListItem,
    {
      dense: !0,
      sx: { pr: "100px", opacity: apiWorking ? 0.5 : 1 },
      secondaryAction: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material9.Stack, { direction: "row", justifyContent: "end", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material9.IconButton, { edge: "end", "aria-label": "delete", size: "small", onClick: handleActionClick("edit"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Edit.default, {}, void 0, !1, {
          fileName: "app/components/Item.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Item.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_material9.IconButton,
          {
            edge: "end",
            "aria-label": "delete",
            size: "small",
            onClick: handleActionClick("delete"),
            disabled: !!apiWorking,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Delete.default, {}, void 0, !1, {
              fileName: "app/components/Item.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Item.tsx",
            lineNumber: 55,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Item.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material9.ListItemAvatar, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material9.Avatar, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_LocalGroceryStore.default, { fontSize: "small" }, void 0, !1, {
          fileName: "app/components/Item.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Item.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Item.tsx",
          lineNumber: 62,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_material9.ListItemText,
          {
            primaryTypographyProps: { ...ellipsis },
            primary: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { style: { ...ellipsisBlock }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react10.Link, { to: `/item/${item.id}`, children: [
                item.name,
                " - $",
                item.price
              ] }, void 0, !0, {
                fileName: "app/components/Item.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, this),
              apiWorking && " (Deleting...)"
            ] }, void 0, !0, {
              fileName: "app/components/Item.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            secondary: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { style: { ...ellipsisBlock }, children: [
              "Created: ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: "Loading..." }, void 0, !1, {
                fileName: "app/components/Item.tsx",
                lineNumber: 80,
                columnNumber: 38
              }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_DateDisplay.default, { date: item.dateAdded }, void 0, !1, {
                fileName: "app/components/Item.tsx",
                lineNumber: 81,
                columnNumber: 24
              }, this) }, void 0, !1, {
                fileName: "app/components/Item.tsx",
                lineNumber: 80,
                columnNumber: 15
              }, this),
              item.updatedAt && item.updatedAt !== item.dateAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
                "( updated:",
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: "Loading..." }, void 0, !1, {
                  fileName: "app/components/Item.tsx",
                  lineNumber: 87,
                  columnNumber: 40
                }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_DateDisplay.default, { date: item.updatedAt }, void 0, !1, {
                  fileName: "app/components/Item.tsx",
                  lineNumber: 88,
                  columnNumber: 26
                }, this) }, void 0, !1, {
                  fileName: "app/components/Item.tsx",
                  lineNumber: 87,
                  columnNumber: 17
                }, this),
                ")"
              ] }, void 0, !0, {
                fileName: "app/components/Item.tsx",
                lineNumber: 84,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Item.tsx",
              lineNumber: 78,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Item.tsx",
            lineNumber: 67,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Item.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}
var Item_default = Item;

// app/routes/_public._index.tsx
var import_react12 = require("react"), import_Add = __toESM(require("@mui/icons-material/Add"));

// app/api/items.server.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();

// app/api/database.server.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient(), console.log("DEV Created new DB connection for first time")), console.log("Assigning existing DB connection"), prisma = global.__db__, prisma.$connect();

// app/api/items.server.ts
var import_node4 = require("@remix-run/node");
async function addItem(item) {
  try {
    return prisma.item.create({
      data: {
        name: item.name,
        price: +item.price
      }
    });
  } catch {
    throw new Error("Error occured trying to add item.");
  }
}
async function getAllItems() {
  try {
    return await prisma.item.findMany({
      orderBy: {
        dateAdded: "desc"
      }
    });
  } catch {
    throw new Error("Error occured trying to get all items.");
  }
}
async function getItemById(id) {
  try {
    return await prisma.item.findUnique({
      where: {
        id
      }
    });
  } catch (error) {
    throw console.error("Prisma Error Get Item By Id: ", error), (0, import_node4.json)(
      { invalid: id, message: "Error occured trying to find item." },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
async function updateItemById(id, item) {
  try {
    return await prisma.item.update({
      where: {
        id
      },
      data: {
        name: item.name,
        price: +item.price
      }
    });
  } catch {
    throw new Error("Error occured trying to update item.");
  }
}
async function deleteItemById(id) {
  try {
    return await prisma.item.delete({
      where: {
        id
      }
    });
  } catch {
    throw new Error("Error occured trying to delete item.");
  }
}

// app/routes/_public._index.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Kevin's Cool Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  let nav = (0, import_react11.useNavigate)(), data = (0, import_react11.useLoaderData)(), fetcher = (0, import_react11.useFetcher)(), handleItemAction = (0, import_react12.useCallback)((item) => (actionId) => {
    switch (actionId) {
      case "edit": {
        nav({
          pathname: `/item/${item.id}/edit`,
          search: "?dialogCloseRedirect=/"
        }, { state: { item } });
        break;
      }
    }
  }, [nav]);
  return data.length < 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    "Item list is empty! ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react11.Link, { to: "add", children: "Add an item here.  " }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 40,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material10.Stack, { direction: "column", justifyContent: "start", alignItems: "center", id: "item-list", width: "30rem", spacing: 2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material10.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material10.Typography, { flexBasis: "35%", textAlign: "start", children: [
        data.length,
        " items available."
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material10.Stack, { direction: "row", justifyContent: "end", alignItems: "center", spacing: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react11.Link, { to: "/add", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material10.Button, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Add.default, {}, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 51,
        columnNumber: 33
      }, this), variant: "text", children: "New Item" }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material10.Stack, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", spacing: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_material10.List, { dense: !0, sx: { width: "100%" }, children: data.map((res) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Item_default, { item: res, onAction: handleItemAction(res) }, res.id, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
async function loader2() {
  let result = await getAllItems();
  return (0, import_node5.json)(
    result,
    {
      headers: {
        "Cache-Control": "max-age=3600, public"
      }
    }
  );
}
async function action2({ request, context, params }) {
  let itemId = (await request.formData()).get("id");
  if (itemId)
    return await deleteItemById(itemId), (0, import_node5.redirect)("/");
  throw (0, import_node5.json)({ message: "No ID provided." }, { status: 400 });
}

// app/routes/items.$itemId.tsx
var items_itemId_exports = {};
__export(items_itemId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action3,
  default: () => items_itemId_default,
  loader: () => loader3
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material11 = require("@mui/material"), import_node6 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function ItemDetail() {
  let itemDetail = (0, import_react13.useLoaderData)(), params = (0, import_react13.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_material11.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 3, width: "30rem", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_material11.Typography, { width: "100%", textAlign: "center", children: "Item Detail" }, void 0, !1, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_material11.Divider, { flexItem: !0, variant: "fullWidth" }, void 0, !1, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_material11.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 1, children: itemDetail ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_material11.Typography, { width: "100%", textAlign: "center", children: [
        "Name: ",
        itemDetail.name
      ] }, void 0, !0, {
        fileName: "app/routes/items.$itemId.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_material11.Typography, { width: "100%", textAlign: "center", children: [
        "Price: $",
        itemDetail.price
      ] }, void 0, !0, {
        fileName: "app/routes/items.$itemId.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
      "Did not find a item with the id: ",
      params.itemId
    ] }, void 0, !0, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 24,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.$itemId.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
async function loader3({ request, params, context }) {
  let itemId = params.itemId, itemDetail = await getItemById(itemId).catch((err) => {
    throw (0, import_node6.json)(
      { invalid: itemId, message: `Sorry~! Could not find an Item with the provided ID. ${JSON.stringify(err)}` },
      { status: 500, statusText: "Internal Server Error" }
    );
  });
  return (0, import_node6.json)(itemDetail);
}
async function action3({ request, context, params }) {
  return params.itemId ? (await deleteItemById(params.itemId), (0, import_node6.json)({ deleted: !0 }, { status: 200, statusText: "OK" })) : (0, import_node6.redirect)("/items/list");
}
function ErrorBoundary2() {
  let error = (0, import_react13.useRouteError)();
  return (0, import_react13.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: "Oops" }, void 0, !1, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
      "Status: ",
      error.status,
      " - ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: error.data.message }, void 0, !1, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react13.Link, { to: "/items/list", children: "Back to Safely" }, void 0, !1, {
      fileName: "app/routes/items.$itemId.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.$itemId.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_material11.Stack, { children: "Error occured!" }, void 0, !1, {
    fileName: "app/routes/items.$itemId.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
var items_itemId_default = ItemDetail;

// app/routes/products.view.tsx
var products_view_exports = {};
__export(products_view_exports, {
  action: () => action4,
  default: () => products_view_default,
  loader: () => loader4
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material12 = require("@mui/material"), import_react14 = require("@remix-run/react"), import_react15 = require("react");
var import_node7 = require("@remix-run/node"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function ProductsView() {
  let transition = (0, import_react14.useNavigation)(), [open, setOpen] = (0, import_react15.useState)(!1), [searchParams, setSearchParams] = (0, import_react14.useSearchParams)(), data = (0, import_react14.useLoaderData)(), handleClickOpen = () => {
    setOpen(!0), setSearchParams({
      openCreateDialog: "true"
    });
  }, handleClose = () => {
    setOpen(!1), setSearchParams();
  };
  return (0, import_react15.useEffect)(() => {
    JSON.parse(searchParams.get("openCreateDialog") || "false") ? setOpen(!0) : setOpen(!1);
  }, [searchParams]), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_material12.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_material12.Stack, { direction: "row", justifyContent: "start", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "View Products" }, void 0, !1, {
        fileName: "app/routes/products.view.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_material12.Button, { variant: "outlined", onClick: handleClickOpen, children: transition.state === "submitting" ? "Creating..." : "Create" }, void 0, !1, {
        fileName: "app/routes/products.view.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "Data:" }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_material12.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 1, children: data.map((res) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      "Name: ",
      res.name,
      " | Price: ",
      res.price,
      " | Id: ",
      res.id
    ] }, res.fireId, !0, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DialogLayout_default, { open, title: "Add Product", onClose: handleClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_material12.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Products_default, { actionUrl: "/products/view" }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.view.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.view.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
async function action4(args) {
  return productionCreateAction(args);
}
async function loader4({ request, params }) {
  let result = await fetchGet("https://kq-1-1a499.firebaseio.com/remix-1-products.json", "GET"), keys = Object.keys(result), products = [];
  return keys.forEach((key) => {
    products.push({
      fireId: key,
      ...result[key]
    });
  }), products.reverse(), (0, import_node7.json)(products);
}
var products_view_default = ProductsView;

// app/routes/core.$userId.tsx
var core_userId_exports = {};
__export(core_userId_exports, {
  default: () => core_userId_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function CoreUserDisplay() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: "Core User Profile:" }, void 0, !1, {
    fileName: "app/routes/core.$userId.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var core_userId_default = CoreUserDisplay;

// app/routes/item.$itemId.tsx
var item_itemId_exports = {};
__export(item_itemId_exports, {
  action: () => action5,
  default: () => item_itemId_default,
  loader: () => loader5
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material13 = require("@mui/material"), import_node8 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ItemDetail2() {
  let itemDetail = (0, import_react16.useLoaderData)(), params = (0, import_react16.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_material13.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 3, width: "30rem", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_material13.Typography, { width: "100%", textAlign: "center", children: "Item Detail" }, void 0, !1, {
      fileName: "app/routes/item.$itemId.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_material13.Divider, { flexItem: !0, variant: "fullWidth" }, void 0, !1, {
      fileName: "app/routes/item.$itemId.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_material13.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 1, children: itemDetail ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_material13.Typography, { width: "100%", children: [
        "Name: ",
        itemDetail.name
      ] }, void 0, !0, {
        fileName: "app/routes/item.$itemId.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_material13.Typography, { width: "100%", children: [
        "Price: $",
        itemDetail.price
      ] }, void 0, !0, {
        fileName: "app/routes/item.$itemId.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/item.$itemId.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      "Did not find a item with the id: ",
      params.itemId
    ] }, void 0, !0, {
      fileName: "app/routes/item.$itemId.tsx",
      lineNumber: 24,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/routes/item.$itemId.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/item.$itemId.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/item.$itemId.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
async function loader5({ request, params, context }) {
  let itemId = params.itemId, itemDetail = await getItemById(itemId).catch((err) => {
    throw (0, import_node8.json)(
      { invalid: itemId, message: `Sorry~! Could not find an Item with the provided ID. ${JSON.stringify(err)}` },
      { status: 500, statusText: "Internal Server Error" }
    );
  });
  return (0, import_node8.json)(itemDetail);
}
async function action5({ request, context, params }) {
  let body = await request.formData(), intent = body.get("intent");
  if (request.method === "DELETE" && !intent)
    return await deleteItemById(params.itemId), (0, import_node8.redirect)("/");
  if (intent === "update")
    return await updateItemById(body.get("id"), {
      name: body.get("name"),
      price: +(body.get("price") ?? -1)
    }), (0, import_node8.redirect)(`/item/${body.get("id")}`);
}
var item_itemId_default = ItemDetail2;

// app/routes/items._index.tsx
var items_index_exports = {};
__export(items_index_exports, {
  loader: () => loader6
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_node9 = require("@remix-run/node"), loader6 = async ({ request }) => (0, import_node9.redirect)("/items/list");

// app/routes/_public.team.tsx
var public_team_exports = {};
__export(public_team_exports, {
  default: () => Team
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Team() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: "Meet the team." }, void 0, !1, {
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
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function CoreLevel1() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
      "Welcome to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react17.Link, { to: "/core/level1", children: "Level 1" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 8,
        columnNumber: 20
      }, this),
      ". You can view our Core Level 1 users."
    ] }, void 0, !0, {
      fileName: "app/routes/core.level1.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react17.Link, { prefetch: "intent", to: "./bekah", children: "Bekah" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react17.Link, { prefetch: "intent", to: "./joe", children: "Joe" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react17.Link, { prefetch: "intent", to: "./jack", children: "Jack" }, void 0, !1, {
        fileName: "app/routes/core.level1.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/core.level1.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react17.Outlet, {}, void 0, !1, {
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
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function CoreIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: "Core users can be viewed here. (Core Index)" }, void 0, !1, {
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
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Login | Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function AuthLogin() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: "Log in here." }, void 0, !1, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var auth_login_default = AuthLogin;

// app/routes/_public.add.tsx
var public_add_exports = {};
__export(public_add_exports, {
  action: () => action6,
  default: () => public_add_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material14 = require("@mui/material"), import_react18 = require("@remix-run/react");
var import_yup5 = require("@hookform/resolvers/yup");
var import_react_hook_form6 = require("react-hook-form"), import_faker2 = require("@faker-js/faker"), import_node10 = require("@remix-run/node");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), initValue3 = {
  name: import_faker2.faker.commerce.product(),
  price: import_faker2.faker.number.float({ min: 10, max: 1e3, precision: 0.01 })
};
function ItemsAdd2() {
  let nav = (0, import_react18.useNavigate)(), submit = (0, import_react18.useSubmit)(), transition = (0, import_react18.useNavigation)(), { handleSubmit, control, reset } = (0, import_react_hook_form6.useForm)({
    defaultValues: {
      name: import_faker2.faker.commerce.product(),
      price: import_faker2.faker.number.float({ min: 10, max: 1e3, precision: 0.01 })
    },
    resolver: (0, import_yup5.yupResolver)(productSchema)
    //mode: "onChange"
  }), handleFormSubmit = (product, event) => {
    submit(product, {
      method: "post"
    });
  }, handleOnReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(DialogLayout_default, { open: !0, onClose: () => {
    nav("/");
  }, title: "Add New Item", maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react18.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_material14.DialogContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_material14.Stack, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_material14.Typography, { variant: "h6", children: "What do you want to add?" }, void 0, !1, {
      fileName: "app/routes/_public.add.tsx",
      lineNumber: 53,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_material14.Stack, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextField_default, { name: "name", label: "Name", control, variant: "standard", type: "text", helperText: " name", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/_public.add.tsx",
        lineNumber: 57,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TextField_default, { name: "price", label: "Price", control, type: "number", variant: "standard", helperText: "Price", fullWidth: !0 }, void 0, !1, {
        fileName: "app/routes/_public.add.tsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_material14.DialogActions, { sx: { width: "100%", display: "flex", justifyContent: "end", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_material14.Button, { type: "submit", disabled: transition.state === "submitting" || transition.state === "loading", children: transition.state === "submitting" ? "Creating..." : "Create" }, void 0, !1, {
          fileName: "app/routes/_public.add.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_material14.Button, { type: "reset", onClick: handleOnReset, children: "Reset" }, void 0, !1, {
          fileName: "app/routes/_public.add.tsx",
          lineNumber: 63,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.add.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.add.tsx",
      lineNumber: 56,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 52,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 51,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
var public_add_default = ItemsAdd2;
async function action6({ request, context, params }) {
  let body = await request.formData();
  return await addItem({
    name: body.get("name"),
    price: +(body.get("price") ?? -1)
  }), (0, import_node10.redirect)("/");
}

// app/routes/clientonly.tsx
var clientonly_exports = {};
__export(clientonly_exports, {
  default: () => Screen
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_remix_utils2 = require("remix-utils"), import_BrokenOnServer = __toESM(require_BrokenOnServer());

// app/components/ComplexComponent.tsx
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react19 = require("react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function ComplexComponent() {
  let [count, setCount] = (0, import_react19.useState)(() => {
    let stored = localStorage.getItem("count");
    return stored ? JSON.parse(stored) : 0;
  });
  return (0, import_react19.useEffect)(
    function() {
      localStorage.setItem("count", JSON.stringify(count));
    },
    [count]
  ), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { onClick: () => setCount((c) => c - 1), children: "-" }, void 0, !1, {
      fileName: "app/components/ComplexComponent.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: count }, void 0, !1, {
      fileName: "app/components/ComplexComponent.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { onClick: () => setCount((c) => c + 1), children: "+" }, void 0, !1, {
      fileName: "app/components/ComplexComponent.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ComplexComponent.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/clientonly.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Screen() {
  let hydrated = (0, import_remix_utils2.useHydrated)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/clientonly.tsx",
      lineNumber: 10,
      columnNumber: 30
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_BrokenOnServer.BrokenOnTheServer, {}, void 0, !1, {
      fileName: "app/routes/clientonly.tsx",
      lineNumber: 11,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/routes/clientonly.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_remix_utils2.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/clientonly.tsx",
      lineNumber: 14,
      columnNumber: 30
    }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ComplexComponent, {}, void 0, !1, {
      fileName: "app/routes/clientonly.tsx",
      lineNumber: 15,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/routes/clientonly.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      "button",
      {
        type: "button",
        disabled: !hydrated,
        onClick: () => alert("I has JS loaded!"),
        children: "Try me!"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/clientonly.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/clientonly.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/items.list.tsx
var items_list_exports = {};
__export(items_list_exports, {
  action: () => action7,
  default: () => items_list_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material15 = require("@mui/material"), import_react20 = require("@remix-run/react");
var import_node11 = require("@remix-run/node");
var import_react21 = require("react"), import_Refresh = __toESM(require("@mui/icons-material/Refresh")), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function ItemsView() {
  let data = (0, import_react20.useRouteLoaderData)("routes/items"), nav = (0, import_react20.useNavigate)(), fetcher = (0, import_react20.useFetcher)(), handleOnRefresh = () => {
    nav("./", {
      replace: !0
    });
  }, handleItemAction = (0, import_react21.useCallback)((item) => (actionId) => {
    switch (actionId) {
      case "edit": {
        nav(`/items/list/edit/${item.id}`, { state: { item } });
        break;
      }
      case "delete":
        break;
    }
  }, [nav]);
  return data.length < 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
    "Item list is empty! ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react20.Link, { to: "add", children: "Add an item here.  " }, void 0, !1, {
      fileName: "app/routes/items.list.tsx",
      lineNumber: 40,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.list.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_material15.Stack, { direction: "column", justifyContent: "start", alignItems: "center", id: "item-list", width: "30rem", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_material15.Stack, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_material15.Typography, { width: "100%", textAlign: "start", children: [
        data.length,
        " items available."
      ] }, void 0, !0, {
        fileName: "app/routes/items.list.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_material15.Button, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Refresh.default, {}, void 0, !1, {
        fileName: "app/routes/items.list.tsx",
        lineNumber: 49,
        columnNumber: 29
      }, this), variant: "outlined", onClick: handleOnRefresh, disabled: fetcher.state === "loading", children: fetcher.state === "loading" ? "Refreshing..." : "Refresh" }, void 0, !1, {
        fileName: "app/routes/items.list.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/items.list.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_material15.Stack, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", spacing: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_material15.List, { dense: !0, sx: { width: "100%" }, children: data.map((res) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Item_default, { item: res, onAction: handleItemAction(res) }, res.id, !1, {
      fileName: "app/routes/items.list.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/items.list.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/items.list.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
      fileName: "app/routes/items.list.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.list.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
var items_list_default = ItemsView;
async function action7({ request, context, params }) {
  let body = await request.formData(), intent = body.get("intent"), result, action8 = "create";
  return intent === "delete" && (result = await deleteItemById(body.get("id")), action8 = "delete"), intent === "update" && (result = await updateItemById(body.get("id"), {
    name: body.get("name"),
    price: +(body.get("price") ?? -1)
  }), action8 = "update"), intent === null && (result = await addItem({
    name: body.get("name"),
    price: +(body.get("price") ?? -1)
  })), (0, import_node11.redirect)(`/items/list?${action8}=${body.get("name")}`);
}

// app/routes/Products.tsx
var Products_exports = {};
__export(Products_exports, {
  default: () => Products_default2,
  meta: () => meta3
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material16 = require("@mui/material"), import_react22 = require("@remix-run/react");

// app/models/products.model.ts
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var navOptions2 = [
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

// app/routes/Products.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), meta3 = (res) => [
  { title: "Products" },
  { name: "description", content: "Welcome to Products!" }
];
function Products2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_material16.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_material16.Stack, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, my: 3, children: navOptions2.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react22.NavLink, { to: navItem.path, children: navItem.displayName }, navItem.id, !1, {
      fileName: "app/routes/Products.tsx",
      lineNumber: 31,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/Products.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react22.Outlet, {}, void 0, !1, {
      fileName: "app/routes/Products.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Products.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var Products_default2 = Products2;

// app/routes/items.$.tsx
var items_exports = {};
__export(items_exports, {
  default: () => items_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function ItemsAnyMatchRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: "404 in Items" }, void 0, !1, {
    fileName: "app/routes/items.$.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var items_default = ItemsAnyMatchRoute;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: "ABOUT!!!" }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var about_default = About;

// app/routes/items.tsx
var items_exports2 = {};
__export(items_exports2, {
  default: () => items_default2,
  headers: () => headers,
  loader: () => loader7,
  meta: () => meta4,
  navOptions: () => navOptions3
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material17 = require("@mui/material"), import_react23 = require("@remix-run/react");
var import_node12 = require("@remix-run/node"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), meta4 = (res) => [
  { title: "Items" },
  { name: "description", content: "Welcome to Items!" }
], navOptions3 = [
  {
    displayName: "New",
    path: "list/add",
    id: "new"
  },
  {
    displayName: "View",
    path: "list",
    id: "view"
  },
  {
    displayName: "Policies",
    path: "policies",
    id: "policies"
  }
];
function Items() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_material17.Stack, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_material17.Stack, { direction: "row", justifyContent: "center", alignItems: "center", spacing: 2, my: 3, children: navOptions3.map((navItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react23.NavLink, { prefetch: "none", to: navItem.path, children: navItem.displayName }, navItem.id, !1, {
      fileName: "app/routes/items.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/items.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react23.Outlet, {}, void 0, !1, {
      fileName: "app/routes/items.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/items.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var headers = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control")
});
async function loader7() {
  let result = await getAllItems();
  return (0, import_node12.json)(result);
}
var items_default2 = Items;

// app/routes/core.tsx
var core_exports = {};
__export(core_exports, {
  default: () => core_default,
  meta: () => meta5
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_material18 = require("@mui/material"), import_react24 = require("@remix-run/react"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), meta5 = (res) => [
  { title: "Core" },
  { name: "description", content: "Welcome to Remix!" }
];
function Core() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_material18.Stack, { direction: "column", justifyContent: "start", alignItems: "start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { style: { marginTop: "30px" }, className: "cool-font", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react24.Link, { to: "/core", children: "Core" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      " is where you can view our Core users."
    ] }, void 0, !0, {
      fileName: "app/routes/core.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react24.Link, { to: "./john", children: "John" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react24.Link, { to: "./lucy", children: "Lucy" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react24.Link, { to: "./kevin", children: "Kevin" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react24.Link, { to: "./level1", children: "Go to Core Level 1 Users" }, void 0, !1, {
        fileName: "app/routes/core.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/core.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react24.Outlet, {}, void 0, !1, {
      fileName: "app/routes/core.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/core.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/core.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var core_default = Core;

// app/routes/item.tsx
var item_exports = {};
__export(item_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => item_default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_Edit2 = __toESM(require("@mui/icons-material/Edit")), import_Delete2 = __toESM(require("@mui/icons-material/Delete")), import_material19 = require("@mui/material"), import_react25 = require("@remix-run/react"), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Item2() {
  let deleteFetcher = (0, import_react25.useFetcher)(), { itemId } = (0, import_react25.useParams)(), handleDelete = () => {
    confirm("Are you sure you want to delete this item?") && deleteFetcher.submit({ id: itemId ?? "" }, {
      method: "delete",
      action: "/?index"
    });
  };
  return itemId ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_material19.Stack, { direction: "column", justifyContent: "start", alignItems: "center", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_material19.Stack, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", sx: { bgcolor: "#ebeec6" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react25.Link, { to: `./${itemId}/edit`, replace: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_material19.Button, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Edit2.default, {}, void 0, !1, {
        fileName: "app/routes/item.tsx",
        lineNumber: 27,
        columnNumber: 31
      }, this), children: "Edit" }, void 0, !1, {
        fileName: "app/routes/item.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/item.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_material19.Button, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Delete2.default, {}, void 0, !1, {
        fileName: "app/routes/item.tsx",
        lineNumber: 31,
        columnNumber: 29
      }, this), onClick: handleDelete, name: "intent", value: "delete", children: "Delete" }, void 0, !1, {
        fileName: "app/routes/item.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/item.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_material19.Stack, { direction: "column", justifyContent: "start", alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
      fileName: "app/routes/item.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/item.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/item.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: "No ID provided." }, void 0, !1, {
    fileName: "app/routes/item.tsx",
    lineNumber: 21,
    columnNumber: 23
  }, this);
}
function ErrorBoundary3() {
  let error = (0, import_react25.useRouteError)();
  return (0, import_react25.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h1", { children: "Oops" }, void 0, !1, {
      fileName: "app/routes/item.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { children: [
      "Status: ",
      error.status,
      " - ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/routes/item.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { children: error.data.message }, void 0, !1, {
      fileName: "app/routes/item.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react25.Link, { to: "/", children: "Back to Home" }, void 0, !1, {
      fileName: "app/routes/item.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/item.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_material19.Stack, { children: "Error occured!" }, void 0, !1, {
    fileName: "app/routes/item.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
var item_default = Item2;

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var import_react26 = require("@remix-run/react"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function NotFound404() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
    "Page not found - 404!",
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react26.Link, { to: "/", children: "Go Home" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var __default = NotFound404;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_define_process_env_REMIX_DEV_HTTP_ORIGIN();
var assets_manifest_default = { entry: { module: "/build/entry.client-V6LEDYCP.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-PI7TTO4D.js", "/build/_shared/chunk-A6HGE4TO.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SIBWNDGW.js", imports: ["/build/_shared/chunk-GA656LDU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-M3DK2LQC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Products": { id: "routes/Products", parentId: "root", path: "Products", index: void 0, caseSensitive: void 0, module: "/build/routes/Products-WGSFTJBV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-S2AFJKZ3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-RW4MSJJO.js", imports: ["/build/_shared/chunk-5BLZZMQN.js", "/build/_shared/chunk-PFGRK5I3.js", "/build/_shared/chunk-3WTIG3VJ.js", "/build/_shared/chunk-NCNOPK2L.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.add": { id: "routes/_public.add", parentId: "root", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.add-7GXHAZRJ.js", imports: ["/build/_shared/chunk-ZBEDRCV7.js", "/build/_shared/chunk-NCNOPK2L.js", "/build/_shared/chunk-YLXSWQSE.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-5QWEE6PU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_public.team": { id: "routes/_public.team", parentId: "root", path: "team", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.team-IMLEL6Z3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-QGNDPNIV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/clientonly": { id: "routes/clientonly", parentId: "root", path: "clientonly", index: void 0, caseSensitive: void 0, module: "/build/routes/clientonly-OZSQT7AM.js", imports: ["/build/_shared/chunk-3WTIG3VJ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core": { id: "routes/core", parentId: "root", path: "core", index: void 0, caseSensitive: void 0, module: "/build/routes/core-CSDMNDLQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.$userId": { id: "routes/core.$userId", parentId: "routes/core", path: ":userId", index: void 0, caseSensitive: void 0, module: "/build/routes/core.$userId-D2RWQDN5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core._index": { id: "routes/core._index", parentId: "routes/core", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/core._index-VNGX6FQ3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1": { id: "routes/core.level1", parentId: "routes/core", path: "level1", index: void 0, caseSensitive: void 0, module: "/build/routes/core.level1-FQ75FUXC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1.$userId": { id: "routes/core.level1.$userId", parentId: "routes/core.level1", path: ":userId", index: void 0, caseSensitive: void 0, module: "/build/routes/core.level1.$userId-QMEZ2IO2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/core.level1._index": { id: "routes/core.level1._index", parentId: "routes/core.level1", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/core.level1._index-BZZNWUK3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/item": { id: "routes/item", parentId: "root", path: "item", index: void 0, caseSensitive: void 0, module: "/build/routes/item-FUWFIPU4.js", imports: ["/build/_shared/chunk-PFGRK5I3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/item.$itemId": { id: "routes/item.$itemId", parentId: "routes/item", path: ":itemId", index: void 0, caseSensitive: void 0, module: "/build/routes/item.$itemId-WWEBM26V.js", imports: ["/build/_shared/chunk-NCNOPK2L.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-GA656LDU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/item.$itemId.edit": { id: "routes/item.$itemId.edit", parentId: "routes/item.$itemId", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/item.$itemId.edit-5BSKUG6R.js", imports: ["/build/_shared/chunk-YLXSWQSE.js", "/build/_shared/chunk-5QWEE6PU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/items": { id: "routes/items", parentId: "root", path: "items", index: void 0, caseSensitive: void 0, module: "/build/routes/items-NEPO6JS7.js", imports: ["/build/_shared/chunk-NCNOPK2L.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/items.$": { id: "routes/items.$", parentId: "routes/items", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/items.$-BJ5Q2ETJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/items.$itemId": { id: "routes/items.$itemId", parentId: "routes/items", path: ":itemId", index: void 0, caseSensitive: void 0, module: "/build/routes/items.$itemId-BNRZ63VS.js", imports: ["/build/_shared/chunk-GA656LDU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/items._index": { id: "routes/items._index", parentId: "routes/items", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/items._index-AXFF5QR3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/items.list": { id: "routes/items.list", parentId: "routes/items", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/items.list-O3XFCBUI.js", imports: ["/build/_shared/chunk-5BLZZMQN.js", "/build/_shared/chunk-PFGRK5I3.js", "/build/_shared/chunk-3WTIG3VJ.js", "/build/_shared/chunk-GA656LDU.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/items.list.add": { id: "routes/items.list.add", parentId: "routes/items.list", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/items.list.add-3ZJ7QE2T.js", imports: ["/build/_shared/chunk-ZBEDRCV7.js", "/build/_shared/chunk-YLXSWQSE.js", "/build/_shared/chunk-5QWEE6PU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/items.list.edit.$itemId": { id: "routes/items.list.edit.$itemId", parentId: "routes/items.list", path: "edit/:itemId", index: void 0, caseSensitive: void 0, module: "/build/routes/items.list.edit.$itemId-QBSK6IPI.js", imports: ["/build/_shared/chunk-YLXSWQSE.js", "/build/_shared/chunk-5QWEE6PU.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products._index": { id: "routes/products._index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products._index-D52VEN4E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.add-new": { id: "routes/products.add-new", parentId: "root", path: "products/add-new", index: void 0, caseSensitive: void 0, module: "/build/routes/products.add-new-4WR62MPR.js", imports: ["/build/_shared/chunk-ABVOK2F5.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-5QWEE6PU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products.view": { id: "routes/products.view", parentId: "root", path: "products/view", index: void 0, caseSensitive: void 0, module: "/build/routes/products.view-RCLC2DCZ.js", imports: ["/build/_shared/chunk-YLXSWQSE.js", "/build/_shared/chunk-ABVOK2F5.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-5QWEE6PU.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "74c6e0ff", hmr: { runtime: "/build/_shared\\chunk-A6HGE4TO.js", timestamp: 1689816766735 }, url: "/build/manifest-74C6E0FF.js" };

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
  "routes/items.list.edit.$itemId": {
    id: "routes/items.list.edit.$itemId",
    parentId: "routes/items.list",
    path: "edit/:itemId",
    index: void 0,
    caseSensitive: void 0,
    module: items_list_edit_itemId_exports
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
  "routes/item.$itemId.edit": {
    id: "routes/item.$itemId.edit",
    parentId: "routes/item.$itemId",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: item_itemId_edit_exports
  },
  "routes/products.add-new": {
    id: "routes/products.add-new",
    parentId: "root",
    path: "products/add-new",
    index: void 0,
    caseSensitive: void 0,
    module: products_add_new_exports
  },
  "routes/products._index": {
    id: "routes/products._index",
    parentId: "root",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: products_index_exports
  },
  "routes/items.list.add": {
    id: "routes/items.list.add",
    parentId: "routes/items.list",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: items_list_add_exports
  },
  "routes/_public._index": {
    id: "routes/_public._index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: public_index_exports
  },
  "routes/items.$itemId": {
    id: "routes/items.$itemId",
    parentId: "routes/items",
    path: ":itemId",
    index: void 0,
    caseSensitive: void 0,
    module: items_itemId_exports
  },
  "routes/products.view": {
    id: "routes/products.view",
    parentId: "root",
    path: "products/view",
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
  "routes/item.$itemId": {
    id: "routes/item.$itemId",
    parentId: "routes/item",
    path: ":itemId",
    index: void 0,
    caseSensitive: void 0,
    module: item_itemId_exports
  },
  "routes/items._index": {
    id: "routes/items._index",
    parentId: "routes/items",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: items_index_exports
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
  "routes/_public.add": {
    id: "routes/_public.add",
    parentId: "root",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: public_add_exports
  },
  "routes/clientonly": {
    id: "routes/clientonly",
    parentId: "root",
    path: "clientonly",
    index: void 0,
    caseSensitive: void 0,
    module: clientonly_exports
  },
  "routes/items.list": {
    id: "routes/items.list",
    parentId: "routes/items",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: items_list_exports
  },
  "routes/Products": {
    id: "routes/Products",
    parentId: "root",
    path: "Products",
    index: void 0,
    caseSensitive: void 0,
    module: Products_exports
  },
  "routes/items.$": {
    id: "routes/items.$",
    parentId: "routes/items",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: items_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/items": {
    id: "routes/items",
    parentId: "root",
    path: "items",
    index: void 0,
    caseSensitive: void 0,
    module: items_exports2
  },
  "routes/core": {
    id: "routes/core",
    parentId: "root",
    path: "core",
    index: void 0,
    caseSensitive: void 0,
    module: core_exports
  },
  "routes/item": {
    id: "routes/item",
    parentId: "root",
    path: "item",
    index: void 0,
    caseSensitive: void 0,
    module: item_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
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
