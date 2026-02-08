export const API_BASE_URL = 'https://usmanameen-physical-ai-docusaurus-backend.hf.space';

export const getApiUrl = (path: string) => {
  return `${API_BASE_URL}${path}`;
};