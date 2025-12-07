import { Card } from "../interfaces/clash-royale.interface";
import { Item } from "../interfaces/crdb-cards.response";

export class ClashRoyaleMapper {
    static fromTheClashRoyleToCard = (card: Item): Card => {
        return {
          id: card.id,
          nameCard: card.name,
          rarity: card.rarity,
          imgCardUrl: card.iconUrls.medium,
        };
    }
}