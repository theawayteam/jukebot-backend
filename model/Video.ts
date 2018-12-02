import * as uuid from 'uuid';

export default class Video {

  public id = uuid.v4();

  constructor(
    public key: string,
    public title: string,
    public thumbnail: string,
    public duration: number,
    public addedBy: string) { }
}
