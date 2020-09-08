import React from 'react';
import PropTypes from 'prop-types';

export default function Message({ author }) {
  return (
    <div>
      <p>{author}</p>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
};
