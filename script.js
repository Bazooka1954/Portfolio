/* ══════════════════════════════════
   DATA
══════════════════════════════════ */
const ROLES = ["Full Stack AI Engineer"];

const SKILL_CATS = ["All","Certifications","Frontend","Backend","AI","DevOps"];
const SKILLS = [
  {ico:"", name:"React",       desc:"Component architecture & state management",  lv:20, cat:"Frontend"},
  {ico:"", name:"Bootstrap",  desc:"Responsive web design",                 lv:95, cat:"Frontend"},
  {ico:"", name:"Tailwind CSS",      desc:"Utility-first CSS framework",                    lv:85, cat:"Frontend"},
  {ico:"", name:"Python",      desc:"Backend services & data pipelines",          lv:88, cat:"Backend"},
  {ico:"", name:"PHP",      desc:"Server-side scripting",          lv:88, cat:"Backend"},
  {ico:"", name:"Java",      desc:"Object-oriented programming & enterprise applications",          lv:20, cat:"Backend"},
  {ico:"", name:"Node.js",     desc:"REST & GraphQL APIs",                        lv:86, cat:"Backend"},
  {ico:"", name:"MySQL",  desc:"Complex queries & optimisation",             lv:62, cat:"Backend"},
  {ico:"", name:"Web Scraping",      desc:"Automated data extraction from websites",          lv:98, cat:"Backend"},
  {ico:"", name:"Claude API's",  desc:"Anthropic's API, embeddings & fine-tuning",           lv:91, cat:"AI"},
  {ico:"", name:"n8n",   desc:"Workflow automation platform",           lv:88, cat:"AI"},
  {ico:"", name:"Hugging Face",desc:"Model deployment & inference",               lv:78, cat:"AI"},
  {ico:"", name:"Computer Vision",desc:"Image recognition & processing",               lv:80, cat:"AI"},
  {ico:"", name:"Prompt Engineering",desc:"Designing effective prompts for LLMs",               lv:78, cat:"AI"},
  {ico:"", name:"Docker",      desc:"Containerisation & orchestration",           lv:25, cat:"DevOps"},
  {ico:"", name:"Vercel / CF", desc:"Edge deployments & CDN",                     lv:88, cat:"DevOps"},
  {ico:"", name:"Python Essentials 2", desc:"Cisco",    lv:100, cat:"Certifications"},
  {ico:"", name:"IBM Artificial Intelligence Fundamentals",         desc:"IBM",     lv:100, cat:"Certifications"},
  {ico:"", name:"Modern AI", desc:"Cisco",    lv:100, cat:"Certifications"},
  {ico:"", name:"Generative AI",         desc:"Google",     lv:100, cat:"Certifications"},
  {ico:"", name:"OCI 2025 Certified AI Foundations", desc:"Oracle",                    lv:100, cat:"Certifications"},
  {ico:"", name:"Cisco Junior Cybersecurity Analyst Path", desc:"Cisco",    lv:25, cat:"Certifications"},
  {ico:"", name:"English C1",         desc:"Busuu",     lv:45, cat:"Certifications"},
  {ico:"", name:"Claude API's", desc:"Anthropic",                    lv:65, cat:"Certifications"},
];

const PROJECTS = [
  {id:0,
   title:"MAJANN",   
   tags:["HTML","JavaScript","Tailwind CSS","n8n","Vercel"],type:"Landing Page",
   desc:"MAJANN is a bilingual landing page for selling specialized AI and automation services.<br>It automatically captures contact messages and pipes them to n8n via webhooks for instant workflow processing.",
   link:"https://github.com/Bazooka1954/MAJANN"},
  {id:1,
   title:"Hospital-Data-Aggregator",
   tags:["Python","OOP","Excel","Data Validation","File Handling"],type:"Management Information System",
   desc:"An OOP Python system for hospital departments to collect, validate clients Data, and aggregate records into a centralized Headquarters Excel report using openpyxl.",
   link:"https://github.com/Bazooka1954/Hospital-Data-Aggregator"},
  {id:2,
   title:"Gesture-Control-System-AI-Chatbot ",
   tags:["MediaPipe","OpenCV","Flask","Socket.IO","OpenAI API","Data Management","Frontend"],type:"Computer Vision Gesture-Controlled Web Interface",
   desc:"A single-port Flask application that combines real-time hand gesture recognition with an embedded AI chatbot. Control your browser with hand movements captured by your webcam, and chat with an AI assistant — all from one page.",
   link:"https://github.com/Bazooka1954/Gesture-Control-System-AI-Chatbot"},
   {id:3,
   title:"Desktop-AI-Assistant",
   tags:["Python", "Voice UI", "LLM Integration", "Desktop Client", "API Architecture", "Concurrency"],type:"Desktop AI Application",
   desc:"A modern Python desktop application featuring real-time speech-to-text input, offline text-to-speech output, and conversational AI.",
   link:"https://github.com/Bazooka1954/Desktop-AI-Assistant"},
];

const SOCIALS = [
  {svg:`<svg class="ssvg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,label:"GitHub",href:"https://github.com/Bazooka1954"},
  {svg:`<svg class="ssvg" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,label:"LinkedIn",href:"https://linkedin.com/in/yasser-ait-ali-8b1b85289"},
  {svg:`<svg class="ssvg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,label:"Instagram",href:"https://www.instagram.com/yasser_ait.ali/"},
];

/* ══════════════════════════════════
   ROUTER
══════════════════════════════════ */
let curPg = 'home';

function goPage(p) {
  const old = document.querySelector('.pg.active');
  const doTransition = () => {
    const el = document.getElementById('pg-' + p);
    if (!el) return;
    el.classList.add('active');
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
    curPg = p;
    // highlight nav links
    document.querySelectorAll('[data-p]').forEach(a =>
      a.classList.toggle('on', a.getAttribute('data-p') === p)
    );
    // trigger reveals + bars
    setTimeout(() => {
      initRv();
      if (p === 'skills') initBars();
    }, 120);
  };

  if (old) {
    old.classList.remove('in');
    setTimeout(() => { old.classList.remove('active'); doTransition(); }, 260);
  } else {
    doTransition();
  }
  history.pushState({ p }, '', '#' + p);
}

window.addEventListener('popstate', e => { if (e.state?.p) goPage(e.state.p); });

/* ══════════════════════════════════
   TYPEWRITER
══════════════════════════════════ */
let ti = 0, ci = 0, deleting = false, tTimer;
function typo() {
  const r = ROLES[ti % ROLES.length];
  const el = document.getElementById('typed');
  if (!el) { tTimer = setTimeout(typo, 150); return; }
  if (!deleting) {
    el.textContent = r.substring(0, ci + 1); ci++;
    if (ci === r.length) { deleting = true; tTimer = setTimeout(typo, 2400); return; }
  } else {
    el.textContent = r.substring(0, ci - 1); ci--;
    if (ci === 0) { deleting = false; ti++; }
  }
  tTimer = setTimeout(typo, deleting ? 36 : 82);
}

/* ══════════════════════════════════
   INFINITE SKILLS CAROUSEL
   Duplicates cards → CSS animates 0→-50%
══════════════════════════════════ */
let skCat = 'All';

function buildCtabs() {
  const el = document.getElementById('ctabs');
  if (!el) return;
  el.innerHTML = '';
  SKILL_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'ctab' + (c === skCat ? ' on' : '');
    b.textContent = c;
    b.onclick = () => { skCat = c; buildSkTr(); buildCtabs(); };
    el.appendChild(b);
  });
}

function buildSkTr() {
  const wrap = document.getElementById('skInfWrap');
  if (!wrap) return;
  wrap.innerHTML = '';

  const filtered = skCat === 'All' ? SKILLS : SKILLS.filter(s => s.cat === skCat);

  const track = document.createElement('div');
  track.className = 'inf-track';

  // Render twice for seamless loop
  [filtered, filtered].forEach(set => {
    set.forEach(s => {
      const d = document.createElement('div');
      d.className = 'skc';
      d.innerHTML = `<div class="ico">${s.ico}</div>
        <div class="sn">${s.name}</div>
        <div class="sd">${s.desc}</div>
        <div class="slv"><div class="slv-f" data-lv="${s.lv}"></div></div>`;
      track.appendChild(d);
    });
  });

  wrap.appendChild(track);

  // Speed: more cards scroll slower
  track.style.animationDuration = Math.max(18, filtered.length * 2.5) + 's';
  setTimeout(initBars, 300);
}

function initBars() {
  document.querySelectorAll('.slv-f').forEach(el => {
    el.style.width = el.getAttribute('data-lv') + '%';
  });
}

/* ══════════════════════════════════
   INFINITE PROJECTS CAROUSEL
══════════════════════════════════ */
function buildPrTr() {
  const wrap = document.getElementById('prInfWrap');
  if (!wrap) return;
  wrap.innerHTML = '';

  const track = document.createElement('div');
  track.className = 'inf-track-pr';

  [PROJECTS, PROJECTS].forEach(set => {
    set.forEach(p => {
      const d = document.createElement('div');
      d.className = 'prc';
      d.innerHTML = `
        <div class="ptags">${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
        <div class="pttl">${p.title}</div>`;
      d.onclick = () => openMod(p.id);
      track.appendChild(d);
    });
  });

  wrap.appendChild(track);
  track.style.animationDuration = Math.max(24, PROJECTS.length * 4.5) + 's';
}

/* ══════════════════════════════════
   MODAL
══════════════════════════════════ */
function openMod(id) {
  const p = PROJECTS[id];
  document.getElementById('mbox').innerHTML = `
    <button class="mcl" onclick="cMod()">✕</button>
    <h2 style="font-family:'Syne',sans-serif;font-size:1.45rem;font-weight:800;letter-spacing:-.03em;margin-bottom:.4rem">${p.title}</h2>
    <div class="ptags">${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}</div>
    <div class="mgrid">
      <div class="mf full"><label>Overview</label><p>${p.desc}</p></div>
      <div class="mf"><label>Type</label><p>${p.type}</p></div>
    </div>
    <a class="mbtn" href="${p.link}" target="_blank">View Project ↗</a>`;
  document.getElementById('pmod').classList.add('open');
}

function cMod() {
  document.getElementById('pmod').classList.remove('open');
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') cMod(); });

/* ══════════════════════════════════
   SOCIALS
══════════════════════════════════ */
function buildSocials() {
  ['ftSoc', 'bigSoc'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    const big = id === 'bigSoc';
    SOCIALS.forEach(s => {
      const a = document.createElement('a');
      a.className = 'sl2';
      a.href = s.href; a.target = '_blank'; a.rel = 'noopener'; a.title = s.label;
      if (big) a.style.cssText = 'width:58px;height:58px;border-radius:16px';
      a.innerHTML = big
        ? s.svg.replace('class="ssvg"', 'class="ssvg" style="width:23px;height:23px"')
        : s.svg;
      el.appendChild(a);
    });
  });
}

/* ══════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════ */
function initRv() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); }),
    { threshold: 0.05 }
  );
  document.querySelectorAll('.rv:not(.vis)').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════
   MOBILE NAV
══════════════════════════════════ */
function tMob() {
  const n = document.getElementById('mnav');
  const h = document.getElementById('ham');
  const open = n.classList.toggle('open');
  const ss = h.querySelectorAll('span');
  if (open) {
    ss[0].style.transform = 'rotate(45deg) translate(4px,4.5px)';
    ss[1].style.opacity = '0';
    ss[2].style.transform = 'rotate(-45deg) translate(4px,-4.5px)';
  } else {
    ss.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
}
function cMob() {
  document.getElementById('mnav').classList.remove('open');
  document.getElementById('ham').querySelectorAll('span')
    .forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}

/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
buildCtabs();
buildSkTr();
buildPrTr();
buildSocials();
typo();

// Load initial page from hash or default to home
const initHash = location.hash.replace('#', '') || 'home';
goPage(initHash);
