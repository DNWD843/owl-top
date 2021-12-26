import dayjs, { Dayjs, OpUnitType } from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.locale('ru');
dayjs.extend(utc);
dayjs.extend(customParseFormat);

export const getDateNow = (): Dayjs => dayjs();

export const isDateValid = (date: any, format?: string): boolean => dayjs(date, format, true).isValid();

export const getDate = (date: any, format?: string, strictParsing = true) => {
  if (dayjs.isDayjs(date)) {
    return date;
  }

  return dayjs(date, format, strictParsing).utc(true);
};

export const convertDate = (anyDateTime: any): Dayjs | null => {
  if (!anyDateTime) {
    return null;
  }

  if (dayjs.isDayjs(anyDateTime)) {
    return anyDateTime;
  }

  if (anyDateTime instanceof Date) {
    return dayjs(anyDateTime);
  }

  if (typeof anyDateTime === 'string') {
    return dayjs(anyDateTime);
  }

  if (typeof anyDateTime === 'number') {
    return dayjs.unix(anyDateTime);
  }

  return anyDateTime;
};

export const isBefore = (date: any, beforeDate?: any, unit: OpUnitType = 'day'): boolean => {
  const argBeforeDate = beforeDate || getDateNow();
  const parsedDate = convertDate(date);
  const parsedBeforeDate = convertDate(argBeforeDate);

  if (!parsedDate || !parsedBeforeDate) {
    return true;
  }

  return parsedDate.isBefore(parsedBeforeDate, unit);
};

export const isAfter = (date: any, afterDate?: any, unit: OpUnitType = 'day'): boolean => {
  const argAfterDate = afterDate || getDateNow();
  const parsedDate = convertDate(date);
  const parsedAfterDate = convertDate(argAfterDate);

  if (!parsedDate || !parsedAfterDate) {
    return true;
  }

  return parsedDate.isAfter(parsedAfterDate, unit);
};

export const getDatesDiff = (date1: any, date2: any, unit: OpUnitType): number => {
  const convertedDate1 = convertDate(date1);
  const convertedDate2 = convertDate(date2);

  if (!convertedDate1 || !convertedDate2) {
    return 0;
  }

  return convertedDate1.diff(convertedDate2, unit);
};

/**
 * форматирование даты в дату по шаблону
 */
export const formatDate = (unFormattedDate: string, template: string) => dayjs(unFormattedDate).format(template);

/**
 * Возвращает количество рабочих дней между двумя датами
 * @param startDate
 * @param endDate
 * @return {number}
 */
export const getBusinessDatesCount = (startDate: Date, endDate: Date) => {
  let count = 0;
  const curDate = startDate;

  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay();
    if (!((dayOfWeek === 6) || (dayOfWeek === 0))) count += 1;
    curDate.setDate(curDate.getDate() + 1);
  }

  return count;
};
