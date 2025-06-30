import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";
import ReadmorePage from "./pages/ReadmorePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <PageLayout />,
      children: [
        { path: "/", element: <Navigate to='/home' replace /> },
        { path: "/home", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/readmore", element: <ReadmorePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
