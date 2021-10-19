import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '../UI/atoms'
import {
  ComponentsViewToggler,
  CategoryList,
  ModalButtons
} from '../UI/organisms'
import { useToggle } from '../../hooks';
import Modal from "react-native-modal";

const ComponentsTemplate = () => {
  const [isComponentsShown, toggleIsComponentsShown] = useToggle(false);
  const [isModalShown, toggleIsModalShown] = useToggle(false);
  const [isFullModalShow, toggleIsFullModalShown] = useToggle(false);

  const togglers = {
    normal: toggleIsModalShown,
    fullscreen: toggleIsFullModalShown
  }

  return (
    <View style={[styles.view]}>
      <ComponentsViewToggler 
        isComponentsShown={isComponentsShown}
        onToggle={toggleIsComponentsShown}
      />
      {
        isComponentsShown && (
          <>
            <CategoryList />
            <ModalButtons togglers={togglers}/>
          </>
        )
      }
      <Modal isVisible={isModalShown}>
        <View>
          <Text value="모달창입니다"/>
          <Button value="닫기" onPress={toggleIsModalShown} />
        </View>
      </Modal>
      <Modal isVisible={isFullModalShow}>
        <View style={[styles.fullModal]}>
          <Text value="풀스크린 모달창입니다"/>
          <Button value="닫기" onPress={toggleIsFullModalShown} />
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex:1},
  fullModal: {flex: 1}
})
export default ComponentsTemplate;