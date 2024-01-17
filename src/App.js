import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState([
    "겨울 노래 추천",
    "파이썬 독학",
    "강남 마라탕 맛집",
  ]);
  let [likeBtn, setLikeBtn] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [text, setText] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {postTitle.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {postTitle[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copyLike = [...likeBtn];
                  copyLike[i] = copyLike[i] + 1;
                  setLikeBtn(copyLike);
                }}
              >
                👍
              </span>
              {likeBtn[i]}
            </h4>
            <p>11월 12일 발행</p>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                setPostTitle(copy);
              }}
            >
              삭제하기
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.unshift(text);
          setPostTitle(copy);
        }}
      >
        글 발행
      </button>

      {modal == true ? (
        <Modal
          title={title}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.postTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.postTitle];
          copy[props.title] = "여름 노래 추천";
          props.setPostTitle(copy);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default App;