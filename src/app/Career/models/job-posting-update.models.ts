import { JobPostingCategory } from "./job-posting-Category.models";

export interface JobPostingUpdate {
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
    jobcategories: string[];
  }