import getCardAction from "@/core/actions/get-cards.action";
import { useQuery } from "@tanstack/react-query";

export const useClashRoyale = () => {
  const cardsQuery = useQuery({
    queryKey: ['clash-royale', 'cards'],
    queryFn: getCardAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    cardsQuery,
  };
};
