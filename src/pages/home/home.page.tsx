import { NavLink } from "react-router";
import { RootLayout } from "../(root)";
import { HomePromoBanner } from "./ui/home.promo-banner";

const exampleTitleArray = [
	{
		category: "Anime",
		href: "/anime",
		exampleArray: [
			{ title: "so Anime", href: "" },
			{ title: "so Anime", href: "" },
		],
	},
	{
		category: "Serial",
		href: "/serials",
		exampleArray: [{ title: "so Serial", href: "" }],
	},
	{
		category: "Film",
		href: "/films",
		exampleArray: [
			{ title: "so Film", href: "" },
			{ title: "so Film", href: "" },
		],
	},
	{
		category: "Guid",
		href: "/guids",
		exampleArray: [
			{ title: "so Guid", href: "" },
			{ title: "so Guid", href: "" },
		],
	},
];

export function Home() {
	return (
		<RootLayout>
			<section>
				<article>
					<HomePromoBanner />
				</article>
				{exampleTitleArray.map(({ category, exampleArray, href }, index) => (
					<article
						className='py-13 px-20 flex flex-col gap-10'
						key={index + category}
					>
						<h2 className='text-4xl/13.5 font-medium'>
							<NavLink to={href}>{category}</NavLink>
						</h2>
						<div className='flex gap-5'>
							{exampleArray.map(({ href, title }, index) => (
								<div key={index + title}>
									<NavLink to={href}>{title}</NavLink>
								</div>
							))}
						</div>
					</article>
				))}
			</section>
		</RootLayout>
	);
}
