import { addEvent, getEvent, getEvents, sponsorEvent } from '../index';
import { MeetingUnit, availableMeetups } from '../model';

import {VMContext, Context, u128} from 'near-sdk-as';

function createEvent(title:string, description:string, location:string, date:Date, imageURL:string):MeetingUnit {
    return new MeetingUnit(title, description, location, date, imageURL, 0);
}

const newEvent = createEvent(
                            "NEAR 101",
                            "Get solidly started with NEAR Fundamentals",
                            "Nairobi, Kenya",
                            new Date(19/7/2022),
                            "https://bit.ly/3M0WeBS"
                );              

describe("meetup tests", () =>{
    afterEach(() => {
        while(availableMeetups.length > 0) {
          availableMeetups.pop();
        }
    });

    it("Add an event", () => {
        addEvent("NEAR 101",
                "Get solidly started with NEAR Fundamentals",
                "Nairobi, Kenya",
                new Date(19/7/2022),
                "https://bit.ly/3M0WeBS"
        );
        expect(availableMeetups.length).toBe(
            1,
            'should only contain one listed Meetup'
        );
        expect(availableMeetups[0]).toStrictEqual(
            newEvent,
            "output first meetups event"
        );
        expect(availableMeetups[0].imageUrl).toStrictEqual(
            newEvent.imageUrl,
            "https://bit.ly/3M0WeBS"
        );
    })

    it("view an event", ()=>{
        addEvent("NEAR 101",
                "Get solidly started with NEAR Fundamentals",
                "Nairobi, Kenya",
                new Date(19/7/2022),
                "https://bit.ly/3M0WeBS"
        );
        const meetupResult = getEvent(0);
        expect(meetupResult).toBe(
            availableMeetups[0],
            'id of the one listed Meetup'
        );
        
    })

    it("view events", ()=> {
        addEvent("NEAR 101",
                "Get solidly started with NEAR Fundamentals",
                "Nairobi, Kenya",
                new Date(19/7/2022),
                "https://bit.ly/3M0WeBS"
        );
        const meetupsList = getEvents();
        expect(meetupsList.length).toBe(
        1,
        'should be one meetup listing'
        );
        expect(meetupsList).toIncludeEqual(
        newEvent,
        'meetups list should include:\n' + newEvent.toJSON()
        );
    })

    beforeEach(() => {
        VMContext.setAttached_deposit(u128.fromString('0'));
        VMContext.setAccount_balance(u128.fromString('0'));
    });
    
    it('attaches a deposit to a contract call', () => {
        log('Initial account balance: ' + Context.accountBalance.toString());

        addEvent("NEAR 101",
                "Get solidly started with NEAR Fundamentals",
                "Nairobi, Kenya",
                new Date(19/7/2022),
                "https://bit.ly/3M0WeBS"
        );
        VMContext.setAttached_deposit(u128.from('10'));

        log('Attached deposit: 10');
        log('Account balance after deposit: ' + Context.accountBalance.toString());

        expect(Context.accountBalance.toString()).toStrictEqual(
            '10',
            'balance should be 10'
        );
    })
})


