import React, {Component} from 'react';
import RepoItem from "./RepoItem";

const Repos = ({repos}) => {
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo}/>)
}

export default Repos;