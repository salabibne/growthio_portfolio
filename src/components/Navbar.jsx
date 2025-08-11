


import React, { useState, useEffect } from "react";
import { DownOutlined, MoreOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Button, Drawer } from "antd";
import logo from "../assets/growthio_remove bg.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [current, setCurrent] = useState("services");
  const [menuKey, setMenuKey] = useState(Date.now());
  const [menuReady, setMenuReady] = useState(false); // Delay mount
  const [drawerVisible, setDrawerVisible] = useState(false); // Drawer visibility
  const navigate = useNavigate();

  // Force re-render when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setMenuKey(Date.now());
        window.dispatchEvent(new Event("resize"));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Delay menu mount slightly to allow layout to settle
  useEffect(() => {
    const timeout = setTimeout(() => setMenuReady(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const routeMap = {
    projects: "/projects",
    team: "/team",
    services: "/services",
    "about-us": "/about",
    insights: "/insights",
    careers: "/careers",
    story: "/story",
    "blog-articles": "/blog",
    whitepapers: "/whitepapers",
    tutorials: "/tutorials",
    webinars: "/webinars",
    docs: "/docs",
    contact: "/contact",
  };

  const onClick = (e) => {
    setCurrent(e.key);
    const path = routeMap[e.key];
    if (path) {
      navigate(path);
      setDrawerVisible(false); // Close drawer on menu item click
    }
  };

  const menuItems = [
    {
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          Services <DownOutlined style={{ fontSize: "10px" }} />
        </span>
      ),
      key: "services",
      children: [
        {
          type: "group",
          label: "Development",
          children: [
            { label: "Web Development", key: "web-dev" },
            { label: "Mobile Apps", key: "mobile-apps" },
          ],
        },
        {
          type: "group",
          label: "Design",
          children: [
            { label: "UI/UX Design", key: "ui-ux" },
            { label: "Product Design", key: "product-design" },
          ],
        },
      ],
    },
    {
      label: "Projects",
      key: "projects",
    },
    {
      label: "Our Team",
      key: "team",
    },
    {
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          Insights <DownOutlined style={{ fontSize: "10px" }} />
        </span>
      ),
      key: "insights",
      children: [
        {
          type: "group",
          label: "Company",
          children: [
            { label: "Our Story", key: "story" },
            { label: "Careers", key: "careers" },
          ],
        },
        {
          type: "group",
          label: "Resources",
          children: [
            { label: "Blog Articles", key: "blog-articles" },
            { label: "Whitepapers", key: "whitepapers" },
            { label: "Technical Tutorials", key: "tutorials" },
          ],
        },
        {
          type: "group",
          label: "Media & Docs",
          children: [
            { label: "Webinars / Videos", key: "webinars" },
            { label: "Product Documentation", key: "docs" },
          ],
        },
      ],
    },
  ];

  // Toggle drawer visibility
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-6 shadow-md flex items-center justify-between gap-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Left: Logo + Company Name */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
      >
        <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
        <span className="font-bold text-lg whitespace-nowrap text-black">
          Growth.IO
        </span>
      </div>

      {/* Center: Menu or Hamburger Icon */}
      <div className="flex-1 flex justify-center max-w-4xl w-full">
        {menuReady && (
          <>
            {/* Desktop Menu (hidden on mobile) */}
            <div className="hidden md:flex w-full justify-center">
              <Menu
                key={menuKey}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={menuItems}
                overflowedIndicator={
                  <MoreOutlined style={{ fontSize: "20px", color: "Black" }} />
                }
                className="w-full border-none justify-center text-3xl"
                style={{
                  minWidth: 0,
                  flex: 1,
                  borderBottom: "none",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              />
            </div>

            {/* Mobile Hamburger Icon (visible on mobile) */}
            <div className="md:hidden flex items-center justify-end">
              <Button
                type="text"
                icon={<MenuOutlined style={{ fontSize: "24px", color: "black" }} />}
                onClick={showDrawer}
              />
            </div>
          </>
        )}
      </div>

      {/* Right: Button */}
      <div className="flex-shrink-0 hidden md:block">
        <Button
          type="primary"
          className="bg-black hover:bg-gray-800 border-black hover:border-gray-800 font-semibold"
          size="large"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        width={250}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="inline"
          items={menuItems}
          style={{ border: "none" }}
        />
        <div className="p-4">
          <Button
            type="primary"
            className="bg-black hover:bg-gray-800 border-black hover:border-gray-800 font-semibold w-full"
            size="large"
            onClick={() => {
              navigate("/contact");
              setDrawerVisible(false);
            }}
          >
            Contact Us
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;