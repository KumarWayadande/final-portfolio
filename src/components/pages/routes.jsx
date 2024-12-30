import { createBrowserRouter } from "react-router-dom";
import ArticleContainer from "../article-components/ArticleContainer";
import ProjectContainer from "../project-components/ProjectContainer";
import Speaking from "../speaking-components/Speaking";
import Uses from "../tools-components/ToolContainer";
import LandingPage from "../utility components/LandingPage";
import RootLayout from "./RootLayout";
import Error from "../utility components/Error.jsx";
import TempSingleArticle from "../article-components/single-article/TempSingleArticle.jsx";
import ArticleRootLayout from "./ArticleRootLayout.jsx";
import AboutContainer from "../about-component/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "about", element: <AboutContainer /> },
      {
        path: "articles",
        element: <ArticleRootLayout />,

        children: [
          { index: true, element: <ArticleContainer /> },
          {
            path: ":id",
            element: <TempSingleArticle />,
          },
        ],
      },
      { path: "projects", element: <ProjectContainer /> },
      { path: "speaking", element: <Speaking /> },
      { path: "uses", element: <Uses /> },
    ],
  },
]);

export default router;
