import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly apiKeys: string[] = [process.env.API_KEY];
  async validateApiKey(apiKey: string) {
    return this.apiKeys.find((key) => apiKey === key);
  }
}
