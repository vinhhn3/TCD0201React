import React, {Component} from 'react';

const RepoItem = ({repo}) => {
  return(
    <div className="card">
      {repo.name}
    </div>
  )
};


export default RepoItem;