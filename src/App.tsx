import { RouterProvider } from "react-router";
import { router } from "./pages";

export function App() {
	return <RouterProvider router={router}></RouterProvider>;
}
