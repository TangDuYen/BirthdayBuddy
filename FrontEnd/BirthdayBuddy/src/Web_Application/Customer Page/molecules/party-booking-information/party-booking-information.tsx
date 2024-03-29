import { Link } from "react-router-dom";
import "./party-booking-information.scss";
import { Star } from "lucide-react";

export default function PartyBookingInformation() {
    return (
        <>
            <h2 className="title-information">THÔNG TIN ĐẶT TIỆC</h2>
            <div className="container">
                <div className="box-1">
                    <div className="status">
                        <div className="status0">Tên nhà hàng: Hello</div>
                        <div className="status1">Tình trạng: Hoàn thành</div>
                    </div>
                    <div className="event">
                        <h6>Mã tiệc: H001</h6>
                        <h6>Thời gian tổ chức: 8:30 20/02/2024</h6>
                        <h6>Ngày đặt: 15/02/2024 8:05:12</h6>
                    </div>

                    <div className="content">
                        <h6>Họ và tên phụ huynh: Nguyễn Văn A</h6>
                        <h6>Số điện thoại: 0786485999</h6>
                        <h6>Họ và tên bé: Nguyễn Văn AA</h6>
                        <h6>Tuổi: 5 tuổi</h6>
                        <h6>Giới tính: Nam</h6>
                        <h6>Chủ đề trang trí: Bãi biển</h6>
                        <h6>Dịch vụ đặc biệt: Đập kẹo Pinata</h6>
                        <h6>Menu: Món ăn nhanh</h6>
                        <h6>Số lượng người tham dự: 15 người</h6>
                        <h6>Ghi chú: Không có</h6>
                        <h6>Tổng thanh toán: 5.200.000</h6>
                        <h6>
                            Phương thức thanh toán: Thanh toán online bằng momo
                        </h6>
                        <h6>Tình trạng phương thức: Đã thanh toán</h6>
                    </div>
                </div>

                <div className="evaluate">
                    <div className="comment">
                        <div className="comment1">
                            <h5 className="title-comment">Đánh giá</h5>
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                            <Star className="star-icon" />
                        </div>

                        <input
                            className="input"
                            type="text"
                            name="fieldName"
                            id="fieldID"
                        ></input>
                    </div>
                    <Link to="/customer">
                        <button>Đánh giá</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
