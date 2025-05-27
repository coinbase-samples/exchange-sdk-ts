import { Brand } from '../shared/brand';
import { TravelRulePii } from '../model';
import { PostTravelRuleRequest } from 'src/model/PostTravelRuleRequest';

export type ListTravelRulesRequest = {
  before?: string;
  after?: string;
  limit?: number;
  address?: string;
};
export type ListTravelRulesResponse = Brand<
  TravelRulePii[],
  'ListTravelRulesResponse'
>;

export type CreateTravelRuleEntryRequest = Brand<
  PostTravelRuleRequest,
  'CreateTravelRuleEntryRequest'
>;
export type CreateTravelRuleEntryResponse = Brand<
  TravelRulePii,
  'CreateTravelRuleEntryResponse'
>;

export type DeleteTravelRuleEntryRequest = {
  id: string;
};
export type DeleteTravelRuleEntryResponse = Record<string, never>;
