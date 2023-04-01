import React from "react";
import { setUser } from "../App.js";

const ApiEndpoint = "https://6423a95c77e7062b3e364861.mockapi.io/dogpark/user";

export function getList(setUsers) {
    const getAllThreads = async () => {
        const response = await fetch(ApiEndpoint);
        const data = await response.json();
        setUsers(data);
        setUser(data); // add this line to set the user
        return getAllThreads;
    };
}

export async function deleteUser(userId, setUsers) { // add setUsers as parameter
    try {
        await fetch(`https://6423a95c77e7062b3e364861.mockapi.io/dogpark/user/${userId}`, {
            method: "DELETE"
        });
        const data = await getList(setUsers);
        setUsers(data);
        setUser(data); // add this line to set the user
    } catch (error) {
        console.error(error);
    }
}
