import type { Schema, Struct } from '@strapi/strapi';

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
      'blocks.text': BlocksText;
    }
  }
}
