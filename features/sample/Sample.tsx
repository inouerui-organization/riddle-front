import React from 'react';
import { fetchHello } from './fetchPosts';

export default async function Sample() {
	const { data, error } = await fetchHello();
	console.log('json placeholderのデータ', data);
	return (
		<div className="text-white">
			<div>
				<>{data?.title}</>
			</div>

			{data === null && (
				<div>
					{error.status === 404 ? (
						<>URLが間違っております</>
					) : error.status === 500 ? (
						<>時間をおいて再度訪問してください</>
					) : (
						<>{error.message}</>
					)}
				</div>
			)}
		</div>
	);
}
