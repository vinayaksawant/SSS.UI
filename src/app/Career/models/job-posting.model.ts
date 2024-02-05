//import { Category } from "../../category/models/category.model";

import { JobPostingCategory } from "./job-posting-Category.models";

export interface JobPosting {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  urlHandle: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
  jobCategories: JobPostingCategory[];
}