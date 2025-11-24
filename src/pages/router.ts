import { createBrowserRouter } from "react-router";
import { CategoryRoute } from "./category";
import { HomeRoute } from "./home";

export const router = createBrowserRouter([HomeRoute, CategoryRoute]);
