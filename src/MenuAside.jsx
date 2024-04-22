import React, { memo, useState } from "react";
import { Menu } from "antd";
import { DesktopOutlined, MailOutlined } from "@ant-design/icons";
const MenuAside = memo(() => {
  const [collapsed] = useState(false);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("系统管理", "sub1", <DesktopOutlined />, [
      getItem("用户管理", "5"),
      getItem("角色管理", "6"),
      getItem("菜单管理", "7"),
      getItem("部门管理", "8"),
      getItem("岗位管理", "9"),
      getItem("日志管理", "10"),
    ]),
    getItem("会员管理", "sub2", <MailOutlined />, [
      getItem("金牌会员", "11"),
      getItem("五星会员", "12"),
    ]),
  ];

  return (
    <Menu
      defaultSelectedKeys={["5"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={items}
      style={{ height: "100%" }}
    />
  );
});

export default MenuAside;
