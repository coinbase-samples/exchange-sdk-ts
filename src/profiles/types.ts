import { Brand } from '../shared/brand';
import { Profile, TransferResult } from '../model';
import { PostProfileTransferRequest } from '../model/internal';

export type ListProfilesRequest = {
  active?: boolean;
};

export type ListProfilesResponse = Brand<Profile[], 'ListProfilesResponse'>;

export type GetProfileRequest = {
  profileId: string;
  active?: boolean;
};
export type GetProfilesResponse = Brand<Profile, 'GetProfilesResponse'>;

export type CreateProfileRequest = {
  name: string;
};
export type CreateProfileResponse = Brand<Profile, 'CreateProfileResponse'>;

export type CreateProfileTransferRequest = Brand<
  PostProfileTransferRequest,
  'CreateProfileTransferRequest'
>;
export type CreateProfileTransferResponse = Brand<
  TransferResult,
  'CreateProfileTransferResponse'
>;

export type UpdateProfileRequest = {
  profileId: string;
  name?: string;
};
export type UpdateProfileResponse = Brand<Profile, 'UpdateProfileResponse'>;

export type DeactivateProfileRequest = {
  profileId: string;
};
export type DeactivateProfileResponse = Record<string, never>;
