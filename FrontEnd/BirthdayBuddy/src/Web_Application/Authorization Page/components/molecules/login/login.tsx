import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";
import api from "../../../../../../src/config/axios";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error("Vui lòng nhập đầy đủ thông tin đăng nhập");
            return;
        }
        try {
            const response = await api.post("users/login?username=" + username + "&password=" + password);
            if (response.status === 200) {
                console.log("Login successful");
                const data = response.data;
                const roleId = data.roleId;
                console.log(data);
                if (roleId === 3) {
                    navigate('/host/list-party');
                } else if (roleId === 2) {
                    navigate(`/customer/${data.id}`, { state: { loggedInUser: data } }); // Pass user data via URL parameters
                } else {
                    toast.error("Unauthorized access.");
                }
            } else {
                toast.error("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login failed:", error);
            toast.error("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="loginPage">
            <div className="login">
                <div className="logoLogin">
                    <img src="./Logo.png" alt="Logo" />
                </div>
                <form onSubmit={handleLogin}>
                    <div className="group">
                        <input
                            type="text"
                            placeholder="Tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            style={{
                                backgroundColor: "transparent",
                                color: "red",
                                marginRight: "5px",
                                marginTop: "0px",
                            }}
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Ẩn" : "Hiện"}
                        </button>
                    </div>

                    <div className="signIn">
                        <button type="submit">Đăng nhập</button>
                    </div>
                    <div className="register-prompt">
                        <div className="account-absent">
                            <div className="bn-cha-c" id="bnChaC">
                                <Link
                                    style={{
                                        color: "#595454",
                                        textDecoration: "none",
                                    }}
                                    to={"/register"}
                                >
                                    Bạn chưa có tài khoản?
                                </Link>
                            </div>
                        </div>
                        <Link
                            style={{ color: "#595454", textDecoration: "none" }}
                            to={"/forgetpw"}
                        >
                            <div className="t-li-mt" id="tLiMt">
                                Đặt lại mật khẩu
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
