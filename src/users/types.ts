import { Brand } from '../shared/brand';
import { UserExchangeTransferLimits } from '../model';
import {
  GetUserVolResponse,
  PostUserLevelSettlementPreferenceResponse,
  PostUserLevelSettlementPreferenceRequest,
} from '../model/internal';

export type GetExchangeLimitsRequest = {
  userId: string;
};

export type GetExchangeLimitsResponse = Brand<
  UserExchangeTransferLimits,
  'GetExchangeLimitsResponse'
>;

export type GetTradingVolumeRequest = {
  userId: string;
};
export type GetTradingVolumeResponse = Brand<
  GetUserVolResponse,
  'GetTradingVolumeResponse'
>;

export type UpdateSettlementPreferenceRequest = Brand<
  PostUserLevelSettlementPreferenceRequest,
  'UpdateSettlementPreferenceRequest'
>;

export type UpdateSettlementPreferenceResponse = Brand<
  PostUserLevelSettlementPreferenceResponse,
  'UpdateSettlementPreferenceResponse'
>;
