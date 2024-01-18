# React-router
***React Router is a library for handling navigation in React applications. It enables developers to create single-page applications (SPAs) with multiple views or pages, allowing users to navigate through the application without the need for full-page reloads***

#### Key features of React Router include:
1. Declearative routing
2. Nasted routing
3. Dynamic routing
4. programmatic routing

* ## Adding a Router.
> At first we have to creat a `Browser-Router`. It can be created in two ways. I create it in root file `main.jsx`
  
<img width="362" alt="Screenshot 2024-01-18 224228" src="https://github.com/arjunpangeni/React-router-1/assets/126581290/5182137a-cf08-45a3-af71-30c9aaeccc9f">
<img width="293" alt="image" src="https://github.com/arjunpangeni/React-router-1/assets/126581290/8433f6cd-679d-4a8a-9a4d-21c9c0fee01e">


> We need `<RouterProver/>` to use route above we created .React Router can be provided to the entire application using the <RouterProvider> component (from react-router-dom ) and including a router attribute. In the given example React Router is provided to the entire application using a <RouterProvider> component in the main App component.

* ## The root Route.
> Here `
    path: "/",
    element: <Layout />` is root route . I create `Layout`as a root layout component using `<outLet/>` . <Outlet> component is used to indicate where child routes should be rendered within a parent route. It's essentially a placeholder for the child content defined in nested routes.

* ## Handling not found error
  > When ever we found the error, to handle this we can provide additional error element within the path like `  {
    path: "/",
    element: <Layout/>
    errorElement: <ErrorPage />,
  },`
> [!NOTE]
> Note that with in the `<ErrorPage` , `useRouteError` Api provides the error that was thrown. When the user navigates to routes that don't exist you'll get an error response with a "Not Found" statusText.
<img width="330" alt="image" src="https://github.com/arjunpangeni/React-router-1/assets/126581290/545184c9-ba98-4867-88a0-26a760858298">

* ## Client side Rendering
  Client side routing allows our app to update the URL without requesting another document from the server. Instead, the app can immediately render new ui.It happen with `<Link>`.

  > [!NOTE]
  > We also can use `<Navlink/>` .When we use this we can apply the specific class in the active link.
  > <img width="350" alt="image" src="https://github.com/arjunpangeni/React-router-1/assets/126581290/df54f0ea-a929-4a11-8633-67c4a04fad6f">


* ## Loading Data
  ***whenever we fetch data from api during the mounting component,It take some time .If we provide that fetching function from route using `loader`,fetching data from api initiate with the routing that component.***
  
>At above route example `<Route path="Github" element={<Github />} loader={githubData} />` .we provide `GithubData` function (which fetch data from githubapi) with the loader to `Github` component .
> Now we can use this function using `useLoaderData` api with in the `Github` component .

> <img width="419" alt="image" src="https://github.com/arjunpangeni/React-router-1/assets/126581290/15a9e4c3-a091-4646-a811-1b29c36e7625">

* ## Get dynamic value from url

`<Route path='user/:userid' element={<User/>} />` .
whatever we provide after user/ route can be get using `useParams` Api at `User` element.
`const {userid}=useparams `



