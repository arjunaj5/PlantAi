import React from "react";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import DefaultView from "../../Layouts/DefaultView";


import DashboardMenu from "../../Components/DashboardMenu";

const UserDashboard = () => {
  const [menu, setMenu] = useState('history')

  return (
    <DefaultView>
          <DashboardMenu setMenu={setMenu} menu={menu}/>
    </DefaultView>
  )
}

export default UserDashboard;