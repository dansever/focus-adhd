import React, { useEffect, useState } from "react";
import "../styles/SessionManager.css"
import { Tabs, Card } from 'antd';

const items = [
    {
        key: '1',
        label: `Freestyle Focus Sessions`,
    },
    {
        key: '2',
        label: `Plan Focus Sessions`,
    },
];

export default function SessionManager() {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const [activeTabKey2, setActiveTabKey2] = useState('app');
    const onTabChange = (key) => {
        setActiveTabKey1(key);
    };
    return (
        <Tabs
            defaultActiveKey="1"
            items={items}
            size={"large"}
            tabBarGutter={50}
            onChange={onTabChange}
        />
    );
};