export const SITE = {
  name: 'Kush Parab',
  initials: 'KP',
  role: 'AI/ML Developer',
  headline: 'AI/ML Developer | Computer Science Student | Future AI Researcher',
  tagline:
    'Building intelligent systems that turn real-world problems into practical technology solutions.',
  description:
    'Kush Parab is a Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Generative AI, AI Agents, and real-world software development.',
  email: 'you@example.com',
  github: 'https://github.com/your-github',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  resume: '#',
};

export const STATS = [
  { value: 4, suffix: '+', label: 'Projects Built' },
  { value: 35, suffix: '+', label: 'Technologies Used' },
  { value: 10, suffix: '+', label: 'Areas Interested In' },
  { value: 1, suffix: '', label: 'Hackathon Focus' },
];

export const MARQUEE_ITEMS = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Generative AI',
  'Large Language Models',
  'AI Agents',
  'Data Science',
  'Software Development',
  'AI for Defence and Security',
];

export const INTERESTS = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Generative AI',
  'Large Language Models',
  'AI Agents',
  'Data Science',
  'Software Development',
  'AI for Defence and Security',
];

export const PERSONAL_INTERESTS = [
  'Artificial Intelligence',
  'Technology & Innovation',
  'Hackathons',
  'Software Development',
  'AI Research',
  'Defence Technology',
  'Problem Solving',
  'Continuous Learning',
];

const ic = (name, size = 48) => `https://img.icons8.com/color/${size}/${name}.png`;

export const SKILLS = {
  programming: {
    title: 'Programming',
    blurb: 'Foundations I build every solution on.',
    items: [
      { name: 'Python', icon: ic('python') },
      { name: 'Java', icon: ic('java-coffee-cup-logo') },
      { name: 'C', icon: ic('c-programming') },
      { name: 'SQL', icon: ic('sql') },
    ],
  },
  ai: {
    title: 'AI / Machine Learning',
    blurb: 'The core toolkit behind my intelligent applications.',
    items: [
      { name: 'Machine Learning', icon: ic('artificial-intelligence') },
      { name: 'Deep Learning', icon: ic('brain') },
      { name: 'Artificial Intelligence', icon: ic('robot') },
      { name: 'Computer Vision', icon: ic('visible') },
      { name: 'TensorFlow', icon: ic('tensorflow') },
      { name: 'Keras', icon: ic('brain') },
      { name: 'Scikit-learn', icon: ic('statistics') },
      { name: 'OpenCV', icon: ic('opencv') },
      { name: 'NumPy', icon: ic('numpy') },
      { name: 'Pandas', icon: ic('pandas') },
    ],
  },
  web: {
    title: 'Web & Application Development',
    blurb: 'Turning models and ideas into usable interfaces.',
    items: [
      { name: 'HTML', icon: ic('html-5') },
      { name: 'CSS', icon: ic('css3') },
      { name: 'JavaScript', icon: ic('javascript') },
      { name: 'Bootstrap', icon: ic('bootstrap') },
      { name: 'Streamlit', icon: ic('streamlit') },
      { name: 'Django', icon: ic('django') },
      { name: 'Flask', icon: ic('flask') },
      { name: 'FastAPI', icon: ic('server') },
    ],
  },
  databases: {
    title: 'Databases',
    blurb: 'Storing, managing, and serving data the right way.',
    items: [
      { name: 'MySQL', icon: ic('mysql-logo') },
      { name: 'MongoDB', icon: ic('mongodb') },
      { name: 'MongoDB Atlas', icon: ic('mongodb') },
    ],
  },
  tools: {
    title: 'Tools & Technologies',
    blurb: 'The workflow that keeps me shipping.',
    items: [
      { name: 'Git', icon: ic('git') },
      { name: 'GitHub', icon: ic('github') },
      { name: 'Jupyter Notebook', icon: 'https://img.icons8.com/fluency/48/jupyter.png' },
      { name: 'VS Code', icon: ic('visual-studio') },
      { name: 'Cloudflare', icon: ic('cloudflare') },
      { name: 'Render', icon: ic('server') },
    ],
  },
  exploring: {
    title: 'Currently Exploring',
    blurb: 'Where my curiosity is pointed right now.',
    items: [
      { name: 'Generative AI', icon: ic('artificial-intelligence') },
      { name: 'Large Language Models', icon: ic('chat') },
      { name: 'Retrieval-Augmented Generation', icon: ic('database') },
      { name: 'AI Agents', icon: ic('robot') },
      { name: 'MLOps', icon: ic('inspection') },
      { name: 'Advanced Deep Learning', icon: ic('brain') },
      { name: 'Multimodal AI', icon: ic('video-call') },
    ],
  },
};

export const PROJECTS = [
  {
    id: 'deepfake',
    index: '01',
    title: 'AI Deepfake Detection System',
    icon: ic('visible'),
    category: ['AI', 'Computer Vision', 'Deep Learning'],
    description:
      'An AI-powered application that determines whether an uploaded image is real or manipulated/generated, built on deep learning and computer vision pipelines.',
    features: [
      'Image upload',
      'AI-based real / fake classification',
      'Prediction confidence score',
      'Deep learning image analysis',
      'Interactive web interface',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'EfficientNetB0', 'OpenCV', 'Streamlit'],
    gradient: 'linear-gradient(135deg, #4f5dff 0%, #8b5cf6 100%)',
  },
  {
    id: 'nexus',
    index: '02',
    title: 'NEXUS Command Center',
    icon: ic('dashboard'),
    category: ['AI', 'Data Science', 'Analytics', 'Dashboard'],
    description:
      'An intelligent command-center dashboard built to visualize operational data, surface anomalies, analyze trends, and deliver an interactive, data-driven interface.',
    features: [
      'Interactive dashboard',
      'Data visualization',
      'Anomaly detection',
      'Forecasting',
      'Geographic visualization',
      'Data-driven insights',
    ],
    tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Prophet', 'Data Viz'],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  },
  {
    id: 'garage',
    index: '03',
    title: 'Online Garage Guide',
    icon: ic('map-pin'),
    category: ['Web Development', 'Location-Based Application'],
    description:
      'A web-based platform that helps users discover automobile garages and services through an interactive, location-based interface.',
    features: [
      'Garage discovery',
      'Interactive maps',
      'Location-based search',
      'Garage information',
      'Database integration',
    ],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Leaflet'],
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
  },
  {
    id: 'assistant',
    index: '04',
    title: 'AI Virtual Assistant',
    icon: ic('robot'),
    category: ['AI', 'Conversational AI'],
    description:
      'An interactive AI assistant application designed around a conversational user experience backed by a modern, friendly chat interface.',
    features: [
      'Conversational interface',
      'Chat-style UI',
      'Interactive responses',
      'Modern assistant interface',
    ],
    tech: ['Python', 'Streamlit', 'Bootstrap', 'AI'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #5eead4 100%)',
  },
];

export const HACKATHON = {
  title: 'Smart India Hackathon 2026',
  icon: ic('rocket'),
  description:
    'Participating in / actively working toward Smart India Hackathon 2026 with a focus on developing AI-powered solutions for real-world national challenges.',
  areas: [
    { name: 'Defence & Security', icon: ic('shield') },
    { name: 'Artificial Intelligence', icon: ic('artificial-intelligence') },
    { name: 'Healthcare', icon: ic('plus-math') },
    { name: 'Cybersecurity', icon: ic('cyber-security') },
    { name: 'Governance', icon: ic('inspection') },
    { name: 'Disaster Management', icon: ic('target') },
    { name: 'Smart Cities', icon: ic('city') },
    { name: 'Sustainability', icon: ic('leaf') },
  ],
};

export const DEFENCE = {
  title: 'Defence Digital Twin',
  icon: ic('server'),
  description:
    'An AI-driven digital representation of defence assets, environments, and operational scenarios — designed to support monitoring, simulation, predictive analysis, anomaly detection, and data-driven decision-making.',
  concepts: [
    { name: 'Artificial Intelligence', icon: ic('artificial-intelligence') },
    { name: 'Machine Learning', icon: ic('statistics') },
    { name: 'Digital Twin', icon: ic('server') },
    { name: 'Predictive Analytics', icon: ic('line-chart') },
    { name: 'Data Visualization', icon: ic('dashboard') },
    { name: 'Simulation', icon: ic('circuit') },
    { name: 'Anomaly Detection', icon: ic('cyber-security') },
  ],
  note: 'Concept under exploration — not a deployed defence system.',
};

export const RESEARCH = [
  { name: 'Deep Learning', icon: ic('brain') },
  { name: 'Computer Vision', icon: ic('visible') },
  { name: 'Generative AI', icon: ic('artificial-intelligence') },
  { name: 'Large Language Models', icon: ic('chat') },
  { name: 'AI Agents', icon: ic('robot') },
  { name: 'Multimodal AI', icon: ic('video-call') },
  { name: 'Explainable AI', icon: ic('inspection') },
  { name: 'AI Safety & Reliability', icon: ic('shield') },
  { name: 'Autonomous Intelligent Systems', icon: ic('processor') },
  { name: 'AI for Defence & Security', icon: ic('lock') },
];

export const BUILDING = [
  {
    title: 'AI Agents',
    icon: ic('robot'),
    description:
      'Exploring intelligent systems capable of reasoning, using tools, retrieving information, and completing multi-step tasks.',
  },
  {
    title: 'Generative AI',
    icon: ic('artificial-intelligence'),
    description:
      'Learning and experimenting with modern generative AI and large language model technologies.',
  },
  {
    title: 'Computer Vision',
    icon: ic('visible'),
    description:
      'Developing AI applications capable of understanding and analyzing visual information.',
  },
  {
    title: 'AI for Defence',
    icon: ic('shield'),
    description:
      'Exploring responsible applications of AI for situational awareness, anomaly detection, simulation, and decision support.',
  },
];

export const EDUCATION = [
  {
    type: "Bachelor's Degree",
    stream: 'Computer Science / Artificial Intelligence & Machine Learning',
    placeholders: { college: '[College Name]', duration: '[Start Year] – [Expected Graduation Year]' },
    subjects: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Cloud Computing',
      'Big Data',
    ],
  },
  {
    type: 'Diploma',
    stream: '[Diploma Branch]',
    placeholders: { college: '[College Name]', duration: '[Start Year] – [Completion Year]' },
    subjects: [],
  },
];

export const EXPERIENCE = {
  status: 'Student / Aspiring AI/ML Developer',
  items: [
    'Academic Projects',
    'AI/ML Development',
    'Hackathon Projects',
    'Technical Learning',
  ],
  placeholder:
    'Internship & professional experience — adding details here as opportunities come through.',
};

export const ACHIEVEMENT_CATEGORIES = [
  'Hackathon Participation',
  'Technical Projects',
  'AI/ML Projects',
  'Certifications',
  'Academic Achievements',
  'Competitions',
];

export const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];