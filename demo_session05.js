const rawCode = " med-rhm-0815-bhyt ";

const cleanCode = rawCode.trim().toUpperCase();

if (!cleanCode.includes("MED-")) {
  console.log("=".repeat(35));
  console.log(`[LỖI] Mã '${cleanCode}' không hợp lệ!`);
  console.log("Yêu cầu mã bắt đầu bằng tiền tố MED-");
  console.log("=".repeat(35));
} else {
  const maChuyenKhoa = cleanCode.slice(4, 7);

  const soThuTu = cleanCode.slice(8, 12);

  let tenChuyenKhoa = "Chưa xác định";
  if (maChuyenKhoa === "RHM") {
    tenChuyenKhoa = "Răng Hàm Mặt";
  } else if (maChuyenKhoa === "TAI") {
    tenChuyenKhoa = "Tai Mũi Họng";
  } else if (maChuyenKhoa === "MAT") {
    tenChuyenKhoa = "Mắt";
  }

  const giaCoSo = 150000;
  let thanhTien = giaCoSo;
  let trangThaiBHYT = "Không";

  if (cleanCode.includes("BHYT")) {
    thanhTien = giaCoSo * 0.2;
    trangThaiBHYT = cleanCode.slice(13).replace("BHYT", "Có (Giảm 80%)");
  }

  console.log("=".repeat(35));
  console.log(` PHÒNG KHÁM ĐA KHOA`);
  console.log(`   THẺ TIẾP ĐÓN BỆNH NHÂN`);
  console.log("-".repeat(35));
  console.log(` Mã gốc    : "${rawCode}"`);
  console.log(` Mã chuẩn  : ${cleanCode}`);
  console.log(` Chuyên khoa: ${tenChuyenKhoa}`);
  console.log(`Số thứ tự : ${soThuTu}`);
  console.log(` BHYT      : ${trangThaiBHYT}`);
  console.log(`Phí khám  : ${thanhTien.toLocaleString("vi-VN")} VNĐ`);
  console.log("=".repeat(35));
}
