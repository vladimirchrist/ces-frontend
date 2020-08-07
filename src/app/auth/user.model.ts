export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;

    roles?: string[];
    isAdmin?: User;
    authenticationToken?: string;
    refreshToken?: string;
    expiresAt?: Date;
}
