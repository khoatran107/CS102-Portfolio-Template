type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EMAIL = 'ktranowl@gmail.com'

export const WEB_TITLE = 'Tran Dang Khoa - Personal Website'
export const WEB_DESCRIPTION =
  'A personal website showcasing my work and projects (CVE analysis).'
export const FOOTER_COPYRIGHT = '© 2025 Tran Dang Khoa.'
export const FOOTER_LINK = 'https://github.com/khoatran107/'

export const NAME = 'Tran Dang Khoa'
export const JOB_TITLE = 'Viettel Security Research Intern'
export const DESCRIPTION =
  'I am a passionate security researcher. I want to learn the methods to exploit various targets'

export const PROJECTS: Project[] = [
  {
    name: 'CVE-2025-21756: n-day analysis',
    description:
      'From a Use-After-Free in VSOCK to Local Privilege Escalation',
    link: 'https://hackmd.io/@ktranowl/H1XRm4zBxl',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Viettel Cyber Security',
    title: 'Security Researcher Intern',
    start: '2025',
    end: 'Present',
    link: 'https://viettelcybersecurity.com/',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How to use Docker in binary exploit challenge',
    description: 'Automation of docker build and attach in solve.py script',
    link: 'https://hackmd.io/@blackpwner/S11lMQGwye',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/khoatran107',
  },
]
