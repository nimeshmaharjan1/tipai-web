import ThemeToggler from '@components/ui/theme-toggler';
import Head from 'next/head';
import React from 'react';

import Sidebar from './Header/side-drawer';

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Tipai</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Sidebar>{children}</Sidebar>
            </header>
        </>
    );
};

export default MainLayout;
