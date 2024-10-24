import { LoginResponse } from "@/auth/models";

export const AuthAdapter = (response: LoginResponse): string => response.token;
