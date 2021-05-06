import { useLocation } from 'react-router-dom';

/**
 * Returns url search parameters from location.search
 */
export default function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}
