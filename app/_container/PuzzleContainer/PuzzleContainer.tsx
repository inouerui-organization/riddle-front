import PuzzlePresentation from './../../_presentation/PuzzlePresentation/PuzzlePresentation';
import React from 'react';

//data fetch層. 正式なAPI仕様が決まったらdummyPuzzlesはモック化する
export default async function PuzzleContainer() {
    const dummyPuzzles = [
        { id: 'uuid-1', title: 'ダミーパズル1' },
        { id: 'uuid-2', title: 'ダミーパズル2' },
    ];
    return <PuzzlePresentation puzzles={dummyPuzzles} />;
}
