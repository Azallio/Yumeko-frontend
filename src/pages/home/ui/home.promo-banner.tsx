import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { TVideo } from "../../../shared/types";

const test: TVideo[] = [
	{
		id: "id",
		type: "anime",
		description:
			"В 2023 году человечество совершило технологический прорыв. Мечты о полном погружении в игру наконец стали реальными.",
		title: "Мастера меча онлайн",
		genres: ["Фантастика", "Приключения"],
		posterUrl: "/assets/test-sao-bg.jpg",
		bannerUrl: "/assets/test-sao.png",
	},
	{
		id: "id2",
		type: "anime",
		description: "Вторая часть истории о героях виртуальной реальности.",
		title: "Мастера меча онлайн 2",
		genres: ["Фантастика", "Приключения"],
		posterUrl: "/assets/test-sao-bg.jpg",
		bannerUrl: "/assets/test-sao.png",
	},
];

export function HomePromoBanner() {
	const [index, setIndex] = useState(0);
	const [fade, setFade] = useState(true);

	const nextSlide = () => {
		setIndex(prev => (prev + 1) % test.length);
	};

	const prevSlide = () => {
		setIndex(prev => (prev - 1 + test.length) % test.length);
	};

	useEffect(() => {}, []);

	useEffect(() => {
		setFade(false);
		const timeout = setTimeout(() => setFade(true), 50);
		return () => clearTimeout(timeout);
	}, [index]);

	const current = test[index];

	return (
		<section className='px-15 py-10 w-full overflow-hidden'>
			<div className='relative w-full h-auto'>
				<button
					onClick={prevSlide}
					className='
            absolute left-4 top-1/2 -translate-y-1/2 z-10
            text-white/20 text-6xl p-3 rounded-full
            hover:text-white transition
          '
				>
					‹
				</button>

				<button
					onClick={nextSlide}
					className='
            absolute right-4 top-1/2 -translate-y-1/2 z-10
            text-white/20 text-6xl p-3 rounded-full
            hover:text-white transition
          '
				>
					›
				</button>

				<div
					key={index}
					className={clsx(
						"flex flex-row justify-between w-full rounded-2xl bg-no-repeat bg-cover bg-center p-15 transition-opacity duration-700",
						fade ? "opacity-100" : "opacity-0"
					)}
					style={{ backgroundImage: `url(${current.posterUrl})` }}
				>
					<div className='flex flex-col justify-between h-152 w-1/2'>
						<div className='flex flex-col gap-8'>
							<h1 className='font-raleway text-7xl font-black'>
								{current.title}
							</h1>

							<span className='text-5xl'>{current.genres.join(" | ")}</span>

							<p className='text-3xl'>{current.description}</p>
						</div>

						<Link
							to='/'
							className='
                bg-red-500 text-center text-2xl p-5 rounded-full 
                hover:shadow-2xl transition
              '
						>
							Смотреть
						</Link>
					</div>

					<img
						src={current.bannerUrl}
						className='w-auto h-140 relative top-27 left-15'
						alt={current.title}
					/>
				</div>

				<div className='flex gap-3 absolute bottom-4 left-1/2 -translate-x-1/2'>
					{test.map((_, i) => (
						<button
							key={i}
							onClick={() => setIndex(i)}
							className={`
                w-4 h-4 rounded-full transition
                ${i === index ? "bg-white" : "bg-white/40"}
              `}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
