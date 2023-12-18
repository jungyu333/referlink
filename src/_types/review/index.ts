import { ApiBaseResponse } from '_types/common';

export interface GetSurveyListApiResponse extends ApiBaseResponse {
  data: Survey;
}

export interface Survey {
  id: number;
  createdAt: string;
  updatedAt: string;
  surveyItems: SurveyItem[];
}

export interface SurveyItem {
  category: string;
  createdAt: string;
  id: number;
  priority: number;
  question: string;
  surveyId: number;
  tendency1: string;
  tendency2: string;
  version: string;
}
