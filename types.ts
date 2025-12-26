export enum ArtType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

export interface Artwork {
  id: string;
  type: ArtType;
  title: string;
  description?: string;
  src: string;
  width?: number; // relative width unit
  height?: number; // relative height unit
  year?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
