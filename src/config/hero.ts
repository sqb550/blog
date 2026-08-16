import defaultBackground from '../assets/blog-placeholder-1.webp';

/**
 * Hero copy and background settings for one page.
 */
export interface HeroSectionConfig {
  /**
   * Main hero headline text.
   */
  text: string;
  /**
   * Optional hero subtitle text.
   */
  subtitle?: string;
  /**
   * Hero background image URL.
   */
  backgroundImage: string;
}

/**
 * Centralized hero configuration for all top-level pages and post fallback.
 */
export interface HeroConfig {
  home: HeroSectionConfig;
  blog: HeroSectionConfig;
  tags: HeroSectionConfig;
  friends: HeroSectionConfig;
  about: HeroSectionConfig;
  /**
   * Default hero image shared by all article pages.
   */
  postDefaultBackground: string;
}

export const heroConfig: HeroConfig = {
  home: {
    text: "Welcome to sqb's blog",
    subtitle: '^ ^',
    backgroundImage: defaultBackground.src,
  },
  blog: {
    text: 'All Posts',
    subtitle: '',
    backgroundImage: defaultBackground.src,
  },
  tags: {
    text: 'Tags',
    subtitle: '',
    backgroundImage: defaultBackground.src,
  },
  friends: {
    text: 'Friends',
    backgroundImage: defaultBackground.src,
  },
  about: {
    text: 'About me',
    subtitle: '',
    backgroundImage: defaultBackground.src,
  },
  postDefaultBackground: defaultBackground.src,
};
