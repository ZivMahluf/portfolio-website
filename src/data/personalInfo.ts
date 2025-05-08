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
  title: 'XR Unity Developer',
  description: 'I create immersive experiences for various platforms including VR, AR, and mobile. With expertise in Unity development, I bring digital worlds to life.',
  image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  email: 'Ziv5467@gmail.com',
  phone: '(+972) 546656993',
  socialLinks: {
    github: 'https://github.com/ZivMahluf',
    linkedin: 'https://www.linkedin.com/in/zivmahluf'
  }
};