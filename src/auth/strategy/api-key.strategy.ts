import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'apiKey',
) {
  constructor(private authService: AuthService) {
    super({ header: 'apiKey', prefix: '' }, true, async (apikey, done) => {
      if (await this.authService.validateApiKey(apikey)) {
        done(null, true);
      }
      done(new UnauthorizedException(), null);
    });
  }
}
