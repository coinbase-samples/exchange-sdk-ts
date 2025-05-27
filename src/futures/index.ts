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
  GetAutoLoanSettingRequest,
  GetAutoLoanSettingResponse,
  GetUSDCConversionRequest,
  GetUSDCConversionResponse,
  UpdateAutoLoanSettingRequest,
  UpdateAutoLoanSettingResponse,
  UpdateUSDCConversionRequest,
  UpdateUSDCConversionResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IFuturesService {
  getAutoLoanSetting(
    request: GetAutoLoanSettingRequest
  ): Promise<GetAutoLoanSettingResponse>;
  getUSDCConversion(
    request: GetUSDCConversionRequest
  ): Promise<GetUSDCConversionResponse>;
  updateAutoLoanSetting(
    request: UpdateAutoLoanSettingRequest
  ): Promise<UpdateAutoLoanSettingResponse>;
  updateUSDCConversion(
    request: UpdateUSDCConversionRequest
  ): Promise<UpdateUSDCConversionResponse>;
}

export class FuturesService implements IFuturesService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async getAutoLoanSetting(
    request: GetAutoLoanSettingRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetAutoLoanSettingResponse> {
    const response = await this.client.request({
      url: `margin/auto-loan`,
      callOptions: options,
    });

    return response.data as GetAutoLoanSettingResponse;
  }

  async getUSDCConversion(
    request: GetUSDCConversionRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetUSDCConversionResponse> {
    const response = await this.client.request({
      url: `margin/usdc`,
      callOptions: options,
    });

    return response.data as GetUSDCConversionResponse;
  }

  async updateAutoLoanSetting(
    request: UpdateAutoLoanSettingRequest,
    options?: CoinbaseCallOptions
  ): Promise<UpdateAutoLoanSettingResponse> {
    const response = await this.client.request({
      url: `margin/auto-loan`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as UpdateAutoLoanSettingResponse;
  }

  async updateUSDCConversion(
    request: UpdateUSDCConversionRequest,
    options?: CoinbaseCallOptions
  ): Promise<UpdateUSDCConversionResponse> {
    const response = await this.client.request({
      url: `margin/usdc`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as UpdateUSDCConversionResponse;
  }
}
