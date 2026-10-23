export interface ContactInfo {
  name: string
  title: string
  location: string
  phone: string
  phoneHref: string
  email: string
}

export interface ProfileSummary {
  headline: string
  paragraph: string
}

export type SkillCategory =
  | 'DevOps & CI/CD'
  | 'Operating Systems'
  | 'Security'
  | 'Design Tools'
  | 'Programming Foundations'

export interface SkillItem {
  name: string
  status?: 'in-progress'
}

export interface SkillGroup {
  category: SkillCategory
  items: SkillItem[]
}

export interface SpokenLanguage {
  name: string
  proficiency: string
}

export interface ExperienceEntry {
  id: string
  role: string
  organization: string
  location?: string
  period: string
  bullets: string[]
  kind: 'internship' | 'self-directed'
}

export interface ProjectEntry {
  id: string
  name: string
  filePath: string
  category: string
  description: string
  highlight?: string
}

export interface CertificationEntry {
  id: string
  name: string
  issuer: string
  status: 'certified' | 'in-progress'
}

export interface EducationEntry {
  id: string
  degree: string
  institution: string
  period: string
}

export interface AchievementEntry {
  id: string
  title: string
  context: string
}

export interface ResumeData {
  contact: ContactInfo
  profile: ProfileSummary
  skills: SkillGroup[]
  languages: SpokenLanguage[]
  experience: ExperienceEntry[]
  projects: ProjectEntry[]
  certifications: CertificationEntry[]
  education: EducationEntry[]
  achievements: AchievementEntry[]
  resumeFileUrl: string
}

export const resumeData: ResumeData = {
  contact: {
    name: 'Hamza Ali',
    title: 'DevOps Intern Candidate',
    location: 'Hasilpur, Pakistan',
    phone: '+92 309 0602761',
    phoneHref: 'tel:+923090602761',
    email: 'hazzih76@gmail.com',
  },
  profile: {
    headline: 'Computer Engineering graduate building CI/CD pipelines, growing into a DevOps engineer.',
    paragraph:
      'Computer Engineering graduate (BS, 2024) with hands-on DevOps internship experience building CI/CD pipelines with Jenkins for a Node.js application. Strong Linux and programming foundation (C++, HTML, CSS), currently working toward Linux Foundation and KodeKloud certifications. Seeking a DevOps internship to grow into a proficient DevOps engineer focused on automation, reliable deployments, and infrastructure.',
  },
  skills: [
    {
      category: 'DevOps & CI/CD',
      items: [{ name: 'Jenkins' }, { name: 'Pipeline design' }, { name: 'Build / test / deploy automation' }],
    },
    {
      category: 'Operating Systems',
      items: [{ name: 'Linux' }, { name: 'Red Hat administration', status: 'in-progress' }],
    },
    {
      category: 'Security',
      items: [{ name: 'Google Cybersecurity foundations' }, { name: 'PenTest Cyber Specialist', status: 'in-progress' }],
    },
    {
      category: 'Design Tools',
      items: [{ name: 'Adobe Photoshop' }, { name: 'Canva' }],
    },
    {
      category: 'Programming Foundations',
      items: [{ name: 'C++' }, { name: 'HTML' }, { name: 'CSS' }],
    },
  ],
  languages: [
    { name: 'Urdu', proficiency: 'Full professional proficiency' },
    { name: 'English', proficiency: 'Full professional proficiency' },
  ],
  experience: [
    {
      id: 'skyrass-devops-intern',
      role: 'DevOps Intern',
      organization: 'SKYRASS IT Center',
      location: 'Rahim Yar Khan, Pakistan',
      period: 'Sep 2024 – Dec 2024',
      kind: 'internship',
      bullets: [
        'Designed and implemented a complete CI/CD pipeline to automate the build, test, and deployment of a sample Node.js web application.',
        'Integrated Jenkins for job scheduling and automated testing.',
      ],
    },
    {
      id: 'self-directed-professional-development',
      role: 'Professional Development',
      organization: 'Self-directed — Linux · DevOps tooling · Cybersecurity',
      period: 'Ongoing',
      kind: 'self-directed',
      bullets: [
        'Upskilling through structured certification programs in Linux administration, DevOps tooling, and cybersecurity.',
        'Preparing for the Linux Foundation Certified System Administrator (LFCS) pathway via KodeKloud.',
      ],
    },
  ],
  projects: [
    {
      id: 'accident-detection',
      name: 'Accident Detection & Alerting Model',
      filePath: '~/projects/accident-detection.yml',
      category: 'Computer Vision',
      description:
        'A traffic-monitoring system for real-time vehicle detection and classification, traffic-flow analysis, and incident detection, built with scalability in mind.',
    },
    {
      id: 'traffic-light-control',
      name: 'Traffic Light Control System',
      filePath: '~/projects/traffic-light-control.yml',
      category: 'Embedded Systems',
      description: 'A traffic-light controller that coordinates signals so traffic moves smoothly and safely through intersections.',
    },
    {
      id: 'battle-bot',
      name: 'Battle Bot',
      filePath: '~/projects/battle-bot.yml',
      category: 'Robotics',
      description: 'A custom robot built for a combat competition.',
      highlight: '2nd Position — Hardware Project, ESPICE, KFUEIT',
    },
  ],
  certifications: [
    { id: 'google-cybersecurity', name: 'Google Cybersecurity', issuer: 'Coursera', status: 'certified' },
    {
      id: 'lfcs',
      name: 'Linux Foundation Certified System Administrator (LFCS)',
      issuer: 'KodeKloud',
      status: 'in-progress',
    },
  ],
  education: [
    {
      id: 'kfueit-bs',
      degree: 'BS Computer Engineering',
      institution: 'Khwaja Fareed University of Engineering & Information Technology',
      period: '2020 – 2024',
    },
    {
      id: 'pgc-fsc',
      degree: 'FSc Pre-Engineering',
      institution: 'Punjab Group of Colleges',
      period: '2018 – 2020',
    },
  ],
  achievements: [
    { id: 'battle-bot-2nd', title: '2nd Position — Hardware Project (Battle Bot)', context: 'ESPICE Competition, KFUEIT' },
    { id: 'media-director', title: 'Media Director', context: 'XCESS Society, KFUEIT' },
  ],
  resumeFileUrl: '/resume/Hamza-Ali-Resume.pdf',
}
