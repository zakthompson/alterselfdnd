import React from 'react';
import PropTypes from 'prop-types';

export default function Bookmark({ active }) {
  return (
    <div className={`absolute bookmark ${active ? 'active' : ''}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z"
          stroke="#466E3C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

Bookmark.propTypes = {
  active: PropTypes.bool.isRequired,
};
