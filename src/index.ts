/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { CoinbaseExchangeClient } from './client';
export { CoinbaseExchangeCredentials } from './credentials';
export { AccountsService, IAccountsService } from './accounts';
export { AddressBookService, IAddressBookService } from './addressbook';
export {
  CoinbaseAccountsService,
  ICoinbaseAccountsService,
} from './coinbaseAccounts';
export { ConversionsService, IConversionsService } from './conversions';
export { CurrenciesService, ICurrenciesService } from './currencies';
export { FeesService, IFeesService } from './fees';
export { FuturesService, IFuturesService } from './futures';
export { LoansService, ILoansService } from './loans';
export { OrdersService, IOrdersService } from './orders';
export { ProductsService, IProductsService } from './products';
export { ProfilesService, IProfilesService } from './profiles';
export { ReportsService, IReportsService } from './reports';
export { TransfersService, ITransfersService } from './transfers';
export { TravelRulesService, ITravelRulesService } from './travelRules';
export { UsersService, IUsersService } from './users';
export { WrappedAssetsService, IWrappedAssetsService } from './wrappedAssets';

export type * from './model';
export type * from './model/enums';

export type {
  GetAccountRequest,
  GetAccountResponse,
  GetAccountHoldsRequest,
  GetAccountHoldsResponse,
  GetAccountLedgerRequest,
  GetAccountLedgerResponse,
  GetAccountTransfersRequest,
  GetAccountTransfersResponse,
  ListAccountsRequest,
  ListAccountsResponse,
} from './accounts/types';
export type {
  GetAddressBookRequest,
  GetAddressBookResponse,
  AddAddressesRequest,
  AddAddressesResponse,
  DeleteAddressRequest,
  DeleteAddressResponse,
} from './addressbook/types';
export type {
  GenerateAddressRequest,
  GenerateAddressResponse,
  ListWalletsRequest,
  ListWalletsResponse,
} from './coinbaseAccounts/types';
export type {
  GetConversionFeeRatesRequest,
  GetConversionFeeRatesResponse,
  GetConversionRequest,
  GetConversionResponse,
  ListConversionsRequest,
  ListConversionsResponse,
  CreateConversionRequest,
  CreateConversionResponse,
} from './conversions/types';
export type {
  GetCurrencyRequest,
  GetCurrencyResponse,
  ListCurrenciesRequest,
  ListCurrenciesResponse,
} from './currencies/types';
export type { GetFeesRequest, GetFeesResponse } from './fees/types';
export type {
  GetAutoLoanSettingRequest,
  GetAutoLoanSettingResponse,
  GetUSDCConversionRequest,
  GetUSDCConversionResponse,
  UpdateAutoLoanSettingRequest,
  UpdateAutoLoanSettingResponse,
  UpdateUSDCConversionRequest,
  UpdateUSDCConversionResponse,
} from './futures/types';
export type {
  ListInterestChargesRequest,
  ListInterestChargesResponse,
  ListInterestRateHistoryRequest,
  ListInterestRateHistoryResponse,
  ListInterestSummariesRequest,
  ListInterestSummariesResponse,
  ListLoanAssetsRequest,
  ListLoanAssetsResponse,
  ListLoansRequest,
  ListLoansResponse,
  ListNewLoanOptionsRequest,
  ListNewLoanOptionsResponse,
  GetLendingOverviewRequest,
  GetLendingOverviewResponse,
  GetNewLoanPreviewRequest,
  GetNewLoanPreviewResponse,
  GetPrincipalRepaymentPreviewRequest,
  GetPrincipalRepaymentPreviewResponse,
  CreateNewLoanRequest,
  CreateNewLoanResponse,
  CreateRepayLoanInterestRequest,
  CreateRepayLoanInterestResponse,
  CreateRepayLoanPrincipalRequest,
  CreateRepayLoanPrincipalResponse,
} from './loans/types';
export type {
  ListOrderFillsRequest,
  ListOrderFillsResponse,
  ListOrdersRequest,
  ListOrdersResponse,
  GetOrderRequest,
  GetOrderResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  CancelOrderRequest,
  CancelOrderResponse,
  CancelAllOrdersRequest,
  CancelAllOrdersResponse,
} from './orders/types';
export type {
  ListProductTradesRequest,
  ListProductTradesResponse,
  ListProductVolumesRequest,
  ListProductVolumesResponse,
  ListTradingPairsRequest,
  ListTradingPairsResponse,
  GetProductBookRequest,
  GetProductBookResponse,
  GetProductRequest,
  GetProductResponse,
  GetProductStatsRequest,
  GetProductStatsResponse,
  GetProductTickerRequest,
  GetProductTickerResponse,
  GetProductCandlesRequest,
  GetProductCandlesResponse,
} from './products/types';
export type {
  ListProfilesRequest,
  ListProfilesResponse,
  GetProfileRequest,
  GetProfilesResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  DeactivateProfileRequest,
  DeactivateProfileResponse,
} from './profiles/types';
export type {
  GetReportRequest,
  GetReportResponse,
  ListReportsRequest,
  ListReportsResponse,
  CreateReportRequest,
  CreateReportResponse,
} from './reports/types';
export type {
  ListTravelRulesRequest,
  ListTravelRulesResponse,
  CreateTravelRuleEntryRequest,
  CreateTravelRuleEntryResponse,
  DeleteTravelRuleEntryRequest,
  DeleteTravelRuleEntryResponse,
} from './travelRules/types';
export type {
  ListPaymentMethodsRequest,
  ListPaymentMethodsResponse,
  ListTransfersRequest,
  ListTransfersResponse,
  GetTransferRequest,
  GetTransferResponse,
  GetFeeEstimateForWithdrawalRequest,
  GetFeeEstimateForWithdrawalResponse,
  CreateDepositFromCoinbaseRequest,
  CreateDepositFromCoinbaseResponse,
  CreateDepositFromPaymentMethodRequest,
  CreateDepositFromPaymentMethodResponse,
  CreateWithdrawalToCoinbaseRequest,
  CreateWithdrawalToCoinbaseResponse,
  CreateWithdrawalToPaymentMethodRequest,
  CreateWithdrawalToPaymentMethodResponse,
  CreateWithdrawalToCryptoAddressRequest,
  CreateWithdrawalToCryptoAddressResponse,
  CreateTravelRuleInformationRequest,
  CreateTravelRuleInformationResponse,
} from './transfers/types';
export type {
  GetExchangeLimitsRequest,
  GetExchangeLimitsResponse,
  GetTradingVolumeRequest,
  GetTradingVolumeResponse,
  UpdateSettlementPreferenceRequest,
  UpdateSettlementPreferenceResponse,
} from './users/types';
export type {
  ListRedeemsRequest,
  ListRedeemsResponse,
  ListStakeWrapsRequest,
  ListStakeWrapsResponse,
  ListWrappedAssetsRequest,
  ListWrappedAssetsResponse,
  GetWrappedAssetRequest,
  GetWrappedAssetResponse,
  GetConversionRateRequest,
  GetConversionRateResponse,
  GetRedeemRequest,
  GetRedeemResponse,
  GetStakeWrapRequest,
  GetStakeWrapResponse,
  CreateRedeemRequest,
  CreateRedeemResponse,
  CreateStakeWrapRequest,
  CreateStakeWrapResponse,
} from './wrappedAssets/types';
