import { Brand } from '../shared/brand';
import {
  GetAddressBookResponseAddressInfo,
  PublicPostAddressBookRequest,
} from '../model/internal';

export type GetAddressBookRequest = Record<string, never>;

export type GetAddressBookResponse = GetAddressBookResponseAddressInfo[];

export type AddAddressesRequest = Brand<
  PublicPostAddressBookRequest,
  'AddAddressesRequest'
>;
export type AddAddressesResponse = GetAddressBookResponseAddressInfo[];

export type DeleteAddressRequest = {
  id: string;
};

export type DeleteAddressResponse = Record<string, never>;
