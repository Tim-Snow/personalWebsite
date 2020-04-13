type PortfolioContent = {
  id: number;
  name: string;
  title?: string;
  about: string[];
  technologies: string[];
};

type Projects =
  | 'local-multiplayer-game'
  | 'final-year-project'
  | 'game-of-life'
  | 'pacman'
  | 'plain-sailing'
  | 'snake'
  | 'personal-website'
  | 'scientist-brawl'
  | 'sumo'
  | 'pong-server-and-client';

const PortfolioContent: { [key in Projects]: PortfolioContent } = {
  'local-multiplayer-game': {
    id: 0,
    name: 'Local Multiplayer Game',
    about: [
      'Started off as a simple project to learn my way around the Unity engine, and slowly wanted to add more and more!',
      'Supports 4 players locally, allowing them to select a class such as an archer or warrior and fight their friends.',
      'The bow for the archer class is used by pulling the right analogue stick in the opposite direction to the direction you wish to travel, trying to simulate drawing the string back and firing the arrow, you simply release the joystick when pulled back to shoot - time held back and distance joystick is flicked from affect the velocity.',
    ],
    technologies: ['C#', 'Unity'],
  },
  'final-year-project': {
    id: 1,
    name: 'Final Year Project',
    title: 'Digital Signal Analysis Influencing a 3D Scene',
    about: [
      'This was my final year project while at university and was very well received, being awarded a first.',
      'The WebAudioAPI is used to load songs and analyse them in real time using the FFT (Fast Fourier Transform), the data obtained is then used to animate the WebGL scene created using the THREE.js library. The website also featured a dynamic user interface animated using the jQuery library.',
      "The scene is animated using the average amplitude of the song, the amplitudes of each individual frequency 'band', beats that may be occurring in each frequency band, and the top scoring beat of the 6 frequency bands. Working on this project gave tremendous experience in many areas, as I was not familiar with any digital signal processing, nor had used JavaScript or either of the necessary libraries prior to starting this project.",
      'Through completing this I have experience building complex systems from the ground up, breaking a complex problem in to more manageable tasks, and adapting to new styles of programming. ',
    ],
    technologies: ['Javascript', 'ThreeJS', 'WebGL', 'Web Audio', 'jQuery'],
  },
  'game-of-life': {
    id: 2,
    name: 'Game Of Life',
    about: [
      'A fun side project that allows the user to set the initial state and watch how four simple rules can create patterns and cause it to evolve.',
      'The four rules are:',
      '1. Any live cell with fewer than two live neighbours dies.',
      '2. Any live cell with two or three live neighbours lives on to the next generation.',
      '3. Any live cell with more than three live neighbours dies.',
      '4. Any dead cell with exactly three live neighbours becomes a live cell.',
      'Also added in templates for common found patterns allowing a much easier and less tedious set up. Grid size, visibility and speed can be customized.',
    ],
    technologies: ['Javascript', 'jQuery'],
  },
  pacman: {
    id: 4,
    name: 'Pacman',
    about: [
      'University assignment implementing Pacman with the AI using A* pathfinding instead of original Pacman pathfinding.',
    ],
    technologies: ['Python'],
  },
  'plain-sailing': {
    id: 5,
    name: 'Plain Sailing',
    about: [
      "A simple game similar to the old 'helicopter' flash browser game, replacing mouse clicks with taps, also features a full shop allowing the player to purchase upgrades for their ship, and a boost mechanic that gives brief immunity.",
      'Gave insight to many aspects of mobile development such as having platform generation algorithms compatible with all screen sizes, almost eliminating all garbage collections while game is running, storing and loading information to the device, and creating menu layouts that adapted to tablet or phone screen sizes.',
    ],
    technologies: ['Java', 'Native Android'],
  },
  snake: {
    id: 6,
    name: 'Snake',
    about: ['Quick little game made to refresh skills in Javascript after a break'],
    technologies: ['Javascript'],
  },
  'personal-website': {
    id: 7,
    name: 'Personal Website',
    about: ['Place to show my recent activity and portfolio as well as contact information'],
    technologies: ['Javascript', 'React', 'Typescript'],
  },
  'scientist-brawl': {
    id: 8,
    name: 'Scientist Brawl',
    about: ['A local multiplayer game, customize your scientist and fight your friends!'],
    technologies: ['C#', 'Unity'],
  },
  sumo: {
    id: 9,
    name: 'Sumo',
    title: 'Sumo',
    about: [
      'Collaboration with Caoilan creating a 2 player game, having each player try to jump on their oppositions head while avoiding having the same happen to them.',
    ],
    technologies: ['C++', 'OpenGL', 'SDL'],
  },
  'pong-server-and-client': {
    id: 10,
    name: 'TCP Pong Fair Server And Client',
    title: 'TCP Pong Fair Server And Client',
    about: [
      'The server was responsible for pinging all clients and storing the highest ping of all, it would then send the highest ping to all clients.',
      'The messages were sent at specific times (delayed by highest ping time - client ping) to ensure that all clients received the message at the same time.',
      'The clients, knowing their own ping time and the time of the highest ping, would delay their reply by an appropriate amount of time ensuring that all responses arrived at the server at the same time.',
      'Gave tremendous insight in to the workings and the many problems encountered when working with concurrent and networked systems.',
    ],
    technologies: ['Java', 'Concurrency', 'Networking'],
  },
};

export default PortfolioContent;
