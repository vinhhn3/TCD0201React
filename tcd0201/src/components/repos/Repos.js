import React, {Component} from 'react';
import RepoItem from "./RepoItem";

// class Repos extends Component {
//   render() {
//     return (
//       <div>
//
//       </div>
//     );
//   }
// }

const Repos = ({repos}) => {
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo}/>)
}

export default Repos;