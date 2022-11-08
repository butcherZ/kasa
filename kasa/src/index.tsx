import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { data } from "./utils/data";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { PageNotFound } from "./pages/PageNotFound";
import App from "./App";
import { Logement } from "./pages/Logement";
import { loader as logementLoader } from "../src/routes/loader";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<App />}
//       // loader={rootLoader}
//       // action={rootAction}
//       errorElement={<PageNotFound />}
//     >
//       <Route path="/" element={<Home />}>
//         <Route
//           path="logement/:id"
//           element={<Logement />}
//           loader={logementLoader}
//           errorElement={<PageNotFound />}
//         />
//       </Route>
//       <Route path="/about" element={<About />} />
//     </Route>
//   )
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logement/:id",
        element: <Logement />,
        loader: async ({ params }) => {
          return data.find((x) => params.id === x.id);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
