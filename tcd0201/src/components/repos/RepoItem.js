import React, {Component} from 'react';

// class RepoItem extends Component {
//   render() {
//     return (
//       <div>
//
//       </div>
//     );
//   }
// }

const RepoItem = ({repo}) => {
  return(
    <div className="card">
      {repo.name}
    </div>
  )
};


export default RepoItem;