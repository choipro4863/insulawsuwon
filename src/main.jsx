import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search, ShieldCheck, Megaphone, MessageCircle, ClipboardList, PhoneCall,
  Calculator, ExternalLink, Trophy, CalendarDays, Building2, MonitorCog,
  GraduationCap, ReceiptText, CheckSquare, Newspaper, Database, Crown, FolderPlus
} from "lucide-react";
import "./style.css";

const mainMenus = [
  { icon: Megaphone, title: "이달의 영업방향", desc: "이번 달 집중 방향과 공지" },
  { icon: Building2, title: "원수사 정보", desc: "설매·지점장·영업소 FAX" },
  { icon: MonitorCog, title: "전산바로가기", desc: "보험사 전산 링크" },
  { icon: GraduationCap, title: "보험로스쿨", desc: "교육자료·약관해석" },
  { icon: ReceiptText, title: "급여·수수료 계산", desc: "급여·수수료 계산 도구" },
  { icon: CheckSquare, title: "인수기준", desc: "회사별 인수 기준" },
];

const quickMenus = [
  { icon: MessageCircle, title: "실전화법 예시" },
  { icon: ClipboardList, title: "설계따라잡기" },
  { icon: Database, title: "업계누적" },
  { icon: Building2, title: "원수사 정보 관리시스템" },
  { icon: PhoneCall, title: "거절처리 예시" },
  { icon: Newspaper, title: "보험뉴스" },
  { icon: FolderPlus, title: "기타 신규" },
];

const posts = [
  {category:"이달의 영업방향", title:"이번 달 핵심 방향: 간병·연금·암치료비", desc:"이번 달 집중 상품, 상담 포인트, 주의사항을 한 번에 정리합니다.", tag:"월간"},
  {category:"원수사 정보", title:"설매·지점장·영업소 FAX 정리", desc:"보험사별 주요 담당자와 영업소 FAX 정보를 정리합니다.", tag:"원수사"},
  {category:"전산바로가기", title:"자주 쓰는 원수사 전산 링크", desc:"설계, 청약, 배서, 청구 관련 전산 링크를 모아둡니다.", tag:"링크"},
  {category:"보험로스쿨", title:"약관 해석과 보상 쟁점 정리", desc:"현장에서 자주 묻는 약관·보상·분쟁 포인트를 정리합니다.", tag:"교육"},
  {category:"실전화법 예시", title:"보험료가 부담된다는 고객 응대", desc:"공감 → 우선순위 확인 → 보장공백 확인 → 금액 조정 흐름.", tag:"화법"},
  {category:"설계따라잡기", title:"40대 가장 가족형 설계 구조", desc:"암·뇌·심·수술비·간병 담보를 왜 이렇게 배치했는지 해설합니다.", tag:"설계"},
  {category:"거절처리 예시", title:"이미 보험 있다는 고객 전환법", desc:"가입 여부가 아니라 보장 구조를 점검하는 대화로 전환합니다.", tag:"거절"},
  {category:"보험뉴스", title:"이번주 보험뉴스 브리핑", desc:"상품, 제도, 청구, 약관 관련 주요 뉴스를 정리합니다.", tag:"뉴스"},
  {category:"인수기준", title:"유병자 인수기준 업데이트", desc:"회사별 유병자·고혈압·당뇨·수술력 인수기준을 정리합니다.", tag:"인수"},
];

const notices = [
  "5월 원수사 담당자 정보 업데이트",
  "이번 달 영업방향 자료 업로드",
  "급여·수수료 계산 메뉴 준비중",
  "거절처리 예시 신규 등록",
];

const hof = [
  { title: "명예의 전당", name: "수원지사 Hall of Fame", desc: "누적 기록과 장기 우수자" },
  { title: "이달의 MVP", name: "Monthly MVP", desc: "월간 우수 활동자" },
];

function insuranceAge(birth, todayStr) {
  if (!birth) return null;
  const b = new Date(birth);
  const t = todayStr ? new Date(todayStr) : new Date();
  if (Number.isNaN(b.getTime())) return null;
  let age = t.getFullYear() - b.getFullYear();
  const birthdayThisYear = new Date(t.getFullYear(), b.getMonth(), b.getDate());
  if (t < birthdayThisYear) age -= 1;
  const insuranceUpDate = new Date(t.getFullYear(), b.getMonth() - 6, b.getDate());
  let insAge = age;
  if (t >= insuranceUpDate && t < birthdayThisYear) insAge = age + 1;
  if (t >= birthdayThisYear) {
    const nextInsuranceUpDate = new Date(t.getFullYear() + 1, b.getMonth() - 6, b.getDate());
    insAge = age;
    if (t >= nextInsuranceUpDate) insAge = age + 1;
  }
  return Math.max(0, insAge);
}

function bmiGrade(bmi) {
  if (bmi < 18.5) return "저체중";
  if (bmi < 23) return "정상";
  if (bmi < 25) return "과체중";
  if (bmi < 30) return "비만";
  return "고도비만";
}

function App() {
  const [query, setQuery] = useState("");
  const [birth, setBirth] = useState("");
  const [today, setToday] = useState(new Date().toISOString().slice(0, 10));
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) =>
      `${p.category} ${p.title} ${p.desc} ${p.tag}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const insAge = insuranceAge(birth, today);
  const bmi = height && weight ? Number(weight) / ((Number(height) / 100) ** 2) : null;

  return (
    <div className="portal">
      <aside className="leftPanel">
        <div className="sideBrand">
          <div className="sideLogo"><ShieldCheck size={26} /></div>
          <div>
            <div className="eyebrow">INSULAW SUWON</div>
            <strong>약관본부<br />수원지사</strong>
          </div>
        </div>

        <div className="quickTitle">QUICK MENU</div>
        <div className="quickList">
          {quickMenus.map(({ icon: Icon, title }) => (
            <a className="quickItem" href="#board" key={title}>
              <Icon size={18} />
              <span>{title}</span>
            </a>
          ))}
        </div>
      </aside>

      <main className="mainArea">
        <header className="topHeader">
          <div>
            <div className="eyebrow">PRIME ASSET · 약관본부 수원지사</div>
            <h1>운영포털</h1>
          </div>
          <label className="topSearch">
            <Search size={18} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="검색: 원수사, 인수기준, 화법, 보험뉴스..." />
          </label>
        </header>

        <section className="heroV2">
          <div className="heroCopy">
            <span className="pill">수원지사 운영 시스템</span>
            <h2>약관본부<br />수원지사</h2>
            <p>이달의 영업방향, 원수사 정보, 전산바로가기, 보험로스쿨, 인수기준과 실전 자료를 한 곳에서 확인합니다.</p>
            <div className="heroButtons">
              <a href="#mainMenu" className="primary">메인메뉴 보기</a>
              <a href="#tools" className="secondary">계산기 바로가기</a>
            </div>
          </div>

          <div className="todayBox">
            <div className="boxHead">
              <div>
                <small>TODAY DASHBOARD</small>
                <h3>오늘의 운영 현황</h3>
              </div>
              <Trophy color="#f6d37a" />
            </div>
            <div className="stats">
              <div><small>공지사항</small><strong>4</strong></div>
              <div><small>신규 자료</small><strong>12</strong></div>
              <div><small>이번 달 방향</small><b>간병 · 연금</b></div>
              <div><small>교육 일정</small><b>4건</b></div>
            </div>
          </div>
        </section>

        <section className="section" id="mainMenu">
          <div className="sectionTitle"><small>MAIN MENU</small><h2>메인메뉴</h2></div>
          <div className="mainMenuGrid">
            {mainMenus.map(({ icon: Icon, title, desc }) => (
              <a className="menuCard" href="#board" key={title}>
                <div className="menuIcon"><Icon size={25} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section hofSection">
          <div className="sectionTitle"><small>HALL OF FAME</small><h2>명예의 전당 · 이달의 MVP</h2></div>
          <div className="hofGrid">
            {hof.map((item) => (
              <div className="hofCard" key={item.title}>
                <div className="hofImage"><Crown size={54} /></div>
                <div className="hofContent">
                  <span>{item.title}</span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section board" id="board">
          <div className="boardHead">
            <div className="sectionTitle"><small>CONTENT BOARD</small><h2>자료실</h2></div>
            <label className="boardSearch">
              <Search size={18} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="자료 검색" />
            </label>
          </div>

          <div className="postGrid">
            {filtered.map((p) => (
              <article className="post" key={p.title}>
                <div className="badges"><span>{p.category}</span><em>{p.tag}</em></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <small>관리자 등록 · 보기 <ExternalLink size={13} /></small>
              </article>
            ))}
          </div>
        </section>

        <section className="section tools" id="tools">
          <div className="sectionTitle"><small>CALCULATOR</small><h2>계산기</h2></div>

          <div className="toolsGrid">
            <div className="tool">
              <h3>보험나이 계산기</h3>
              <p>생년월일과 기준일을 입력하면 보험나이를 계산합니다.</p>
              <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} />
              <input type="date" value={today} onChange={(e) => setToday(e.target.value)} />
              <div className="result">{insAge === null ? "생년월일을 입력하세요" : `보험나이: ${insAge}세`}</div>
              <small>※ 회사별 세부 기준은 인수지침 확인 필요</small>
            </div>

            <div className="tool">
              <h3>BMI 계산기</h3>
              <p>키와 몸무게를 입력하면 BMI와 비만도 구간을 확인합니다.</p>
              <input type="number" placeholder="키(cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
              <input type="number" placeholder="몸무게(kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
              <div className="result">{bmi ? `BMI: ${bmi.toFixed(1)} · ${bmiGrade(bmi)}` : "키와 몸무게를 입력하세요"}</div>
              <small>※ 보험 심사는 회사·상품·고지사항에 따라 달라질 수 있음</small>
            </div>

            <div className="tool muted">
              <h3>급여·수수료 계산</h3>
              <p>지급률, 환산, 수수료 계산 기능 추가 예정</p>
            </div>

            <div className="tool muted">
              <h3>타사합산한도</h3>
              <p>회사별 한도 및 업계누적 확인 기능 추가 예정</p>
            </div>
          </div>
        </section>

        <section className="section bottomGrid">
          <div className="noticeBox">
            <div className="boxHead"><h3>공지사항</h3><span>MORE +</span></div>
            {notices.map((notice) => (
              <div className="noticeItem" key={notice}><span>{notice}</span><b>NEW</b></div>
            ))}
          </div>

          <div className="noticeBox">
            <div className="boxHead"><h3>최근 업로드</h3><span>NOTION</span></div>
            <div className="noticeItem"><span>5월 인수기준 정리 PDF</span><b>자료</b></div>
            <div className="noticeItem"><span>상담화법 신규 업데이트</span><b>자료</b></div>
            <div className="noticeItem"><span>설계따라잡기 실전예시</span><b>자료</b></div>
            <div className="noticeItem"><span>보험뉴스 브리핑 업로드</span><b>뉴스</b></div>
          </div>
        </section>

        <section className="section schedule">
          <div>
            <small>SUWON EDUCATION</small>
            <h2>교육·일정</h2>
            <p>월간 교육, 보험로스쿨, 자료 업데이트 일정을 관리합니다.</p>
          </div>
          <div className="scheduleList">
            <div><CalendarDays /> 월간 상품교육 <span>예정</span></div>
            <div><CalendarDays /> 보험로스쿨 <span>예정</span></div>
            <div><CalendarDays /> 신규자료 업데이트 <span>예정</span></div>
          </div>
        </section>

        <footer>
          <strong>약관본부 수원지사</strong>
          <p>실전 자료 · 교육 · 운영 시스템</p>
        </footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
