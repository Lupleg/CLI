import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Contact',
    Board: () => <div className="flex">
        <h1 className="text-blue-900">Contact us</h1>
    </div>,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#ffffff',
    }
});
