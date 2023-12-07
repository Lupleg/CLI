import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Page from './page';

export default createBoard({
    name: 'Page',
    Board: () => <Page />,
    isSnippet: true,
});
