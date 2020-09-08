/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Message({ message }) {
  const { author, content, embed } = message;
  return (
    <div>
      {embed && (
        <div>
          <h5>{embed.title}</h5>
          <p>{embed.description}</p>
        </div>
      )}
      {content && <p>{`${author}: ${content}`}</p>}
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
};
