import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "react-tabs/style/react-tabs.css";

import MeetInfoTable from './component/MeetingInfoTable';
import InsertMeetingItem from './component/InsertMeetingItem';

function App() {
  var tabs = [];
  var tabPanels = [];

  tabs.push(<Tab key="searchTab">查看</Tab>);
  tabs.push(<Tab key="insertTab">插入</Tab>);

  tabPanels.push(<TabPanel> <MeetInfoTable /> </TabPanel>);
  tabPanels.push(<TabPanel> <InsertMeetingItem /> </TabPanel>);

  return (
    <div className="App">
      <header className="App-header">
      <Tabs >
        <TabList key="tabList"> 
          <Tab key="searchTab"> 查看 </Tab>
          <Tab key="insertTab"> 插入 </Tab>
        </TabList>

        <TabPanel> <MeetInfoTable /> </TabPanel>
        <TabPanel> <InsertMeetingItem /> </TabPanel>

      </Tabs>

      </header>
    </div>
  );
}

export default App;