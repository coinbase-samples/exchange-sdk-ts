import { Brand } from '../shared/brand';
import {
  GetFcmAutoLoanResponse,
  GetFcmUsdcMarginResponse,
} from 'src/model/internal';

export type GetAutoLoanSettingRequest = Record<string, never>;
export type GetAutoLoanSettingResponse = Brand<
  GetFcmAutoLoanResponse,
  'GetAutoLoanSettingResponse'
>;

export type GetUSDCConversionRequest = Record<string, never>;
export type GetUSDCConversionResponse = Brand<
  GetFcmUsdcMarginResponse,
  'GetUSDCConversionResponse'
>;

export type UpdateAutoLoanSettingRequest = {
  autoLoan: boolean;
};
export type UpdateAutoLoanSettingResponse = Brand<
  GetFcmAutoLoanResponse,
  'UpdateAutoLoanSettingResponse'
>;

export type UpdateUSDCConversionRequest = {
  enabled: boolean;
};
export type UpdateUSDCConversionResponse = Brand<
  GetFcmUsdcMarginResponse,
  'UpdateUSDCConversionResponse'
>;
