import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect } from 'vitest';

describe('トップページ：Page.tsx', () => {
    it('h1で「謎作成」が表示されるか', () => {
        render(<Home />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            '謎作成',
        );
    });
});
