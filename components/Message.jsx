/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-danger */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { toHTML } from 'discord-markdown';
import Bookmark from './Bookmark';

export default function Message({ message, isBookmarked, onBookmark }) {
  const { content, embed } = message;
  const messageEl = useRef(null);

  function handleClick() {
    onBookmark(`${message.id}|${messageEl.current.offsetTop}`);
  }

  return (
    <div
      className="relative px-4 py-4 mx-2 my-4 font-thin bg-gray-900 border cursor-pointer md:py-8 md:px-6 md:mx-auto md:w-5/6 message md:w-3/5 blade-border"
      onClick={handleClick}
      ref={messageEl}
    >
      <Bookmark active={isBookmarked} />
      {embed && (
        <div>
          <div className="flex justify-between w-full">
            {embed.thumbnail && (
              <a
                className="flex-grow-0 flex-shrink-0 block w-16 mr-6 md:w-32"
                href={embed.thumbnail.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-full"
                  src={embed.thumbnail.url}
                  alt="Character portrait"
                />
              </a>
            )}
            <div className="flex-grow">
              {embed.author && !embed.title && !embed.thumbnail && (
                <div className="mb-1 text-sm text-gray-500">
                  {embed.author.name}
                </div>
              )}
              {embed.author && !embed.title && embed.thumbnail && (
                <h5>{embed.author.name}</h5>
              )}
              <h5>{embed.title}</h5>
              <div className="border-t border-gray-800 mb-5" />
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: toHTML(embed.description),
                  }}
                />
              </div>
              {embed.fields.map((f) => (
                <div key={f.name} className="mt-5">
                  <div className="mb-1 text-sm text-gray-500">{f.name}</div>
                  <div dangerouslySetInnerHTML={{ __html: toHTML(f.value) }} />
                </div>
              ))}
            </div>
          </div>
          {embed.image && (
            <a
              className="block mt-5"
              href={embed.image.url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={embed.image.url} alt="Visual aid" />
            </a>
          )}
        </div>
      )}
      {content && <div dangerouslySetInnerHTML={{ __html: toHTML(content) }} />}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    embed: PropTypes.object,
  }).isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired,
};
