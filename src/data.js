// =====================================================================
//  ALL YOUR CONTENT LIVES HERE.
//  Edit this one file and the whole site updates.
//  Anything left empty ("" or []) is simply hidden on the page, so the
//  site never shows placeholder text.
// =====================================================================

export const profile = {
  name: 'Obed Blankson',
  role: 'Data analysis and front-end development',
  tagline:
    'IT graduate who turns data into decisions and ideas into clean interfaces, building toward a youth tech hub in Ghana.',
  status: 'Open to internships and junior roles',

  // Contact and links. Fill these in. Empty ones are hidden.
  email: 'obeblanko@gmail.com',
  linkedin: 'https://www.linkedin.com/in/obed-blankson',
  github: 'https://github.com/Obeblanko',

  // CV lives in the /public folder
  cv: '/Obed_Blankson_CV.pdf',
  // Headshot lives in the /public folder
  photo: '/headshot.jpg',

  internships: 5,
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'hub', label: 'IT Hub' },
]

export const about = {
  paragraphs: [
    "I'm an IT graduate who works across data analysis and front-end development. My experience spans software development, IT support, public-sector ICT, data analysis and technical sales, alongside teaching at Alpha Star Academy.",
    'My projects aim at real local problems, from farmer markets to crop disease and air quality. Together with two school colleagues, I am developing an IT Hub concept to bring youth technology training and startup support to life in Ghana.',
  ],
  strengths: [
    { icon: 'briefcase', title: 'Hands-on experience', text: 'Experience across software development, IT support, data analysis, technical sales and public-sector ICT.' },
    { icon: 'layers', title: 'Data meets design', text: 'A rare mix of data, front-end, UI/UX and entrepreneurship.' },
    { icon: 'map', title: 'Local problems', text: 'Projects built for farmers, communities and everyday users in Ghana.' },
    { icon: 'teach', title: 'Teaching background', text: 'Teaching experience at Alpha Star Academy supports the Hub\u2019s training mission.' },
  ],
}

// icon options: wind, cart, market, shield
// Add `role`, `tech`, `live`, `github` and `image` as you collect them.
export const projects = [
  {
    title: 'Air Quality Prediction',
    icon: 'wind',
    problem: 'A predictive model that analyses and forecasts air quality from environmental data.',
    role: '',
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    live: '',
    github: 'https://github.com/Obeblanko/AIR_QUALITY-PREDICTION',
    image: '',
  },
  {
    title: 'My Shopping',
    icon: 'cart',
    problem: 'A responsive shopping web app with a clean, user-friendly interface.',
    role: '',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    github: 'https://github.com/Obeblanko/My-shopping',
    image: '',
  },
  {
    title: 'Farmer Market Information System',
    icon: 'market',
    problem: 'A prototype platform that connects farmers with buyers through real-time market information.',
    role: 'Team lead and tester, with system planning, interface design and requirements analysis',
    tech: [],
    live: '',
    github: '',
    image: '',
  },
  {
    title: 'Agroguard Ghana',
    icon: 'shield',
    problem: 'An AI-powered maize disease detection project that helps farmers identify crop disease and act early.',
    role: 'Team lead, tester and member of the model development team',
    tech: [],
    live: '',
    github: '',
    image: '',
  },
]

// icon options: data, frontend, code, cloud, tools
export const skills = [
  { group: 'Data', icon: 'data', items: ['Microsoft Excel', 'SQL fundamentals', 'MySQL', 'Data cleaning', 'Data analysis', 'Data visualisation'] },
  { group: 'Front-end', icon: 'frontend', items: ['Responsive web design', 'UI development', 'UI/UX design', 'Figma'] },
  { group: 'Programming', icon: 'code', items: ['Python', 'Java', 'C++', 'HTML5', 'CSS3', 'Basic JavaScript'] },
  { group: 'Cloud', icon: 'cloud', items: ['AWS Cloud Fundamentals', 'IBM Cloud Computing'] },
  { group: 'Tools', icon: 'tools', items: ['Git and GitHub', 'VS Code', 'Microsoft Office', 'Hardware and software troubleshooting', 'Network support'] },
]

// Newest first. `points` are the bullet lines shown under each role.
export const experience = [
  {
    title: 'Data Analyst and Technical Sales Support',
    org: 'Zerone AnalytiQs (Remote Internship)',
    period: 'November 2026 to present',
    points: [
      'Contribute as a Data Analyst intern and provide support in a technical sales role.',
    ],
  },
  {
    title: 'Data Analyst Fellow (National Service)',
    org: 'SankofaTech',
    period: 'September 2026 to present',
    points: [],
  },
  {
    title: 'Technical Support Lead',
    org: 'C2 TECH SOLUTIONS',
    period: 'Current',
    points: [
      'Assist an inspiring youth-led start-up providing IT services to its partner schools.',
      'Support curriculum development for courses the team intends to roll out.',
      'Provide technical support when needed.',
    ],
  },
  {
    title: 'Information Technology Intern',
    org: 'Curious Minds Ghana, Accra',
    period: 'August 2025 to October 2025',
    points: [
      'Supported the Chapter Club Coordinator with technical and administrative tasks, and helped plan youth-focused projects.',
      'Gave basic IT support, troubleshooting hardware and software issues for staff and club members.',
      'Set up and maintained digital tools, computer systems and network resources for meetings and training sessions.',
      'Supported web and digital media projects, including managing online content.',
    ],
  },
  {
    title: 'Information Technology Intern',
    org: 'Duapa Werkspace, Takoradi',
    period: 'April 2025 to July 2025',
    points: [
      'Provided IT support, troubleshooting hardware and software issues for staff and clients.',
      'Set up and maintained computer systems, networks and office technology.',
      'Assisted with basic web and digital solutions projects.',
    ],
  },
  {
    title: 'IT and Administrative Intern',
    org: 'Ablekuma North Municipal Assembly, Accra',
    period: 'August 2024 to October 2024',
    points: [
      'Handled data entry, record keeping and document management.',
      'Organised digital and physical files, and helped prepare reports, letters and official documents.',
      'Gained practical experience in public sector administration.',
    ],
  },
  {
    title: 'Software Development Intern',
    org: 'Axxend Corporation, East Legon, Accra',
    period: 'September 2023 to December 2023',
    points: [
      'Helped the software development team code, test and debug applications.',
      'Built and improved features, and took part in code reviews.',
      'Documented software processes, updates and project reports.',
    ],
  },
  {
    title: 'Teacher',
    org: 'Alpha Star Academy',
    period: '2019 to 2022',
    points: [
      'Delivered classroom instruction, designed lesson plans and prepared teaching materials.',
      'Maintained student records and assessed student performance.',
      'Strengthened leadership, communication and organisational skills.',
    ],
  },
]

export const education = [
  {
    title: 'B.Tech in Information Technology',
    org: 'Takoradi Technical University (TTU)',
    period: '2022 to 2026',
    note: 'Coursework: Database Systems, Software Engineering, Web Development, Systems Analysis and Design, Programming, Networking, Data Structures, Cloud Computing',
  },
  {
    title: 'UI/UX Design Program',
    org: 'Thrive Africa',
    period: 'July 2026 to September 2026',
    note: 'UI and UX design, user research, wireframing and prototyping, design thinking, usability testing, Figma, design systems',
  },
  {
    title: 'AWS re/Start Cloud Computing',
    org: 'AmaliTech',
    period: 'April 2026 to June 2026',
    note: 'Training completed; certification exam pending.',
  },
  {
    title: 'WASSCE',
    org: 'Odorgonno Senior High School',
    period: '2016 to 2019',
    note: '',
  },
]

// Newest first. `note` and `link` are optional.
export const certifications = [
  { title: 'IBM Project Management', issuer: 'IBM', date: 'June 2026', note: '', link: '' },
  { title: 'AWS re/Start Cloud Computing', issuer: 'AmaliTech / AWS', date: 'April to June 2026', note: 'Training completed; certification exam pending.', link: '' },
  { title: 'IBM Cloud Computing', issuer: 'IBM', date: 'February 2026', note: '', link: '' },
  { title: 'Leadership and Ethics', issuer: 'DigiVibe', date: 'December 2025', note: '', link: '' },
  { title: 'Communications and Content Creation', issuer: 'DigiVibe', date: 'December 2025', note: '', link: '' },
  { title: 'Personal Development and Productivity', issuer: 'DigiVibe', date: 'December 2025', note: '', link: '' },
  { title: 'Data Literacy and Analysis', issuer: 'DigiVibe', date: 'December 2025', note: '', link: '' },
]

export const hub = {
  title: 'Building a youth tech hub in Ghana',
  text: 'The IT Hub is a concept I am developing with two colleagues from school. As a team of three, we are working to bring it to reality: a hub that trains young people in technology and supports early-stage startups, schools and students. We welcome practitioners, mentors and partners who want to help shape the initiative.',
  cta: 'Partner with the Hub',
}
