import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import SignOut from "./pages/SignOut";
import Profile from "./pages/Profile";
import Layout from "./Layout/Layout";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signout",
        element: <SignOut />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);

const NestedApp = () => {
  return <RouterProvider router={router} />;
};

const App = () => {
  return (
    <div data-testid="app">
      <Provider store={store}>
        <NestedApp />
      </Provider>
    </div>
  );
};

export default App;
