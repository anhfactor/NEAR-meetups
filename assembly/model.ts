import { PersistentVector, context, u128 } from 'near-sdk-as';

@nearBindgen //serializing class so that it is compatible to NEAR blockchain
export class MeetingUnit {
    id: i32;
    owner: string;
    constructor(public title: string, public description: string, public location: string, public date: Date, public imageUrl:string){
        this.owner = context.sender;
    }
}

export const availableMeetups = new PersistentVector<MeetingUnit>("meetups");