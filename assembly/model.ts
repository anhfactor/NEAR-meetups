import { PersistentVector, context } from 'near-sdk-as';

@nearBindgen //serializing class so that it is compatible to NEAR blockchain
export class MeetingUnit {
    owner: string;
    constructor(public title:string, public description: string, public location: string, public date: string, public imageUrl:string, public id:i32){
        this.owner = context.sender;
    }
}

export const availableMeetups = new PersistentVector<MeetingUnit>("meetups");