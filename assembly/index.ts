import { MeetingUnit, availableMeetups } from './model';

//adding an event
export function addEvent(title:string, description:string, location:string, date:string, imageURL:string): void{
    // validate all input
    assert(title.length > 0, "Title is required");
    assert(description.length > 0, "Description is required");
    assert(location.length > 0, "Location is required");
    assert(date.length > 0, "Date is required");
    assert(imageURL.length > 0, "Image Url is required");

    const newEvent = new MeetingUnit(title, description, location, date, imageURL, availableMeetups.length);
    availableMeetups.push(newEvent);
}

//reading a specific event detail
export function getEvent(id: i32): MeetingUnit{
    // validate id input
    assert(typeof(id) === "number" ,"Invalid input, id type must be number");

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
