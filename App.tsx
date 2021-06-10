/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import StickyTab from './src/components/StickyTab';
import styled from 'styled-components/native';

const StyledTabItem = styled.Text`
  height: 1000px;
  background-color: #4fbda5;
`;

const StyledHeader = styled.View`
  background-color: #b89e9e;
  height: 500px;
  width: 100%;
`;

const App = () => {
  const tabContents = [
    {
      id: 0,
      name: '탭1',
      content: <StyledTabItem>탭1</StyledTabItem>,
    },
    {
      id: 1,
      name: '탭2',
      content: <StyledTabItem>탭2</StyledTabItem>,
    },
    {
      id: 2,
      name: '탭3',
      content: <StyledTabItem>탭3</StyledTabItem>,
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar />
      <StickyTab
        headerComponents={
          <StyledHeader>
            <Text>헤더</Text>
          </StyledHeader>
        }
        tabContents={tabContents}
      />
    </SafeAreaView>
  );
};

export default App;
