import { cleanup, render, screen, waitFor } from '@testing-library/react';
import Home from './page';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

beforeEach(() => {
	cleanup();
});

afterEach(() => {
	vi.resetModules();
});

describe('トップページ：Page.tsx', () => {
	it('h1で「謎作成」が表示されるか', () => {
		render(<Home />);
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'謎作成',
		);
	});

	it('Suspenseのfallbackが表示されるか', () => {
		render(<Home />);
		expect(screen.getByText('load')).toBeInTheDocument();
	});

	it('PuzzleContainer が呼ばれるか', async () => {
		vi.doMock('./_container/PuzzleContainer/PuzzleContainer', () => ({
			default: vi.fn(() => <div>モックPuzzleContainer</div>),
		}));

		// モックを適用した状態で Home を再インポート
		const { default: MockedPuzzleContainer } = await import('./page');

		render(<MockedPuzzleContainer />);
		await waitFor(() => screen.getByText('モックPuzzleContainer'));
		expect(screen.getByText('モックPuzzleContainer')).toBeInTheDocument();
	});
});
