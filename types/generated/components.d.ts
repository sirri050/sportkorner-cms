import type { Schema, Struct } from '@strapi/strapi';

export interface GalleryGallery extends Struct.ComponentSchema {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']>;
    title: Schema.Attribute.String;
  };
}

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    caption: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

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

export interface ParagraphParagraph extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface QuoteQuote extends Struct.ComponentSchema {
  collectionName: 'components_quote_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Blocks;
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

export interface VideoVideo extends Struct.ComponentSchema {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    URL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'gallery.gallery': GalleryGallery;
      'heading.heading': HeadingHeading;
      'image.image': ImageImage;
      'matches.matches': MatchesMatches;
      'paragraph.paragraph': ParagraphParagraph;
      'quote.quote': QuoteQuote;
      'standings.standings': StandingsStandings;
      'team.team': TeamTeam;
      'video.video': VideoVideo;
    }
  }
}
