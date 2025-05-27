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
  GetAddressBookRequest,
  GetAddressBookResponse,
  AddAddressesRequest,
  AddAddressesResponse,
  DeleteAddressRequest,
  DeleteAddressResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IAddressBookService {
  getAddressBook(
    request: GetAddressBookRequest
  ): Promise<GetAddressBookResponse>;
  addAddresses(request: AddAddressesRequest): Promise<AddAddressesResponse>;
  deleteAddress(request: DeleteAddressRequest): Promise<DeleteAddressResponse>;
}

export class AddressBookService implements IAddressBookService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async getAddressBook(
    request: GetAddressBookRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetAddressBookResponse> {
    const response = await this.client.request({
      url: `address-book`,
      callOptions: options,
    });

    return response.data as GetAddressBookResponse;
  }

  async addAddresses(
    request: AddAddressesRequest,
    options?: CoinbaseCallOptions
  ): Promise<AddAddressesResponse> {
    const response = await this.client.request({
      url: `address-book`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as AddAddressesResponse;
  }

  async deleteAddress(
    request: DeleteAddressRequest,
    options?: CoinbaseCallOptions
  ): Promise<DeleteAddressResponse> {
    const response = await this.client.request({
      url: `address-book/${request.id}`,
      method: Method.DELETE,
      callOptions: options,
    });

    return response.data as DeleteAddressResponse;
  }
}
