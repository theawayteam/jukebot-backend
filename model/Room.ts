import Video from './Video';

export default class Room {

  public users: string[] = [];
  public queue: Video[] = [];
  public playing: Video;
  public recent: Video[] = [];

  constructor(public name: string) { }
}
