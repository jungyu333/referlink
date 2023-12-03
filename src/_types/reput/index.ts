import { ApiBaseResponse } from '_types/common';

export interface IWriteReputationFormData {
  name: string;
  email: string;
  company: string;
  job: string;
  career: string;
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
