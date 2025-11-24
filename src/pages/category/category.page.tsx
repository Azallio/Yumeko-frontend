import { useParams } from "react-router";
import { RootLayout } from "../(root)";

export function Category() {
	const { category } = useParams();
	return (
		<RootLayout>
			<section className='py-10 px-4'>
				<h2 className='text-2xl w-full text-center uppercase font-semibold tracking-widest'>
					{category}
				</h2>
			</section>
			<section></section>
		</RootLayout>
	);
}
