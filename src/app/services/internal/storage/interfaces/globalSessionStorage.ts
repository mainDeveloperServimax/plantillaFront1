import {  UserDataAdmin } from './../../../../shared/DTOs/user.dto';
export interface IGlobalSessionStorage {
    user: UserDataAdmin;
    currentRole: number;
}