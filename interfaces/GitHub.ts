export interface GitHubData {
  id: number;
  name: string;
  html_url: string;
  description: string;
  pushed_at: Date | string;
  language: string;
  topics?: Array<string>;
}
