import React from 'react';
import { Link } from 'react-router';

// export default class NotFound extends React.Component {
//   render() {
//     return <p>NotFound component here</p>;
//   }
// }

export default () => {
  return (
  	<div className="boxed-view">
      <div className="boxed-view__box">
      	<h1>Page not found</h1>
      	<p>NotFound component here</p>
      	<Link to="/"  className="button button--link">HEAD HOME</Link>
      </div>
    </div>
  );
}