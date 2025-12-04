import { Link, NavLink } from "react-router";

const homePageNavLinks = [
	{ href: "/anime", label: "Аниме" },
	{ href: "/films", label: "Фильмы" },
	{ href: "/serials", label: "Сериалы" },
	{ href: "/guids", label: "Гайды" },
];

export function RootLayout(props: React.PropsWithChildren) {
	const { children } = props;
	return (
		<>
			<header className='flex justify-between pt-6 px-15 bg-gray-1050 items-center'>
				<div className='flex gap-25 shrink-0 items-center'>
					<Link to='/' className='flex gap-5'>
						<img
							className='size-20 rounded-full'
							src='/assets/Yumeko-logo-notext.png'
							alt='Yumeko-logo'
						/>
						<img
							className='w-50'
							src='/assets/yumeko-text.svg'
							alt='yumeko-text'
						/>
					</Link>

					<div className='flex gap-9.5 items-center'>
						{homePageNavLinks.map(({ href, label }, index) => (
							<NavLink
								key={href + index}
								to={href}
								className={({ isActive }) =>
									isActive
										? "text-white text-xl/7.5 font-medium"
										: "text-gray-420 text-xl/7.5"
								}
							>
								{label}
							</NavLink>
						))}
					</div>
				</div>
				<input
					className='outline-none ml-15 flex py-3 px-6 rounded-4xl bg-gray-750 w-full'
					placeholder='Ведите название'
					type='text'
				/>
				<Link to='/profile' className='size-max shrink-0 ml-15'>
					<img
						className='size-12.5'
						src='/assets/layout/profile-default.svg'
						alt='user-avatar'
					/>
				</Link>
			</header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
}
