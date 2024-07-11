import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 32089,
  login: 'rL2cv',
};

export const sampleWithPartialData: IUser = {
  id: 19097,
  login: 'Sr8S',
};

export const sampleWithFullData: IUser = {
  id: 13076,
  login: '=3v@erpv\\:pBMv5d',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
