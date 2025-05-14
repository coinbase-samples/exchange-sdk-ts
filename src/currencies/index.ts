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
  ListCurrenciesRequest,
  ListCurrenciesResponse,
  GetCurrencyRequest,
  GetCurrencyResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface ICurrenciesService {
  listCurrencies(
    request: ListCurrenciesRequest
  ): Promise<ListCurrenciesResponse>;
  getCurrency(request: GetCurrencyRequest): Promise<GetCurrencyResponse>;
}

export class CurrenciesService implements ICurrenciesService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listCurrencies(
    request: ListCurrenciesRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListCurrenciesResponse> {
    const response = await this.client.request({
      url: `currencies`,
      callOptions: options,
    });

    return response.data as ListCurrenciesResponse;
  }

  async getCurrency(
    request: GetCurrencyRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetCurrencyResponse> {
    const response = await this.client.request({
      url: `currencies/${request.currencyId}`,
      callOptions: options,
    });

    return response.data as GetCurrencyResponse;
  }
}
