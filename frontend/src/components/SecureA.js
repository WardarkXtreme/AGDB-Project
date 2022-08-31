import { useEffect } from "react";
import Axios from "axios";

export function SecureA() {
    useEffect(() => {
        let id = sessionStorage.getItem("id");
        let jwt = sessionStorage.getItem("token");
        if(jwt === null) {
            document.location = "/"
        }else{
            const data = {
                "id": id,
                "token": jwt
            }
            Axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                url: "https://www.augitedubois.com/api/auth/ctrlAdmin",
                mode: 'cors',
                data: data
            })
                .then(() => {
                    return null
                })
                .catch(error => {
                    document.location = "/"
                })
        }

    })
}