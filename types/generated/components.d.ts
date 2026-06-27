import type { Schema, Struct } from '@strapi/strapi';

export interface MatchesMatches extends Struct.ComponentSchema {
  collectionName: 'components_matches_matches';
  info: {
    displayName: 'matches';
    icon: 'walk';
  };
  attributes: {
    awayScore: Schema.Attribute.Integer;
    awayTeamName: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    homeScore: Schema.Attribute.Integer;
    homeTeamName: Schema.Attribute.String;
    match_status: Schema.Attribute.Enumeration<['finished', 'scheduled']>;
    stage: Schema.Attribute.String;
  };
}

export interface StandingsStandings extends Struct.ComponentSchema {
  collectionName: 'components_standings_standings';
  info: {
    displayName: 'standings';
    icon: 'apps';
  };
  attributes: {
    drawn: Schema.Attribute.Integer;
    goalDifference: Schema.Attribute.Integer;
    lost: Schema.Attribute.Integer;
    played: Schema.Attribute.Integer;
    points: Schema.Attribute.Integer;
    team: Schema.Attribute.Component<'team.team', false>;
    won: Schema.Attribute.Integer;
  };
}

export interface TeamTeam extends Struct.ComponentSchema {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'team';
    icon: 'alien';
  };
  attributes: {
    logoUrl: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'matches.matches': MatchesMatches;
      'standings.standings': StandingsStandings;
      'team.team': TeamTeam;
    }
  }
}
