import { format } from 'date-fns';

function formatDate(date: Date, formatString: string): string {
  return format(new Date(date), formatString);
}
export { formatDate };
