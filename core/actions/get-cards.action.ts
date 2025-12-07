import { ClashRoyaleDBResponse } from "@/infrastructure/interfaces/crdb-cards.response";
import { ClashRoyaleMapper } from "@/infrastructure/mappers/clash-royale.mapper";
import { clashRoyaleApi } from "../api/clash-royale-api";

const getCardAction = async() => {
  try {
    const { data } = await clashRoyaleApi.get<ClashRoyaleDBResponse>("/cards");

    const cards = data.items.map(ClashRoyaleMapper.fromTheClashRoyleToCard);
    return cards;
  } catch (error) {
    console.log(error);
    throw 'Cannot load cards Clash Royale';
  }
}

export default getCardAction