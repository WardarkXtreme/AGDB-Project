import React, {useEffect} from "react";
import Axios from "axios";

export function SecureU() {
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
                url: "https://www.augitedubois.com/api/auth/ctrlUser",
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