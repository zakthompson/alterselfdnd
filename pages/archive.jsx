import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getChapters } from '../utils/chapters';
import styles from '../styles/Archive.module.scss';

const Archive = ({ chapters }) => (
  <Layout
    title="Archive | Alter Self"
    header="Archive"
    description="Below, you'll find each chapter of our story so far, for you to read at your own pace."
    background={{
      src: 'archivehero.jpg',
      type: 'image/jpg',
      position: '35% 80%',
    }}
  >
    <div className={styles.chapters}>
      {chapters.map((chapter) => {
        const { id, title } = chapter;
        return (
          <Link href="/chapters/[id]" as={`/chapters/${id}`} key={id}>
            <a>
              <h3>{title}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  </Layout>
);

Archive.propTypes = {
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export async function getStaticProps() {
  const chapters = getChapters();

  return {
    props: {
      chapters,
    },
  };
}

export default Archive;
