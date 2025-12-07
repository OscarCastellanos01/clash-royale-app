import { ActivityIndicator, View } from 'react-native';

import CardVList from '@/presentation/components/CardVList';
import { useClashRoyale } from '@/presentation/hooks/useClashRoyale';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { cardsQuery } = useClashRoyale();

  if (cardsQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View
      className="mt-2 pb-32"
      style={{ paddingTop: safeArea.top }}
    >
      <CardVList cards={cardsQuery.data ?? []} />
    </View>
  );
}

export default HomeScreen