import { ApiResponse, City, Framework, Languages, LoginResponse, State } from "@/auth/models";

export const AuthAdapter = (response: LoginResponse): string => response.token;
export const RegisterAdapter = (response: LoginResponse): string => response.token;

export const stateAdapter = (response: ApiResponse): State[] => response.data;
export const cityAdapter = (response: ApiResponse): City[] => response.data;
export const languagesAdapter = (response: ApiResponse): Languages[] => response.data;
export const frameworksAdapter = (response: ApiResponse): Framework[] => response.data;
