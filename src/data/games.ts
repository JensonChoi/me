export interface ArcadeGame {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  playUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured?: boolean;
  available?: boolean;
}
// Deployments confirmed available by Jenson. Set false to temporarily disable a game.
export const games: ArcadeGame[] = [
  { id: 'platformer', title: 'Pixelbound Adventure', description: 'A retro-inspired 8-bit platformer featuring multiple worlds, hidden secrets, and classic side-scrolling gameplay.', thumbnail: 'images/pixelbound-adventure-small.jpg', playUrl: 'https://jensonchoi.github.io/pixelbound-adventure/', githubUrl: 'https://github.com/JensonChoi/pixelbound-adventure', tags: ['TypeScript', 'HTML5 Canvas', 'Platformer'], available: true },
  { id: 'tower-defense', title: 'Cyberpunk Tower Defense', description: 'Defend a futuristic city by strategically placing towers and surviving waves of enemies.', thumbnail: 'images/neon_defense-small.jpg', playUrl: 'https://jensonchoi.github.io/neon-defense/', githubUrl: 'https://github.com/JensonChoi/neon-defense', tags: ['TypeScript', 'Strategy', 'Tower Defense'], available: true },
  { id: 'banqi', title: '3D Banqi', description: 'A modern, browser-based take on Chinese dark chess with interactive 3D visuals.', thumbnail: 'images/banqi-small.jpg', playUrl: 'https://jensonchoi.github.io/banqi/', githubUrl: 'https://github.com/JensonChoi/banqi', tags: ['TypeScript', 'Three.js', 'Board Game'], available: true },
];
