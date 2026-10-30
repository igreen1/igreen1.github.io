// All resume content lives here so the site can be updated without touching components.

export const profile = {
  name: 'Ian Green',
  tagline: 'Data engineer at Johns Hopkins APL',
  intro:
    'I build data pipelines, storage, and analysis tools for defense programs. When I\'m not at work, I\'m usually skiing.',
  email: 'jobs@iangreen.dev',
  github: 'https://github.com/igreen1',
  linkedin: 'https://www.linkedin.com/in/ian-green2/',
  resume: '/assets/green_resume_2026.pdf',
  portrait: '/assets/me.png',
  portraitCredit: { name: 'Marcella Maggio', url: 'https://www.marcella-maggio.com/' },
}

export const about = [
  "I'm Ian. I started at the Johns Hopkins Applied Physics Lab as an intern in 2021 and now lead data engineering and analysis work there. I finished my M.S. in Computer Science at Johns Hopkins in 2025.",
  "Most of my job is getting data where it needs to go and making it usable. I moved about a petabyte of program data off file systems and into S3 and PostgreSQL, replaced our hand-run ETL with Airflow, and built the lab's first RAG system to make it into production. On the analysis side, I build models of EW systems and run a $5M project.",
  "Outside of work I ski as much as I can. The rest of my weekends go to the mountains or my garden (I still don't have a green thumb).",
]

export const clearance = 'Active TS/SCI clearance (DoD, investigation Feb. 2026)'

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'TypeScript / React', 'SQL', 'Rust', 'C++', 'Java', 'CUDA', 'HTML/CSS'] },
  { group: 'Data engineering', items: ['Apache Airflow', 'PostgreSQL', 'MongoDB', 'DataHub', 'InfluxDB', 'S3', 'Parquet'] },
  { group: 'Infrastructure', items: ['OpenShift / Kubernetes', 'Docker / Podman', 'Slurm', 'GitLab CI/CD', 'JFrog Artifactory'] },
  { group: 'AI / ML', items: ['RAG pipelines', 'Embeddings & vector search', 'LLM applications', 'Predictive & stochastic modeling', 'Feature engineering'] },
]

export type Role = {
  org: string
  location: string
  title: string
  dates: string
  // Earlier titles held on the same track, most recent first
  progression?: { title: string; dates: string }[]
  highlights: string[]
  link?: string
}

export const experience: Role[] = [
  {
    org: 'Johns Hopkins Applied Physics Laboratory',
    location: 'Laurel, MD',
    title: 'Analysis & Live Test Lead',
    dates: 'Feb 2024 – Present',
    highlights: [
      'Built an aggregate stochastic model of EW systems over a unified simulated/live data model, making turnaround on emergent analysis requests 5× faster.',
      'Developed a log data model that extracts and normalizes failure signals from disparate systems (1 TB/hr), and trained a model that flags incidents minutes before impact.',
      'Redesigned the analysis team\u2019s workflow, cutting standard turnaround from 6 months to 3 weeks.',
      'Cut IQ-based radar simulation runtime from 12 to 5 hours with memory-layout changes and GPU acceleration of critical code, including custom shaders.',
      'Supervised a $5M project: staff mentoring, budget, technical direction, grant proposals, and sponsor relations, with consistent 8% annual budget growth.',
    ],
    link: 'https://www.jhuapl.edu/',
  },
  {
    org: 'Johns Hopkins Applied Physics Laboratory',
    location: 'Laurel, MD',
    title: 'Data Engineering Lead',
    dates: 'Jan 2023 – Present',
    progression: [
      { title: 'Data Engineer', dates: 'May 2022 – Jan 2023' },
      { title: 'Intern', dates: 'May 2021 – May 2022' },
    ],
    highlights: [
      'Moved manual ETL into Airflow, with provenance in DataHub and observability in Grafana, cutting ingestion time by 75%.',
      'Moved 1 PiB of program data from file systems to an S3/PostgreSQL lakehouse. Mean access time dropped 60%, and the system met IL6 requirements for highly secure environments.',
      'Built a RAG pipeline over a 50 TB documentation corpus for the company\u2019s first natural-language knowledge hub, now used by 200 engineers across 16 programs.',
      'Automated dependency management with agentic pipelines, cutting the mean time to remove packages with critical or high CVEs from 5 days to 3 hours.',
      'Raised pipeline test coverage from 10% to 90% with Pytest and GitLab CI/CD.',
      'Built a React app on an OpenShift (Kubernetes) microservice backend for visualizing and planning across disparate data sources, deployed to highly classified cloud environments.',
    ],
    link: 'https://www.jhuapl.edu/',
  },
]

export const education = [
  { school: 'Johns Hopkins University', detail: 'M.S. Computer Science', dates: '2022 – 2025' },
  { school: 'Loyola Marymount University', detail: 'B.S. Computer Science · B.S.E. Electrical Engineering', dates: '2018 – 2022' },
]

export type Category = 'Frontend' | 'Data' | 'Backend' | 'CS Theory' | 'Computer Eng.' | 'Electrical Eng.'

export type Project = {
  title: string
  subtitle: string
  description: string
  image?: string
  github?: string
  website?: string
  tags: Category[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'VIBAH Graphics Library',
    subtitle: 'A Three.js-style graphics library built on WebGL',
    description:
      'A group project: a JavaScript graphics library named after our initials. It has meshes, grouping, animation, shading, and vertex coloring. Heads up, the demo takes a while to load because it calculates normals first.',
    image: '/assets/vibah.jpg',
    github: 'https://github.com/igreen1/Graphics',
    website: 'https://igreen1.github.io/Graphics/',
    tags: ['Frontend'],
    featured: true,
  },
  {
    title: '‘Custom’ Programming Language',
    subtitle: 'A statically typed, C-like language with swappable keywords',
    description:
      'The keywords come from a config file, so you can write code without knowing English words like “float”. We parsed it with Ohm.js and wrote the semantic analyzer and code generator ourselves in JavaScript. It has the usual types plus sets, arrays, and dictionaries.',
    image: '/assets/custom.png',
    github: 'https://github.com/igreen1/Custom',
    website: 'https://igreen1.github.io/Custom',
    tags: ['CS Theory', 'Frontend'],
    featured: true,
  },
  {
    title: 'Dynamic Free-Space Optical Comms',
    subtitle: 'Senior design capstone',
    description:
      'My partner and I built a laser link between two moving endpoints for under $500, run from a Raspberry Pi. It hit our 1 Gbps target. The scanning system worked in testing, but we ran out of time and money before we could test the whole thing together.',
    image: '/assets/microp.png',
    github: 'https://github.com/LMU-Capstone/microp',
    website: 'https://lmucapstone22.wixsite.com/microp',
    tags: ['Electrical Eng.', 'Computer Eng.'],
    featured: true,
  },
  {
    title: 'Operational Amplifier Design',
    subtitle: 'Designed in a week, built in under 3 hours',
    description:
      'Designed for Junior Lab II using an at-home lab kit. Measured results: gain of 511, DC offset under 0.01 V, 17 kΩ input resistance, under 27 Ω output resistance, 50 Hz −3 dB cutoff, and 2.1 V output swing into a 200 Ω load.',
    image: '/assets/opamp.png',
    website: '/assets/JLabII_GreenLongo_Lab09_PostLab.pdf',
    tags: ['Electrical Eng.'],
    featured: true,
  },
  {
    title: 'GRNsight',
    subtitle: 'Visualizing gene regulatory networks',
    description:
      'A tool for visualizing gene regulatory networks. I worked on the D3.js force graph and the GUI tests. It was also my first time working in a large shared codebase.',
    image: '/assets/GRNSight.png',
    github: 'https://github.com/dondi/GRNsight',
    website: 'https://dondi.github.io/GRNsight/',
    tags: ['Frontend', 'Data', 'Backend'],
  },
  {
    title: 'CubeSat Ground Station',
    subtitle: 'Rotor and antenna control',
    description:
      'I built the ground station hardware and software, including a Yagi antenna made from off-the-shelf parts. When our rotator controller broke, I replaced it with a Raspberry Pi and an ADC, and wrote a small server so the main system could control any of our hardware.',
    image: '/assets/cubesat.png',
    github: 'https://github.com/LMU-Cubesat/',
    tags: ['Backend', 'Computer Eng.'],
  },
  {
    title: 'Automata Toolbox',
    subtitle: 'Theory of Computation final project',
    description:
      'Tools for working with NFAs and DFAs: converting to and from regex, and checking whether a machine accepts a string.',
    image: '/assets/automata.gif',
    github: 'https://github.com/igreen1/automata-toolbox',
    tags: ['CS Theory'],
  },
  {
    title: 'Persistent Bash Aliases',
    subtitle: 'Operating systems coursework',
    description:
      'We changed Bash’s alias.c so new aliases get saved to .bash_aliases and stick around between terminal sessions. The same class had us modify and compile the Linux kernel.',
    image: '/assets/bash.png',
    github: 'https://github.com/igreen1/CMSI-387',
    tags: ['Computer Eng.'],
  },
  {
    title: 'Programming Languages',
    subtitle: 'Coursework in six languages',
    description:
      'A class where we worked in six languages. The goal was to get good at picking up new ones and comparing how they work.',
    github: 'https://github.com/igreen1/lmu-cmsi-386',
    tags: ['CS Theory'],
  },
  {
    title: 'Computer Systems Organization',
    subtitle: 'Assembly and C',
    description: 'My first low-level class, mostly in assembly with some C.',
    github: 'https://github.com/igreen1/CSO',
    tags: ['Computer Eng.'],
  },
]

export const categories: Category[] = ['Frontend', 'Data', 'Backend', 'CS Theory', 'Computer Eng.', 'Electrical Eng.']
