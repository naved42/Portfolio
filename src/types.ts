export interface BrandFile {
  id: string;
  name: string;
  type: 'folder' | 'document' | 'image' | 'analytics' | 'code';
  size: string;
  updatedAt: string;
  category: string;
  description: string;
  content?: string;
  tags?: string[];
  previewUrl?: string;
}

export interface GenerationRequest {
  category: 'copywriting' | 'imagery' | 'layouts';
  prompt: string;
  tone: string;
  targetAudience?: string;
}

export interface ArticleUpdate {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface DemoBooking {
  fullName: string;
  email: string;
  company: string;
  teamSize: string;
  useCase: string;
  preferredDate: string;
  preferredTime: string;
}
