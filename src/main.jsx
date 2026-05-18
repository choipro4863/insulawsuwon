
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Search, ShieldCheck, Megaphone, MessageCircle, ClipboardList, PhoneCall, Stethoscope, Calculator, ExternalLink, Trophy, CalendarDays, FileText, Users } from "lucide-react";
import "./style.css";

const posts = [
  {category:"오늘의 지사 브리핑", title:"이번 달 핵심 방향: 간병·연금·암치료비", desc:"시장 흐름, 상담 후킹 문구, 주의사항을 한 번에 정리합니다.", tag:"월간전략"},
  {category:"상담화법", title:"보험료가 부담된다는 고객 응대", desc:"공감 → 우선순위 질문 → 보장공백 확인 → 금액 재설계 흐름.", tag:"실전멘트"},
  {category:"설계따라잡기", title:"40대 가장 가족형 설계 구조", desc:"암·뇌·심·수술비·간병 담보를 왜 이렇게 배치했는지 해설합니다.", tag:"설계해설"},
  {category:"거절처리", title:"이미 보험 있다는 고객 전환법", desc:"가입 여부가 아니라 보장 구조를 점검하는 대화로 전환합니다.", tag:"거절대응"},
  {category:"메디컬", title:"뇌혈관·뇌졸중·뇌출혈 상담 구분", desc:"고객이 헷갈리는 진단 범위를 쉽게 설명하는 현장형 자료.", tag:"질병정리"},
  {category:"보상사례", title:"수술비 지급 사례로 보는 담보 설계", desc:"실제 청구 흐름을 바탕으로 담보 필요성을 설명합니다.", tag:"청구사례"},
  {category:"보험사·약관 바로가기", title:"보험사 전산·자료 링크 모음", desc:"자주 쓰는 전산, 약관, 인수기준, 청구 양식을 모아둡니다.", tag:"바로가기"},
  {category:"신입 90일 과정", title:"입사 초기 실전 커리큘럼", desc:"기초 → 동행 → RP → 설계해석 → 상담전환 순서로 훈련합니다.", tag:"교육"},
];

const menus = [
  {icon: Megaphone, title:"오늘의 지사 브리핑", desc:"팀 전체 공지와 이번 주 집중 방향"},
  {icon: MessageCircle, title:"상담화법", desc:"고객 유형별 실제 멘트"},
  {icon: ClipboardList, title:"설계따라잡기", desc:"실제 설계안 해설과 비교 포인트"},
  {icon: PhoneCall, title:"거절처리", desc:"무관심·비용·기존가입 대응"},
  {icon: Stethoscope, title:"메디컬 자료", desc:"질병 구조와 특약 연결"},
  {icon: FileText, title:"보상사례", desc:"청구·지급·면책 사례 정리"},
  {icon: Calculator, title:"상담 계산기", desc:"보험나이·BMI·연금·간병비"},
  {icon: Users, title:"신입 90일 과정", desc:"입사 초기 커리큘럼"},
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
  const [today, setToday] = useState(new Date().toISOString().slice(0,10));
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const filtered = useMemo(() => {
    return posts.filter(p => `${p.category} ${p.title} ${p.desc} ${p.tag}`.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const insAge = insuranceAge(birth, today);
  const bmi = height && weight ? Number(weight) / ((Number(height)/100) ** 2) : null;

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="logo"><ShieldCheck size={28}/></div>
          <div>
            <div className="eyebrow">INSULAW SUWON</div>
            <strong>약관본부 수원지사 운영포털</strong>
          </div>
        </div>
        <nav>
          <a href="#briefing">브리핑</a>
          <a href="#board">자료실</a>
          <a href="#tools">계산기</a>
          <a href="#schedule">일정</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <span className="pill">관리 편한 수원지사 전용 구조</span>
          <h1>설명보다 비교,<br/><span>감보다 숫자</span></h1>
          <p>상담화법, 설계따라잡기, 거절처리, 메디컬, 보험나이·BMI 계산기를 한 곳에 모은 실전 운영포털입니다.</p>
          <div className="actions">
            <a className="primary" href="#tools">상담 계산기 바로가기</a>
            <a className="secondary" href="#board">실전자료실 보기</a>
          </div>
        </div>
        <div className="dashboard">
          <div className="dashTop">
            <div><small>TODAY DASHBOARD</small><h2>오늘의 운영 현황</h2></div>
            <Trophy color="#f6d37a"/>
          </div>
          <div className="stats">
            <div><small>필독 공지</small><strong>3</strong></div>
            <div><small>신규 자료</small><strong>8</strong></div>
            <div><small>이번 달 방향</small><b>간병·연금</b></div>
            <div><small>교육 일정</small><b>4건</b></div>
          </div>
          <div className="goldBox">지식이 실적으로 이어지는 구조</div>
        </div>
      </section>

      <section className="section" id="briefing">
        <div className="sectionTitle"><small>MAIN MENU</small><h2>팀원이 매일 쓰는 메뉴</h2></div>
        <div className="menuGrid">
          {menus.map(({icon:Icon, title, desc}) => (
            <div className="card" key={title}>
              <div className="icon"><Icon size={24}/></div>
              <h3>{title}</h3><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section board" id="board">
        <div className="boardHead">
          <div className="sectionTitle"><small>CONTENT BOARD</small><h2>실전자료실</h2></div>
          <label className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="검색: 연금, 간병, 거절, 뇌혈관..." /></label>
        </div>
        <div className="postGrid">
          {filtered.map(p => (
            <article className="post" key={p.title}>
              <div><span>{p.category}</span><em>{p.tag}</em></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <small>관리자 등록 · 보기 <ExternalLink size={13}/></small>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="tools">
        <div className="sectionTitle"><small>CONSULTING TOOLS</small><h2>상담 계산기</h2></div>
        <div className="toolsGrid">
          <div className="tool">
            <h3>보험나이 계산기</h3>
            <p>생년월일과 기준일을 입력하면 보험나이를 계산합니다.</p>
            <input type="date" value={birth} onChange={e=>setBirth(e.target.value)} />
            <input type="date" value={today} onChange={e=>setToday(e.target.value)} />
            <div className="result">{insAge === null ? "생년월일을 입력하세요" : `보험나이: ${insAge}세`}</div>
            <small>※ 회사별 세부 기준은 인수지침 확인 필요</small>
          </div>
          <div className="tool">
            <h3>BMI 계산기</h3>
            <p>키와 몸무게를 입력하면 BMI와 비만도 구간을 확인합니다.</p>
            <input type="number" placeholder="키(cm)" value={height} onChange={e=>setHeight(e.target.value)} />
            <input type="number" placeholder="몸무게(kg)" value={weight} onChange={e=>setWeight(e.target.value)} />
            <div className="result">{bmi ? `BMI: ${bmi.toFixed(1)} · ${bmiGrade(bmi)}` : "키와 몸무게를 입력하세요"}</div>
            <small>※ 보험 심사는 회사·상품·고지사항에 따라 달라질 수 있음</small>
          </div>
          <div className="tool muted">
            <h3>연금 비교 계산기</h3><p>납입액·기간·환급률 비교 기능 예정</p>
          </div>
          <div className="tool muted">
            <h3>간병비 계산기</h3><p>일당·기간별 예상비용 계산 기능 예정</p>
          </div>
        </div>
      </section>

      <section className="section schedule" id="schedule">
        <div>
          <small>SUWON EDUCATION</small>
          <h2>교육·동행 일정</h2>
          <p>월간 상품교육, 메디컬 스터디, 신입 집중교육, JoinWork 동행 일정을 운영합니다.</p>
        </div>
        <div className="scheduleList">
          <div><CalendarDays/> 월간 상품교육 <span>예정</span></div>
          <div><CalendarDays/> 메디컬 스터디 <span>예정</span></div>
          <div><CalendarDays/> 신입 90일 과정 <span>예정</span></div>
        </div>
      </section>

      <footer>
        <strong>약관본부 수원지사</strong>
        <p>설계사가 현장에서 바로 쓰는 상담·설계·메디컬 운영포털</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
