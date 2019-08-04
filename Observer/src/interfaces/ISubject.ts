import { ISubscriber}  from './ISubscriber';

export interface ISubject {
  subscribe(context:ISubscriber);
  unsubscribe(context:ISubscriber);
}