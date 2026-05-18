import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <>
      <section className="hero">
        <div className="overlay">

          <h1>약관본부 수원지사</h1>

          <h2>수원지사 All-IN-ONE 시스템</h2>

          <p className="sub">
            메디컬 · 전산 · 자료 · 화법 · 상담까지
            <br />
            한번에
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="화재보험 · 실손 · 상담화법 · 신입교육 검색"
            />
          </div>

          <div className="quick-menu">
            <button>공지사항</button>
            <button>신입교육</button>
            <button>상담화법</button>
            <button>설계안샘플</button>
            <button>메디컬</button>
            <button>보험사자료</button>
            <button>MVP</button>
            <button>명예의전당</button>
            <button>다운로드</button>
            <button>캘린더</button>
          </div>

        </div>
      </section>

      <section className="calendar">

        <h2>공식 일정</h2>

        <div className="calendar-box">
          캘린더 영역 (추후 노션 연동 가능)
        </div>

      </section>

      <section className="content">

        <h2>수원지사 시스템</h2>

        <div className="card-grid">

          <div className="card">
            <h3>메디컬 스터디</h3>
            <p>추후 노션 연동 및 자료 추가 가능</p>
          </div>

          <div className="card">
            <h3>고객전달자료</h3>
            <p>추후 노션 연동 및 자료 추가 가능</p>
          </div>

          <div className="card">
            <h3>상담화법</h3>
            <p>추후 노션 연동 및 자료 추가 가능</p>
          </div>

          <div className="card">
            <h3>설계안 샘플</h3>
            <p>추후 노션 연동 및 자료 추가 가능</p>
          </div>

          <div className="card">
            <h3>원수사 정보</h3>
            <p>추후 노션 연동 및 자료 추가 가능</p>
          </div>

          <div className="card">
            <h3>신입 커리큘럼</h3>
            <p>추후 노션 연동 및 자료 추가 가능</p>
          </div>

        </div>

      </section>

      <footer>

        <h3>찾아오는 곳</h3>

        <p>
          수원시 영통구 반달로 42-1, 6층
        </p>

      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
