interface Church {
  slug: string;
  name: string;
  location: string;
  priest: string;
  serviceTimes: string[];
  description: string;
  image: string;
  phone: string;
  email: string;
}

interface ClergyMember {
  id: string;
  name: string;
  title: string;
  church: string;
  bio: string;
  image: string;
}

interface DioceseEvent {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
}

export type { Church, ClergyMember, DioceseEvent, NewsItem };