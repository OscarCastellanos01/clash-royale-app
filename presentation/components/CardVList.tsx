import { Card } from "@/infrastructure/interfaces/clash-royale.interface";
import { FlatList, Text, View } from "react-native";
import Cards from "./Cards";

interface Props {
  cards: Card[];
}

const CardVList = ({ cards }: Props) => {
  return (
    <View>
      <Text className="text-3xl font-bold px-4 mb-2">Cartas</Text>
      <FlatList
        data={cards}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        numColumns={4}
        contentContainerStyle={{
          alignItems: "center",
        }}
        className="w-full"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Cards id={item.id} cardImage={item.imgCardUrl} />
        )}
      />
    </View>
  );
};

export default CardVList;
