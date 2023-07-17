# Kevin's Grocery List

This is a playground app built with Remix and MUI5 components. Deployed to [Vercel](https://vercel.com/yiqu/app-remix-react-1).

## Lessons Learned

- If using Web only things, make sure to create a client only component like componentName.client.tsx. This ensure the component is client only. Use the remix-utils ClientOnly helper component.
  e.g. in app/client-components
- MUI Icons needs to be imported like: 
  ```js 
    import Refresh from '@mui/icons-material/Refresh'
  ```
  Or you will notice a slowdown during development, as well as Function timeout when deployed to Vercel.

## Development

From your terminal:

```sh
npm run dev
```

## Preview Production

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template For Deployment and Hosting.

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
