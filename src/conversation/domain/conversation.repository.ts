import { Character } from "./character.enum";
import { ChatInterface } from "./chat.interface";

export interface ConversationRepository {
  GenerateConversation(character: Character, chat: ChatInterface): Promise<any>
}