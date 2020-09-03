const now = new Date()

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2020, 6, 0),
    end: new Date(2020, 6, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2020, 6, 7),
    end: new Date(2020, 6, 10),
  },

  {
    id: 2,
    title: 'Dental treatment for cat',
    start: new Date(2020, 7, 13, 0, 0, 0),
    end: new Date(2020, 7, 14, 0, 0, 0),
  },

  {
    id: 3,
    title: 'Hair treatment for Tommy',
    start: new Date(2020, 10, 6, 0, 0, 0),
    end: new Date(2020, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2020, 8, 9, 0, 0, 0),
    end: new Date(2020, 8, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2020, 8, 11),
    end: new Date(2020, 8, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2020, 7, 12, 10, 30, 0, 0),
    end: new Date(2020, 7, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2020, 3, 12, 14, 0, 0, 0),
    end: new Date(2020, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2020, 9, 12, 17, 0, 0, 0),
    end: new Date(2020, 9, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 11,
    title: 'Pedicure treatment for Tommy',
    start: new Date(2020, 6, 13, 7, 0, 0),
    end: new Date(2020, 6, 13, 10, 30, 0),
  },
  
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2020, 3, 20, 19, 30, 0),
    end: new Date(2020, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  
  {
    id: 19,
    title: 'Online meeting',
    start: new Date(2020, 3, 14, 17, 30, 0),
    end: new Date(2020, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2020, 3, 14, 17, 0, 0),
    end: new Date(2020, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2020, 3, 14, 17, 0, 0),
    end: new Date(2020, 3, 14, 18, 30, 0),
  },
 
]