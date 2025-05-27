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
  GetExchangeLimitsRequest,
  GetExchangeLimitsResponse,
  GetTradingVolumeRequest,
  GetTradingVolumeResponse,
  UpdateSettlementPreferenceRequest,
  UpdateSettlementPreferenceResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IUsersService {
  getExchangeLimits(
    request: GetExchangeLimitsRequest
  ): Promise<GetExchangeLimitsResponse>;
  getTradingVolume(
    request: GetTradingVolumeRequest
  ): Promise<GetTradingVolumeResponse>;
  updateSettlementPreference(
    request: UpdateSettlementPreferenceRequest
  ): Promise<UpdateSettlementPreferenceResponse>;
}

export class UsersService implements IUsersService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async getExchangeLimits(
    request: GetExchangeLimitsRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetExchangeLimitsResponse> {
    const response = await this.client.request({
      url: `users/${request.userId}/exchange-limits`,
      callOptions: options,
    });

    return response.data as GetExchangeLimitsResponse;
  }

  async getTradingVolume(
    request: GetTradingVolumeRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetTradingVolumeResponse> {
    const response = await this.client.request({
      url: `users/${request.userId}/trading-volumes`,
      callOptions: options,
    });

    return response.data as GetTradingVolumeResponse;
  }

  async updateSettlementPreference(
    request: UpdateSettlementPreferenceRequest,
    options?: CoinbaseCallOptions
  ): Promise<UpdateSettlementPreferenceResponse> {
    const response = await this.client.request({
      url: `users/${request.userId}/settlement-preferences`,
      bodyParams: request,
      method: Method.POST,
      callOptions: options,
    });

    return response.data as UpdateSettlementPreferenceResponse;
  }
}
