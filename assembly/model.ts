import { PersistentVector, context } from 'near-sdk-as';

@nearBindgen //serializing class so that it is compatible to NEAR blockchain
export class MeetingUnit {
    owner:       string;
    title:       string;
    description: string;
    location:    string;
    date:        string;
    imageUrl:    string;
    id:          i32;
    constructor(title:string, description: string, location: string, date: string, imageUrl:string, id:i32){
        this.owner       = context.sender;
        this.title       = title;
        this.description = description;
        this.location    = location;
        this.date        = date;
        this.imageUrl    = imageUrl;
        this.id          = id;

    }
}

export const availableMeetups = new PersistentVector<MeetingUnit>("meetups");