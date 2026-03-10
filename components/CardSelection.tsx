import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CardSelectionProps {
  selectId: number;
  image?: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
  styles: {
    container: any;
    selected?: any;
    img?: any;
    shadow?: any;
    textStyle: any;
    unSelectBorder: any;
  };
  text?: string;
  selection?: number[];
}

const CardSelection: React.FC<CardSelectionProps> = ({
  selectId,
  image,
  onSelect,
  styles,
  text,
  selection,
  isSelected,
}) => {
  return (
    <TouchableOpacity onPress={() => onSelect(selectId)} activeOpacity={1}>
      <View
        style={[
          styles.container,
          (selection && selection.includes(selectId)) || isSelected
            ? [styles.selected, styles.unSelectBorder]
            : null,
          styles.shadow,
        ]}
      >
        {image && <Image source={{ uri: image }} style={styles.img} />}
        {text && (
          <Text
            style={[
              (selection && selection.includes(selectId)) || isSelected
                ? styles.textStyle
                : null,
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardSelection;
