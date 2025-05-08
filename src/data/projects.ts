export interface ProjectLink {
  googlePlay?: string;
  appStore?: string;
  video?: string;
  article?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  links?: ProjectLink;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'QuickHit Slots',
    description: 'Developed features such as Battle Pass, Loyalty, New Stores and more.',
    image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['2D', 'Games'],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.ballytechnologies.quickhitslots',
      appStore: 'https://apps.apple.com/us/app/quick-hit-slots-vegas-casino/id945621521'
    }
  },
  {
    id: 2,
    title: 'AR Navigation',
    description: 'Developed indoors 3D AR Navigation using cutting-edge computer vision algorithms on top of the Vera SDK. The project is presented in Azrieli TLV.',
    image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['AR', '3D'],
    links: {
      video: 'https://www.youtube.com/watch?v=xHuakxdvLbA',
      article: 'https://www.ice.co.il/consumerism/news/article/975831'
    }
  },
  {
    id: 3,
    title: 'Tissue',
    description: 'Developed a pseudo-psychological-evaluation VR experience. The project uses Azure Speech-To-Text and Text-To-Speech engines, to create a more immersive "talk" with the therapist.',
    image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['VR', '3D']
  },
  {
    id: 4,
    title: 'The Gathering',
    description: 'Developed a 2D illustration project that was presented in Shenkar College of Engineering and Design.',
    image: 'https://images.pexels.com/photos/7956636/pexels-photo-7956636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['2D']
  },
  {
    id: 5,
    title: 'The New Normal',
    description: 'Developed a 2D animation project that was presented in Bezalel Academy of Arts and Design. Massive use of Unity\'s animation and animator systems.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['2D']
  },
  {
    id: 6,
    title: 'Speakal',
    description: 'Developed a VR speech processing app using Google Cloud Platform Speech-To-Text engine, and built for Oculus Quest.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['VR', '3D']
  },
  {
    id: 7,
    title: 'StreetPlay JLM',
    description: 'Developed the AR system and software architecture for the project. The project is considered the largest AR project made in Jerusalem.',
    image: 'https://images.pexels.com/photos/7054493/pexels-photo-7054493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['AR', '3D']
  },
  {
    id: 8,
    title: 'Banai Exhibition',
    description: 'Developed a 2D Unity app built for Android Tablets. The app was showcased in the Tower of David in Jerusalem for a couple of months.',
    image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['2D']
  },
  {
    id: 9,
    title: 'Durak',
    description: 'As part of the Intro2AI course, we built an agent that plays Durak (a Russian cards game). Using Reinforcement Learning techniques, such as NFSP (Neural Fictitious Self Play) and PPO (Proximal Policy Optimization), we were able to achieve excellent results against various hard-coded agents, passing 99%-win rate against 3 random agents.',
    image: 'https://images.pexels.com/photos/7303498/pexels-photo-7303498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['AI']
  },
  {
    id: 10,
    title: 'Postourisma',
    description: 'Working with Resonai\'s SDK to create an immersive AR content in Safra Square, Jerusalem. Developing advanced mechanics and tools for optimization. Built for WebGL.',
    image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    categories: ['AR', '3D'],
    links: {
      video: 'https://vimeo.com/739397516'
    }
  }
];