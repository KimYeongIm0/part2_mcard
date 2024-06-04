export interface Card {
  name: string;
  corpName: string;
  tags: string[];
  benefit: string[];
  promotion?: {
    title: string;
    terms: string;
  };
  payback?: string;
}

export interface AdBanner {
  title: string;
  descrition: string;
  link: string;
}
