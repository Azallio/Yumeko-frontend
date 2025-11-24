export type TVideo = {
	id: string;
	type: "anime" | "movie" | "episode";
	title: string;
	description: string;
	genres: string[];
	titleOriginal?: string;
	year?: number;
	posterUrl?: string;
	bannerUrl?: string;

	// Структура для аниме/сериалов
	season?: number;
	episode?: number;

	// Линки на видео
	sources?: Array<{
		quality: "360p" | "480p" | "720p" | "1080p" | "2k" | "4k";
		url: string;
	}>;

	// Теги нового/популярного
	flags?: {
		isTrending?: boolean;
		isNew?: boolean;
	};

	// Рейтинг
	rating?: {
		score: number; // 0-10
		votes: number;
	};

	// Система для комментариев/лайков
	stats?: {
		likes: number;
		views: number;
		bookmarks: number;
	};

	// Связанные объекты
	related?: string[]; // IDs других видео
};
