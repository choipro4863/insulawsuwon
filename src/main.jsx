import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="app">

      <aside className="side-menu">
        <div className="side-title">QUICK</div>
        <button>고지사항(정상체/유병자)</button>
        <button>실버올인원플랜</button>
        <button>한화손해-팜스 보장분석</button>
        <button>원수사전산 바로가기</button>
        <button>보케어연동 보험금청구</button>
        <button>연금계산기(변액,비변액,일시납)</button>
        <button>단기납종신,연금</button>
        <button>메디컬</button>
        <button>종수술,N대수술비 검색</button>
        <button>원수사 정보관리</button>
      </aside>

      <header className="top-nav">
        <div className="logo">약관본부 수원지사</div>

        <nav>
          <div className="dropdown">
            원수사정보
            <div className="dropdown-menu">
              <span>설계매니저</span>
              <span>지점공지</span>
              <span>상품공시</span>
            </div>
          </div>

          <div className="dropdown">
            교육자료
            <div className="dropdown-menu">
              <span>신입교육</span>
              <span>메디컬</span>
              <span>상담화법</span>
            </div>
          </div>

          <div className="dropdown">
            자료실
            <div className="dropdown-menu">
              <span>고객전달자료</span>
              <span>설계안 샘플</span>
              <span>다운로드</span>
            </div>
          </div>

          <div className="dropdown">
            지사문화
            <div className="dropdown-menu">
              <span>MVP</span>
              <span>명예의전당</span>
              <span>연도대상</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-wrap">

        <section className="hero-grid">

          <div className="hero-title">
            <p className="eyebrow">INSULAW SUWON CONTROL CENTER</p>
            <h1>약관본부<br />수원지사</h1>
            <h2>수원지사 All-IN-ONE 시스템</h2>
            <p className="desc">
              메디컬 · 전산 · 자료 · 화법 · 상담까지<br />
              한 번에 꺼내 쓰는 수원지사 운영 시스템
            </p>

            <div className="search-box">
              <input placeholder="화재보험 · 실손 · 상담화법 · 신입교육 검색" />
            </div>
          </div>

          <div className="calendar-card">
            <div className="card-label">OFFICIAL SCHEDULE</div>
            <h3>공식 일정</h3>
            <div className="calendar-mini">
              <div className="month">MAY 2026</div>
              <div className="days">
                <span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span><span>일</span>
                <b>11</b><b>12</b><b>13</b><b>14</b><b>15</b><b>16</b><b>17</b>
                <b>18</b><b>19</b><b>20</b><b>21</b><b>22</b><b>23</b><b>24</b>
              </div>
            </div>
            <p>노션 일정 DB 연동 예정</p>
          </div>

          <div className="action-grid">
            <button>원수사정보<br /><small>카드/공시/설매</small></button>
            <button>상품인수기준<br /><small>회사별 기준</small></button>
            <button>KCD질병코드<br /><small>상병코드 검색</small></button>
            <button>전산바로가기<br /><small>원수사 전산</small></button>
            <button>보험로스쿨<br /><small>교육자료</small></button>
            <button>고객자료<br /><small>이미지/PDF</small></button>
          </div>

        </section>

        <section className="mvp-section">
          <div className="section-head">
            <p>HALL OF FAME</p>
            <h2>약관본부 수원지사 MVP</h2>
          </div>

          <div className="mvp-grid">
            <div className="mvp-card">
              <span>건수부문</span>
              <h3>월간 MVP</h3>
              <p>추후 이미지 또는 인물사진 삽입</p>
            </div>

            <div className="mvp-card">
              <span>업적부문</span>
              <h3>월간 MVP</h3>
              <p>추후 이미지 또는 인물사진 삽입</p>
            </div>

            <div className="mvp-card gold">
              <span>명예의전당</span>
              <h3>최고 기록</h3>
              <p>누적 건수 · 업적 · 신인 기록</p>
            </div>

            <div className="mvp-card gold">
              <span>연도대상</span>
              <h3>수원지사 AWARDS</h3>
              <p>연간 우수자 기록</p>
            </div>
          </div>
        </section>

        <section className="system-section">
          <h2>수원지사 시스템</h2>

          <div className="system-grid">
            <div>메디컬 스터디</div>
            <div>고객전달자료</div>
            <div>상담화법</div>
            <div>설계안 샘플</div>
            <div>신입 커리큘럼</div>
            <div>다운로드센터</div>
          </div>
        </section>

        <footer>
          <h3>찾아오는 곳</h3>
          <p>수원시 영통구 반달로 42-1, 6층</p>
        </footer>

      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
