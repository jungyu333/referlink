export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const parseMonth = month < 10 ? '0' + month : month + '';
  const parseDay = day < 10 ? '0' + day : day + '';

  return `${year}.${parseMonth}.${parseDay}`;
};
