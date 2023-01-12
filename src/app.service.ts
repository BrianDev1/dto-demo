import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDtoIntro(): string {
    return 'Welcome to the everything DTO';
  }
}
