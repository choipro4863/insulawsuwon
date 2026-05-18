import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">

        <div className="overlay">

          <h1>약관본부 수원지사</h1>

          <h2>수원지사 All-IN-ONE 시스템</h2>

          <p className="sub">
            메디컬 · 전산 · 자료 · 화법 · 상담까지<br />
            한번에
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="화재보험 · 실손 · 상담화법 · 신입교육 검색"
            />
          </div>

          {/* QUICK BUTTONS */}
          <div className="quick-menu">

            {[
              "공지사항",
              "신입교육",
              "상담화법",
              "설계안샘플",
              "메디컬",
              "보험사자료",
              "MVP",
              "명예의전당",
              "다운로드",
              "캘린더",
            ].map((item) => (
              <button key={item}>{item}</button>
            ))}

          </div>

        </div>

      </section>

      {/* CALENDAR */}
      <section className="calendar">

        <h2>공식 일정</h2>

        <div className="calendar-box">
          캘린더 영역 (추후 노션 연동 가능)
        </div>

      </section>

      {/* CONTENT */}
      <section className="content">

        <h2>수원지사 시스템</h2>

        <div className="card-grid">

          {[
            "메디컬 스터디",
            "고객전달자료",
            "상담화법",
            "설계안 샘플",
            "원수사 정보",
            "신입 커리큘럼",
            "MVP",
            "명예의전당",
            "다운로드센터",
          ].map((item) => (
            <div className="card" key={item}>

              <h3>{item}</h3>

              <p>
                추후 노션 연동 및 자료 추가 가능
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <h3>찾아오는 곳</h3>

        <p>
          수원시 영통구 반달로 42-1, 6층
        </p>

      </footer>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
