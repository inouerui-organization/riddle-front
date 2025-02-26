import axios from 'axios';

export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export async function fetchHello() {
	try {
		const { data } = await axios.get<Post>(
			'https://jsonplaceholder.typicode.com/posts/1',
		);

		return { data, error: null };
	} catch (error: unknown) {
		console.log('catchしたエラー', error);
		if (axios.isAxiosError(error)) {
			return { data: null, error };
		} 
		console.log('予測しないエラーをキャッチしました', error);

		throw { data: null, error };
	}
}
