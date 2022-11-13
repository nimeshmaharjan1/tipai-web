import MainLayout from '@components/layouts/Main';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
    return <h1 className="font-bold text-4xl">Hello World</h1>;
};
Home.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
