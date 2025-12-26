import { ArtType, Artwork } from './types';

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    type: ArtType.IMAGE,
    title: 'Ephemeral Stasis',
    description: 'Oil on canvas, digital remix.',
    year: '2023',
    src: 'https://picsum.photos/600/800?random=1',
  },
  {
    id: '2',
    type: ArtType.IMAGE,
    title: 'Cognitive Dissonance',
    description: 'Mixed media installation view.',
    year: '2024',
    src: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: '3',
    type: ArtType.IMAGE,
    title: 'The Void Stares Back',
    description: 'Photography, long exposure.',
    year: '2023',
    src: 'https://picsum.photos/500/700?random=3',
  },
  {
    id: '4',
    type: ArtType.IMAGE,
    title: 'Untitled No. 5',
    description: 'Digital Sculpture render.',
    year: '2024',
    src: 'https://picsum.photos/700/700?random=4',
  },
  {
    id: '5',
    type: ArtType.IMAGE,
    title: 'Fragmented Reality',
    description: 'Generative Adversarial Network output.',
    year: '2024',
    src: 'https://picsum.photos/600/900?random=5',
  },
  {
    id: '6',
    type: ArtType.IMAGE,
    title: 'Echoes of Silence',
    description: 'Charcoal on paper.',
    year: '2022',
    src: 'https://picsum.photos/900/600?random=6',
  }
];

export const VIDEO_WORKS: Artwork[] = [
  {
    id: 'v1',
    type: ArtType.VIDEO,
    title: 'Motion Study: Liquid',
    description: 'A study of fluid dynamics in zero gravity.',
    year: '2024',
    src: 'https://videos.pexels.com/video-files/5532772/5532772-hd_1920_1080_25fps.mp4', 
  },
  {
    id: 'v2',
    type: ArtType.VIDEO,
    title: 'Urban Decay Loop',
    description: 'Time-lapse of structural entropy.',
    year: '2023',
    src: 'https://videos.pexels.com/video-files/3121459/3121459-hd_1920_1080_25fps.mp4',
  }
];

export const ARTIST_BIO = {
  name: "ALEXANDER VANCE",
  tagline: "Explores the boundary between digital permanence and human memory.",
  bio: `My work is an interrogation of the spaces we inhabit—both physical and virtual. Through a combination of traditional oil painting techniques and modern generative algorithms, I seek to visualize the 'data residue' of human emotion. This exhibition, LUMINA, represents the culmination of four years of research into visual entropy.`
};
