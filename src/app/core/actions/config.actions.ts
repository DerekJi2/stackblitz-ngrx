import { Action } from '@ngrx/store';

import { IConfig } from '../../shared/models/config.interface';

export enum EConfigActions {
  GetConfigs = '[Config] Get configs',
  GetConfigsSuccess = '[Config] Get configs success',
  GetConfig = '[Config] Get config',
  GetConfigSuccess = '[Config] Get config success',
}

export class GetConfig implements Action {
  public readonly type = EConfigActions.GetConfig;
  constructor(public payload: number) {}
}

export class GetConfigSuccess implements Action {
  public readonly type = EConfigActions.GetConfigSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigActions = 
    | GetConfig
    | GetConfigSuccess;
