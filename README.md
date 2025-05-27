# Coinbase Exchange API TypeScript SDK

## Overview

Welcome to the Coinbase Exchange API TypeScript SDK. This TypeScript project was created to allow developers to easily plug into the [Coinbase Exchange API](https://docs.cdp.coinbase.com/exchange/docs/welcome).

---

## Installation

```bash
npm install @coinbase-sample/exchange-sdk-ts
```

## License

The _Exchange Typescript SDK_ sample library is free and open source and released under the [Apache License, Version 2.0](LICENSE).

The application and code are only available for demonstration purposes.

## Usage

Here are a few examples requests:

**Configure Credentials**

```
const creds = JSON.parse(process.env.EXCHANGE_CREDENTIALS);

const credentials = new CoinbaseExchangeCredentials(
  creds.AccessKey,
  creds.SecretKey,
  creds.Passphrase
);

const client = new CoinbaseExchangeClient(credentials);
```

**[List Orders]https://docs.cdp.coinbase.com/exchange/reference/exchangerestapi_getorders)**

```
const service = new OrdersService(client);

service
  .listOrders()
  .then((orders) => {
    console.log(orders);
  })
  .catch(console.error);
```

**[Get Trading Pairs](https://docs.cdp.coinbase.com/exchange/reference/exchangerestapi_getproducts)**

```
const service = new ProductsService(client);

service
    .listTradingPairs({entityId: "somePortfolioId"})
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });
```

**[Create Order](https://docs.cdp.coinbase.com/exchange/reference/exchangerestapi_postorders)**

_$10 Market Buy on BTC-USD_

```
client
    .createOrder({
        portfolioId: "somePortfolioId",
        productId: "BTC-USD",
        side: OrderSide.BUY,
        type: OrderType.Market,
        baseQuantity: "0.0001"
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });
```

## Development Installation

```bash
npm install
```

---

## Build and Use

To build the project, run the following command:

```bash
npm run build
```

_Note: To avoid potential issues, do not forget to build your project again after making any changes to it._

After building the project, each `.ts` file will have its `.js` counterpart generated.

To run a file, use the following command:

```
node dist/{INSERT-FILENAME}.js
```

For example, a `main.ts` file would be run like:

```bash
node dist/main.js
```

---
