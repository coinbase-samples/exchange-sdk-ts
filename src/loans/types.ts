import { Brand } from '../shared/brand';
import {
  InterestCharge,
  InterestRate,
  InterestSummary,
  LendingOverviewResult,
  Loan,
  NewLoanOption,
} from '../model';
import {
  GetLoanAssetsResponse,
  GetPreviewResponse,
  OpenLoanRequest,
  RepayInterestRequest,
  RepayInterestResponse,
  RepayPrincipalRequest,
  RepayPrincipalResponse,
} from 'src/model/internal';

export type ListInterestChargesRequest = {
  loanId: string;
};
export type ListInterestChargesResponse = Brand<
  InterestCharge[],
  'ListInterestChargesResponse'
>;

export type ListInterestRateHistoryRequest = {
  loanId: string;
};
export type ListInterestRateHistoryResponse = Brand<
  InterestRate[],
  'ListInterestRateHistoryResponse'
>;

export type ListInterestSummariesRequest = Record<string, never>;
export type ListInterestSummariesResponse = Brand<
  InterestSummary[],
  'ListInterestSummariesResponse'
>;

export type ListLoanAssetsRequest = Record<string, never>;
export type ListLoanAssetsResponse = Brand<
  GetLoanAssetsResponse,
  'ListLoanAssetsResponse'
>;

export type ListLoansRequest = {
  ids?: string[];
};
export type ListLoansResponse = Brand<Loan[], 'ListLoansResponse'>;

export type ListNewLoanOptionsRequest = Record<string, never>;
export type ListNewLoanOptionsResponse = Brand<
  NewLoanOption[],
  'ListNewLoanOptionsResponse'
>;

export type GetLendingOverviewRequest = Record<string, never>;
export type GetLendingOverviewResponse = Brand<
  LendingOverviewResult,
  'GetLendingOverviewResponse'
>;

export type GetNewLoanPreviewRequest = {
  nativeAmount: string;
  currency: string;
};
export type GetNewLoanPreviewResponse = Brand<
  GetPreviewResponse,
  'GetNewLoanPreviewResponse'
>;

export type GetPrincipalRepaymentPreviewRequest = {
  loanId: string;
  nativeAmount: string;
  currency: string;
};
export type GetPrincipalRepaymentPreviewResponse = Brand<
  GetPreviewResponse,
  'GetPrincipalRepaymentPreviewResponse'
>;

export type CreateNewLoanRequest = Brand<
  OpenLoanRequest,
  'CreateNewLoanRequest'
>;
export type CreateNewLoanResponse = {
  loan: Loan;
};

export type CreateRepayLoanInterestRequest = Brand<
  RepayInterestRequest,
  'CreateRepayLoanInterestRequest'
>;
export type CreateRepayLoanInterestResponse = Brand<
  RepayInterestResponse,
  'CreateRepayLoanInterestResponse'
>;

export type CreateRepayLoanPrincipalRequest = Brand<
  RepayPrincipalRequest,
  'CreateRepayLoanPrincipalRequest'
>;
export type CreateRepayLoanPrincipalResponse = Brand<
  RepayPrincipalResponse,
  'CreateRepayLoanPrincipalResponse'
>;
