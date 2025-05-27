import { Brand } from '../shared/brand';
import {
  FeeEstimateResult,
  PaymentMethod,
  Transfer,
  TransferResult,
} from '../model';
import { TransferType } from 'src/model/enums';
import {
  PostDepositCoinbaseAccountResponse,
  PostDepositPaymentMethodResponse,
  PostTransferTravelRuleRequest,
  PostTransferTravelRuleResponse,
  PostWithdrawCoinbaseAccountResponse,
  PostWithdrawPaymentMethodResponse,
  PublicPostDepositCoinbaseAccountRequest,
  PublicPostDepositPaymentMethodRequest,
  PublicPostTransferCryptoRequest,
  PublicPostWithdrawPaymentMethodRequest,
} from '../model/internal';

export type ListPaymentMethodsRequest = Record<string, never>;
export type ListPaymentMethodsResponse = Brand<
  PaymentMethod[],
  'ListPaymentMethodsResponse'
>;

export type ListTransfersRequest = {
  profileId?: string;
  before?: string;
  after?: string;
  limit?: number;
  // Specifies deposit and withdrawal transfer types. Internal transfers represent the transfers of a user depositing/withdrawing across their own profiles.
  type?: TransferType;
  // Filter results by type of currency. Possible values: [crypto, fiat]
  currencyType?: string;
  // Filter results by reason of transfer. Possible values: [usdc_reward]
  transferReason?: string;
  // Filter results by currency.
  currency?: string;
};
export type ListTransfersResponse = Brand<Transfer[], 'ListTransfersResponse'>;

export type GetTransferRequest = {
  transferId: string;
};
export type GetTransferResponse = Brand<Transfer, 'GetTransferResponse'>;

export type GetFeeEstimateForWithdrawalRequest = {
  currency: string;
  cryptoAddress: string;
  network: string;
};
export type GetFeeEstimateForWithdrawalResponse = Brand<
  FeeEstimateResult,
  'GetFeeEstimateForWithdrawalResponse'
>;

export type CreateDepositFromCoinbaseRequest = Brand<
  PublicPostDepositCoinbaseAccountRequest,
  'CreateDepositFromCoinbaseRequest'
>;
export type CreateDepositFromCoinbaseResponse = Brand<
  PostDepositCoinbaseAccountResponse,
  'CreateDepositFromCoinbaseResponse'
>;

export type CreateDepositFromPaymentMethodRequest = Brand<
  PublicPostDepositPaymentMethodRequest,
  'CreateDepositFromPaymentMethodRequest'
>;
export type CreateDepositFromPaymentMethodResponse = Brand<
  PostDepositPaymentMethodResponse,
  'CreateDepositFromPaymentMethodResponse'
>;

export type CreateWithdrawalToCoinbaseRequest = Brand<
  PublicPostWithdrawPaymentMethodRequest,
  'CreateWithdrawalToCoinbaseRequest'
>;
export type CreateWithdrawalToCoinbaseResponse = Brand<
  PostWithdrawCoinbaseAccountResponse,
  'CreateWithdrawalToCoinbaseResponse'
>;

export type CreateWithdrawalToPaymentMethodRequest = Brand<
  PublicPostWithdrawPaymentMethodRequest,
  'CreateWithdrawalToPaymentMethodRequest'
>;
export type CreateWithdrawalToPaymentMethodResponse = Brand<
  PostWithdrawPaymentMethodResponse,
  'CreateWithdrawalToPaymentMethodResponse'
>;

export type CreateWithdrawalToCryptoAddressRequest = Brand<
  PublicPostTransferCryptoRequest,
  'CreateWithdrawalToCryptoAddressRequest'
>;
export type CreateWithdrawalToCryptoAddressResponse = Brand<
  TransferResult,
  'CreateWithdrawalToCryptoAddressResponse'
>;

export type CreateTravelRuleInformationRequest =
  PostTransferTravelRuleRequest & {
    transferId: string;
  };
export type CreateTravelRuleInformationResponse = Brand<
  PostTransferTravelRuleResponse,
  'CreateTravelRuleInformationResponse'
>;
