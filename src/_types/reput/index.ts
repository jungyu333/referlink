import { ApiBaseResponse } from '_types/common';

export interface WriteReviewFormData {
  name: string;
  email: string;
  companyName: string;
  role: string;
  prosAndCons: string;
}

export interface RequestReputationFormData {
  company: string;
  writerName: string;
  writerRole: string;
  writerEmail: string;
  writerCompany: string;
  role: string;
}

export interface GetMyReviewListApiResponse extends ApiBaseResponse {
  data: MyReviewItem[];
}

export interface Information {
  id: number;
  label: string;
  content: string;
}

export interface MyReviewItem {
  career: string;
  companyName: string;
  createdAt: string;
  deletedAt: string | null;
  email: string;
  id: number;
  isVisible: boolean;
  isVisibleDt: null | string;
  name: string;
  openComment: string;
  role: string;
  surveyId: number;
  targetId: number;
  updatedAt: string;
  writerId: number;
}

export interface WriteReviewRequestFormData {
  email: string;
  companyName: string;
  isVisible: number;
  name: string;
  openComment: string;
  role: string;
  surveyId: string;
  reviewItems: { surveyItemId: string; answer: string }[];
  targetId: string;
  wirterId: string;
}
