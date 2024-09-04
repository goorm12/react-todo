import { useState } from "react";
import "./Editor.css";
const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(content);
  };
  return (
    <div className="Editor">
      <form onSubmit={onSubmit}>
        <input
          value={content}
          onChange={onChangeContent}
          type="text"
          placeholder="새로운 Todo..."
        />
        <button>추가</button>
      </form>
    </div>
  );
};

export default Editor;
