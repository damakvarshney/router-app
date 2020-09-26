import React from "react";

const Posts = ({ match }) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.years} , Month:{match.params.month}
    </div>
  );
};

export default Posts;
