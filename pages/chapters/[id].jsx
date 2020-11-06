import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout, { LayoutContext } from '../../components/Layout';
import Message from '../../components/Message';
import Button from '../../components/Button';
import BackToTop from '../../components/BackToTop';
import { getAllChapterIDs, getChapterData } from '../../utils/chapters';

export default function Chapter({ chapterData }) {
  const [bookmark, setBookmark] = useState('');
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    setBookmark(window.localStorage.getItem(chapterData.id) || '');
  }, [bookmark, setBookmark, chapterData]);

  function onBookmark(bookmarkData) {
    if (bookmarkData === bookmark) {
      setBookmark('');
      window.localStorage.setItem(chapterData.id, '');
    } else {
      setBookmark(bookmarkData);
      window.localStorage.setItem(chapterData.id, bookmarkData);
    }
  }

  function jumpToBookmark(container) {
    container.current.scrollTo({
      top: bookmark.split('|')[1],
      behavior: 'smooth',
    });
  }

  return (
    <Layout
      title={chapterData.title}
      background={{ src: 'chapterhero.jpg', type: 'image/jpg' }}
      header={chapterData.title.split(':')[1]}
      description={chapterData.title.split(':')[0]}
    >
      <LayoutContext.Consumer>
        {({ container }) => (
          <>
            <div className="text-center px-2 md:px-0">
              <Button to="/archive" label="Back to Archive" />
              {!!bookmark.length && (
                <Button
                  onClick={() => jumpToBookmark(container)}
                  label="Jump to Bookmark"
                  color="#466E3C"
                />
              )}
            </div>
            {chapterData.messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  message={message}
                  isBookmarked={bookmark.split('|')[0] === `${message.id}`}
                  onBookmark={onBookmark}
                />
              );
            })}
            <BackToTop container={container} />
          </>
        )}
      </LayoutContext.Consumer>
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
