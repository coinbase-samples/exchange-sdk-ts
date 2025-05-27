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
} from './types';
import { CoinbaseCallOptions } from '@coinbase-sample/core-ts';

export interface IAccountsService {
  listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse>;
  getAccount(request: GetAccountRequest): Promise<GetAccountResponse>;
  getAccountHolds(
    request: GetAccountHoldsRequest
  ): Promise<GetAccountHoldsResponse>;
  getAccountLedger(
    request: GetAccountLedgerRequest
  ): Promise<GetAccountLedgerResponse>;
  getAccountTransfers(
    request: GetAccountTransfersRequest
  ): Promise<GetAccountTransfersResponse>;
}

export class AccountsService implements IAccountsService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listAccounts(
    request: ListAccountsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListAccountsResponse> {
    const response = await this.client.request({
      url: `accounts`,
      callOptions: options,
    });

    return response.data as ListAccountsResponse;
  }

  async getAccount(
    request: GetAccountRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetAccountResponse> {
    const response = await this.client.request({
      url: `accounts/${request.accountId}`,
      callOptions: options,
    });

    return response.data as GetAccountResponse;
  }

  async getAccountHolds(
    request: GetAccountHoldsRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetAccountHoldsResponse> {
    const response = await this.client.request({
      url: `accounts/${request.accountId}/holds`,
      callOptions: options,
    });

    return response.data as GetAccountHoldsResponse;
  }

  async getAccountLedger(
    request: GetAccountLedgerRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetAccountLedgerResponse> {
    const queryParams = { ...request, accountId: undefined };
    const response = await this.client.request({
      url: `accounts/${request.accountId}/ledger`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetAccountLedgerResponse;
  }

  async getAccountTransfers(
    request: GetAccountTransfersRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetAccountTransfersResponse> {
    const response = await this.client.request({
      url: `accounts/${request.accountId}/transfers`,
      callOptions: options,
    });

    return response.data as GetAccountTransfersResponse;
  }
}
