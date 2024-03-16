// 2024.03.17 14:15
const stringToDateTextFormatter = (createTime: string) => {
  const CreatedAt = new Date(createTime);
  const year = CreatedAt.getFullYear();
  const month = String(CreatedAt.getMonth() + 1).padStart(2, '0');
  const day = String(CreatedAt.getDate()).padStart(2, '0');
  const hours = String(CreatedAt.getHours()).padStart(2, '0');
  const minutes = String(CreatedAt.getMinutes()).padStart(2, '0');

  const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
  return formattedDate;
};
export default stringToDateTextFormatter;
