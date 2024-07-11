import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '07f557b8-1fa8-43ef-89bc-dc50f18d5ad3',
};

export const sampleWithPartialData: IAuthority = {
  name: 'dc086798-f4bc-4b34-befd-c1be08736294',
};

export const sampleWithFullData: IAuthority = {
  name: 'bec9125c-3e0d-4560-ac79-0b19f6764312',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
