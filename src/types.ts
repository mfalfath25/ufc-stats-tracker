interface Category {
  id: string;
  name: string;
  weight_classes: WeightClass[];
}

interface WeightClass {
  description: string;
  competitor: Competitor;
}

interface Competitor {
  id: string;
  name: string;
  abbreviation: string;
  ageGroup: string;
  country: string;
  countryCode: string;
  gender: string;
  qualifier: Qualifier;
  virtual: boolean;
}

interface Qualifier {
  value: string;
}

export interface Champions {
  categories: Category[];
  generatedAt: string;
}

interface CompetitorRanking {
  competitor: Competitor;
  movement: number;
  rank: number;
}

interface Ranking {
  competitor_rankings: CompetitorRanking[];
  gender: string;
  name: string;
  type_id: number;
  week: number;
  year: number;
}

export interface Rankings {
  generated_at: string;
  rankings: Ranking[];
}

interface Competition {
  id: string;
  name: string;
  parent_id?: string;
  category: {
    id: string;
    name: string;
  },
}

export interface Competitions {
  competitions: Competition[];
  generated_at: string
}

interface Season {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  year: string;
  competition_id: string;
}

export interface Seasons {
  generated_at: string;
  seasons: Season[];
}