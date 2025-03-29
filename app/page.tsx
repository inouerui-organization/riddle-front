import { Suspense } from 'react';
import PuzzleContainer from './_container/PuzzleContainer/PuzzleContainer';

export default function Home() {
    return (
        <div>
            <h1>謎作成</h1>
            <Suspense fallback={<div>load</div>}>
                <PuzzleContainer />
            </Suspense>
        </div>
    );
}
