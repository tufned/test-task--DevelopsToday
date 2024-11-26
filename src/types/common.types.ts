import { routes } from '~/constants/routes';

export type Routes = (typeof routes)[keyof typeof routes];

export interface ServiceResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
}
