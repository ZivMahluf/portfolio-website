export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string[];
}

export const education: EducationItem[] = [
  {
    title: 'Computer Science, B.Sc.',
    institution: 'Hebrew University of Jerusalem, Israel',
    period: '2017 - 2021',
    description: [
      'Majoring in Data Science (ML, AI, Advanced ML) and Game Development (VR Game Development, Computer Graphics).',
      'Developing a pseudo-psychological-evaluation VR experience. The project was a collaboration between designers from Bezalel and programmers from HUJI.',
      'Developing an AI agent to play Durak, exceeding 99%-win rate against 3 players.',
      'Developing a face-mask detector using real-time video from a Raspberry Pi camera.',
      'Implementing advanced deep learning models such as Transformers and GAN.'
    ]
  },
  {
    title: 'Programming Course',
    institution: 'IDF',
    period: '2014',
    description: [
      '6 months course in software development (Mamram unit).',
      'Partial syllabus of the course: Programming languages (C++, C#, Python, Java, Assembly, JavaScript), DB (MySQL), WEB (HTML, CSS), Operating Systems and Software Engineering.'
    ]
  }
];