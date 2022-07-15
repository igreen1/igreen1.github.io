const microp = {
  title: 'Dynamic Free-Space Optical Communication',
  subtitle: 'Senior Design Capstone',
  description: 'My partner and I built a dynamic free-space optical communication system to communicate between two moving endpoints. We used cheap supplies, totaling less than $500, to create the system, which could be operated using a Raspberry Pi. It achieved a throughput of 1Gbps, meeting our primary design specification. The scanning system was tested successfully, but time and budget limitations did not allow for full integration testing. ',
  website: 'https://lmucapstone22.wixsite.com/microp',
  github: 'https://github.com/LMU-Capstone/microp',
  image: 'assets/microp.png'
}

const HighlightedProjects = {

  'name': 'Highlighted',
  projects: [
    {
      title: 'John Hopkins University - Applied Physics Laboratory',
      subtitle: 'Intern: Software Developer for Testing and Evaluation',
      description: `As an intern on a testing and evaluation team, I automated the workflow to optimize the data intake of large raw datasets. The datasets were 
                    parsed, organized, filtered, cleaned, munged, then output into an easily readable solution for downstream analysis. It was built in Python, 
                    extensively utilizing Pandas and Dask. This data extracter reduced intake time by more than 60% and gave valuable insights into the team. In my role,
                    I also allowed for novel datasets to be extracted, improving the ability of the team to work with the data provided. After extraction, I also worked 
                    on improving storage solutions, prototyping a database system in MySQL.`,
      image: 'assets/sew.png',
      website: 'https://www.jhuapl.edu/OurWork/AirandMissileDefense',
    },
    {
      title: 'VIBAH Graphics Library',
      subtitle: 'A graphics library built on top of WebGL using ReactJS',
      description: 'VIBAH (the group initials) is a JavaScript graphics library mirroring ThreeJS. It is built on top of WebGL and implements meshes, objects, grouping, animations, shading, and vertex coloring. To view the project, follow the link to its Github Pages website, but note that the pages often load very slowly due to calculations of normals.',
      image: 'assets/vibah.jpg',
      github: 'https://github.com/igreen1/Graphics',
      website: 'https://igreen1.github.io/Graphics/'
    },
    {
      title: "'Custom' Programming Language",
      subtitle: 'A C-like language we built',
      description: "Custom is a programming language built upon the idea of replaceable keywords. Keywords in the language are set by configuration file. This allows for non-English speakers to easily build their programs without learning English words like 'float'. It is built in Javascript. To parse the langauge, it uses OhmJS. The semantic analyzer and code generator are built in pure JS. It is a statically-typed language implementing most standard types along with collections like set, arrays, and ditionaries. It was built as a group project for a class, primarily using Zoom code alongs.",
      image: 'assets/custom.png',
      github: 'https://github.com/igreen1/Custom',
      website: 'https://igreen1.github.io/Custom',
    },
    {
      title: 'Operational Amplifier design',
      subtitle: 'Design and implementation of an OpAmp',
      description: 'Designed and built an operational amplifier using at-home lab kits during my Junior Lab II course. The Op-Amp (shown in the image above) was designed in one week and implemented in class (<3 hours). From the abstract: An operational amplifier was tested with a gain of 511, a DC offset of less than 0.01V, an input resistance of 17k-ohm, an output resistance of less than 27ohm, a -3dB cutoff frequency of 50Hz, an output swing of 2.1V. This amplifier was designed for a load of 200ohm. ',
      website: 'https://github.com/igreen1/igreen1.github.io/blob/321adac6d3af43d1e6217affed7dfb536b35491c/public/assets/JLabII_GreenLongo_Lab09_PostLab.pdf',
      // website: 'https://www.overleaf.com/read/xmcjxfnxxnsf',
      image: 'assets/opamp.png'
    },
    microp
  ]
}

const FrontendProjects = {
  'name': 'Frontend',
  projects: [
    {
      title: 'Personal Website',
      subtitle: 'This website, built entirely from scratch in ReactJS',
      description: 'I built this website, with minimal libraries (no bootstrap!) to practice my ReactJS and create an interactive resume. I believe it speaks for itself, so look around! ',
      image: 'assets/personal_website.png',
      github: 'https://github.com/igreen1/igreen1.github.io',
      website: 'https://igreen1.github.io/',
    },
    {
      title: 'GRNSight',
      subtitle: 'Graph visualization tool for gene regulatory networks',
      description: 'This tool shows the suppression/activation networks of gene regulatory networks. Primarily, I work on improving the graph visualization code and improving the GUI testing suite. In this position, I learned extensively about d3.JS and force graphs as well as practical skills including Git/GitHUb usage for large programs and group coding best practices.',
      image: 'assets/GRNSight.png',
      github: 'https://github.com/dondi/GRNsight',
      website: 'https://dondi.github.io/GRNsight/',
    },
    {
      title: 'VIBAH Graphics Library',
      subtitle: 'A graphics library built on top of WebGL using ReactJS',
      description: 'VIBAH (the group initials) is a JavaScript graphics library mirroring ThreeJS. It is built on top of WebGL and implements meshes, objects, grouping, animations, shading, and vertex coloring. To view the project, follow the link to its Github Pages website, but note that the pages often load very slowly due to calculations of normals.',
      image: 'assets/vibah.jpg',
      github: 'https://github.com/igreen1/Graphics',
      website: 'https://igreen1.github.io/Graphics/'
    },
  ]
}

const DataScienceProjects = {
  name: 'Data Engineering',
  projects: [
    {
      title: 'John Hopkins University - Applied Physics Laboratory',
      subtitle: 'Intern: Software Developer for Testing and Evaluation',
      description: `As an intern on a testing and evaluation team, I automated the workflow to optimize the data intake of large raw datasets. The datasets were 
                    parsed, organized, filtered, cleaned, munged, then output into an easily readable solution for downstream analysis. It was built in Python, 
                    extensively utilizing Pandas and Dask. This data extracter reduced intake time by more than 60% and gave valuable insights into the team. In my role,
                    I also allowed for novel datasets to be extracted, improving the ability of the team to work with the data provided. After extraction, I also worked 
                    on improving storage solutions, prototyping a database system in MySQL.`,
      image: 'assets/sew.png',
      website: 'https://www.jhuapl.edu/OurWork/AirandMissileDefense',
    },
    {
      title: 'Fieldpiece',
      subtitle: 'Intern: Machine Learning model testing and creation',
      description: `I worked as the data engineer on the team, creating an automated IoT data intake system from LaraWAN to the machine learning algorithm. In this flow, I worked
                    on InfluxDB and learned AWS S3 and Sagemaker. I created cleaning & munging programs to make the raw data usable and created a data simulation software. In addition,
                    I helped develop the VAE algorithm to detect and predict anomalies.`,
      image: 'assets/fieldpiece.png',
      website: 'https://www.fieldpiece.com/',
    },
    {
      title: 'GRNSight',
      subtitle: 'Graph visualization tool for gene regulatory networks',
      description: 'This tool shows the suppression/activation networks of gene regulatory networks. Primarily, I work on improving the graph visualization code and improving the GUI testing suite. In this position, I learned extensively about d3.JS and force graphs as well as practical skills including Git/GitHUb usage for large programs and group coding best practices.',
      image: 'assets/GRNSight.png',
      github: 'https://github.com/dondi/GRNsight',
      website: 'https://dondi.github.io/GRNsight/',
    },
  ]
}


const BackendProjects = {
  name: 'Backend',
  projects: [
    {
      title: 'Cubesat',
      subtitle: 'Rotor and Antenna Control Programs',
      description: `I designed and built a ground station - including hardware and software. On the hardware side, I built a YAGI antenna using COTS supplies. As the chief software engineer,
                    I built a custom command chain for controlling the rotators as our intended controller malfunctioned. This controller used a Raspberry Pi and ADC to set the votlage of the rotators. 
                    To allow for control from our central system, I built a server system which could be extended for any hardware interface. The receive chain was built using primarily commerical software to integrate
                    with our software defined radio. This allowed us to receive many signals without difficult hardware setup.`,
      image: 'assets/cubesat.png',
      github: 'https://github.com/LMU-Cubesat/'
    },
    {
      title: 'GRNSight',
      subtitle: 'Graph visualization tool for gene regulatory networks',
      description: 'This tool shows the suppression/activation networks of gene regulatory networks. Primarily, I work on improving the graph visualization code and improving the GUI testing suite. In this position, I learned extensively about d3.JS and force graphs as well as practical skills including Git/GitHUb usage for large programs and group coding best practices.',
      image: 'assets/GRNSight.png',
      github: 'https://github.com/dondi/GRNsight',
      website: 'https://dondi.github.io/GRNsight/',
    },
  ]
}


const ComputerScienceProjects = {
  name: 'Computer Science/Theory',
  projects: [
    {
      title: 'Automata Toolbox',
      subtitle: 'Theory of Computation Final Project ',
      description: 'This tool performs various operations on finite automata (NFA & DFA) and integrates regex tools with them. It can simulate DFA/NFA to determine is a string is accepted by the machine',
      image: 'assets/automata.gif',
      github: 'https://github.com/igreen1/automata-toolbox',
    },
    {
      title: "'Custom' Programming Language",
      subtitle: 'A C-like language we built',
      description: "Custom is a programming language built upon the idea of replaceable keywords. Keywords in the language are set by configuration file. This allows for non-English speakers to easily build their programs without learning English words like 'float'. It is built in Javascript. To parse the langauge, it uses OhmJS. The semantic analyzer and code generator are built in pure JS. It is a statically-typed language implementing most standard types along with collections like set, arrays, and ditionaries. It was built as a group project for a class, primarily using Zoom code alongs.",
      image: 'assets/custom.png',
      github: 'https://github.com/igreen1/Custom',
      website: 'https://igreen1.github.io/Custom',
    },
    {
      title: 'Programming Languages',
      subtitle: 'An exploration of six langauges',
      description: 'In this class, we explored six different programming languages to give us the tools necessary to learn new languages easily and to analyze langauges from a theoretical standpoint.',
      image: '',
      github: 'https://github.com/igreen1/lmu-cmsi-386'
    }

  ]
}


const ComputerEngineering = {
  name: 'Computer Engineering',
  projects: [
    {
      title: "OS/BASH program",
      subtitle: 'Modifying the Bash ALIAS command to make it easier to use',
      description: `As part of our class, we modified the bash alxias command to allow for permanent storage of aliases, which persisted across terminal instances. 
                  This was done by modifying the BASH source code alias.c to include calls to store the new alias in .bash_aliases file. In addition, as part of the class, we modified and compiled the Linux Kernel
                  and learned more advanced terminal commands. `,
      image: 'assets/bash.png',
      github: 'https://github.com/igreen1/CMSI-387',
    },
    {
      title: 'Computer Systems Organization',
      subtitle: 'Low-level programming in my early years',
      description: 'This was my introductory course into computer systems and their low-level interfaces. We programmed primarily in Assembly, dabbling in C to help link different parts of the program together.',
      image: '',
      github: 'https://github.com/igreen1/CSO',
    }
  ]
}


const ElectricalEngineering = {
  name: 'Electrical Engineering',
  projects: [
    {
      title: 'Operational Amplifier design',
      subtitle: 'Design and implementation of an OpAmp',
      description: 'Designed and built an operational amplifier using at-home lab kits during my Junior Lab II course. The Op-Amp (shown in the image above) was designed in one week and implemented in class (<3 hours). From the abstract: An operational amplifier was tested with a gain of 511, a DC offset of less than 0.01V, an input resistance of 17k-ohm, an output resistance of less than 27ohm, a -3dB cutoff frequency of 50Hz, an output swing of 2.1V. This amplifier was designed for a load of 200ohm. ',
      website: 'https://github.com/igreen1/igreen1.github.io/blob/321adac6d3af43d1e6217affed7dfb536b35491c/public/assets/JLabII_GreenLongo_Lab09_PostLab.pdf',
      image: 'assets/opamp.png'
    },
    microp
    // {
    //   title: 'Traffic Light Controller',
    //   subtitle: 'A traffic light controller implemented using hardware only',
    //   description: 'Designed and simulated a traffic light controller',
    //   image: 'traffic_light.png',
    //   github:'',
    // }
  ]
}


// const SecondaryProjects = {
//   name: 'Test Projects',
//   subtitle: 'Some other recent projects',
//   projects: [
//     {
//       title: 'Automata Toolbox',
//       subtitle: 'Theory of Computation Final Project ',
//       description: 'This tool performs various operations on finite automata (NFA & DFA) and integrates regex tools with them.',
//       image: 'assets/automata.gif',
//       github: 'https://github.com/igreen1/automata-toolbox',
//     },
//     {
//       title: 'Cubesat',
//       subtitle: 'Rotor and Antenna Control Programs',
//       description: 'Various tools developed to automate and integrate the work of the LMU Cubesat lab. Allow for Hamlib control of our custom rotor hardware and large distributed trees of rotors to be controlled from one endpoint. A website showcasing these is in development. The projects are being migrated to GitHub as well.',
//       image: 'assets/cubesat.png',
//       github: 'https://github.com/LMU-Cubesat/'
//     }
//   ]
// }


export { HighlightedProjects, BackendProjects, ComputerScienceProjects, ComputerEngineering, ElectricalEngineering, DataScienceProjects, FrontendProjects }