import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Nick"
          timeAgo="Today at 10:00 AM"
          avatar={faker.image.avatar()}
          blogPost="HELLO!!!!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="John"
          timeAgo="Yesterday at 3:57 PM"
          avatar={faker.image.avatar()}
          blogPost="Good bye!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
