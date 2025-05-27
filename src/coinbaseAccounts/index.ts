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
  GenerateAddressRequest,
  GenerateAddressResponse,
  ListWalletsRequest,
  ListWalletsResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface ICoinbaseAccountsService {
  generateAddress(
    request: GenerateAddressRequest
  ): Promise<GenerateAddressResponse>;
  listWallets(request: ListWalletsRequest): Promise<ListWalletsResponse>;
}

export class CoinbaseAccountsService implements ICoinbaseAccountsService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async generateAddress(
    request: GenerateAddressRequest,
    options?: CoinbaseCallOptions
  ): Promise<GenerateAddressResponse> {
    const response = await this.client.request({
      url: `coinbase-accounts/${request.accountId}/addresses`,
      bodyParams: request,
      method: Method.POST,
      callOptions: options,
    });

    return response.data as GenerateAddressResponse;
  }

  async listWallets(
    request: ListWalletsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListWalletsResponse> {
    const response = await this.client.request({
      url: `coinbase-accounts`,
      callOptions: options,
    });

    return response.data as ListWalletsResponse;
  }
}
