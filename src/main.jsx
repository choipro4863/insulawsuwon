export default function InsulawSuwonPortal() {
  const mainMenus = [
    '이달의 영업방향',
    '원수사 정보',
    '전산바로가기',
    '보험로스쿨',
    '급여·수수료 계산',
    '인수기준',
  ];

  const quickMenus = [
    '실전화법 예시',
    '설계따라잡기',
    '업계누적',
    '원수사 정보 관리시스템',
    '거절처리 예시',
    '보험뉴스',
    '기타 신규',
  ];

  const notices = [
    '5월 신규 인수 기준 업데이트',
    '이번주 보험뉴스 업로드',
    '급여 계산기 개선 예정',
    '거절처리 예시 신규 등록',
  ];

  const mvpCards = [
    {
      title: '명예의 전당',
      name: '최기영 지사장',
    },
    {
      title: '이달의 MVP',
      name: '수원지사 MVP',
    },
  ];

  return (
    <div className="min-h-screen bg-[#03142b] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      <div className="relative z-10 flex">
        {/* LEFT QUICK MENU */}
        <aside className="w-[270px] min-h-screen border-r border-white/10 bg-[#061a35]/95 backdrop-blur-xl hidden lg:block">
          <div className="p-6 border-b border-white/10">
            <div className="text-[#d6ac56] text-sm font-semibold tracking-[0.2em]">
              INSULAW SUWON
            </div>
            <h1 className="text-2xl font-black mt-2 leading-tight">
              약관본부
              <br />
              수원지사
            </h1>
          </div>

          <div className="p-4 space-y-3">
            {quickMenus.map((menu, idx) => (
              <button
                key={idx}
                className="w-full text-left rounded-2xl border border-white/10 bg-white/5 hover:bg-[#d6ac56] hover:text-black transition-all px-4 py-4 text-sm font-semibold"
              >
                {menu}
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1">
          {/* TOP NAV */}
          <header className="border-b border-white/10 backdrop-blur-xl bg-[#061a35]/70 px-8 py-5 flex justify-between items-center">
            <div>
              <div className="text-[#d6ac56] text-xs tracking-[0.25em] font-bold">
                PRIME ASSET · 약관본부 수원지사
              </div>
              <div className="text-2xl font-black mt-1">운영포털</div>
            </div>

            <div className="flex gap-3 flex-wrap justify-end">
              {mainMenus.map((menu, idx) => (
                <button
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-[#d6ac56] hover:text-black transition-all"
                >
                  {menu}
                </button>
              ))}
            </div>
          </header>

          {/* HERO */}
          <section className="px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#d6ac56]/40 bg-[#d6ac56]/10 px-5 py-2 text-[#f0c56f] text-sm font-bold mb-8">
                수원지사 운영 시스템
              </div>

              <h2 className="text-6xl font-black leading-tight">
                약관본부
                <br />
                수원지사
              </h2>

              <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">
                실전화법, 설계자료, 보험뉴스, 인수기준,
                <br />
                원수사 정보와 교육자료를 한 곳에 모은
                <br />
                수원지사 운영포털입니다.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">
                <button className="bg-[#d6ac56] text-black font-black px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-all">
                  자료실 바로가기
                </button>

                <button className="border border-white/20 bg-white/5 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all">
                  보험로스쿨
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">
              <div className="text-[#d6ac56] font-bold tracking-[0.2em] text-sm mb-2">
                TODAY DASHBOARD
              </div>

              <div className="text-4xl font-black mb-8">오늘의 운영 현황</div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#071b35] p-6 border border-white/5">
                  <div className="text-sm text-gray-400">공지사항</div>
                  <div className="text-4xl font-black mt-4">4</div>
                </div>

                <div className="rounded-3xl bg-[#071b35] p-6 border border-white/5">
                  <div className="text-sm text-gray-400">신규 자료</div>
                  <div className="text-4xl font-black mt-4">12</div>
                </div>

                <div className="rounded-3xl bg-[#071b35] p-6 border border-white/5">
                  <div className="text-sm text-gray-400">이번 달 방향</div>
                  <div className="text-2xl font-black mt-4">간병 · 연금</div>
                </div>

                <div className="rounded-3xl bg-[#071b35] p-6 border border-white/5">
                  <div className="text-sm text-gray-400">교육 일정</div>
                  <div className="text-2xl font-black mt-4">4건</div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-[#d6ac56] text-black p-6 font-black text-2xl">
                지식이 실적으로 이어지는 구조
              </div>
            </div>
          </section>

          {/* MVP SECTION */}
          <section className="px-10 py-10">
            <div className="text-[#d6ac56] font-bold tracking-[0.25em] text-sm mb-3">
              HALL OF FAME
            </div>

            <h3 className="text-5xl font-black mb-10">
              명예의 전당 · 이달의 MVP
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {mvpCards.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-[32px] overflow-hidden border border-[#d6ac56]/20 bg-gradient-to-br from-[#081d39] to-black"
                >
                  <div className="h-[240px] bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

                  <div className="p-6">
                    <div className="text-[#d6ac56] font-bold text-sm tracking-[0.2em]">
                      {card.title}
                    </div>

                    <div className="text-3xl font-black mt-3">
                      {card.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NOTICE SECTION */}
          <section className="px-10 py-10 grid lg:grid-cols-2 gap-8">
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-3xl font-black">공지사항</h4>
                <span className="text-[#d6ac56] text-sm font-bold">MORE +</span>
              </div>

              <div className="space-y-4">
                {notices.map((notice, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-[#071b35] px-5 py-4 flex justify-between items-center"
                  >
                    <div>{notice}</div>
                    <div className="text-sm text-gray-400">NEW</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-3xl font-black">최근 업로드</h4>
                <span className="text-[#d6ac56] text-sm font-bold">NOTION</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#071b35] p-5">
                  5월 인수기준 정리 PDF
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#071b35] p-5">
                  상담화법 신규 업데이트
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#071b35] p-5">
                  설계따라잡기 실전예시
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#071b35] p-5">
                  보험뉴스 브리핑 업로드
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
