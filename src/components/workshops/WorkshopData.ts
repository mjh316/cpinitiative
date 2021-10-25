import moment from 'moment';
import EGOI from '../../images/egoi-hero.png'
import USACO from '../../images/usaco-guide-logo.png'

export type Workshop = {
  photo: StaticImageData
  title: string,
  description: string,
  date: moment.Moment
  url: string  // joincpi.org/workshops/{url}
}

const workshops: Workshop[] = [
  {
    photo: EGOI,
    title: "Experience & Tips from the USA EGOI Team",
    description: "Learn from the experience of the 2021 EGOI (European Girls' Olympiad in Informatics) team!",
    date: moment('Oct 17 2021 2:00:00 PM PDT'),
    url: "/egoi"
  },
  {
    photo: USACO,
    title: "USACO for Absolute Beginners",
    description: "An introduction to USACO for new competitive programmers. No experience necessary!",
    date: moment('Aug 6 2021 4:00:00 PM PDT'),
    url: "/beginner"
  },
  {
    photo: USACO,
    title: "Intro to USACO Webinar",
    description: "Experienced USACO contestants explain everything you need to know about getting started with USACO.",
    date: moment('Nov 28 2020 5:00:00 PM PDT'),
    url: "/intro-to-usaco"
  },
]

const now = moment();
const sections = [
  {
    title: "Ongoing Workshop",
    workshops: workshops.filter((workshop) => 
      now.isSameOrAfter(workshop.date) && now.isSameOrBefore(workshop.date.clone().add(1, 'hour'))
    ),
  },
  {
    title: "Upcoming Workshops",
    workshops: workshops.filter(workshop => workshop.date.isAfter(now)),
  },
  {
    title: "Past Workshops",
    workshops: workshops.filter(workshop => workshop.date.clone().add(1, 'hour').isBefore(now)),
  },
]
export default sections
