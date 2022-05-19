import { Chat } from '../interfaces/chat.interface';
import { MOCKED_MESSAGES_1, MOCKED_MESSAGES_2, MOCKED_MESSAGES_3 } from './messages.mock';

export const MOCKED_INITIAL_CHATS: Chat[] = [
  {
    id: 1,
    from: 'John Doe',
    fromId: 1,
    messages: MOCKED_MESSAGES_1,
  },
  {
    id: 2,
    from: 'John Dough',
    fromId: 2,
    messages: MOCKED_MESSAGES_2,
  },
  {
    id: 3,
    from: 'John Wick',
    fromId: 3,
    messages: MOCKED_MESSAGES_3,
  },
];
