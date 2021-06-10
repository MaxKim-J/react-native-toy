import React, {ReactChild, useState, useRef} from 'react';
import styled from 'styled-components/native';
import {
  ScrollView,
  TouchableWithoutFeedback,
  Text,
  View,
  FlatList,
  Dimensions,
  ListRenderItemInfo,
} from 'react-native';

const StyledStickyTab = styled.ScrollView<{width: number}>`
  width: ${({width}) => width}px;
`;

const StyledTabContent = styled.View`
  flex-direction: row;
`;

const StyledTabNavigator = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #aaaaaa;
`;

const TabItemText = styled.Text`
  color: #fefefe;
`;

type TabContent = {
  id: number;
  name: string;
  content: ReactChild;
};

type StickyTabProps = {
  headerComponents: ReactChild;
  tabContents: TabContent[];
  footerComponents?: ReactChild;
};

function StickyTab({
  headerComponents,
  tabContents,
  footerComponents,
}: StickyTabProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const horizontalListRef = useRef<FlatList>(null);

  const navigateTabItem = (target: number) => {
    if (horizontalListRef.current) {
      horizontalListRef.current.scrollToIndex({
        index: target,
      });
      setTabIndex(target);
    }
  };

  return (
    <StyledStickyTab
      stickyHeaderIndices={[1]}
      width={Math.round(Dimensions.get('window').width)}>
      <View>{headerComponents}</View>
      <StyledTabNavigator>
        {tabContents.map(tabItem => (
          <TouchableWithoutFeedback
            key={tabItem.id}
            onPress={() => {
              navigateTabItem(tabItem.id);
            }}>
            <TabItemText>{tabItem.name}</TabItemText>
          </TouchableWithoutFeedback>
        ))}
      </StyledTabNavigator>

      <FlatList
        ref={horizontalListRef}
        data={tabContents}
        decelerationRate="normal"
        horizontal
        pagingEnabled
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}: ListRenderItemInfo<TabContent>) => (
          <View style={{width: Math.round(Dimensions.get('window').width)}}>
            {item.content}
          </View>
        )}
      />

      {footerComponents ? <View>{footerComponents}</View> : null}
    </StyledStickyTab>
  );
}

export default StickyTab;
