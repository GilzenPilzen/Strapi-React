import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksMediaText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media_texts';
  info: {
    displayName: 'Media - Text';
  };
  attributes: {
    Body: Schema.Attribute.Blocks;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface BlocksText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
    icon: 'pencil';
  };
  attributes: {
    Body: Schema.Attribute.Blocks;
    Check: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.media-text': BlocksMediaText;
      'blocks.text': BlocksText;
    }
  }
}
