import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";
import ArticleOne from "./articlePosts/ArticleOne";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ArticleTwo from "./articlePosts/ArticleTwo";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <PageLayout />,
      children: [
        { path: "/", element: <Navigate to='/home' replace /> },
        { path: "/home", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/one", element: <ArticleOne /> },
        { path: "/two", element: <ArticleTwo /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
