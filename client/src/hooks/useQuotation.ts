import { useQuery } from 'react-query';
import GetQuotation from '../api/getQuotation';

export const useGetQuotation = () => {
  return useQuery(['get/quotation'],() => GetQuotation()
  );
}
