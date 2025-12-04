import { useState } from "react";
import { Link } from "react-router";
import { FavoriteSvg, NextSvg } from "../../(root)";
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
		description:
			"Появление проходов в подземельях с монстрами давно терроризирует человечество. Никто не знает, где и когда возникнут новые врата и чудища ринутся наверх. Даже армия не может справиться с нашествием монстров. Людям доступна лишь одна стратегия: засылка в только что открывшееся подземелье отряда особых охотников. Если они быстро уничтожат монстра, проход закроется, а угроза вторжения временно исчезнет.Но даже среди элитных охотников есть неудачники, не способные победить среднеуровневых монстров. Смелый, но физически слабый Сон Джину выполняет задачу зачистки самых мелких монстров. Нерасторопный Сон проигрывает конкуренцию соратникам, не может нормально прокачивать свой уровень, практически ничего не зарабатывает. А деньги очень нужны: его мать лежит в коме.Однажды он натыкается на секретное ответвление и попадает в не зачищенное охотниками подземелье. Парень приходит в себя на больничной койке. Когда шок от воскрешения прошел, Сон обнаружил способность вызова интерфейса для путешествия по альтернативному миру. Здесь он сильнее, быстрее, удачливей. Ему нужно прокачаться одиночку и наконец-то заполучить высший ранг авантюриста.",
		title: "Поднятие уровня в одиночку",
		genres: ["Фантастика", "Приключения"],
		posterUrl: "/assets/test-solo.png",
		bannerUrl: "",
	},
];

export function HomePromoBanner() {
	const [isCurrent, setIsCurrent] = useState(0);

	const nextSlide = () => {
		setIsCurrent(prev => (prev + 1) % test.length);
	};

	const prevSlide = () => {
		setIsCurrent(prev => (prev - 1 + test.length) % test.length);
	};

	const [isActive, setIsActive] = useState(false);

	const switchFavoriteButton = () => {
		setIsActive(prev => !prev);
	};

	const current = test;

	return (
		<section className='px-15 py-10 w-full'>
			<div className='relative w-full mx-auto overflow-hidden rounded-2xl'>
				<div
					className='flex transition-transform duration-500 relative'
					style={{ transform: `translateX(-${isCurrent * 100}%)` }}
				>
					{current.map(slide => (
						<div
							className='flex flex-row justify-between w-full rounded-2xl bg-no-repeat bg-cover bg-center py-15 px-20 shrink-0 select-none'
							style={{ backgroundImage: `url(${slide.posterUrl})` }}
						>
							<div className='flex flex-col justify-between h-152 w-1/2'>
								<div className='flex flex-col gap-8'>
									<h1 className='font-raleway text-7xl font-black'>
										{slide.title}
									</h1>

									<span className='text-5xl'>{slide.genres.join(" | ")}</span>

									<p className='text-3xl line-clamp-6'>{slide.description}</p>
								</div>
							</div>

							<img
								src={slide.bannerUrl}
								className='w-auto h-140 relative top-27 left-15'
								alt={slide.title}
							/>
						</div>
					))}
				</div>
				<div className='z-40 absolute left-15 bottom-10 flex items-center gap-5'>
					<Link
						to='/'
						className='
                bg-red-500 text-center text-2xl p-5 px-20 rounded-full 
                hover:shadow-2xl '
					>
						Смотреть
					</Link>

					<Link
						to='#'
						className='
              bg-gray-1050 text-center text-2xl p-5 px-10 rounded-full 
                hover:shadow-2xl '
					>
						O аниме
					</Link>

					<FavoriteSvg 
						onClick={switchFavoriteButton}
						fill={!isActive ? "white" : "red"}
						stroke={!isActive ? "" : "red"}
						className='size-18'
					/>
				</div>

				{/* Кнопка назад */}
				<button
					onClick={prevSlide}
					className='absolute top-1/2 -translate-y-1/2 text-white/10 hover:text-white p-4 h-full transition'
				>
					<NextSvg
						color='#D7D7D7'
						className='rotate-180 size-10 hover:scale-110 transition'
					/>
				</button>

				{/* Кнопка вперёд */}
				<button
					onClick={nextSlide}
					className='absolute top-1/2 right-0 -translate-y-1/2 text-white/10 hover:text-white p-4  h-full transition'
				>
					<NextSvg
						color='#D7D7D7'
						className='hover:scale-110 transition size-10'
					/>
				</button>

				{/* Индикаторы */}
				<div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
					{current.map((_, i) => (
						<button
							key={i}
							onClick={() => setIsCurrent(i)}
							className={`w-3 h-3 rounded-full transition ${
								isCurrent === i ? "bg-white" : "bg-white/50"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
