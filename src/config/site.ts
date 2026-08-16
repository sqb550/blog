/**
 * Site-level settings shared by header, SEO tags, and feed generation.
 */
export interface SiteConfig {
  /**
   * Canonical production URL of this site.
   */
  siteUrl: string;
  /**
   * Global site title used in header and metadata.
   */
  siteTitle: string;
  /**
   * Optional suffix appended to browser/SEO page titles.
   */
  siteTitleSuffix: string;
  /**
   * Default site description used by index and RSS metadata.
   */
  siteDescription: string;
  /**
   * BCP-47 locale tag (for example: zh-CN, en-US).
   */
  locale: string;
  /**
   * Repository URL shown in the header action area.
   */
  headerGithubRepoUrl: string;
  /**
   * Global favicon ico path served from the public directory.
   */
  faviconIco: string;
  /**
   * Site launch time used by the live uptime counter in the footer.
   */
  siteStartedAt: string;
}

export const siteConfig: SiteConfig = {
  siteUrl: 'https://sqbtt.cn',
  siteTitle: 'ulBo Astro Theme',
  siteTitleSuffix: '个人博客',
  siteDescription: 'A configurable Astro blog theme with centralized config and zero-content defaults.',
  locale: 'zh-CN',
  headerGithubRepoUrl: 'https://github.com/sqb550/blog',
  faviconIco: '/favicon.ico',
  siteStartedAt: '2026-08-16T00:00:00+08:00',
};

export const {
  siteUrl,
  siteTitle,
  siteTitleSuffix,
  siteDescription,
  locale,
  headerGithubRepoUrl,
  faviconIco,
  siteStartedAt,
} = siteConfig;
