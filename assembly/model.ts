import { PersistentUnorderedMap, context } from 'near-sdk-as';

@nearBindgen
export class MeetingUnit {
    id: string;
    name: string;
    description: string;
    image: string;
    location: string;
    owner: string;
    date: Date;

    public static fromPayload(payload: MeetingUnit): MeetingUnit {
        const newmeeting = new MeetingUnit();
        newmeeting.id = payload.id;
        newmeeting.name = payload.name;
        newmeeting.description = payload.description;
        newmeeting.image = payload.image;
        newmeeting.location = payload.location;
        newmeeting.owner = context.sender;
        newmeeting.date = payload.date;
        return newmeeting;
    }

}

export const listedMeetups = new PersistentUnorderedMap<string, MeetingUnit>("LISTED_MEETUPS");