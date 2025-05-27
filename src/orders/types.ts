import { Brand } from '../shared/brand';
import { Order, OrderFill } from '../model';
import {
  OrderMarketType,
  OrderSortedBy,
  OrderSorting,
  OrderStatus,
} from 'src/model/enums';
import { PostOrdersRequest } from 'src/model/PostOrdersRequest';

export type ListOrdersRequest = {
  // Filter results by a specific profile_id
  profileId?: string;
  // Filter results by a specific product_id
  productId?: string;
  // Sort criteria for results.
  sortedBy?: OrderSortedBy;
  // Ascending or descending order, by sortedBy
  sorting?: OrderSorting;
  // Filter results by minimum posted date
  startDate?: string;
  // Filter results by maximum posted date
  endDate?: string;
  // Used for pagination. Sets start cursor to before date.
  before?: string;
  // Used for pagination. Sets end cursor to after date.
  after?: string;
  limit?: number;
  // Array with order statuses to filter by.
  status?: OrderStatus[];
  // Market type which the order was traded in.
  marketType?: OrderMarketType;
};
export type ListOrdersResponse = Brand<Order[], 'ListOrdersResponse'>;

export type ListOrderFillsRequest = {
  // limit to fills on a specific order. Either order_id or product_id is required.
  orderId?: string;
  // limit to fills on a specific product. Either order_id or product_id is required.
  productId?: string;
  limit?: number;
  // Used for pagination. Sets start cursor to before date.
  before?: string;
  // Used for pagination. Sets end cursor to after date.
  after?: string;
  // Search by minimum posted date time and is inclusive of time provided. Valid formats are either RFC3339, date or date time and must be after Unix Epoch time.
  startDate?: string;
  // Search by maximum posted date time and is inclusive of time provided. Valid formats are either RFC3339, date or date time and must be after Unix Epoch time.
  endDate?: string;
  // Market type which the order was filled in.
  marketType?: OrderMarketType;
};
export type ListOrderFillsResponse = Brand<
  OrderFill[],
  'ListOrderFillsResponse'
>;

export type GetOrderRequest = {
  // order_id is either the exchange assigned id or the client assigned client_oid. When using client_oid it must be preceded by the client: namespace.
  orderId: string;
};
export type GetOrderResponse = Brand<Order, 'GetOrderResponse'>;

export type CreateOrderRequest = Brand<PostOrdersRequest, 'CreateOrderRequest'>;
export type CreateOrderResponse = Brand<
  PostOrdersRequest,
  'CreateOrderResponse'
>;

export type CancelOrderRequest = {
  // Orders may be canceled using either the exchange assigned id or the client assigned client_oid. When using client_oid it must be preceded by the client: namespace.
  orderId: string;
  // Cancels orders on a specific profile
  profileId: string;
  // Optional product id of order
  productId?: string;
};
// The `id` of the order that was cancelled`
export type CancelOrderResponse = string;

export type CancelAllOrdersRequest = {
  // Cancels orders on a specific profile
  profileId?: string;
  // Cancels orders on a specific product only
  productId?: string;
};
// A list of the `id`s of open orders that were successfully cancelled
export type CancelAllOrdersResponse = string[];
