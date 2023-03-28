import { Character } from "./character.enum";

export interface ConversationRepository {
  GenerateConversation(character: Character, text: string): Promise<any>
}