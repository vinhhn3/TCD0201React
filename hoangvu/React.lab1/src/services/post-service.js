const postService = {
  load: function (id) {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=4${id ? `/${id}` : ""}`
    ).then((res) => res.json());
  },
};

export default postService;
