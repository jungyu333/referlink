export interface IApiResponse {
  result: boolean;
  errCode?: number;
  message?: string;
}

// Footer email input form data
export interface IFooterFormData {
  email: string;
}
