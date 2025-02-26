import { render, screen } from '@testing-library/react';
import { server } from './../../tests/msw/setup/server';
import { http, HttpResponse } from 'msw';
import {
	afterAll,
	afterEach,
	beforeEach,
	describe,
	expect,
	test,
} from 'vitest';
import Sample from './Sample';

beforeEach(() => {
	server.listen();
});

afterEach(() => {
	server.resetHandlers();
});

afterAll(() => {
	server.close();
});

describe('<Sample/>', () => {
	test('リクエスト成功時、titleが表示されるか', async () => {
		const result = await Sample();
		render(result);
		expect(
			screen.getByText(
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			),
		).toBeDefined();
	});

	test('500エラーの際、「時間をおいて再度訪問してください」と表示されるか', async () => {
		server.use(
			http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
				return HttpResponse.json(null, {
					status: 500,
				});
			}),
		);
		const result = await Sample();
		render(result);
		expect(screen.getByText('時間をおいて再度訪問してください')).toBeDefined();
	});

	test('404エラーの際、「URLが間違っております」と表示されるか', async () => {
		server.use(
			http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
				return HttpResponse.json(null, {
					status: 404,
				});
			}),
		);
		const result = await Sample();
		render(result);
		expect(screen.getByText('URLが間違っております')).toBeDefined();
	});
});
