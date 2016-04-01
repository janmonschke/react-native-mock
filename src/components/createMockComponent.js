import React from 'react';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    propTypes: {},
    render() {
      return null;
    },
  });
}

module.exports = createMockComponent;
