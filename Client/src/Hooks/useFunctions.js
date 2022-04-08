import axios from "axios";

import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const useFunctions = () => {
    const [call1, setCall1] = useState(true);
    const [loadig, setLoading] = useState(false);
    const [errors, serErrors] = useState("");
    const [user, setUser] = useState(null)

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
            .post("http://localhost:5000/user/login", items)
            .then((response) => {
                if (response.status === 200) {
                    Toast.fire({
                        icon: "success",
                        title: response.data.msg,
                    });
                    setToken(response.data.accesstoken)
                    localStorage.setItem("user", JSON.stringify(response.data.userData))
                    localStorage.setItem("token", response.data.accesstoken);
                    setToken(response.data.accesstoken)
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


        axios.get("http://localhost:5000/user/infor", {
            headers: {
                'Authorization': token
            }
        })
            .then(res => console.log(res))

    }

    const logout = (history) => {
        axios.get("http://localhost:5000/user/logout")
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
    const userInfo = localStorage.getItem('user')
    const userData = (JSON.parse(userInfo));
    const token1 = localStorage.getItem('token')
    useEffect(() => {
        axios.get(`http://localhost:5000/user/information/${userData?._id}`, {
            headers: {
                'Authorization': token1,

            }
        })
            .then(data => setUser(data.data))
    }, [userData?._id, token1]);

    console.log(user);
    return {
        setLoading,
        loadig,
        user,
        loginUser,
        errors,
        logout,
        call1,
        setCall1
    }
}
export default useFunctions;