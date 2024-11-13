import {ApiResponse, Auth, City, LoginResponse, State} from "@/auth/models";

export const AuthAdapter = (response: LoginResponse): string => response.token;
export const RegisterAdapter = (response: Auth): string => response.token;

export const stateAdapter = (response: ApiResponse): State[] => response.data;
export const cityAdapter = (response: ApiResponse): City[] => response.data;
