import React from "react";
import { Typography, Box, Divider, IconButton } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
function Notification() {
  return (
    <div>
      <Box>
        <div>
          <Typography
            sx={{ color: "#00558d", fontSize: "18px", fontWeight: "bold", mb:2 }}
          >
            Thông báo mới
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <h3>
              Danh sách sinh viên Dự kiến được công nhận tốt nghiệp đợt 2 Tháng
              01/2023_2024 cập nhật ngày 20/12/2023
            </h3>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              Sinh viên xem danh sách dự kiến được công nhận tốt nghiệp đợt 2
              tháng 01/2023_2024 cập nhật ngày 20/12/2023{" "}
              <Typography sx={{ ml: 1, color: "#00558d", fontWeight: "bold" }}>
                tại đây
              </Typography>
              .
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <h3>
              Thông báo về việc nhận bằng Tốt nghiệp đại học hệ chính quy Đợt
              tốt nghiệp tháng 10/2023
            </h3>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              Sinh viên xem danh sách dự kiến được công nhận tốt nghiệp đợt 2
              tháng 01/2023_2024 cập nhật ngày 20/12/2023{" "}
              <Typography sx={{ ml: 1, color: "#00558d", fontWeight: "bold" }}>
                tại đây
              </Typography>
              .
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                
              }}
            ></Box>
            <Typography sx={{display:'flex', ml:2}}>
              Thông báo v/v đăng ký thi kiểm tra trình độ tiếng Anh đầu ra đợt
              tháng 01/2024
              <Box sx={{ml:2, color:'#333', fontWeight:'bold'}}>
                <ZoomInIcon />
                <span>Chi tiết</span>
              </Box>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <h3>
              Danh sách sinh viên Dự kiến được công nhận tốt nghiệp đợt 2 Tháng
              01/2023_2024 cập nhật ngày 20/12/2023
            </h3>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              Sinh viên xem danh sách dự kiến được công nhận tốt nghiệp đợt 2
              tháng 01/2023_2024 cập nhật ngày 20/12/2023{" "}
              <Typography sx={{ ml: 1, color: "#00558d", fontWeight: "bold" }}>
                tại đây
              </Typography>
              .
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <h3>
              Thông báo về việc nhận bằng Tốt nghiệp đại học hệ chính quy Đợt
              tốt nghiệp tháng 10/2023
            </h3>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                mr: 2,
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              Sinh viên xem danh sách dự kiến được công nhận tốt nghiệp đợt 2
              tháng 01/2023_2024 cập nhật ngày 20/12/2023{" "}
              <Typography sx={{ ml: 1, color: "#00558d", fontWeight: "bold" }}>
                tại đây
              </Typography>
              .
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "#00558d",
                borderRadius: "50%",
                
              }}
            ></Box>
            <Typography sx={{display:'flex', ml:2}}>
              Thông báo v/v đăng ký thi kiểm tra trình độ tiếng Anh đầu ra đợt
              tháng 01/2024
              <Box sx={{ml:2, color:'#333', fontWeight:'bold'}}>
                <ZoomInIcon />
                <span>Chi tiết</span>
              </Box>
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Notification;
