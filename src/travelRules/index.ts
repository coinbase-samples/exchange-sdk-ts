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
  ListTravelRulesRequest,
  ListTravelRulesResponse,
  CreateTravelRuleEntryRequest,
  CreateTravelRuleEntryResponse,
  DeleteTravelRuleEntryRequest,
  DeleteTravelRuleEntryResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface ITravelRulesService {
  listTravelRules(
    request: ListTravelRulesRequest
  ): Promise<ListTravelRulesResponse>;
  createTravelRuleEntry(
    request: CreateTravelRuleEntryRequest
  ): Promise<CreateTravelRuleEntryResponse>;
  deleteTravelRuleEntry(
    request: DeleteTravelRuleEntryRequest
  ): Promise<DeleteTravelRuleEntryResponse>;
}

export class TravelRulesService implements ITravelRulesService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listTravelRules(
    request: ListTravelRulesRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListTravelRulesResponse> {
    const response = await this.client.request({
      url: `travel-rules`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListTravelRulesResponse;
  }

  async createTravelRuleEntry(
    request: CreateTravelRuleEntryRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateTravelRuleEntryResponse> {
    const response = await this.client.request({
      url: `travel-rules`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateTravelRuleEntryResponse;
  }

  async deleteTravelRuleEntry(
    request: DeleteTravelRuleEntryRequest,
    options?: CoinbaseCallOptions
  ): Promise<DeleteTravelRuleEntryResponse> {
    const response = await this.client.request({
      url: `travel-rules/${request.id}`,
      method: Method.DELETE,
      callOptions: options,
    });

    return response.data as DeleteTravelRuleEntryResponse;
  }
}
