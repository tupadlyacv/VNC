import { Message } from './message.interface';

export interface Chat {
  id: number,
  fromId: number,
  from: string,
  messages: Message[];
}
