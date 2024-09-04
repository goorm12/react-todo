import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    onCreate(content);

    setContent("");
  };
  return (
    <div className="Editor">
      <form onSubmit={onSubmit}>
        <input
          ref={contentRef}
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
