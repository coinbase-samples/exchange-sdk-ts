import { Brand } from '../shared/brand';
import { Report, ReportCreateResult } from '../model';
import { PostReportsRequest } from '../model/internal';

export type ListReportsRequest = Brand<
  PostReportsRequest,
  'ListReportsRequest'
>;
export type ListReportsResponse = Brand<Report[], 'ListReportsResponse'>;

export type GetReportRequest = {
  reportId: string;
};
export type GetReportResponse = Brand<Report, 'GetReportResponse'>;

export type CreateReportRequest = Brand<
  PostReportsRequest,
  'CreateReportRequest'
>;
export type CreateReportResponse = Brand<
  ReportCreateResult,
  'CreateReportResponse'
>;
