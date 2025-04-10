import { render, screen } from '@testing-library/react';
import PuzzlePresentation from './../../_presentation/PuzzlePresentation/PuzzlePresentation';
import { describe, it, expect } from 'vitest';

describe('PuzzlePresentation', () => {
	it('パズルのタイトルを正しく表示するか', () => {
		const dummyPuzzles = [
			{ id: 'uuid-1', title: 'ダミーパズル1' },
			{ id: 'uuid-2', title: 'ダミーパズル2' },
		];

		render(<PuzzlePresentation puzzles={dummyPuzzles} />);

		expect(screen.getByText('ダミーパズル1')).toBeInTheDocument();
		expect(screen.getByText('ダミーパズル2')).toBeInTheDocument();
	});

	it('空のパズルリストが渡された場合、"no contents" が表示されるか', () => {
		render(<PuzzlePresentation puzzles={[]} />);

		expect(screen.getByText('no contents')).toBeInTheDocument();
	});
});
