const initState = {
  posts: [
    { id: "1", content: "redux boilerplate version 1" },
    { id: "2", content: "redux boilerplate version 2" },
    { id: "3", content: "redux boilerplate version 3" },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPost = state.posts.filter((post) => {
      return action.id != post.id;
    });
    return {
      ...state,
      posts: newPost,
    };
  }
  return state;
};

export default rootReducer;
