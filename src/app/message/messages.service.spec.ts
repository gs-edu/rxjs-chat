import { TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';

import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';


describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test', () => {
    const user: User = new User('Nate', '');
    const thread: Thread = new Thread('t1', 'Nate', '');
    const m1: Message = new Message({
      author: user,
      text: 'Hi!',
      thread: thread
    });
    const m2: Message = new Message({
      author: user,
      text: 'Bye!',
      thread: thread
    });

    const messagesService: MessagesService = new MessagesService();

    messagesService.newMessages
      .subscribe((message: Message) => {
        console.log('=> newMessages: ' + message.text);
      });
    
    messagesService.messages
      .subscribe((messages: Message[]) => {
        console.log('=> messages: ' + messages.length);
      });
    
    messagesService.addMessage(m1);
    messagesService.addMessage(m2);

  })
});
