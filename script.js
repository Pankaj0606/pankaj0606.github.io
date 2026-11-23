/**
 * Pankaj Yadav Portfolio Controller
 * - Liquid Glass Modal Controller with Dual CTAs (GitHub + Live Demo)
 * - Complete Registry of all 9 Engineering Projects
 * - Circular Radial View Transition (Theme Toggle)
 * - Interactive Terminal Playground with 'projects' command
 */

// ==========================================================================
// 1. ALL 9 PROJECTS DATA REGISTRY
// ==========================================================================
const PROJECTS_DATA = {
  "chess-ai": {
    title: "Chess AI Coach & Free Game Review",
    tagline: "High-depth game analysis powered by Stockfish 19 & Groq LLM",
    category: "AI & Game Engines",
    status: "Verified MultiPV Engine",
    description: "An open-source alternative to Chess.com Diamond Review. Analyzes any Chess.com URL or PGN, evaluates positions with MultiPV=3 to explore alternate candidate branches, and translates cold centipawn numbers into natural Grandmaster coaching lessons.",
    highlights: [
      "<strong>MultiPV=3 Depth Calculation:</strong> Explores top 3 candidate lines simultaneously to teach strategic plans rather than just single moves.",
      "<strong>Complex Devanagari Typography:</strong> Leverages Playwright HarfBuzz rendering for correct Indian script layout.",
      "<strong>Zero-Cost Architecture:</strong> Powered by Stockfish 19 and Groq fast inference with zero recurring API costs."
    ],
    tech: ["Stockfish 19", "Python-Chess", "Groq LLM", "Streamlit", "MultiPV=3"],
    githubUrl: "https://github.com/Pankaj0606/Chess-AI-Coach",
    liveUrl: "https://github.com/Pankaj0606/Chess-AI-Coach",
    liveBtnText: "View Source & Docs ↗"
  },

  "pincode-vis": {
    title: "India Postal PIN Code Geospatial Visualizer",
    tagline: "Interactive postal tree visualizer with live camera auto-flight",
    category: "Geospatial & Web",
    status: "🟢 Live on GitHub Pages",
    description: "Visualizes the hierarchical tree structure of the Indian Postal Index Number system. As you enter each digit, the visualizer progressively narrows down the geographic zone and state, diving down to street level with an animated pulsing pin.",
    highlights: [
      "<strong>Progressive Auto-Focus:</strong> Smooth camera transitions (flyToBounds and flyTo) as each digit is typed.",
      "<strong>Zero CORS/403 Block:</strong> Engineered with Esri Dark Canvas tiles to avoid OpenStreetMap tile usage restrictions.",
      "<strong>Live India Post Integration:</strong> Pinpoints delivery post office names, districts, and divisions via public REST API."
    ],
    tech: ["Leaflet.js", "Esri Dark Canvas", "Vanilla JS", "India Post API", "GitHub Pages"],
    githubUrl: "https://github.com/Pankaj0606/India-Pincode-Visualizer",
    liveUrl: "https://pankaj0606.github.io/India-Pincode-Visualizer/",
    liveBtnText: "Launch Live Map App ↗"
  },

  "ipl-nrr": {
    title: "IPL Net Run Rate & 2^M Qualification Matrix",
    tagline: "Combinatorial tournament simulator & exact victory margin solver",
    category: "Algorithms & Sports",
    status: "0.000 Delta Accuracy",
    description: "A mathematical tournament qualification engine. Simulates 2^M tournament permutations mid-season and solves exact required margins for tie-breakers (e.g. RCB vs CSK: 'Win by ≥18 runs or chase in ≤18.1 overs').",
    highlights: [
      "<strong>Exact ICC / IPL Rules:</strong> Implements base-6 over conversions, All-Out full-quota rule, and DLS adjustments.",
      "<strong>Live Next.js Payload Scraper:</strong> Pulls real-time match records and scorecards directly from Cricbuzz.",
      "<strong>Ground-Truth Verified:</strong> Tested against all 70 IPL matches with 0.000 Delta across all 10 teams."
    ],
    tech: ["Python", "Combinatorics", "Cricbuzz Scraper", "Google Sheets API", "Streamlit"],
    githubUrl: "https://github.com/Pankaj0606/IPL-NRR-Simulator",
    liveUrl: "https://github.com/Pankaj0606/IPL-NRR-Simulator",
    liveBtnText: "Explore Simulator Engine ↗"
  },

  "memory-game": {
    title: "FlipMatch: 3D Memory Card Game",
    tagline: "Tactile memory matching game with 3D CSS flips and Hardcore mode",
    category: "Creative Dev",
    status: "🟢 Live on GitHub Pages",
    description: "A fast, responsive memory game built with modern CSS3 3D transforms. Features unbiased card randomization, click-lock state machines, and a high-stakes Hardcore Mode where a single error resets all previous matches.",
    highlights: [
      "<strong>Pure 3D Transforms:</strong> Built with perspective: 1000px and transform-style: preserve-3d.",
      "<strong>Fisher-Yates Shuffle:</strong> Unbiased algorithmic card distribution on every board reset.",
      "<strong>Zero Build Overhead:</strong> 100% client-side Vanilla JavaScript and modern CSS."
    ],
    tech: ["HTML5", "CSS3 3D", "Vanilla JavaScript", "State Machine", "GitHub Pages"],
    githubUrl: "https://github.com/Pankaj0606/Memory-Card-Game",
    liveUrl: "https://pankaj0606.github.io/Memory-Card-Game/",
    liveBtnText: "Play Game Live ↗"
  },

  "spotify-lyrics": {
    title: "Spotify Lyric Card Generator for Instagram",
    tagline: "Aesthetic 1080x1350 portrait lyric card generator with Devanagari typography",
    category: "Design & Media",
    status: "HarfBuzz Shaper",
    description: "An automated Instagram post generator that creates authentic Spotify Lyric Share Cards. Features Apple Music metadata, authentic Devanagari typography without broken matras, and curated 4K aesthetic photography.",
    highlights: [
      "<strong>Chromium / HarfBuzz Engine:</strong> Uses Playwright to render complex Indian language scripts without broken matras.",
      "<strong>Official Apple Metadata:</strong> Automatically pulls official song titles, artist credits, and 4K album art.",
      "<strong>Automated Captions:</strong> Auto-generates captions with song-specific camelCase hashtags."
    ],
    tech: ["Playwright", "Apple Music API", "Google Sheets API", "Pexels/Unsplash CDN"],
    githubUrl: "https://github.com/Pankaj0606/Spotify-Lyric-Posts",
    liveUrl: "https://github.com/Pankaj0606/Spotify-Lyric-Posts",
    liveBtnText: "View Generator Repo ↗"
  },

  "philosophy-engine": {
    title: "Philosophy Documentary Video Engine",
    tagline: "Automated long-form (20–40 min) philosophical video documentary compiler",
    category: "Automated Media",
    status: "FFmpeg Composited",
    description: "An automated documentary engine producing deep video treatises on Indian and Western philosophy (Charvaka, Advaita, Socrates). Orchestrates multi-chapter scripts, Sanskrit calligraphy cards, Flux AI artwork, and multi-axis camera motion via FFmpeg.",
    highlights: [
      "<strong>Cinematic Camera Movements:</strong> Replaces static PPT zooms with diagonal dolly drifts and lateral glides.",
      "<strong>Calligraphy Plates:</strong> Renders authentic Sanskrit quote plates in Devanagari with golden borders.",
      "<strong>Neural Narration:</strong> Uses Indian English neural speech (en-IN-PrabhatNeural) at a contemplative documentary pace."
    ],
    tech: ["FFmpeg", "Edge-TTS", "Flux.1 AI", "Pillow", "Google Sheets API"],
    githubUrl: "https://github.com/Pankaj0606/Philosophy-Video-Engine",
    liveUrl: "https://github.com/Pankaj0606/Philosophy-Video-Engine",
    liveBtnText: "Inspect Video Pipeline ↗"
  },

  "tech-bytes": {
    title: "Daily Tech Bytes & CS Fundamentals",
    tagline: "Automated daily cloud publisher for computer science concepts",
    category: "DevOps & CI/CD",
    status: "Active Daily Cron",
    description: "An automated cloud publisher running daily via GitHub Actions. Deconstructs complex computing concepts (JPEG vs PNG, HTTP/3, UTF-8, Virtual Memory) with ELI5 analogies, deep-dives, and native Mermaid.js diagrams.",
    highlights: [
      "<strong>Cloud Cron Workflow:</strong> Executes autonomously at 8:00 AM IST daily via GitHub Actions.",
      "<strong>Native Mermaid Diagrams:</strong> Generates text-based flowcharts rendered directly inside GitHub markdown.",
      "<strong>Contribution Sync:</strong> Commits under verified author identity to maintain active GitHub contribution graphs."
    ],
    tech: ["GitHub Actions", "Groq API", "Mermaid.js", "Google Sheets API", "Python"],
    githubUrl: "https://github.com/Pankaj0606/Daily-Tech-Bytes",
    liveUrl: "https://github.com/Pankaj0606/Daily-Tech-Bytes",
    liveBtnText: "Browse Concepts Archive ↗"
  },

  "dsa-insta-bot": {
    title: "DSA Instagram Carousel Bot",
    tagline: "Automated cloud bot publishing NeetCode/LeetCode carousels to Instagram",
    category: "Automation & Meta API",
    status: "Meta Graph API",
    description: "A cloud-scheduled Python bot that automatically fetches, solves, renders, and publishes Data Structures & Algorithms question carousels to Instagram on a daily cron schedule.",
    highlights: [
      "<strong>Dynamic Slide Compositing:</strong> Uses Pillow to render code syntax highlighting on multi-slide carousels.",
      "<strong>Meta Graph API Publishing:</strong> Automates publishing directly to Instagram Business accounts.",
      "<strong>Google Sheets Queue:</strong> Manages daily questions and progress tracking."
    ],
    tech: ["Pillow", "Meta Graph API", "Google Sheets API", "GitHub Actions", "Python3"],
    githubUrl: "https://github.com/Pankaj0606/dsa-insta-bot",
    liveUrl: "https://github.com/Pankaj0606/dsa-insta-bot",
    liveBtnText: "Explore Bot Source ↗"
  },

  "neetcode-150": {
    title: "NeetCode 150 Automated Solutions Archive",
    tagline: "Automated daily archive solving NeetCode 150 with 3 approaches",
    category: "Algorithms & CI/CD",
    status: "C++ & Java Solutions",
    description: "An automated repository archiving daily Data Structures & Algorithms solutions in C++ and Java, featuring Worst, Better, and Optimal approaches along with interview walkthroughs and edge-case follow-ups.",
    highlights: [
      "<strong>3-Tier Implementations:</strong> Generates compilable Brute, Better, and Optimal code for every question.",
      "<strong>Interview Deep-Dives:</strong> Writes comprehensive README notes explaining complexity transitions.",
      "<strong>Automated Streak:</strong> Integrated with verified Git config to reflect daily green squares on profile."
    ],
    tech: ["C++", "Java", "Groq LLM", "GitHub Actions CI/CD", "Google Sheets API"],
    githubUrl: "https://github.com/Pankaj0606/NeetCode-150-Solutions",
    liveUrl: "https://github.com/Pankaj0606/NeetCode-150-Solutions",
    liveBtnText: "Browse DSA Archive ↗"
  }
};

// ==========================================
// 2. LIQUID GLASS MODAL CONTROLLER
// ==========================================
const modalBackdrop = document.getElementById('liquid-modal-backdrop');
const modalCloseBtn = document.getElementById('modal-close-btn');

const modalTitle = document.getElementById('modal-title');
const modalTagline = document.getElementById('modal-tagline');
const modalCategory = document.getElementById('modal-category');
const modalStatus = document.getElementById('modal-status');
const modalDesc = document.getElementById('modal-desc');
const modalHighlights = document.getElementById('modal-highlights');
const modalTechPills = document.getElementById('modal-tech-pills');
const modalGithubLink = document.getElementById('modal-github-link');
const modalLiveLink = document.getElementById('modal-live-link');
const modalLiveText = document.getElementById('modal-live-text');

function openProjectModal(projectId) {
  const p = PROJECTS_DATA[projectId];
  if (!p) return;

  modalTitle.textContent = p.title;
  modalTagline.textContent = p.tagline;
  modalCategory.textContent = p.category;
  modalStatus.textContent = p.status;
  modalDesc.textContent = p.description;

  // Render highlights
  modalHighlights.innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');

  // Render tech pills
  modalTechPills.innerHTML = p.tech.map(t => `<span class="modal-pill">${t}</span>`).join('');

  // Set links
  modalGithubLink.href = p.githubUrl;
  modalLiveLink.href = p.liveUrl;
  modalLiveText.textContent = p.liveBtnText || "Live Demo ↗";

  // Display modal
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// Attach click listeners to all clickable Bento cards
document.querySelectorAll('.clickable-card').forEach(card => {
  card.addEventListener('click', () => {
    const pId = card.dataset.projectId;
    openProjectModal(pId);
  });
});

modalCloseBtn.addEventListener('click', closeProjectModal);

// Close on clicking backdrop
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    closeProjectModal();
  }
});

// Close on pressing Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
    closeProjectModal();
  }
});

// ==========================================
// 3. CIRCULAR REVEAL THEME TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');

function setTheme(theme, clickX = window.innerWidth / 2, clickY = window.innerHeight / 2) {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === theme) return;

  if (!document.startViewTransition) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    return;
  }

  const maxRadius = Math.hypot(
    Math.max(clickX, window.innerWidth - clickX),
    Math.max(clickY, window.innerHeight - clickY)
  );

  const transition = document.startViewTransition(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  });

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${clickX}px ${clickY}px)`,
          `circle(${maxRadius}px at ${clickX}px ${clickY}px)`
        ]
      },
      {
        duration: 500,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  });
}

themeToggleBtn.addEventListener('click', (e) => {
  const rect = themeToggleBtn.getBoundingClientRect();
  const clickX = rect.left + rect.width / 2;
  const clickY = rect.top + rect.height / 2;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

  setTheme(targetTheme, clickX, clickY);
});

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// ==========================================
// 4. INTERACTIVE TERMINAL SHELL
// ==========================================
const termInput = document.getElementById('term-input');
const termOutput = document.getElementById('terminal-output');

const COMMANDS = {
  help: `Available commands:
  • <span class="term-cmd">projects</span> : Lists all 9 production repositories
  • <span class="term-cmd">about</span>    : Background & summary
  • <span class="term-cmd">skills</span>   : Core engineering stack
  • <span class="term-cmd">contact</span>  : Email & GitHub profile
  • <span class="term-cmd">theme</span>    : Toggle dark / light mode
  • <span class="term-cmd">clear</span>    : Wipe the terminal buffer`,

  about: "Software Engineer at PayU Payments. Focused on distributed systems, transaction idempotency, concurrency, and developer tools.",
  
  skills: `Languages : Python, Go, C++, Java, SQL, JavaScript
Systems   : Distributed Ledgers, SAGA Orchestration, Idempotency, Concurrency
Engines   : Stockfish 19, FFmpeg, Playwright Chromium, Leaflet.js
Cloud/Data: PostgreSQL, Redis, Google Cloud, GitHub Actions, Docker`,

  projects: `All 9 Repositories:
  1. Chess AI Coach (Stockfish 19 + Groq LLM)
  2. India PIN Code Geospatial Visualizer (Leaflet + Esri)
  3. IPL Net Run Rate & 2^M Matrix Simulator (Cricbuzz Scraper)
  4. FlipMatch: 3D Memory Game (Vanilla JS)
  5. Spotify Lyric Card Generator (Playwright Devanagari)
  6. Philosophy Documentary Video Engine (FFmpeg)
  7. Daily Tech Bytes (CI/CD Automated Publisher)
  8. DSA Instagram Bot (Meta Graph API)
  9. NeetCode 150 Automated Solutions (C++ & Java)`,

  contact: "Email: hlopankajyadav@gmail.com | GitHub: https://github.com/Pankaj0606",

  theme: () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const target = cur === 'dark' ? 'light' : 'dark';
    setTheme(target);
    return `Theme switched to ${target} mode.`;
  }
};

termInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const rawVal = termInput.value.trim().toLowerCase();
    termInput.value = '';

    if (!rawVal) return;

    if (rawVal === 'clear') {
      termOutput.innerHTML = '';
      return;
    }

    const cmdLine = document.createElement('p');
    cmdLine.className = 'term-line';
    cmdLine.innerHTML = `<span class="term-prompt">pankaj&gt;</span> ${rawVal}`;
    termOutput.appendChild(cmdLine);

    const responseLine = document.createElement('p');
    responseLine.className = 'term-line';

    if (COMMANDS[rawVal]) {
      const resp = typeof COMMANDS[rawVal] === 'function' ? COMMANDS[rawVal]() : COMMANDS[rawVal];
      responseLine.innerHTML = resp.replace(/\n/g, '<br>');
    } else {
      responseLine.innerHTML = `command not found: '${rawVal}'. Type <span class="term-cmd">help</span> for commands.`;
    }

    termOutput.appendChild(responseLine);
    termOutput.scrollTop = termOutput.scrollHeight;
  }
});

// 5. Copy Email Button
const copyBtn = document.getElementById('btn-copy-email');
const copyBtnText = document.getElementById('copy-btn-text');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('hlopankajyadav@gmail.com');
  copyBtnText.textContent = 'Copied to Clipboard! ✓';
  copyBtn.style.borderColor = '#22c55e';

  setTimeout(() => {
    copyBtnText.textContent = 'Copy Email';
    copyBtn.style.borderColor = '';
  }, 2000);
});