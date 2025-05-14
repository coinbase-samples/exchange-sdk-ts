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
require('dotenv').config();
const {
  CoinbaseExchangeClient,
  CoinbaseExchangeCredentials,
  ProfilesService,
} = require('../dist');

const creds = JSON.parse(process.env.EXCHANGE_CREDENTIALS);

const credentials = new CoinbaseExchangeCredentials(
  creds.AccessKey,
  creds.SecretKey,
  creds.Passphrase
);

const client = new CoinbaseExchangeClient(credentials);

const active = process.argv[2] || true;

const service = new ProfilesService(client);
service
  .listProfiles({ active })
  .then((profiles) => {
    console.log(profiles);
  })
  .catch(console.error);
