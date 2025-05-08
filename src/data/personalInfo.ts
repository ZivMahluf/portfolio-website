export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Ziv Mahluf',
  title: 'Unity Game Developer',
  description: 'I create immersive experiences for various platforms including VR, AR, Mobile and Web. With expertise in Unity development, I bring digital worlds to life.',
  image: 'assets/linkedin_profile_photo_25.jpg',
  email: 'Ziv5467@gmail.com',
  phone: '(+972) 546656993',
  socialLinks: {
    github: 'https://github.com/ZivMahluf',
    linkedin: 'https://www.linkedin.com/in/zivmahluf'
  }
};