import React, { useState, useEffect } from "react";
import { View, Text, Keyboard } from "react-native";

export function useKeyboard() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShow = () => {
      !visible && setVisible(true);
    };

    const keyboardDidHide = () => {
      visible && setVisible(false);
    };

    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, []);
  return { visible };
}
