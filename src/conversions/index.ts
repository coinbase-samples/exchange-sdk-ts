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
  GetConversionFeeRatesRequest,
  GetConversionFeeRatesResponse,
  GetConversionRequest,
  GetConversionResponse,
  ListConversionsRequest,
  ListConversionsResponse,
  CreateConversionRequest,
  CreateConversionResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IConversionsService {
  listConversions(
    request: ListConversionsRequest
  ): Promise<ListConversionsResponse>;
  getConversion(request: GetConversionRequest): Promise<GetConversionResponse>;
  getConversionFeeRates(
    request: GetConversionFeeRatesRequest
  ): Promise<GetConversionFeeRatesResponse>;
  createConversion(
    request: CreateConversionRequest
  ): Promise<CreateConversionResponse>;
}

export class ConversionsService implements IConversionsService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listConversions(
    request: ListConversionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListConversionsResponse> {
    const response = await this.client.request({
      url: `conversions`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListConversionsResponse;
  }

  async getConversion(
    request: GetConversionRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetConversionResponse> {
    const queryParams = {
      ...request,
      conversionId: undefined,
    };
    const response = await this.client.request({
      url: `conversions/${request.conversionId}`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetConversionResponse;
  }

  async getConversionFeeRates(
    request: GetConversionFeeRatesRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetConversionFeeRatesResponse> {
    const response = await this.client.request({
      url: `/conversions/fees`,
      callOptions: options,
    });

    return response.data as GetConversionFeeRatesResponse;
  }

  async createConversion(
    request: CreateConversionRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateConversionResponse> {
    const response = await this.client.request({
      url: `conversions`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateConversionResponse;
  }
}
