import Link from 'next/link';
import React from 'react';
//data view層.
export default function PuzzlePresentation({
    puzzles,
}: {
    puzzles: { id: string; title: string }[];
}) {
    return (
        <div>
            {puzzles.length === 0 && <p>no contents</p>}

            {puzzles.map((puzzle) => (
                <div key={puzzle.id}>
                    <Link href={`/${puzzle.id}`}>{puzzle.title}</Link>
                </div>
            ))}
        </div>
    );
}
