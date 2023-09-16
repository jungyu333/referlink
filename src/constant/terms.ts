export const signUpTerms: {
  id: number;
  option: 'required' | 'optional';
  text: string;
}[] = [
  { id: 0, option: 'required', text: '서비스 이용 약관' },
  { id: 1, option: 'required', text: '개인정보 수집 및 이용' },
  { id: 2, option: 'required', text: '제3자 정보제공 동의' },
  { id: 3, option: 'optional', text: '광고성 정보 수신' },
];
