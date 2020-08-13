import { TestBed } from '@angular/core/testing';

import { ThreadsService } from './threads.service';
import { MessagesService } from '../message/messages.service';

import { Thread } from './thread.model';
import { Message } from '../message/message.model';
import { User } from '../user/user.model';

describe('ThreadsService', () => {
  let service: ThreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should collect the Threads from Messages', () => {
    const nate: User = new User('Nate Murray', '');
    const felipe: User = new User('Felipe Coury', '');
    const t1: Thread = new Thread('t1', 'Thread 1', '');
    const t2: Thread = new Thread('t2', 'Thread 2', '');
    const m1: Message = new Message({
      author: nate,
      text: 'Hi!',
      thread: t1
    });
    const m2: Message = new Message({
      author: felipe,
      text: 'Where did you get that hat?',
      thread: t1
    });
    const m3: Message = new Message( {
      author: nate,
      text: 'Did you bring the briefcase?',
      thread: t2
    });
    const messagesService: MessagesService = new MessagesService();
    const threadsService: ThreadsService = new ThreadsService(messagesService);

    threadsService.threads
      .subscribe((threadIdx: { [key: string]: Thread }) => {
        const threads: Thread[] = Object.values(threadIdx);
        const threadNames: string = threads.map((t: Thread) => t.name).join(', ');
        console.log(`=> threads (${threads.length}): ${threadNames}`);
      });
    
    messagesService.addMessage(m1);
    messagesService.addMessage(m2);
    messagesService.addMessage(m3);
    
  })

});
