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
  ListOrderFillsRequest,
  ListOrderFillsResponse,
  ListOrdersRequest,
  ListOrdersResponse,
  GetOrderRequest,
  GetOrderResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  CancelOrderRequest,
  CancelOrderResponse,
  CancelAllOrdersRequest,
  CancelAllOrdersResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IOrdersService {
  listOrders(request: ListOrdersRequest): Promise<ListOrdersResponse>;
  listOrderFilles(
    request: ListOrderFillsRequest
  ): Promise<ListOrderFillsResponse>;
  getOrder(request: GetOrderRequest): Promise<GetOrderResponse>;
  createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse>;
  cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse>;
  cancelAllOrders(
    request: CancelAllOrdersRequest
  ): Promise<CancelAllOrdersResponse>;
}

export class OrdersService implements IOrdersService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listOrders(
    request: ListOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListOrdersResponse> {
    const response = await this.client.request({
      url: `orders`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListOrdersResponse;
  }

  async listOrderFilles(
    request: ListOrderFillsRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListOrderFillsResponse> {
    const response = await this.client.request({
      url: `fills`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListOrderFillsResponse;
  }
  async getOrder(
    request: GetOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetOrderResponse> {
    const response = await this.client.request({
      url: `orders/${request.orderId}`,
      callOptions: options,
    });

    return response.data as GetOrderResponse;
  }

  async createOrder(
    request: CreateOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateOrderResponse> {
    const response = await this.client.request({
      url: `orders`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateOrderResponse;
  }

  async cancelOrder(
    request: CancelOrderRequest,
    options?: CoinbaseCallOptions
  ): Promise<CancelOrderResponse> {
    const queryParams = {
      ...request,
      orderId: undefined,
    };
    const response = await this.client.request({
      url: `orders/${request.orderId}`,
      queryParams,
      method: Method.DELETE,
      callOptions: options,
    });

    return response.data as CancelOrderResponse;
  }

  async cancelAllOrders(
    request: CancelAllOrdersRequest,
    options?: CoinbaseCallOptions
  ): Promise<CancelAllOrdersResponse> {
    const response = await this.client.request({
      url: `orders`,
      method: Method.DELETE,
      queryParams: request,
      callOptions: options,
    });

    return response.data as CancelAllOrdersResponse;
  }
}
