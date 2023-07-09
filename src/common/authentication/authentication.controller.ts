import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('/auth')
export class AuthenticationController {
  constructor(private readonly service: AuthenticationService) {}

  @Get()
  public getSome(): void {
    this.service.getSome();
  }
}
