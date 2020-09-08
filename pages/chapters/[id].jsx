import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Message from '../../components/Message';
import { getAllChapterIDs, getChapterData } from '../../utils/chapters';

export default function Chapter({ chapterData }) {
  return (
    <Layout
      title={chapterData.title}
      background={{ src: 'chapterhero.jpg', type: 'image/jpg' }}
      header={chapterData.title.split(':')[1]}
      description={chapterData.title.split(':')[0]}
    >
      {chapterData.messages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </Layout>
  );
}

Chapter.propTypes = {
  chapterData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export async function getStaticPaths() {
  const paths = getAllChapterIDs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const chapterData = getChapterData(params.id);
  return {
    props: {
      chapterData,
    },
  };
}
