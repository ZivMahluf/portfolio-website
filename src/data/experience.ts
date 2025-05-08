export interface ExperienceItem {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Game Developer',
    company: 'Sciplay',
    period: '2023 - Current',
    description: [
      'Developing features such as Battle Pass, Loyalty, New Stores and more.',
      'Leading development in cross-company tasks.',
      'Working at a fast-paced environment in a team of 11.'
    ]
  },
  {
    title: 'Freelance XR Unity Developer, Consultant',
    company: 'Self-Employed',
    period: '2021 - Current',
    description: [
      'Consultanting for VR Unity development. Collaborated with the CEO and tech team to optimize the application\'s performance, resulting in a 3x speed increase.',
      'Developing a Snapchat inspired AR camera app for iOS devices using AR Foundation and OpenCV for Unity.',
      'Working with Resonai\'s SDK to create an immersive AR content in Safra Square, Jerusalem.',
      'Building interaction-focused 2D apps for tablets, phones and computers.'
    ]
  },
  {
    title: 'Unity Developer',
    company: 'Resonai',
    period: '2022 - 2023',
    description: [
      'Maintaining and extending code in various apps, including 3D Navigation, AR Maintenance and IOT.',
      'Developing complex features that involve full stack development (Vue, JS, Java, Python).',
      'Working at a fast-paced startup environment in a team of 4.'
    ]
  },
  {
    title: 'Research Assistant, Lecturer',
    company: 'Hebrew University of Jerusalem',
    period: '2021 - 2022',
    description: [
      'Researched the field of Redirected Walking (under the guidance of Prof. Yair Bartal), a field that combines my passion for Virtual Reality and Artificial Intelligence.',
      'Taught students to develop VR applications and games using Unity. The course focuses on building a large VR project in teams of programmers, designers and musicians.'
    ]
  },
  {
    title: 'XR Unity Developer',
    company: 'Insomnia',
    period: '2020 - 2021',
    description: [
      'Single handedly carried the development process of various VR and AR applications, from an abstract idea to a working product.',
      'Developed AI-driven applications, using Speech-To-Text and Text-To-Speech engines (GCP, Azure), for both Hebrew and English.',
      'Extensive knowledge of commonly used libraries, such as AR Foundation, Oculus SDK (including Lip Sync, Avatars, etc.), VRTK and more.'
    ]
  }
];