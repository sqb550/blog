export interface SeriesPost {
	id: string;
	data: {
		series?: string;
		pubDate: Date;
	};
}

export function getSeriesPosts<T extends SeriesPost>(posts: T[], series: string): T[] {
	return posts
		.filter((post) => post.data.series === series)
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}
