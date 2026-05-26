export const stats = [
  { num: '84.3%', label: 'GPA' },
  { num: '3+',    label: 'Projects' },
  { num: '14+',   label: 'Months Exp.' },
  { num: '10+',   label: 'Technologies' },
]

export const skills = [
  {
    cat: 'Languages',
    items: ['Python', 'C', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    cat: 'Frameworks & Libraries',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'OpenCV', 'Flask'],
  },
  {
    cat: 'Dev Tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Valgrind', 'GCC/Clang', 'VS Code', 'Figma', 'Make'],
  },
  {
    cat: 'Software',
    items: ['MS Excel', 'MS Project', 'PowerBI', 'SharePoint'],
  },
]

export const experience = [
  {
    role: 'Project Assistant',
    company: 'Elemech Industrial Supplies Inc.',
    location: 'Mississauga, ON',
    period: 'Jun 2022 – Aug 2023',
    bullets: [
      'Tracked 15+ project milestones using Microsoft Project and Excel, maintaining Gantt charts and organising documentation in SharePoint for version control.',
      'Coordinated cross-functional meetings, prepared agendas, recorded minutes, and distributed action items via Outlook and Teams to ensure on-time task completion.',
      'Compiled weekly status reports in Excel to flag schedule risks, enabling data-driven adjustments to keep deliverables aligned with client expectations.',
    ],
  },
]

export const projects = [
  {
    num: '01',
    year: '2026',
    name: 'Treasure Runner',
    desc: 'A multi-room dungeon game with a C backend and Python curses frontend following MVC architecture across 3,500+ lines of code.',
    tags: ['C', 'Python', 'ctypes', 'curses', 'JSON', 'Docker', 'Valgrind', 'Make'],
    highlights: [
      'Wrapped 20+ C functions via ctypes for player movement, treasure collection, pushable physics, portal traversal, single-step undo, and room-specific reset.',
      'Built a curses terminal UI with real-time rendering, dynamic status bar, splash screens, and JSON-based profile persistence that adapts to terminal dimensions.',
      'Wrote 100+ automated C unit tests using the Check framework with Valgrind memory analysis for edge cases and state rollback verification.',
    ],
  },
  {
    num: '02',
    year: '2025',
    name: 'Job Vacancies Data Project',
    desc: 'A Python analysis tool processing 10GB+ CSV datasets from Statistics Canada, revealing national and provincial job vacancy trends.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Agile'],
    highlights: [
      'Designed Pandas preprocessing pipelines to clean and filter raw data down to 30KB, supporting dynamic queries by education, experience, region, and occupation.',
      'Collaborated in a four-person agile team with sprint planning and milestone demos.',
      'Delivered Matplotlib visualisations to communicate key findings to stakeholders.',
    ],
  },
  {
    num: '03',
    year: '2025',
    name: 'FocusIn',
    desc: "A Chrome extension blocking distracting websites and using AI-generated quizzes to encourage focused study sessions — shipped in 48 hours at GDSC Hackathon.",
    tags: ['JavaScript', 'HTML/CSS', 'Gemini API', 'Chrome API'],
    highlights: [
      "Integrated Google's Gemini AI API to dynamically generate quiz questions for a seamless study experience.",
      'Leveraged Chrome Extensions API and Chrome Storage API for persistent blocking rules.',
      'Shipped a fully functional tool in 48 hours with a four-person team using GitHub for version control.',
    ],
  },
]

export const courses = [
  'Data Structures',
  'Object-Oriented Programming',
  'Operating Systems',
  'Analysis & Design of Computer Algorithms',
]
