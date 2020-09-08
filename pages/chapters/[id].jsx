import React from 'react';
import PropTypes from 'prop-types';
import { getAllChapterIDs, getChapterData } from '../../utils/chapters';
import Message from '../../components/Message';

export default function Chapter({ chapterData }) {
  return (
    <main>
      {chapterData.messages.map((message) => {
        return <Message author={message.author} />;
      })}
    </main>
  );
}

Chapter.propTypes = {
  chapterData: PropTypes.shape({
    id: PropTypes.string,
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
