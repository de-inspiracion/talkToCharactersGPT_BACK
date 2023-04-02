import { Configuration, OpenAIApi } from "openai";
import { ChatInterface } from "../../domain/chat.interface";
import { ConversationRepository } from "../../domain/conversation.repository";
require("dotenv").config();
const configCharacter: any = {
  philosofer: {
    content: "puedes responder al estilo de platon",
    promp: "",
  },
  chilean: {
    content: "eres un chileno hablando en coa",
    promp: "",
  },
  snoop: {
    content: "puedes responder como snoop dog",
    promp: "",
  },
  marley: {
    content: "eres bob marley",
    promp: "",
  },
  negative: {
    content: "puedes responder como una persona negativa y pesimista",
    promp: "",
  },
  positive: {
    content: "puedes responder como una persona positiva, alegre  y optimista",
    promp: "",
  },
  homero: {
    content: "puedes responder como una homero de los simpson",
    promp: "",
  },
};

export class GTPRepository implements ConversationRepository {
  configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
  });
  openai = new OpenAIApi(this.configuration);
  async GenerateConversation(character: string, chat: ChatInterface): Promise<any> {
    const characterSelected: any = configCharacter[character];
    const initialChat = [{"role": "assistant", "content": characterSelected.content}]
    const chats: any = initialChat.concat(chat)
    const response = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats
    });
    return response.data.choices[0];
  }
}
