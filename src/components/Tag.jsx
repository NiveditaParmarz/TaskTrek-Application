import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#ff69eb" }, //"#fda821"
    CSS: { backgroundColor: "#ff86c8" }, //"#15d4c8"
    JavaScript: { backgroundColor: "#ffa3a5" }, //"#ffd12c"
    React: { backgroundColor: "#f9b4ed" }, //"#4cdafc"
    default: { backgroundColor: "#ffffe8" }, //"#f9f9f9"

    HTML: { backgroundColor: "#ff69eb", border: "2px solid #d400a5" },
    CSS: { backgroundColor: "#ff86c8", border: "2px solid #c40078" },
    JavaScript: { backgroundColor: "#ffa3a5", border: "2px solid #c21807" },
    React: { backgroundColor: "#f9b4ed", border: "2px solid #a400d4" },
    default: { backgroundColor: "#ffffe8", border: "2px solid #b0b0b0" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
