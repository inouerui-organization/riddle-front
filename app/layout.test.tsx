import { render, screen } from '@testing-library/react';
import RootLayout from './layout';
import { describe, expect, it } from 'vitest';

describe('トップページ:RootLayout', () => {
    it("<html> に lang='ja' が設定されているか", () => {
        render(<RootLayout>Test Content</RootLayout>);
        expect(document.documentElement.lang).toBe('ja');
    });

    it('children が正しくレンダリングされるか', () => {
        render(
            <RootLayout>
                <p>Test Content</p>
            </RootLayout>,
        );
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
});
