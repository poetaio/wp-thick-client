import { Outlet } from "react-router-dom";
import SaveLocationNotFound from "../components/SaveLocationNotFound";
import { AuthWrapper } from "../components/base";
import { LoginPage, NotFoundPage, RegisterPage } from "../pages";
import { AddPostPage, AllPostsPage, PostPage } from "../pages/post";
import { UserRolesEnum } from "./enums";
import { HOME_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE, REGISTER_ROUTE } from "./routesNames";
import { MainLayout } from "../components/layout";

export const routes = [
  {
    path: HOME_ROUTE,
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <AllPostsPage/>,
      },
      {
        path: "/posts/:postId",
        element: <PostPage/>,
      },
      {
        path: "/add-post",
        element:
          <AuthWrapper>
            <AddPostPage/>
          </AuthWrapper>,
      },
    ]
  },
  {
    path: LOGIN_ROUTE,
    element: <LoginPage/>
  },
  {
    path: NOT_FOUND_ROUTE,
    element: <NotFoundPage/>,
  },
  {
    path: '*',
    element: <SaveLocationNotFound/>
  }
];
