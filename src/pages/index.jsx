'use strict';

const React = require('react');
const { Helmet } = require('react-helmet');

module.exports = () => {
  return (
    <div>
      <Helmet title="Lifion Insights" defer={false} />
      <h1>Welcome to Lifion Insights</h1>
      <p>More information coming soon...</p>
    </div>
  );
};
