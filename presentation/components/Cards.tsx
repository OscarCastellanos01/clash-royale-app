import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  cardImage: string;
}

const Cards = ({ id, cardImage }: Props) => {
  return (
    <Pressable
      className="active:opacity-90 px-2"
      onPress={() => console.log(id)}
    >
      <Image
        source={{ uri: cardImage }}
        className="rounded-2xl w-full h-full"
        style={{
          width: 85,
          height: 120,
        }}
      />
    </Pressable>
  );
};

export default Cards;
