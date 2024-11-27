import type { Schema, Struct } from '@strapi/strapi';

export interface CourseCategory extends Struct.ComponentSchema {
  collectionName: 'components_course_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'course.category': CourseCategory;
    }
  }
}
