export interface IApiResponse {
  result: boolean;
  errCode?: number;
  message?: string;
}

export interface ApiBaseResponse {
  message: string;
  statusCode: number;
}

// Footer email input form data
export interface IFooterFormData {
  email: string;
}
