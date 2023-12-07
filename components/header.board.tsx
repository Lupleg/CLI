import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'HeaderComponent',
    Board: () => <div></div>,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#000000'
    }
});
