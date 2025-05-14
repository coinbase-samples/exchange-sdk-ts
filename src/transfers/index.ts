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

import { CoinbaseExchangeClient } from 'src/client';
import {
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
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface ITransfersService {
  listPaymentMethods(
    request: ListPaymentMethodsRequest
  ): Promise<ListPaymentMethodsResponse>;
  listTransfers(request: ListTransfersRequest): Promise<ListTransfersResponse>;
  getTransfer(request: GetTransferRequest): Promise<GetTransferResponse>;
  getFeeEstimateForWithdrawal(
    request: GetFeeEstimateForWithdrawalRequest
  ): Promise<GetFeeEstimateForWithdrawalResponse>;
  createDepositFromCoinbase(
    request: CreateDepositFromCoinbaseRequest
  ): Promise<CreateDepositFromCoinbaseResponse>;
  createDepositFromPaymentMethod(
    request: CreateDepositFromPaymentMethodRequest
  ): Promise<CreateDepositFromPaymentMethodResponse>;
  createWithdrawalToCoinbase(
    request: CreateWithdrawalToCoinbaseRequest
  ): Promise<CreateWithdrawalToCoinbaseResponse>;
  createWithdrawalToPaymentMethod(
    request: CreateWithdrawalToPaymentMethodRequest
  ): Promise<CreateWithdrawalToPaymentMethodResponse>;
  createWithdrawalToCryptoAddress(
    request: CreateWithdrawalToCryptoAddressRequest
  ): Promise<CreateWithdrawalToCryptoAddressResponse>;
  createTravelRuleInformation(
    request: CreateTravelRuleInformationRequest
  ): Promise<CreateTravelRuleInformationResponse>;
}

export class TransfersService implements ITransfersService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listPaymentMethods(
    request: ListPaymentMethodsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListPaymentMethodsResponse> {
    const response = await this.client.request({
      url: `payment-methods`,
      callOptions: options,
    });

    return response.data as ListPaymentMethodsResponse;
  }

  async listTransfers(
    request: ListTransfersRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListTransfersResponse> {
    const response = await this.client.request({
      url: `transfers`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListTransfersResponse;
  }

  async getTransfer(
    request: GetTransferRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetTransferResponse> {
    const response = await this.client.request({
      url: `transfers/${request.transferId}`,
      callOptions: options,
    });

    return response.data as GetTransferResponse;
  }

  async getFeeEstimateForWithdrawal(
    request: GetFeeEstimateForWithdrawalRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetFeeEstimateForWithdrawalResponse> {
    const response = await this.client.request({
      url: `withdrawals/fee-estimate`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetFeeEstimateForWithdrawalResponse;
  }

  async createDepositFromCoinbase(
    request: CreateDepositFromCoinbaseRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateDepositFromCoinbaseResponse> {
    const response = await this.client.request({
      url: `deposits/coinbase-account`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateDepositFromCoinbaseResponse;
  }

  async createDepositFromPaymentMethod(
    request: CreateDepositFromPaymentMethodRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateDepositFromPaymentMethodResponse> {
    const response = await this.client.request({
      url: `deposits/payment-method`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateDepositFromPaymentMethodResponse;
  }

  async createWithdrawalToCoinbase(
    request: CreateWithdrawalToCoinbaseRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateWithdrawalToCoinbaseResponse> {
    const response = await this.client.request({
      url: `withdrawals/coinbase-account`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateWithdrawalToCoinbaseResponse;
  }

  async createWithdrawalToPaymentMethod(
    request: CreateWithdrawalToPaymentMethodRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateWithdrawalToPaymentMethodResponse> {
    const response = await this.client.request({
      url: `withdrawals/payment-method`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateWithdrawalToPaymentMethodResponse;
  }

  async createWithdrawalToCryptoAddress(
    request: CreateWithdrawalToCryptoAddressRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateWithdrawalToCryptoAddressResponse> {
    const response = await this.client.request({
      url: `withdrawals/crypto`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateWithdrawalToCryptoAddressResponse;
  }

  async createTravelRuleInformation(
    request: CreateTravelRuleInformationRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateTravelRuleInformationResponse> {
    const response = await this.client.request({
      url: `transfers/${request.transferId}/travel-rules`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateTravelRuleInformationResponse;
  }
}
