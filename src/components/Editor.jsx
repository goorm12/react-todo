import "./Editor.css";
const Editor = () => {
  return (
    <div className="Editor">
      <form>
        <input type="text" placeholder="새로운 Todo..." />
        <button>추가</button>
      </form>
    </div>
  );
};

export default Editor;
