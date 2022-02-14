import React, { useState } from "react";
import { View, Text } from "react-native-web";

import DefaultView from "../../Layouts/DefaultView";
import DashboardMenu from "../../Components/DashboardMenu";

const HealthDepartmentDashboard = () => {
  const [menu, setMenu] = useState('History')

  const toShow = (
    
    <Text> Hii lorem lafhodshflsdafsdjfslfjagaflkjldfkjalkfjsdflsjfdslfjsdal</Text>
  );

  return (
    <DefaultView>
      <View>
      <DashboardMenu menu={menu} setMenu={setMenu} toShow={toShow} />
    </View>
    </DefaultView>
  )
}

export default HealthDepartmentDashboard;