export const BaseApiState = {
  INIT: 'INIT' as 'INIT',
  LOAD: 'LOAD' as 'LOAD',
  OK: 'OK' as 'OK',
  KO: 'KO' as 'KO',
};

export type BaseApiType = keyof typeof BaseApiState;
