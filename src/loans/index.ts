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
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface ILoansService {
  listInterestCharges(
    request: ListInterestChargesRequest
  ): Promise<ListInterestChargesResponse>;
  listInterestRateHistory(
    request: ListInterestRateHistoryRequest
  ): Promise<ListInterestRateHistoryResponse>;
  listInterestSummaries(
    request: ListInterestSummariesRequest
  ): Promise<ListInterestSummariesResponse>;
  listLoanAssets(
    request: ListLoanAssetsRequest
  ): Promise<ListLoanAssetsResponse>;
  listLoans(request: ListLoansRequest): Promise<ListLoansResponse>;
  listNewLoanOptions(
    request: ListNewLoanOptionsRequest
  ): Promise<ListNewLoanOptionsResponse>;
  getLendingOverview(
    request: GetLendingOverviewRequest
  ): Promise<GetLendingOverviewResponse>;
  getNewLoanPreview(
    request: GetNewLoanPreviewRequest
  ): Promise<GetNewLoanPreviewResponse>;
  getPrincipalRepaymentPreview(
    request: GetPrincipalRepaymentPreviewRequest
  ): Promise<GetPrincipalRepaymentPreviewResponse>;
  createNewLoan(request: CreateNewLoanRequest): Promise<CreateNewLoanResponse>;
  createRepayLoanInterest(
    request: CreateRepayLoanInterestRequest
  ): Promise<CreateRepayLoanInterestResponse>;
  createRepayLoanPrincipal(
    request: CreateRepayLoanPrincipalRequest
  ): Promise<CreateRepayLoanPrincipalResponse>;
}

export class LoansService implements ILoansService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listInterestCharges(
    request: ListInterestChargesRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListInterestChargesResponse> {
    const response = await this.client.request({
      url: `loans/${request.loanId}`,
      callOptions: options,
    });

    return response.data as ListInterestChargesResponse;
  }

  async listInterestRateHistory(
    request: ListInterestRateHistoryRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListInterestRateHistoryResponse> {
    const response = await this.client.request({
      url: `loans/interest/history/${request.loanId}`,
      callOptions: options,
    });

    return response.data as ListInterestRateHistoryResponse;
  }

  async listInterestSummaries(
    request: ListInterestSummariesRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListInterestSummariesResponse> {
    const response = await this.client.request({
      url: `loans/interest`,
      callOptions: options,
    });

    return response.data as ListInterestSummariesResponse;
  }

  async listLoanAssets(
    request: ListLoanAssetsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListLoanAssetsResponse> {
    const response = await this.client.request({
      url: `loans/assets`,
      callOptions: options,
    });

    return response.data as ListLoanAssetsResponse;
  }

  async listLoans(
    request: ListLoansRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListLoansResponse> {
    const response = await this.client.request({
      url: `loans`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListLoansResponse;
  }

  async listNewLoanOptions(
    request: ListNewLoanOptionsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListNewLoanOptionsResponse> {
    const response = await this.client.request({
      url: `loans/options`,
      callOptions: options,
    });

    return response.data as ListNewLoanOptionsResponse;
  }

  async getLendingOverview(
    request: GetLendingOverviewRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetLendingOverviewResponse> {
    const response = await this.client.request({
      url: `loans/lending-overview`,
      callOptions: options,
    });

    return response.data as GetLendingOverviewResponse;
  }

  async getNewLoanPreview(
    request: GetNewLoanPreviewRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetNewLoanPreviewResponse> {
    const response = await this.client.request({
      url: `loans/loan-preview`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetNewLoanPreviewResponse;
  }

  async getPrincipalRepaymentPreview(
    request: GetPrincipalRepaymentPreviewRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetPrincipalRepaymentPreviewResponse> {
    const response = await this.client.request({
      url: `loans/repayment-preview`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as GetPrincipalRepaymentPreviewResponse;
  }

  async createNewLoan(
    request: CreateNewLoanRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateNewLoanResponse> {
    const response = await this.client.request({
      url: `loans/open`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateNewLoanResponse;
  }

  async createRepayLoanInterest(
    request: CreateRepayLoanInterestRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateRepayLoanInterestResponse> {
    const response = await this.client.request({
      url: `loans/repay-interest`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateRepayLoanInterestResponse;
  }

  async createRepayLoanPrincipal(
    request: CreateRepayLoanPrincipalRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateRepayLoanPrincipalResponse> {
    const response = await this.client.request({
      url: `loans/repay-principal`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateRepayLoanPrincipalResponse;
  }
}
