import { ApiResponse, Auth, City, Languages, LoginResponse, State } from "@/auth/models";

export const AuthAdapter = (response: LoginResponse): string => response.token;
export const RegisterAdapter = (response: Auth): string => response.token;

export const stateAdapter = (response: ApiResponse): State[] => response.data;
export const cityAdapter = (response: ApiResponse): City[] => response.data;
export const languagesAdapter = (response: ApiResponse): Languages[] => response.data;
