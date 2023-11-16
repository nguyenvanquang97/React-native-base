// Hàm chuyển đổi chuỗi ngày thành đối tượng ngày
export const convertToDateObject = (dateString) => {
      // Tách ngày và thời gian từ chuỗi
  const [datePart, timePart] = dateString.split(' ');

  // Tách các thành phần ngày tháng năm từ phần ngày
  const [day, month, year] = datePart.split('/');

  // Tách giờ, phút và giây từ phần thời gian
  const [hour, minute, second] = timePart.split(':');

  // Tạo đối tượng Date từ các thành phần đã tách
  return new Date(year, month - 1, day, hour, minute, second);
  };
