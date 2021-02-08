import { makeAutoObservable } from "mobx";
import { RoleEnum } from "../shared/enums";

export class SessionStore {
  constructor() {
    makeAutoObservable(this);
  }

  firstName?: string;

  lastName?: string;

  email?: string;

  picture?: string;

  role!: RoleEnum;

  active?: boolean;

  token?: string;

  isAuthenticated: boolean = false;

  setAsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }
}
