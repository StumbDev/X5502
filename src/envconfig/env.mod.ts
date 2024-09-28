// Suggested code may be subject to a license. Learn more: ~LicenseLog:3142359479.
import * as OpenAI from "https://deno.land/x/openai@v4.64.0/mod.ts";

export class EnvConfigTomlModifier {
  private openai: OpenAI;

  constructor(apiKey: string) {
    this.openai = new OpenAI(apiKey);
  }

  async modifyConfig(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return response.choices[0].message.content;
  }
}