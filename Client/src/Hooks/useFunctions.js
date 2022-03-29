import axios from "axios";

import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const useFunctions = () => {
    const [errors, serErrors] = useState("");
    const [user, setUser] = useState(null)
    const [user1, setUser1] = useState({})

    const [token, setToken] = useState('')

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const loginUser = (items) => {
        axios
            .post("https://sbexpressbd.com/Server/user/login", items)
            .then((response) => {

                if (response.status === 200) {

                    Toast.fire({
                        icon: "success",
                        title: response.data.msg,
                    });
                    setToken(response.data.accesstoken)
                    setUser(response.data.userData)
                    localStorage.setItem("user", JSON.stringify(response.data.userData))

                    localStorage.setItem("token", response.data.accesstoken);
                    setToken(response.data.accesstoken)
                    setUser1(response.data.userData);
                    if (response.data.userData.role === 1) {
                        items.history.push("admin/dashboard");
                    }
                    else if (response.data.userData.role === 0) {
                        items.history.push("merchant/dashboard");
                    }
                    else {
                        localStorage.removeItem('token');
                        localStorage.removeItem("user_name");
                        Toast.fire({
                            icon: "error",
                            title: "You have no permission to login",
                        });
                    }
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log("ERROR:: ", error.response.data);
                // serErrors(error.response.data.errors);
                Toast.fire({
                    icon: "error",
                    title: error.response.data.msg,
                });
                if (error.response.data.errors) {
                    serErrors(error.response.data.errors);
                } else {
                    serErrors("");
                }
            });


        axios.get("https://sbexpressbd.com/Server/user/infor", {
            headers: {
                'Authorization': token
            }
        })
            .then(res => console.log(res))

    }

    const logout = (history) => {
        axios.get("https://sbexpressbd.com/Server/user/logout")
            .then((res) => {
                if (res.status === 200) {

                    Toast.fire({
                        icon: "success",
                        title: res.data.msg,
                    });
                    history.push("/login");
                    localStorage.removeItem("token");
                    localStorage.removeItem("user")

                    window.location.reload();
                }
            })

    }

    return {
        user,
        loginUser,
        errors,
        user1,
        logout
    }
}
export default useFunctions;