import React, {useEffect, useState} from "react";
import {Button,Menu,Typography,Avatar} from "antd";
import { Link } from "react-router-dom";
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from "@ant-design/icons";
import icon from '../images/cryptocurrency.png'
const Navbar = ()=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const menuItems = [
        {key: 'home', 'icon': <HomeOutlined/>, label: <Link to={'/'}>Home</Link>},
        {key: 'cryptocurrencies', 'icon': <FundOutlined/>, label: <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>},
        {key: 'exchanges', 'icon': <MoneyCollectOutlined/>, label: <Link to={'/exchanges'}>Exchanges</Link>},
        {key: 'news', 'icon': <BulbOutlined/>, label: <Link to={'/news'}>News</Link>},
    ]

    const handleResize = () =>{setScreenSize(window.innerWidth)}

    useEffect(() => {
        if (screenSize < 768){
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [screenSize]);



    return (
        <div className="nav-container">
            <div className="logo-container">
                <Typography.Title level={2} className="logo">
                    <Avatar src={icon} size="large"/>
                    <Link to="/">Cryptodigest</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && <Menu theme="dark" items={menuItems}/>}
        </div>
    )
}

export default Navbar
