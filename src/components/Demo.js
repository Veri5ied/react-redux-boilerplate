import React, { Component } from "react";
import { connect } from "react-redux";

class Demo extends Component {
  handleClick = (id) => {
    this.props.deletePost(this.props.posts.id);
    console.log(this.props);
  };

  render() {
    const { posts } = this.props;

    const postData = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post-body" key={post.id}>
            {post.content}
            <button className="btn red" onClick={this.handleClick}>
              Delete Post
            </button>
          </div>
        );
      })
    ) : (
      <p className="center">No post from redux store</p>
    );
    return <div>{postData}</div>;
  }
}

//Passing your reducer data as props so we can make use of the contents, we make use of the mapStateToProps function call

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

//To perform a delete action, we make use of the dispatch call as below

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({
        type: "DELETE_POST",
        id: id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
