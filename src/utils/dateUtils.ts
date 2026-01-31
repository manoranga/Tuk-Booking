export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getDaysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // Include both start and end date
};

export const isDateBooked = (date: string, bookedDates: string[]): boolean => {
  return bookedDates.includes(date);
};

export const isRangeAvailable = (
  startDate: string,
  endDate: string,
  bookedDates: string[]
): boolean => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    const dateString = date.toISOString().split('T')[0];
    if (bookedDates.includes(dateString)) {
      return false;
    }
  }
  
  return true;
};

export const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const generateBookingId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `BK${timestamp}${random}`;
};
