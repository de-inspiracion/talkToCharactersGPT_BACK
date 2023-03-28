import { Request, Response } from "express";
import { ConversationUseCase } from "../../application/conversationUseCase";
import { Character } from "../../domain/character.enum";

export class ConversationController {
  constructor(private conversationUseCase: ConversationUseCase) {}

  getController = async (request: Request, response: Response) => {
    const { character, text } : {character: Character, text: any} = request.body;
    try {
      const result = await this.conversationUseCase.generateConversation(
        character,
        text
      );
      response.send({
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
