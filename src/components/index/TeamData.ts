import {
  adham,
  akshar,
  albertz,
  amogha,
  andi,
  andrew,
  arpan,
  atharv,
  ben,
  benq,
  daniel,
  darren,
  david_li,
  davidz,
  dong,
  dustin,
  egor,
  harry,
  jay,
  jeffrey,
  maggie,
  melody,
  michael,
  mrinall,
  nathanc,
  nathang,
  nathanw,
  neo,
  nikhil,
  oscar,
  pranav,
  ramit,
  ryan,
  sofia,
  siyong,
  varun,
  vikas_thoutam,
  vivian,
  amy_chang,
  jpaulson,
  yifan_ma,
  jesse,
} from "../index/images"

export type Member = {
  photo: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  titles: string[]
  github?: string
  twitter?: string
  linkedin?: string
  website?: string
  codeforces?: string
  email?: string
  youtube?: string
  instagram?: string
}

const roles = {
  webdev: "Web Developer",
  contentAuthor: "Content Author",
  liveInstructor: "Live Classes",
  videoInstructor: "Self-Study Classes",
  instructor: "Instructor",
  clubCurriculum: "Curriculum Developer",
  founder: "Founding Member",
}

const members: { [key: string]: Member } = {
  adham: {
    photo: adham,
    name: "Adham Ibrahim",
    titles: [roles.liveInstructor],
    email: "adhamibrahim719@gmail.com",
    github: "adham-ibrahim7",
  },
  akshar: {
    photo: akshar,
    name: "Akshar Yeccherla",
    titles: [roles.videoInstructor],
  },
  albertz: {
    photo: albertz,
    name: "Albert Zhu",
    titles: [roles.videoInstructor, roles.clubCurriculum],
  },
  amogha: {
    photo: amogha,
    name: "Amogha Pokkulandra",
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: "amogha.pokkulandra@gmail.com",
    github: "x3n0coder",
  },
  amy: {
    photo: amy_chang,
    name: "Amy Chang",
    titles: [
      "Director of Classes",
      roles.liveInstructor,
      roles.videoInstructor,
    ],
  },
  andi: {
    photo: andi,
    name: "Andi Qu",
    titles: [roles.founder],
    email: "andi@andiqu.com",
    github: "dolphingarlic",
    codeforces: "dolphingarlic",
    website: "https://andiqu.com/",
  },
  andrew: {
    photo: andrew,
    name: "Andrew Wang",
    titles: [roles.founder, "Former Secretary"],
    github: "andrewwangva",
    codeforces: "a.wang",
    email: "andrewwangva.biz@gmail.com",
  },
  arpan: {
    photo: arpan,
    name: "Arpan Banerjee",
    github: "ar492",
    titles: [roles.clubCurriculum, roles.contentAuthor, roles.videoInstructor],
  },
  atharv: {
    photo: atharv,
    name: "Atharv Jain",
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: "atharvjain05@gmail.com",
  },
  ben: {
    photo: ben,
    name: "Ben Dodge",
    github: "Navigator365",
    titles: [roles.contentAuthor],
  },
  benq: {
    photo: benq,
    name: "Benjamin Qi",
    titles: [roles.founder, "Content Director", "2x IOI Winner"],
    github: "bqi343",
    codeforces: "Benq",
    email: "bqi343@gmail.com",
  },
  daniel: {
    photo: daniel,
    name: "Daniel Guan",
    github: "DGuan64",
    titles: [roles.founder, "Director of Classes", "Finalist"],
  },
  darren: {
    photo: darren,
    name: "Darren Yao",
    titles: [roles.founder, "Board"],
    github: "darren-yao",
    website: "http://darrenyao.com/",
    codeforces: "darren_yao",
    email: "darren.yao@gmail.com",
  },
  david_li: {
    photo: david_li,
    name: "David Li",
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  davidz: {
    photo: davidz,
    name: "David Zhang",
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  dong: {
    photo: dong,
    name: "Bing-Dong Liu",
    titles: ["Content Manager", roles.liveInstructor],
    github: "dongliu0426",
    codeforces: "lunchbox",
    email: "dongliu0426@gmail.com",
    youtube: "https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ",
  },
  dustin: {
    photo: dustin,
    name: "Dustin Miao",
    titles: [roles.liveInstructor, roles.contentAuthor],
    github: "dutinmeow",
    email: "dutin20.meow@gmail.com",
    codeforces: "dutinmeow",
  },
  egor: {
    photo: egor,
    name: "Egor Gagushin",
    titles: [roles.videoInstructor],
    codeforces: "eggag32",
    github: "Eggag",
  },
  harry: {
    photo: harry,
    name: "Harry Wang",
    titles: ["Content Manager", roles.videoInstructor],
    github: "harrywangatx",
    website: "https://harrycodes.com",
    email: "qiwang@joincpi.org",
    youtube: "https://www.youtube.com/channel/UCXMWyG1D_a_b2HRLlBPkGMw",
  },
  jay: {
    photo: jay,
    name: "Jay Fu",
    titles: [
      "Director of Classes",
      roles.liveInstructor,
      roles.videoInstructor,
    ],
    email: "jayfu03@gmail.com",
  },
  jeffrey: {
    photo: jeffrey,
    name: "Jeffrey Meng",
    titles: ["Director of Operations", roles.videoInstructor],
    github: "jeffreymeng",
    website: "https://jeffkmeng.com",
  },
  jesse: {
    photo: jesse,
    name: "Jesse Choe",
    titles: [roles.contentAuthor],
    github: "jessechoe10",
    email: "jessechoe10@gmail.com",
    codeforces: "YoRepi7",
  },
  jonathan: {
    photo: jpaulson,
    name: "Jonathan Paulson",
    github: "jonathanpaulson",
    titles: [roles.videoInstructor],
  },
  maggie: {
    photo: maggie,
    name: "Maggie Liu",
    titles: ["Executive", roles.webdev, roles.videoInstructor],
    github: "maggie-j-liu",
    website: "https://maggieliu.dev",
    codeforces: "ml1234",
    email: "maggie.j.liu@gmail.com",
  },
  melody: {
    photo: melody,
    name: "Melody Yu",
    titles: ["Executive", "Director of Outreach", roles.videoInstructor],
    github: "cskitty",
    website: "https://melodyyu.com/",
    email: "ocmelodyyu@gmail.com",
    youtube: "https://www.youtube.com/channel/UCPkhk5gFov8vIPXj0zHyxEQ",
  },
  michael: {
    photo: michael,
    name: "Michael Cao",
    titles: [roles.founder, "Director of Clubs"],
    github: "caoash",
    codeforces: "caoash",
    email: "caoash@gmail.com",
  },
  mrinall: {
    photo: mrinall,
    name: "Mrinall Umasudhan",
    titles: [roles.webdev],
    github: "MrinallU",
  },
  nathanc: {
    photo: nathanc,
    name: "Nathan Chen",
    titles: [roles.founder, "Former Treasurer", "2x Finalist"],
    github: "nchn27",
    codeforces: "nchn27",
    email: "nchn27@gmail.com",
  },
  nathang: {
    photo: nathang,
    name: "Nathan Gong",
    titles: [roles.webdev, roles.contentAuthor],
    github: "nathangong",
  },
  nathanw: {
    photo: nathanw,
    name: "Nathan Wang",
    titles: [
      roles.founder,
      "Board",
      "3x Finalist",
      roles.webdev,
      roles.videoInstructor,
    ],
    github: "thecodingwizard",
    website: "https://thecodingwizard.me/",
    codeforces: "thecodingwizard",
    email: "nathan.r.wang@gmail.com",
  },
  neo: {
    photo: neo,
    name: "Neo Wang",
    titles: ["Content Manager", roles.videoInstructor, roles.webdev],
    github: "nwatx",
    website: "https://nwatx.me/",
    email: "neowangatx@gmail.com",
  },
  nikhil: {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    titles: [roles.liveInstructor, roles.videoInstructor, roles.clubCurriculum],
  },
  oscar: {
    photo: oscar,
    name: "Oscar Rendón",
    github: "orendon",
    titles: [roles.webdev, roles.clubCurriculum],
  },
  pranav: {
    photo: pranav,
    name: "Pranav Jadhav",
    titles: [roles.clubCurriculum],
    github: "pranavgithub1",
    email: "pra168109@gmail.com",
  },
  ramit: {
    photo: ramit,
    name: "Ramit Goyal",
    titles: [roles.videoInstructor],
    email: "24ramitg@students.harker.org",
    instagram: "ramit_goyal24",
  },
  ryan: {
    photo: ryan,
    name: "Ryan Chou",
    titles: [roles.liveInstructor, roles.videoInstructor, roles.contentAuthor],
    github: "ryanchou-dev",
    website: "https://www.ryanchou.dev/",
  },
  siyong: {
    photo: siyong,
    name: "Siyong Huang",
    titles: [roles.founder],
    github: "frodakcin",
    codeforces: "frodakcin",
  },
  sofia: {
    photo: sofia,
    name: "Sofia Yang",
    github: "TruaShamu",
    titles: [roles.contentAuthor],
  },
  varun: {
    photo: varun,
    name: "Varun Ragunath",
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  vikas_thoutam: {
    photo: vikas_thoutam,
    name: "Vikas Thoutam",
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: "vikas.thoutam@gmail.com",
  },
  vivian: {
    photo: vivian,
    name: "Vivian Han",
    github: "vivianhan404",
    titles: [roles.videoInstructor],
  },
  yifan: {
    photo: yifan_ma,
    name: "Yifan Ma",
    titles: [roles.videoInstructor],
  },
}

const notPictured: Omit<Member, "photo">[] = [
  {
    name: "Kevin Sheng",
    titles: [roles.contentAuthor],
    github: "sanspapyrus683",
  },
  {
    name: "Shreyas Thumathy",
    titles: [roles.liveInstructor, roles.clubCurriculum],
    github: "therealshreyas",
  },
  {
    name: "Sathvik Chundru",
    titles: [roles.contentAuthor],
    github: "sathu-beep",
    codeforces: "sus",
  },
]
const orderedFirst: Member[] = [
  members.nathanw,
  members.darren,
  members.benq,
  members.maggie,
  members.melody,
  members.daniel,
  members.jeffrey,
  members.michael,
  members.dong,
  members.harry,
  members.neo,
  members.jay,
  members.amy,
  members.andi,
  members.andrew,
  members.nathanc,
  members.siyong,
]
const rest: Member[] = [
  members.mrinall,
  members.nathang,
  members.oscar,
  members.amogha,
  members.atharv,
  members.david_li,
  members.davidz,
  members.nikhil,
  members.ryan,
  members.varun,
  members.vikas_thoutam,
  members.adham,
  members.dustin,
  // members.akshar,
  members.albertz,
  members.arpan,
  // members.egor,
  members.jonathan,
  // members.ramit,
  members.vivian,
  members.yifan,
  members.pranav,
  members.jesse,
  members.sofia,
  members.ben,
]
const sortedPeople = rest.sort((a, b) => {
  if (a.titles.length === b.titles.length) {
    return a.name.localeCompare(b.name)
  }
  return b.titles.length - a.titles.length
})
const people = [...orderedFirst, ...sortedPeople]
export default people
