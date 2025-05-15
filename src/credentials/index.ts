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
import { toSnakeCase } from '../shared/toSnakeCase';
import {
  CB_ACCESS_KEY_HEADER,
  CB_ACCESS_PHRASE_HEADER,
  CB_ACCESS_SIGNATURE_HEADER,
  CB_ACCESS_TIMESTAMP_HEADER,
} from '../constants';
import * as crypto from 'crypto';

export class CoinbaseExchangeCredentials {
  private accessKey: string | undefined;
  private secretKey: string | undefined;
  private passphrase: string | undefined;

  constructor(key?: string, secret?: string, passphrase?: string) {
    if (!key || !secret || !passphrase) {
      console.log('Could not authenticate. Only public endpoints accessible.');
    }
    this.accessKey = key;
    this.passphrase = passphrase;
    this.secretKey = secret;
  }

  generateAuthHeaders(
    requestMethod: string,
    uri: string,
    body: string
  ): Record<string, string> {
    if (!this.secretKey || !this.accessKey || !this.passphrase) {
      return {};
    }

    const timestamp = Math.floor(Date.now() / 1000);
    // Exchange includes query params in the signed message
    // may need to handle snake_case for query params in future
    let reqPath = uri.slice(uri.indexOf('.com') + 4);
    // Format the body to snake_case for signature
    let bodyFormat = '';
    if (body && body.length > 1)
      bodyFormat = JSON.stringify(toSnakeCase(JSON.parse(body)));
    const message = timestamp + requestMethod + reqPath + (bodyFormat || '');

    const signature = crypto
      .createHmac('sha256', Buffer.from(this.secretKey, 'base64'))
      .update(message)
      .digest('base64');

    return {
      [CB_ACCESS_TIMESTAMP_HEADER]: timestamp.toString(),
      [CB_ACCESS_SIGNATURE_HEADER]: signature,
      [CB_ACCESS_KEY_HEADER]: this.accessKey,
      [CB_ACCESS_PHRASE_HEADER]: this.passphrase,
    };
  }
}
