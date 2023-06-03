import React, { useEffect, useState } from "react";
import SessionManager from "../components/SessionManager";
import Pomodoro from "../components/Pomodoro";
import Header from "../components/Header";
import "../styles/App.css";
import {Tabs} from "antd";





export default function Home() {
    return (
        <div className={"home-container"}>
            <Header/>
            <SessionManager/>
            <Pomodoro/>
        </div>
    )
}