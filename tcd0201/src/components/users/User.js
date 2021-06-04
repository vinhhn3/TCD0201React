import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Repos from "../repos/Repos";

const User = (props) => {
  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getRepos(props.match.params.login);
  }, []);
  const {
    name,
    login,
    company,
    location,
    email,
    public_repos,
    public_gists,
    website,
    avatar_url,
    html_url,
    followers,
    following,
    bio,
    blog,
  } = props.user;

  const { showLoading } = props;
  const { repos } = props;

  if (showLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              style={{ width: "50px" }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit GitHub profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Login Id: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Blog: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
              <li>
                {website && (
                  <Fragment>
                    <strong>Website: </strong>
                    {website}
                  </Fragment>
                )}
              </li>
              <li>
                {email && (
                  <Fragment>
                    <strong>Email: </strong>
                    {email}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card card-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-dark">Public Repos: {public_repos}</div>
          <div className="badge badge-light">Public Gists: {public_gists}</div>
          <Repos repos={repos} />
        </div>
      </>
    );
  }
};

export default User;
