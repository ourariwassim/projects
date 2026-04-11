import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class gemini {
  ai: GoogleGenAI;
  constructor(private readonly configService: ConfigService) {
    this.ai = new GoogleGenAI({
      apiKey: this.configService.getOrThrow('GEMINI_KEY'),
    });
  }
  async main(content: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents:
        content +
        ' generate a blog content for this topic in simble text format',
    });
    return { content: response.text };
  }
}
