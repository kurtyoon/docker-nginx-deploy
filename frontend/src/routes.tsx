import GlobalLayout from "./pages/_layout.tsx";
import ServerStatus from "./pages/Main";

export const routes = [
	{
		path: "/",
		element: <GlobalLayout />,
		children: [
			{path: "/", element: <ServerStatus />}
		]
	}
]

export const pages = [
	{route: "/"}
];