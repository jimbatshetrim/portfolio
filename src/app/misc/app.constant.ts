export interface LanguageType {
  name: string;
  level: string;
}

export const LANGUAGES: LanguageType[] = [
  {
    name: 'JavaScript',
    level: '9'
  },
  {
    name: 'TypeScript',
    level: '9'
  },
  {
    name: 'HTML5',
    level: '9'
  },
  {
    name: 'CSS3',
    level: '8'
  },
  {
    name: 'Git',
    level: '8'
  },
  {
    name: 'Figma',
    level: '7'
  },
  {
    name: 'Solidity',
    level: '5'
  },
  {
    name: 'Rxjs',
    level: '8'
  },
  {
    name: 'Ngrx',
    level: '8'
  }
]

export const FRAMEWORKS: LanguageType[] = [
  {
    name: 'Angular',
    level: '9'
  },
  {
    name: 'React',
    level: '7'
  },
  {
    name: 'Cypress',
    level: '9'
  },
  {
    name: 'Firebase',
    level: '7'
  }
]

export interface Certificate {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  url: string;
}

export const SPECIALIZATION: Certificate[] = [
  {
    name: 'Meta Front-End Developer Specialization',
    issuingOrganization: 'Coursera',
    issueDate: 'April 2023',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/A3NNPK2868WX'
  }
]

export const CERTIFICATES: Certificate[] = [
  {
    name: 'Introduction to Front-End Development',
    issuingOrganization: 'Coursera',
    issueDate: 'January 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/XZY6FKFC2GXD'
  },
  {
    name: 'Front-End Developer Capstone',
    issuingOrganization: 'Coursera',
    issueDate: 'March 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/PKVRLMRCR8SF'
  },
  {
    name: 'Coding Interview Preparation',
    issuingOrganization: 'Coursera',
    issueDate: 'April 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/SPHL7JG3R85M'
  },
  {
    name: 'HTML and CSS in depth',
    issuingOrganization: 'Coursera',
    issueDate: 'February 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JK8EM58AS89B'
  },
  {
    name: 'Programming with JavaScript',
    issuingOrganization: 'Coursera',
    issueDate: 'April 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/EXP32AMP3Z75'
  },
  {
    name: 'React Basics',
    issuingOrganization: 'Coursera',
    issueDate: 'February 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/C7DKJSX57SGU'
  },
  {
    name: 'Principles of UX/UI Design',
    issuingOrganization: 'Coursera',
    issueDate: 'March 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/QTBDFW3V8LCH'
  },
  {
    name: 'Advanced React',
    issuingOrganization: 'Coursera',
    issueDate: 'February 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/MRNF3SHJKAA3'
  },
  {
    name: 'Version Control',
    issuingOrganization: 'Coursera',
    issueDate: 'April 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/V37Z9E96U4YF'
  },
  {
    name: 'Build a Google Firebase Web Application',
    issuingOrganization: 'Coursera',
    issueDate: 'March 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/LJFF36DZCVVT'
  },
  {
    name: 'Decentralized Applications (Dapps)',
    issuingOrganization: 'Coursera',
    issueDate: 'January 2023',
    url: 'https://www.coursera.org/account/accomplishments/certificate/HZQ4NMB23V4C'
  },
  {
    name: 'Angular (Basic)',
    issuingOrganization: 'HackerRank',
    issueDate: 'April 2023',
    url: 'https://www.hackerrank.com/certificates/iframe/f20a69708d34'
  },
]
