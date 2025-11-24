import type { RouteObject } from "react-router";
import { Category } from "./category.page";

export const route: RouteObject = {
	path: "/:category",
	Component: Category,
};
