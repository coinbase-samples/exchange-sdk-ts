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
  ListReportsRequest,
  ListReportsResponse,
  GetReportRequest,
  GetReportResponse,
  CreateReportRequest,
  CreateReportResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IReportsService {
  listReports(request: ListReportsRequest): Promise<ListReportsResponse>;
  getReport(request: GetReportRequest): Promise<GetReportResponse>;
  createReport(request: CreateReportRequest): Promise<CreateReportResponse>;
}

export class ReportsService implements IReportsService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listReports(
    request: ListReportsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListReportsResponse> {
    const response = await this.client.request({
      url: `reports`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListReportsResponse;
  }

  async getReport(
    request: GetReportRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetReportResponse> {
    const response = await this.client.request({
      url: `reports/${request.reportId}`,
      callOptions: options,
    });

    return response.data as GetReportResponse;
  }

  async createReport(
    request: CreateReportRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateReportResponse> {
    const response = await this.client.request({
      url: `reports`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateReportResponse;
  }
}
