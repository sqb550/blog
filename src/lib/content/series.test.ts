import { describe, expect, it } from 'vitest';
import { getSeriesPosts } from './series';

const seriesPosts = [
	{ id: 'part-two', data: { series: 'Networking', pubDate: new Date('2026-02-01') } },
	{ id: 'unrelated', data: { series: 'Other', pubDate: new Date('2026-01-01') } },
	{ id: 'part-one', data: { series: 'Networking', pubDate: new Date('2026-01-01') } },
];

describe('getSeriesPosts', () => {
	it('filters by series and orders entries from oldest to newest', () => {
		expect(getSeriesPosts(seriesPosts, 'Networking').map((post) => post.id)).toEqual([
			'part-one',
			'part-two',
		]);
	});

	it('does not mutate the source list', () => {
		const originalOrder = seriesPosts.map((post) => post.id);

		getSeriesPosts(seriesPosts, 'Networking');

		expect(seriesPosts.map((post) => post.id)).toEqual(originalOrder);
	});
});
