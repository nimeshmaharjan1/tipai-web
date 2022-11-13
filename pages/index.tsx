import MainLayout from '@components/layouts/Main';
import { NotesData } from '@lib/fixtures';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
    return (
        <div className="notes">
            {NotesData.map((note, index) => {
                return <article className='prose prose-lg md:prose-xl ' key={note.id}>{note.body}</article>;
            })}
        </div>
    );
};
Home.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
