// interface Category {
//   id: string;
//   name: string;
//   weight_classes: WeightClass[];
// }

// interface WeightClass {
//   description: string;
//   competitor: Competitor;
// }

interface Competitor {
  id?: string;
  name?: string;
  abbreviation?: string;
  ageGroup?: string;
  country?: string;
  countryCode?: string;
  gender?: string;
  qualifier?: Qualifier;
  virtual?: boolean;
}

interface Qualifier {
  value: string;
}

export interface Champions {
  categories: Category[];
  generatedAt: string;
}

interface CompetitorRanking {
  rank: number;
  movement: number;
  competitor: Competitor;
}

interface Ranking {
  type_id: number;
  name: string;
  year: number;
  week: number;
  competitor_rankings: CompetitorRanking[];
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
  id?: string;
  name?: string;
  start_date?: string;
  end_date?: string;
  year?: string;
  competition_id?: string;
}

export interface Seasons {
  generated_at: string;
  seasons: Season[];
}

export interface SeasonDetails {
  generated_at: string;
  summaries: Summary[];
};

interface Summary {
  sport_event: SportEvent;
  sport_event_status: SportEventStatus;
};

interface SportEvent {
  id: string;
  start_time: string;
  start_time_confirmed: boolean;
  sport_event_context: SportEventContext;
  coverage: Coverage;
  competitors: Competitor[];
  venue: Venue;
};

interface SportEventContext {
  sport: Sport;
  category: Category;
  competition: Competition;
  season: Season;
  stage: Stage;
};

interface Sport {
  id: string;
  name: string;
};

interface Category {
  id: string;
  name: string;
};

interface Competition {
  id: string;
  name: string;
};

interface Stage {
  type: string;
};

interface Coverage {
  live: boolean;
  type: string;
};

interface Venue {
  id: string;
  name: string;
  capacity: number;
  city_name: string;
  country_name: string;
  map_coordinates: string;
  country_code: string;
  timezone: string;
  state: string;
};

interface SportEventStatus {
  status?: string;
  scheduled_length?: number;
  weight_class?: string;
  title_fight?: boolean;
  main_event?: boolean;
  match_status?: string,
  winner_id?: string,
  final_round?: number,
  final_round_length?: string,
  method?: string,
  winner?: string
};

// interface Statistics {

// }