import { ContractPromiseBatch, u128 } from 'near-sdk-core';
import { MeetingUnit, availableMeetups } from './model';

//adding an event
export function addEvent(title:string, description:string, location:string, date:string, imageURL:string): void{
    const newEvent = new MeetingUnit(title, description, location, date, imageURL, availableMeetups.length);
    availableMeetups.push(newEvent);
}

//reading a specific event detail
export function getEvent(id: i32): MeetingUnit{
    const result = availableMeetups[i32(id)];  //fetching an existing meetup id from the existing collection
    return result;
}

//reading all available meetups
export function getEvents(): MeetingUnit[]{
    const result = new Array<MeetingUnit>(availableMeetups.length);
    for (let i = 0; i < availableMeetups.length; i++) {
        result[i] = availableMeetups[i];
      }
    return result;
}

//sponsoring a particular event
export function sponsorEvent(id:i32, sponsoredAmount:u128):void {
    const specificEvent = getEvent(id);
    ContractPromiseBatch.create(specificEvent.owner).transfer(sponsoredAmount);
}