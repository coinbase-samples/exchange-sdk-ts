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
  ListProfilesRequest,
  ListProfilesResponse,
  GetProfileRequest,
  GetProfilesResponse,
  CreateProfileRequest,
  CreateProfileResponse,
  CreateProfileTransferRequest,
  CreateProfileTransferResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  DeactivateProfileRequest,
  DeactivateProfileResponse,
} from './types';
import { CoinbaseCallOptions, Method } from '@coinbase-sample/core-ts';

export interface IProfilesService {
  listProfiles(request: ListProfilesRequest): Promise<ListProfilesResponse>;
  getProfile(request: GetProfileRequest): Promise<GetProfilesResponse>;

  createProfile(request: CreateProfileRequest): Promise<CreateProfileResponse>;
  createProfileTransfer(
    request: CreateProfileTransferRequest
  ): Promise<CreateProfileTransferResponse>;

  updateProfile(request: UpdateProfileRequest): Promise<UpdateProfileResponse>;
  deactivateProfile(
    request: DeactivateProfileRequest
  ): Promise<DeactivateProfileResponse>;
}

export class ProfilesService implements IProfilesService {
  private client: CoinbaseExchangeClient;

  constructor(client: any) {
    this.client = client;
  }

  async listProfiles(
    request: ListProfilesRequest,
    options?: CoinbaseCallOptions
  ): Promise<ListProfilesResponse> {
    const response = await this.client.request({
      url: `profiles`,
      queryParams: request,
      callOptions: options,
    });

    return response.data as ListProfilesResponse;
  }

  async getProfile(
    request: GetProfileRequest,
    options?: CoinbaseCallOptions
  ): Promise<GetProfilesResponse> {
    const queryParams = {
      ...request,
      profileId: undefined,
    };
    const response = await this.client.request({
      url: `profiles/${request.profileId}`,
      queryParams,
      callOptions: options,
    });

    return response.data as GetProfilesResponse;
  }

  async createProfile(
    request: CreateProfileRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateProfileResponse> {
    const response = await this.client.request({
      url: `profiles`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateProfileResponse;
  }

  async createProfileTransfer(
    request: CreateProfileTransferRequest,
    options?: CoinbaseCallOptions
  ): Promise<CreateProfileTransferResponse> {
    const response = await this.client.request({
      url: `profiles/transfer`,
      method: Method.POST,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as CreateProfileTransferResponse;
  }

  async updateProfile(
    request: UpdateProfileRequest,
    options?: CoinbaseCallOptions
  ): Promise<UpdateProfileResponse> {
    const response = await this.client.request({
      url: `profiles/${request.profileId}`,
      method: Method.PUT,
      bodyParams: request,
      callOptions: options,
    });

    return response.data as UpdateProfileResponse;
  }

  async deactivateProfile(
    request: DeactivateProfileRequest,
    options?: CoinbaseCallOptions
  ): Promise<DeactivateProfileResponse> {
    const response = await this.client.request({
      url: `profiles/${request.profileId}/deactivate`,
      method: Method.PUT,
      callOptions: options,
    });

    return response.data as DeactivateProfileResponse;
  }
}
