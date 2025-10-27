import { NavLink } from "react-router";
export function RootLayout(props: React.PropsWithChildren) {
	const { children } = props;
	return (
		<>
			<header>
				<button></button>
				<NavLink to={"/library"}>Библиотека</NavLink>
				<NavLink to={"/anime"}>Аниме</NavLink>
				<NavLink to={"/serials"}>Сериалы</NavLink>
			</header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
}
