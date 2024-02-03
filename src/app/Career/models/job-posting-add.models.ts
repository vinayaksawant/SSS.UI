import { JobPostingCategory } from "./job-posting-Category.models";

export interface JobPostingAdd {
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
    jobcategories: JobPostingCategory[];
  }