import { ApiBaseResponse } from '_types/common';

export interface WriteReviewFormData {
  name: string;
  email: string;
  companyName: string;
  role: string;
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
  data: any;
}

export interface Information {
  id: number;
  label: string;
  content: string;
}
