import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilter from './LinksListFilter';

export default () => {
  return (
    <div>
      <PrivateHeader title='Your links'/>
      <div className="page-content">
      	<LinksListFilter />
	      <AddLink />
	      <LinksList/>
      </div>
    	
    </div>
  );
}

// export default class Link extends React.Component {
//   render() {
//     return (
//       <div>
//         <PrivateHeader title='Your links'/>
//         <LinksList/>
//         <AddLink />
//       </div>
//     );
//   }
// }
