import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import PuzzleContainer from './PuzzleContainer';
import PuzzlePresentation from './../../_presentation/PuzzlePresentation/PuzzlePresentation';

describe('PuzzleContainer', () => {
	it('正しくパズルデータを表示するか', async () => {
		render(await PuzzleContainer());
		const { type, props } = await PuzzleContainer();

		//2はcontainerのダミー要素数に起因
		expect(props.puzzles).toHaveLength(2);
		expect(type).toBe(PuzzlePresentation);
	});
});
