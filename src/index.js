import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="foodimg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrw7dL4hgCzbvtJRVkKG6Xq9dYXVfbvPUH2Q&s"
      />
      <img
        className="foodimg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbB8lRn_CnRhtwk0UYXumiTN_cUdxs3NtFYw&s"
      />
      <img
        className="foodimg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7S_1rkom2Zv4orHKgajtcoUD3XlkOhLYTNg&s"
      />
    </div>
  </div>,
  document.getElementById("root")
);
