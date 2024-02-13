"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {


   /* Team */
   const Team = require('../models/team')
   await Team.deleteMany()
   await Team.create({
    "_id": "65ca7f417e25757142c1bb74",
    "fullName": "Boston Celtics",
    "name": "Celtics",
    "abbreviation": "BOS",
    "city": "Boston",
    "conference": "East",
    "division": "Atlantic",
    "players":[
      '65caad0041a034d09007b784',
    '65caad0041a034d09007b786',
    '65caad0041a034d09007b787',
    '65caad0041a034d09007b788',
    '65caad0041a034d09007b789',
    '65caad0041a034d09007b78b',
    '65caad0041a034d09007b78a',
    '65caad0041a034d09007b78d',
    '65caad0041a034d09007b78c',
    '65caad0041a034d09007b78e',
    '65caad0041a034d09007b791',
    '65caad0041a034d09007b790',
    '65caad0041a034d09007b785',
    '65caad0041a034d09007b78f'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb73",
    "fullName": "Atlanta Hawks",
    "name": "Hawks",
    "abbreviation": "ATL",
    "city": "Atlanta",
    "conference": "East",
    "division": "Southeast",
    "players":[
      '65caad0041a034d09007b775',
    '65caad0041a034d09007b774',
    '65caad0041a034d09007b776',
    '65caad0041a034d09007b779',
    '65caad0041a034d09007b77a',
    '65caad0041a034d09007b77b',
    '65caad0041a034d09007b77c',
    '65caad0041a034d09007b77d',
    '65caad0041a034d09007b77e',
    '65caad0041a034d09007b77f',
    '65caad0041a034d09007b780',
    '65caad0041a034d09007b777',
    '65caad0041a034d09007b782',
    '65caad0041a034d09007b783',
    '65caad0041a034d09007b778',
    '65caad0041a034d09007b781'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb75",
    "fullName": "Brooklyn Nets",
    "name": "Nets",
    "abbreviation": "BKN",
    "city": "Brooklyn",
    "conference": "East",
    "division": "Atlantic",
    "players":[
      '65caad0041a034d09007b793',
    '65caad0041a034d09007b794',
    '65caad0041a034d09007b795',
    '65caad0041a034d09007b796',
    '65caad0041a034d09007b798',
    '65caad0041a034d09007b799',
    '65caad0041a034d09007b79a',
    '65caad0041a034d09007b79b',
    '65caad0041a034d09007b79c',
    '65caad0041a034d09007b792',
    '65caad0041a034d09007b79e',
    '65caad0041a034d09007b797',
    '65caad0041a034d09007b7a1',
    '65caad0041a034d09007b7a0',
    '65caad0041a034d09007b79d',
    '65caad0041a034d09007b79f'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb78",
    "fullName": "Cleveland Cavaliers",
    "name": "Cavaliers",
    "abbreviation": "CLE",
    "city": "Cleveland",
    "conference": "East",
    "division": "Central",
    "players":[
      '65caad0041a034d09007b7c4',
      '65caad0041a034d09007b7c5',
      '65caad0041a034d09007b7c6',
      '65caad0041a034d09007b7c7',
      '65caad0041a034d09007b7c9',
      '65caad0041a034d09007b7ca',
      '65caad0041a034d09007b7cb',
      '65caad0041a034d09007b7cd',
      '65caad0041a034d09007b7ce',
      '65caad0041a034d09007b7cf',
      '65caad0041a034d09007b7d0',
      '65caad0041a034d09007b7d1',
      '65caad0041a034d09007b7d2',
      '65caad0041a034d09007b7d3',
      '65caad0041a034d09007b7c8',
      '65caad0041a034d09007b7cc'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb79",
    "fullName": "Dallas Mavericks",
    "name": "Mavericks",
    "abbreviation": "DAL",
    "city": "Dallas",
    "conference": "West",
    "division": "Southwest",
    "players":[ '65caad0041a034d09007b7d4',
    '65caad0041a034d09007b7d5',
    '65caad0041a034d09007b7d6',
    '65caad0041a034d09007b7d7',
    '65caad0041a034d09007b7d8',
    '65caad0041a034d09007b7d9',
    '65caad0041a034d09007b7da',
    '65caad0041a034d09007b7db',
    '65caad0041a034d09007b7dc',
    '65caad0041a034d09007b7dd',
    '65caad0041a034d09007b7de'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb7a",
    "fullName": "Denver Nuggets",
    "name": "Nuggets",
    "abbreviation": "DEN",
    "city": "Denver",
    "conference": "West",
    "division": "Northwest",
    "players":[
      '65caad0041a034d09007b7df',
    '65caad0041a034d09007b7e0',
    '65caad0041a034d09007b7e1',
    '65caad0041a034d09007b7e2',
    '65caad0041a034d09007b7e3',
    '65caad0041a034d09007b7e4',
    '65caad0041a034d09007b7e5',
    '65caad0041a034d09007b7e7',
    '65caad0041a034d09007b7e8',
    '65caad0041a034d09007b7e6',
    '65caad0041a034d09007b7e9',
    '65caad0041a034d09007b7ec',
    '65caad0041a034d09007b7ea',
    '65caad0041a034d09007b7eb',
    '65caad0041a034d09007b7ed',
    '65caad0041a034d09007b7ee',
    '65caad0041a034d09007b7ef',
    '65caad0041a034d09007b7f0'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb76",
    "fullName": "Charlotte Hornets",
    "name": "Hornets",
    "abbreviation": "CHA",
    "city": "Charlotte",
    "conference": "East",
    "division": "Southeast",
    "players":[
      '65caad0041a034d09007b7a3',
      '65caad0041a034d09007b7a2',
      '65caad0041a034d09007b7a4',
      '65caad0041a034d09007b7a5',
      '65caad0041a034d09007b7a6',
      '65caad0041a034d09007b7a7',
      '65caad0041a034d09007b7a8',
      '65caad0041a034d09007b7a9',
      '65caad0041a034d09007b7aa',
      '65caad0041a034d09007b7ac',
      '65caad0041a034d09007b7ad',
      '65caad0041a034d09007b7ae',
      '65caad0041a034d09007b7af',
      '65caad0041a034d09007b7b1',
      '65caad0041a034d09007b7b2',
      '65caad0041a034d09007b7b3',
      '65caad0041a034d09007b7b4',
      '65caad0041a034d09007b7b5',
      '65caad0041a034d09007b7ab',
      '65caad0041a034d09007b7b0'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb7b",
    "fullName": "Detroit Pistons",
    "name": "Pistons",
    "abbreviation": "DET",
    "city": "Detroit",
    "conference": "East",
    "division": "Central",
    "players":[
      '65caad0041a034d09007b7f3',
      '65caad0041a034d09007b7f4',
      '65caad0041a034d09007b7f7',
      '65caad0041a034d09007b7f6',
      '65caad0041a034d09007b7f5',
      '65caad0041a034d09007b7f1',
      '65caad0041a034d09007b7f9',
      '65caad0041a034d09007b7f2',
      '65caad0041a034d09007b7fb',
      '65caad0041a034d09007b7fc',
      '65caad0041a034d09007b7ff',
      '65caad0041a034d09007b7fa',
      '65caad0041a034d09007b800',
      '65caad0041a034d09007b7fe',
      '65caad0041a034d09007b802',
      '65caad0041a034d09007b801',
      '65caad0041a034d09007b803',
      '65caad0041a034d09007b804',
      '65caad0041a034d09007b7fd',
      '65caad0041a034d09007b805',
      '65caad0041a034d09007b7f8'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb7c",
    "fullName": "Golden State Warriors",
    "name": "Warriors",
    "abbreviation": "GSW",
    "city": "Golden State",
    "conference": "West",
    "division": "Pacific",
    "players":[
      '65caad0041a034d09007b806',
      '65caad0041a034d09007b807',
      '65caad0041a034d09007b808',
      '65caad0041a034d09007b809',
      '65caad0041a034d09007b80a',
      '65caad0041a034d09007b80b',
      '65caad0041a034d09007b80c',
      '65caad0041a034d09007b80d',
      '65caad0041a034d09007b80e',
      '65caad0041a034d09007b80f',
      '65caad0041a034d09007b810',
      '65caad0041a034d09007b811',
      '65caad0041a034d09007b812',
      '65caad0041a034d09007b814',
      '65caad0041a034d09007b813'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb7e",
    "fullName": "Indiana Pacers",
    "name": "Pacers",
    "abbreviation": "IND",
    "city": "Indiana",
    "conference": "East",
    "division": "Central",
    "players":[
      '65caad0041a034d09007b823',
      '65caad0041a034d09007b825',
      '65caad0041a034d09007b826',
      '65caad0041a034d09007b827',
      '65caad0041a034d09007b828',
      '65caad0041a034d09007b829',
      '65caad0041a034d09007b82a',
      '65caad0041a034d09007b82b',
      '65caad0041a034d09007b82c',
      '65caad0041a034d09007b82d',
      '65caad0041a034d09007b82e',
      '65caad0041a034d09007b82f',
      '65caad0041a034d09007b830',
      '65caad0041a034d09007b831',
      '65caad0041a034d09007b832',
      '65caad0041a034d09007b824'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb7f",
    "fullName": "LA Clippers",
    "name": "Clippers",
    "abbreviation": "LAC",
    "city": "LA",
    "conference": "West",
    "division": "Pacific",
    "players":[
      '65caad0041a034d09007b833',
    '65caad0041a034d09007b834',
    '65caad0041a034d09007b835',
    '65caad0041a034d09007b836',
    '65caad0041a034d09007b837',
    '65caad0041a034d09007b838',
    '65caad0041a034d09007b839',
    '65caad0041a034d09007b83a',
    '65caad0041a034d09007b83b',
    '65caad0041a034d09007b83c',
    '65caad0041a034d09007b83d',
    '65caad0041a034d09007b83e',
    '65caad0041a034d09007b83f',
    '65caad0041a034d09007b840'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb80",
    "fullName": "Los Angeles Lakers",
    "name": "Lakers",
    "abbreviation": "LAL",
    "city": "Los Angeles",
    "conference": "West",
    "division": "Pacific",
     "players":[
      '65caad0041a034d09007b842',
      '65caad0041a034d09007b841',
      '65caad0041a034d09007b843',
      '65caad0041a034d09007b844',
      '65caad0041a034d09007b845',
      '65caad0041a034d09007b847',
      '65caad0041a034d09007b848',
      '65caad0041a034d09007b849',
      '65caad0041a034d09007b84a',
      '65caad0041a034d09007b84b',
      '65caad0041a034d09007b84c',
      '65caad0041a034d09007b84d',
      '65caad0041a034d09007b84e',
      '65caad0041a034d09007b846'
     ],

    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb81",
    "fullName": "Memphis Grizzlies",
    "name": "Grizzlies",
    "abbreviation": "MEM",
    "city": "Memphis",
    "conference": "West",
    "division": "Southwest",
    "players":[
      '65caad0041a034d09007b84f',
      '65caad0041a034d09007b850',
      '65caad0041a034d09007b851',
      '65caad0041a034d09007b852',
      '65caad0041a034d09007b853',
      '65caad0041a034d09007b854',
      '65caad0041a034d09007b855',
      '65caad0041a034d09007b856',
      '65caad0041a034d09007b857',
      '65caad0041a034d09007b858',
      '65caad0041a034d09007b859',
      '65caad0041a034d09007b85a',
      '65caad0041a034d09007b85b',
      '65caad0041a034d09007b85c',
      '65caad0041a034d09007b85d'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb82",
    "fullName": "Miami Heat",
    "name": "Heat",
    "abbreviation": "MIA",
    "city": "Miami",
    "conference": "East",
    "division": "Southeast",
    "players":[
      '65caad0041a034d09007b85e',
      '65caad0041a034d09007b85f',
      '65caad0041a034d09007b860',
      '65caad0041a034d09007b861',
      '65caad0041a034d09007b862',
      '65caad0041a034d09007b863',
      '65caad0041a034d09007b864',
      '65caad0041a034d09007b865',
      '65caad0041a034d09007b866',
      '65caad0041a034d09007b867',
      '65caad0041a034d09007b868',
      '65caad0041a034d09007b86a',
      '65caad0041a034d09007b86b',
      '65caad0041a034d09007b86c',
      '65caad0041a034d09007b86d',
      '65caad0041a034d09007b869'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb83",
    "fullName": "Milwaukee Bucks",
    "name": "Bucks",
    "abbreviation": "MIL",
    "city": "Milwaukee",
    "conference": "East",
    "division": "Central",
    "players":[
      '65caad0041a034d09007b86e',
      '65caad0041a034d09007b86f',
      '65caad0041a034d09007b870',
      '65caad0041a034d09007b871',
      '65caad0041a034d09007b872',
      '65caad0041a034d09007b873',
      '65caad0041a034d09007b874',
      '65caad0041a034d09007b875',
      '65caad0041a034d09007b876',
      '65caad0041a034d09007b877',
      '65caad0041a034d09007b878',
      '65caad0041a034d09007b879',
      '65caad0041a034d09007b87a',
      '65caad0041a034d09007b87b',
      '65caad0041a034d09007b87c'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb84",
    "fullName": "Minnesota Timberwolves",
    "name": "Timberwolves",
    "abbreviation": "MIN",
    "city": "Minnesota",
    "conference": "West",
    "division": "Northwest",
    "players":[
      '65caad0041a034d09007b87d',
      '65caad0041a034d09007b87e',
      '65caad0041a034d09007b87f',
      '65caad0041a034d09007b880',
      '65caad0041a034d09007b881',
      '65caad0041a034d09007b882',
      '65caad0041a034d09007b883',
      '65caad0041a034d09007b884',
      '65caad0041a034d09007b885',
      '65caad0041a034d09007b886',
      '65caad0041a034d09007b887',
      '65caad0041a034d09007b888',
      '65caad0041a034d09007b889',
      '65caad0041a034d09007b88a'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb85",
    "fullName": "New Orleans Pelicans",
    "name": "Pelicans",
    "abbreviation": "NOP",
    "city": "New Orleans",
    "conference": "West",
    "division": "Southwest",
    "players":[
      '65caad0041a034d09007b88b',
      '65caad0041a034d09007b88c',
      '65caad0041a034d09007b88d',
      '65caad0041a034d09007b88e',
      '65caad0041a034d09007b88f',
      '65caad0041a034d09007b891',
      '65caad0041a034d09007b892',
      '65caad0041a034d09007b893',
      '65caad0041a034d09007b894',
      '65caad0041a034d09007b895',
      '65caad0041a034d09007b896',
      '65caad0041a034d09007b890'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb86",
    "fullName": "New York Knicks",
    "name": "Knicks",
    "abbreviation": "NYK",
    "city": "New York",
    "conference": "East",
    "division": "Atlantic",
    "players":[
      '65caad0041a034d09007b897',
    '65caad0041a034d09007b898',
    '65caad0041a034d09007b899',
    '65caad0041a034d09007b89a',
    '65caad0041a034d09007b89b',
    '65caad0041a034d09007b89c',
    '65caad0041a034d09007b89d',
    '65caad0041a034d09007b89e',
    '65caad0041a034d09007b89f',
    '65caad0041a034d09007b8a0',
    '65caad0041a034d09007b8a1',
    '65caad0041a034d09007b8a2',
    '65caad0041a034d09007b8a3',
    '65caad0041a034d09007b8a4'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb87",
    "fullName": "Oklahoma City Thunder",
    "name": "Thunder",
    "abbreviation": "OKC",
    "city": "Oklahoma City",
    "conference": "West",
    "division": "Northwest",
    "players":[
      '65caad0041a034d09007b8a5',
      '65caad0041a034d09007b8a7',
      '65caad0041a034d09007b8a8',
      '65caad0041a034d09007b8a9',
      '65caad0041a034d09007b8aa',
      '65caad0041a034d09007b8ab',
      '65caad0041a034d09007b8ac',
      '65caad0041a034d09007b8ad',
      '65caad0041a034d09007b8ae',
      '65caad0041a034d09007b8af',
      '65caad0041a034d09007b8b0',
      '65caad0041a034d09007b8b1',
      '65caad0041a034d09007b8b2',
      '65caad0041a034d09007b8b3',
      '65caad0041a034d09007b8a6'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb88",
    "fullName": "Orlando Magic",
    "name": "Magic",
    "abbreviation": "ORL",
    "city": "Orlando",
    "conference": "East",
    "division": "Southeast",
    "players":[
      '65caad0041a034d09007b8b4',
      '65caad0041a034d09007b8b5',
      '65caad0041a034d09007b8b6',
      '65caad0041a034d09007b8b7',
      '65caad0041a034d09007b8b8',
      '65caad0041a034d09007b8b9',
      '65caad0041a034d09007b8bb',
      '65caad0041a034d09007b8ba',
      '65caad0041a034d09007b8bc',
      '65caad0041a034d09007b8bd',
      '65caad0041a034d09007b8be',
      '65caad0041a034d09007b8bf',
      '65caad0041a034d09007b8c0',
      '65caad0041a034d09007b8c1',
      '65caad0041a034d09007b8c2',
      '65caad0041a034d09007b8c3',
      '65caad0041a034d09007b8c4',
      '65caad0041a034d09007b8c5'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb89",
    "fullName": "Philadelphia 76ers",
    "name": "76ers",
    "abbreviation": "PHI",
    "city": "Philadelphia",
    "conference": "East",
    "division": "Atlantic",
    "players":[
      '65caad0041a034d09007b8c6',
      '65caad0041a034d09007b8c7',
      '65caad0041a034d09007b8c8',
      '65caad0041a034d09007b8c9',
      '65caad0041a034d09007b8ca',
      '65caad0041a034d09007b8cb',
      '65caad0041a034d09007b8cc',
      '65caad0041a034d09007b8cd',
      '65caad0041a034d09007b8ce',
      '65caad0041a034d09007b8cf',
      '65caad0041a034d09007b8d0',
      '65caad0041a034d09007b8d1',
      '65caad0041a034d09007b8d2',
      '65caad0041a034d09007b8d3'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb8a",
    "fullName": "Phoenix Suns",
    "name": "Suns",
    "abbreviation": "PHX",
    "city": "Phoenix",
    "conference": "West",
    "division": "Pacific",
    "players":[
      '65caad0041a034d09007b8d4',
      '65caad0041a034d09007b8d5',
      '65caad0041a034d09007b8d6',
      '65caad0041a034d09007b8d7',
      '65caad0041a034d09007b8d8',
      '65caad0041a034d09007b8d9',
      '65caad0041a034d09007b8da',
      '65caad0041a034d09007b8db',
      '65caad0041a034d09007b8dc',
      '65caad0041a034d09007b8de',
      '65caad0041a034d09007b8dd',
      '65caad0041a034d09007b8e0',
      '65caad0041a034d09007b8df',
      '65caad0041a034d09007b8e1'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb8b",
    "fullName": "Portland Trail Blazers",
    "name": "Trail Blazers",
    "abbreviation": "POR",
    "city": "Portland",
    "conference": "West",
    "division": "Northwest",
    "players":[
      '65caad0041a034d09007b8e2',
      '65caad0041a034d09007b8e3',
      '65caad0041a034d09007b8e4',
      '65caad0041a034d09007b8e5',
      '65caad0041a034d09007b8e6',
      '65caad0041a034d09007b8e7',
      '65caad0041a034d09007b8e8',
      '65caad0041a034d09007b8e9',
      '65caad0041a034d09007b8eb',
      '65caad0041a034d09007b8ed',
      '65caad0041a034d09007b8ec',
      '65caad0041a034d09007b8ef',
      '65caad0041a034d09007b8f0',
      '65caad0041a034d09007b8ee',
      '65caad0041a034d09007b8f1',
      '65caad0041a034d09007b8f2',
      '65caad0041a034d09007b8f3',
      '65caad0041a034d09007b8ea'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb8c",
    "fullName": "Sacramento Kings",
    "name": "Kings",
    "abbreviation": "SAC",
    "city": "Sacramento",
    "conference": "West",
    "division": "Pacific",
    "players":[
      '65caad0041a034d09007b8f5',
      '65caad0041a034d09007b8f4',
      '65caad0041a034d09007b8f6',
      '65caad0041a034d09007b8f7',
      '65caad0041a034d09007b8f8',
      '65caad0041a034d09007b8f9',
      '65caad0041a034d09007b8fa',
      '65caad0041a034d09007b8fb',
      '65caad0041a034d09007b8fc',
      '65caad0041a034d09007b8fd',
      '65caad0041a034d09007b8fe',
      '65caad0041a034d09007b8ff',
      '65caad0041a034d09007b900',
      '65caad0041a034d09007b901',
      '65caad0041a034d09007b902'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb8d",
    "fullName": "San Antonio Spurs",
    "name": "Spurs",
    "abbreviation": "SAS",
    "city": "San Antonio",
    "conference": "West",
    "division": "Southwest",

    "players":[
      '65caad0041a034d09007b903',
      '65caad0041a034d09007b904',
      '65caad0041a034d09007b905',
      '65caad0041a034d09007b906',
      '65caad0041a034d09007b907',
      '65caad0041a034d09007b908',
      '65caad0041a034d09007b909',
      '65caad0041a034d09007b90a',
      '65caad0041a034d09007b90b',
      '65caad0041a034d09007b90c',
      '65caad0041a034d09007b90d',
      '65caad0041a034d09007b90e',
      '65caad0041a034d09007b90f'
    ],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb8e",
    "fullName": "Toronto Raptors",
    "name": "Raptors",
    "abbreviation": "TOR",
    "city": "Toronto",
    "conference": "East",
    "division": "Atlantic",
    "players":[  '65caad0041a034d09007b910',
    '65caad0041a034d09007b911',
    '65caad0041a034d09007b912',
    '65caad0041a034d09007b913',
    '65caad0041a034d09007b914',
    '65caad0041a034d09007b915',
    '65caad0041a034d09007b916',
    '65caad0041a034d09007b917',
    '65caad0041a034d09007b918',
    '65caad0041a034d09007b919',
    '65caad0041a034d09007b91b',
    '65caad0041a034d09007b91a',
    '65caad0041a034d09007b91c',
    '65caad0041a034d09007b91e',
    '65caad0041a034d09007b91d',
    '65caad0041a034d09007b91f'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb8f",
    "fullName": "Utah Jazz",
    "name": "Jazz",
    "abbreviation": "UTA",
    "city": "Utah",
    "conference": "West",
    "division": "Northwest",
    "players":[ '65caad0041a034d09007b920',
    '65caad0041a034d09007b921',
    '65caad0041a034d09007b922',
    '65caad0041a034d09007b923',
    '65caad0041a034d09007b924',
    '65caad0041a034d09007b925',
    '65caad0041a034d09007b926',
    '65caad0041a034d09007b927',
    '65caad0041a034d09007b92a',
    '65caad0041a034d09007b92b',
    '65caad0041a034d09007b92c',
    '65caad0041a034d09007b92d',
    '65caad0041a034d09007b928',
    '65caad0041a034d09007b929'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb90",
    "fullName": "Washington Wizards",
    "name": "Wizards",
    "abbreviation": "WAS",
    "city": "Washington",
    "conference": "East",
    "division": "Southeast",
    "players":['65caad0041a034d09007b92e',
    '65caad0041a034d09007b92f',
    '65caad0041a034d09007b930',
    '65caad0041a034d09007b931',
    '65caad0041a034d09007b932',
    '65caad0041a034d09007b933',
    '65caad0041a034d09007b934',
    '65caad0041a034d09007b935',
    '65caad0041a034d09007b936',
    '65caad0041a034d09007b937',
    '65caad0041a034d09007b938',
    '65caad0041a034d09007b939',
    '65caad0041a034d09007b93a',
    '65caad0041a034d09007b93b',
    '65caad0041a034d09007b93c',
    '65caad0041a034d09007b93d',
    '65caad0041a034d09007b93e',
    '65caad0041a034d09007b93f'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb77",
    "fullName": "Chicago Bulls",
    "name": "Bulls",
    "abbreviation": "CHI",
    "city": "Chicago",
    "conference": "East",
    "division": "Central",
    "players":['65caad0041a034d09007b7b8',
    '65caad0041a034d09007b7b9',
    '65caad0041a034d09007b7ba',
    '65caad0041a034d09007b7b7',
    '65caad0041a034d09007b7b6',
    '65caad0041a034d09007b7bb',
    '65caad0041a034d09007b7bd',
    '65caad0041a034d09007b7be',
    '65caad0041a034d09007b7bc',
    '65caad0041a034d09007b7bf',
    '65caad0041a034d09007b7c0',
    '65caad0041a034d09007b7c1',
    '65caad0041a034d09007b7c2',
    '65caad0041a034d09007b7c3'],
    "__v": 0
  },
  {
    "_id": "65ca7f417e25757142c1bb7d",
    "fullName": "Houston Rockets",
    "name": "Rockets",
    "abbreviation": "HOU",
    "city": "Houston",
    "conference": "West",
    "division": "Southwest",
    "players":[
      '65caad0041a034d09007b815',
    '65caad0041a034d09007b818',
    '65caad0041a034d09007b816',
    '65caad0041a034d09007b819',
    '65caad0041a034d09007b81a',
    '65caad0041a034d09007b81b',
    '65caad0041a034d09007b81c',
    '65caad0041a034d09007b81d',
    '65caad0041a034d09007b81f',
    '65caad0041a034d09007b81e',
    '65caad0041a034d09007b820',
    '65caad0041a034d09007b821',
    '65caad0041a034d09007b822',
    '65caad0041a034d09007b817'],
    "__v": 0
  })
   
 
  //  // /* player */
   const Player = require('../models/player')
   await Player.deleteMany()
   await Player.create({
    "_id": "65caad0041a034d09007b775",
    "fullName": "Patty Mills",
    "firstName": "Patty",
    "lastName": "Mills",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b774",
    "fullName": "Trae Young",
    "firstName": "Trae",
    "lastName": "Young",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b776",
    "fullName": "Kobe Bufkin",
    "firstName": "Kobe",
    "lastName": "Bufkin",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b779",
    "fullName": "Bogdan Bogdanovic",
    "firstName": "Bogdan",
    "lastName": "Bogdanovic",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b77a",
    "fullName": "Garrison Mathews",
    "firstName": "Garrison",
    "lastName": "Mathews",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b77b",
    "fullName": "Seth Lundy",
    "firstName": "Seth",
    "lastName": "Lundy",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b77c",
    "fullName": "Saddiq Bey",
    "firstName": "Saddiq",
    "lastName": "Bey",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b77d",
    "fullName": "Mouhamed Gueye",
    "firstName": "Mouhamed",
    "lastName": "Gueye",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b77e",
    "fullName": "Miles Norris",
    "firstName": "Miles",
    "lastName": "Norris",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b77f",
    "fullName": "Clint Capela",
    "firstName": "Clint",
    "lastName": "Capela",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b780",
    "fullName": "Onyeka Okongwu",
    "firstName": "Onyeka",
    "lastName": "Okongwu",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b777",
    "fullName": "Vit Krejci",
    "firstName": "Vit",
    "lastName": "Krejci",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b782",
    "fullName": "Jalen Johnson",
    "firstName": "Jalen",
    "lastName": "Johnson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b783",
    "fullName": "AJ Griffin",
    "firstName": "AJ",
    "lastName": "Griffin",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b784",
    "fullName": "Payton Pritchard",
    "firstName": "Payton",
    "lastName": "Pritchard",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b778",
    "fullName": "Dejounte Murray",
    "firstName": "Dejounte",
    "lastName": "Murray",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b786",
    "fullName": "Jayson Tatum",
    "firstName": "Jayson",
    "lastName": "Tatum",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b787",
    "fullName": "Sam Hauser",
    "firstName": "Sam",
    "lastName": "Hauser",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b788",
    "fullName": "Jordan Walsh",
    "firstName": "Jordan",
    "lastName": "Walsh",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b789",
    "fullName": "Kristaps Porzingis",
    "firstName": "Kristaps",
    "lastName": "Porzingis",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b78b",
    "fullName": "Luke Kornet",
    "firstName": "Luke",
    "lastName": "Kornet",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b78a",
    "fullName": "Oshae Brissett",
    "firstName": "Oshae",
    "lastName": "Brissett",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b78d",
    "fullName": "Jaylen Brown",
    "firstName": "Jaylen",
    "lastName": "Brown",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b78c",
    "fullName": "Al Horford",
    "firstName": "Al",
    "lastName": "Horford",
    "position": "C-F",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b78e",
    "fullName": "Derrick White",
    "firstName": "Derrick",
    "lastName": "White",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b781",
    "fullName": "Bruno Fernando",
    "firstName": "Bruno",
    "lastName": "Fernando",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb73",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b791",
    "fullName": "Nathan Knight",
    "firstName": "Nathan",
    "lastName": "Knight",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b790",
    "fullName": "Jrue Holiday",
    "firstName": "Jrue",
    "lastName": "Holiday",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b785",
    "fullName": "JD Davison",
    "firstName": "JD",
    "lastName": "Davison",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b793",
    "fullName": "Mikal Bridges",
    "firstName": "Mikal",
    "lastName": "Bridges",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b794",
    "fullName": "Armoni Brooks",
    "firstName": "Armoni",
    "lastName": "Brooks",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b795",
    "fullName": "Cam Thomas",
    "firstName": "Cam",
    "lastName": "Thomas",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b796",
    "fullName": "Lonnie Walker IV",
    "firstName": "Lonnie",
    "lastName": "Walker IV",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b798",
    "fullName": "Jalen Wilson",
    "firstName": "Jalen",
    "lastName": "Wilson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b799",
    "fullName": "Dorian Finney-Smith",
    "firstName": "Dorian",
    "lastName": "Finney-Smith",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b78f",
    "fullName": "Xavier Tillman",
    "firstName": "Xavier",
    "lastName": "Tillman",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb74",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b79a",
    "fullName": "Darius Bazley",
    "firstName": "Darius",
    "lastName": "Bazley",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b79b",
    "fullName": "Noah Clowney",
    "firstName": "Noah",
    "lastName": "Clowney",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b79c",
    "fullName": "Nicolas Claxton",
    "firstName": "Nicolas",
    "lastName": "Claxton",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b792",
    "fullName": "Dennis Smith Jr.",
    "firstName": "Dennis",
    "lastName": "Smith Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b79e",
    "fullName": "Duane Washington",
    "firstName": "Duane",
    "lastName": "Washington",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b797",
    "fullName": "Dariq Whitehead",
    "firstName": "Dariq",
    "lastName": "Whitehead",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a1",
    "fullName": "Keon Johnson",
    "firstName": "Keon",
    "lastName": "Johnson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a0",
    "fullName": "Nerlens Noel",
    "firstName": "Nerlens",
    "lastName": "Noel",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a3",
    "fullName": "LaMelo Ball",
    "firstName": "LaMelo",
    "lastName": "Ball",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a2",
    "fullName": "Amari Bailey",
    "firstName": "Amari",
    "lastName": "Bailey",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a4",
    "fullName": "Cody Martin",
    "firstName": "Cody",
    "lastName": "Martin",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a5",
    "fullName": "James Bouknight",
    "firstName": "James",
    "lastName": "Bouknight",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a6",
    "fullName": "Brandon Miller",
    "firstName": "Brandon",
    "lastName": "Miller",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a7",
    "fullName": "Xavier Sneed",
    "firstName": "Xavier",
    "lastName": "Sneed",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a8",
    "fullName": "Bryce McGowens",
    "firstName": "Bryce",
    "lastName": "McGowens",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7a9",
    "fullName": "Miles Bridges",
    "firstName": "Miles",
    "lastName": "Bridges",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7aa",
    "fullName": "Leaky Black",
    "firstName": "Leaky",
    "lastName": "Black",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b79d",
    "fullName": "Ben Simmons",
    "firstName": "Ben",
    "lastName": "Simmons",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ac",
    "fullName": "JT Thor",
    "firstName": "JT",
    "lastName": "Thor",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ad",
    "fullName": "Mark Williams",
    "firstName": "Mark",
    "lastName": "Williams",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ae",
    "fullName": "Nick Smith Jr.",
    "firstName": "Nick",
    "lastName": "Smith Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7af",
    "fullName": "Nick Richards",
    "firstName": "Nick",
    "lastName": "Richards",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b79f",
    "fullName": "Keita Bates-Diop",
    "firstName": "Keita",
    "lastName": "Bates-Diop",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb75",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b1",
    "fullName": "Grant Williams",
    "firstName": "Grant",
    "lastName": "Williams",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b2",
    "fullName": "Kyle Lowry",
    "firstName": "Kyle",
    "lastName": "Lowry",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b3",
    "fullName": "Tre Mann",
    "firstName": "Tre",
    "lastName": "Mann",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b4",
    "fullName": "Vasilije Micic",
    "firstName": "Vasilije",
    "lastName": "Micic",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b8",
    "fullName": "Lonzo Ball",
    "firstName": "Lonzo",
    "lastName": "Ball",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b9",
    "fullName": "Zach LaVine",
    "firstName": "Zach",
    "lastName": "LaVine",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ba",
    "fullName": "Alex Caruso",
    "firstName": "Alex",
    "lastName": "Caruso",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b7",
    "fullName": "Carlik Jones",
    "firstName": "Carlik",
    "lastName": "Jones",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b5",
    "fullName": "Davis Bertans",
    "firstName": "Davis",
    "lastName": "Bertans",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b6",
    "fullName": "Coby White",
    "firstName": "Coby",
    "lastName": "White",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7bb",
    "fullName": "Onuralp Bitim",
    "firstName": "Onuralp",
    "lastName": "Bitim",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7bd",
    "fullName": "Dalen Terry",
    "firstName": "Dalen",
    "lastName": "Terry",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7be",
    "fullName": "Patrick Williams",
    "firstName": "Patrick",
    "lastName": "Williams",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7bc",
    "fullName": "DeMar DeRozan",
    "firstName": "DeMar",
    "lastName": "DeRozan",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7bf",
    "fullName": "Torrey Craig",
    "firstName": "Torrey",
    "lastName": "Craig",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c0",
    "fullName": "Nikola Vucevic",
    "firstName": "Nikola",
    "lastName": "Vucevic",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c1",
    "fullName": "Andre Drummond",
    "firstName": "Andre",
    "lastName": "Drummond",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c2",
    "fullName": "Adama Sanogo",
    "firstName": "Adama",
    "lastName": "Sanogo",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c3",
    "fullName": "Jevon Carter",
    "firstName": "Jevon",
    "lastName": "Carter",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb77",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c4",
    "fullName": "Ty Jerome",
    "firstName": "Ty",
    "lastName": "Jerome",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c5",
    "fullName": "Craig Porter",
    "firstName": "Craig",
    "lastName": "Porter",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c6",
    "fullName": "Donovan Mitchell",
    "firstName": "Donovan",
    "lastName": "Mitchell",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c7",
    "fullName": "Caris LeVert",
    "firstName": "Caris",
    "lastName": "LeVert",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ab",
    "fullName": "Kai Jones",
    "firstName": "Kai",
    "lastName": "Jones",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c9",
    "fullName": "Isaac Okoro",
    "firstName": "Isaac",
    "lastName": "Okoro",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ca",
    "fullName": "Georges Niang",
    "firstName": "Georges",
    "lastName": "Niang",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7cb",
    "fullName": "Max Strus",
    "firstName": "Max",
    "lastName": "Strus",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7b0",
    "fullName": "Seth Curry",
    "firstName": "Seth",
    "lastName": "Curry",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb76",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7cd",
    "fullName": "Evan Mobley",
    "firstName": "Evan",
    "lastName": "Mobley",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ce",
    "fullName": "Dean Wade",
    "firstName": "Dean",
    "lastName": "Wade",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7cf",
    "fullName": "Jarrett Allen",
    "firstName": "Jarrett",
    "lastName": "Allen",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d0",
    "fullName": "Isaiah Mobley",
    "firstName": "Isaiah",
    "lastName": "Mobley",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d1",
    "fullName": "Damian Jones",
    "firstName": "Damian",
    "lastName": "Jones",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d2",
    "fullName": "Darius Garland",
    "firstName": "Darius",
    "lastName": "Garland",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d3",
    "fullName": "Ricky Rubio",
    "firstName": "Ricky",
    "lastName": "Rubio",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d4",
    "fullName": "Kyrie Irving",
    "firstName": "Kyrie",
    "lastName": "Irving",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d5",
    "fullName": "Dante Exum",
    "firstName": "Dante",
    "lastName": "Exum",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d6",
    "fullName": "Jaden Hardy",
    "firstName": "Jaden",
    "lastName": "Hardy",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d7",
    "fullName": "Tim Hardaway Jr.",
    "firstName": "Tim",
    "lastName": "Hardaway Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d8",
    "fullName": "Josh Green",
    "firstName": "Josh",
    "lastName": "Green",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7d9",
    "fullName": "AJ Lawson",
    "firstName": "AJ",
    "lastName": "Lawson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7da",
    "fullName": "Maxi Kleber",
    "firstName": "Maxi",
    "lastName": "Kleber",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7db",
    "fullName": "Dwight Powell",
    "firstName": "Dwight",
    "lastName": "Powell",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7dc",
    "fullName": "Dereck Lively II",
    "firstName": "Dereck",
    "lastName": "Lively II",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7dd",
    "fullName": "Luka Doncic",
    "firstName": "Luka",
    "lastName": "Doncic",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7de",
    "fullName": "Daniel Gafford",
    "firstName": "Daniel",
    "lastName": "Gafford",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb79",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7df",
    "fullName": "Jamal Murray",
    "firstName": "Jamal",
    "lastName": "Murray",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e0",
    "fullName": "Reggie Jackson",
    "firstName": "Reggie",
    "lastName": "Jackson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e1",
    "fullName": "Jalen Pickett",
    "firstName": "Jalen",
    "lastName": "Pickett",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e2",
    "fullName": "Collin Gillespie",
    "firstName": "Collin",
    "lastName": "Gillespie",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e3",
    "fullName": "Kentavious Caldwell-Pope",
    "firstName": "Kentavious",
    "lastName": "Caldwell-Pope",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e4",
    "fullName": "Christian Braun",
    "firstName": "Christian",
    "lastName": "Braun",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e5",
    "fullName": "Peyton Watson",
    "firstName": "Peyton",
    "lastName": "Watson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e7",
    "fullName": "Julian Strawther",
    "firstName": "Julian",
    "lastName": "Strawther",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e8",
    "fullName": "Aaron Gordon",
    "firstName": "Aaron",
    "lastName": "Gordon",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e6",
    "fullName": "Michael Porter Jr.",
    "firstName": "Michael",
    "lastName": "Porter Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7e9",
    "fullName": "Hunter Tyson",
    "firstName": "Hunter",
    "lastName": "Tyson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ec",
    "fullName": "Nikola Jokic",
    "firstName": "Nikola",
    "lastName": "Jokic",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ea",
    "fullName": "Vlatko Cancar",
    "firstName": "Vlatko",
    "lastName": "Cancar",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7c8",
    "fullName": "Sam Merrill",
    "firstName": "Sam",
    "lastName": "Merrill",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7eb",
    "fullName": "Braxton Key",
    "firstName": "Braxton",
    "lastName": "Key",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ed",
    "fullName": "DeAndre Jordan",
    "firstName": "DeAndre",
    "lastName": "Jordan",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ee",
    "fullName": "Zeke Nnaji",
    "firstName": "Zeke",
    "lastName": "Nnaji",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f3",
    "fullName": "Jaden Ivey",
    "firstName": "Jaden",
    "lastName": "Ivey",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ef",
    "fullName": "Justin Holiday",
    "firstName": "Justin",
    "lastName": "Holiday",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f4",
    "fullName": "Marcus Sasser",
    "firstName": "Marcus",
    "lastName": "Sasser",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f7",
    "fullName": "Joe Harris",
    "firstName": "Joe",
    "lastName": "Harris",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f6",
    "fullName": "Ausar Thompson",
    "firstName": "Ausar",
    "lastName": "Thompson",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f5",
    "fullName": "Jared Rhoden",
    "firstName": "Jared",
    "lastName": "Rhoden",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f1",
    "fullName": "Cade Cunningham",
    "firstName": "Cade",
    "lastName": "Cunningham",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7cc",
    "fullName": "Emoni Bates",
    "firstName": "Emoni",
    "lastName": "Bates",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb78",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f9",
    "fullName": "Jalen Duren",
    "firstName": "Jalen",
    "lastName": "Duren",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f2",
    "fullName": "Killian Hayes",
    "firstName": "Killian",
    "lastName": "Hayes",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7fb",
    "fullName": "Isaiah Stewart",
    "firstName": "Isaiah",
    "lastName": "Stewart",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7fc",
    "fullName": "Zavier Simpson",
    "firstName": "Zavier",
    "lastName": "Simpson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7ff",
    "fullName": "Evan Fournier",
    "firstName": "Evan",
    "lastName": "Fournier",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7fa",
    "fullName": "James Wiseman",
    "firstName": "James",
    "lastName": "Wiseman",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b800",
    "fullName": "Quentin Grimes",
    "firstName": "Quentin",
    "lastName": "Grimes",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7fe",
    "fullName": "Troy Brown Jr.",
    "firstName": "Troy",
    "lastName": "Brown Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b802",
    "fullName": "Malachi Flynn",
    "firstName": "Malachi",
    "lastName": "Flynn",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b801",
    "fullName": "Kevin Knox",
    "firstName": "Kevin",
    "lastName": "Knox",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b803",
    "fullName": "Simone Fontecchio",
    "firstName": "Simone",
    "lastName": "Fontecchio",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b804",
    "fullName": "Danilo Gallinari",
    "firstName": "Danilo",
    "lastName": "Gallinari",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7fd",
    "fullName": "Shake Milton",
    "firstName": "Shake",
    "lastName": "Milton",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b805",
    "fullName": "Mike Muscala",
    "firstName": "Mike",
    "lastName": "Muscala",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b806",
    "fullName": "Stephen Curry",
    "firstName": "Stephen",
    "lastName": "Curry",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b807",
    "fullName": "Chris Paul",
    "firstName": "Chris",
    "lastName": "Paul",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b808",
    "fullName": "Cory Joseph",
    "firstName": "Cory",
    "lastName": "Joseph",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b809",
    "fullName": "Gary Payton II",
    "firstName": "Gary",
    "lastName": "Payton II",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b80a",
    "fullName": "Brandin Podziemski",
    "firstName": "Brandin",
    "lastName": "Podziemski",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b80b",
    "fullName": "Andrew Wiggins",
    "firstName": "Andrew",
    "lastName": "Wiggins",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b80c",
    "fullName": "Lester Quinones",
    "firstName": "Lester",
    "lastName": "Quinones",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b80d",
    "fullName": "Moses Moody",
    "firstName": "Moses",
    "lastName": "Moody",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b80e",
    "fullName": "Dario Saric",
    "firstName": "Dario",
    "lastName": "Saric",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b80f",
    "fullName": "Draymond Green",
    "firstName": "Draymond",
    "lastName": "Green",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b810",
    "fullName": "Jonathan Kuminga",
    "firstName": "Jonathan",
    "lastName": "Kuminga",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b811",
    "fullName": "Kevon Looney",
    "firstName": "Kevon",
    "lastName": "Looney",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b812",
    "fullName": "Trayce Jackson-Davis",
    "firstName": "Trayce",
    "lastName": "Jackson-Davis",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b815",
    "fullName": "Fred VanVleet",
    "firstName": "Fred",
    "lastName": "VanVleet",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b814",
    "fullName": "Usman Garuba",
    "firstName": "Usman",
    "lastName": "Garuba",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b813",
    "fullName": "Klay Thompson",
    "firstName": "Klay",
    "lastName": "Thompson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b818",
    "fullName": "Jalen Green",
    "firstName": "Jalen",
    "lastName": "Green",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b816",
    "fullName": "Amen Thompson",
    "firstName": "Amen",
    "lastName": "Thompson",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f0",
    "fullName": "Jay Huff",
    "firstName": "Jay",
    "lastName": "Huff",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb7a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b819",
    "fullName": "Trevor Hudgins",
    "firstName": "Trevor",
    "lastName": "Hudgins",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b81a",
    "fullName": "Kevin Porter Jr.",
    "firstName": "Kevin",
    "lastName": "Porter Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b81b",
    "fullName": "Cam Whitmore",
    "firstName": "Cam",
    "lastName": "Whitmore",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b81c",
    "fullName": "Jabari Smith Jr.",
    "firstName": "Jabari",
    "lastName": "Smith Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b81d",
    "fullName": "Dillon Brooks",
    "firstName": "Dillon",
    "lastName": "Brooks",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b81f",
    "fullName": "Jock Landale",
    "firstName": "Jock",
    "lastName": "Landale",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b81e",
    "fullName": "Darius Days",
    "firstName": "Darius",
    "lastName": "Days",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b820",
    "fullName": "Jeff Green",
    "firstName": "Jeff",
    "lastName": "Green",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b821",
    "fullName": "Steven Adams",
    "firstName": "Steven",
    "lastName": "Adams",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b822",
    "fullName": "Reggie Bullock",
    "firstName": "Reggie",
    "lastName": "Bullock",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b823",
    "fullName": "Tyrese Haliburton",
    "firstName": "Tyrese",
    "lastName": "Haliburton",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b7f8",
    "fullName": "Malcolm Cazalon",
    "firstName": "Malcolm",
    "lastName": "Cazalon",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b825",
    "fullName": "Bennedict Mathurin",
    "firstName": "Bennedict",
    "lastName": "Mathurin",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b826",
    "fullName": "Ben Sheppard",
    "firstName": "Ben",
    "lastName": "Sheppard",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b827",
    "fullName": "Isaiah Wong",
    "firstName": "Isaiah",
    "lastName": "Wong",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b828",
    "fullName": "Aaron Nesmith",
    "firstName": "Aaron",
    "lastName": "Nesmith",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b829",
    "fullName": "Kendall Brown",
    "firstName": "Kendall",
    "lastName": "Brown",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b82a",
    "fullName": "Jarace Walker",
    "firstName": "Jarace",
    "lastName": "Walker",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b82b",
    "fullName": "Obi Toppin",
    "firstName": "Obi",
    "lastName": "Toppin",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b82c",
    "fullName": "Jalen Smith",
    "firstName": "Jalen",
    "lastName": "Smith",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b82d",
    "fullName": "Myles Turner",
    "firstName": "Myles",
    "lastName": "Turner",
    "position": "C-F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b82e",
    "fullName": "Isaiah Jackson",
    "firstName": "Isaiah",
    "lastName": "Jackson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b82f",
    "fullName": "Oscar Tshiebwe",
    "firstName": "Oscar",
    "lastName": "Tshiebwe",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b830",
    "fullName": "Doug McDermott",
    "firstName": "Doug",
    "lastName": "McDermott",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b831",
    "fullName": "Pascal Siakam",
    "firstName": "Pascal",
    "lastName": "Siakam",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b832",
    "fullName": "Johnny Davis",
    "firstName": "Johnny",
    "lastName": "Davis",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b833",
    "fullName": "Daniel Theis",
    "firstName": "Daniel",
    "lastName": "Theis",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b834",
    "fullName": "Russell Westbrook",
    "firstName": "Russell",
    "lastName": "Westbrook",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b835",
    "fullName": "Paul George",
    "firstName": "Paul",
    "lastName": "George",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b836",
    "fullName": "Norman Powell",
    "firstName": "Norman",
    "lastName": "Powell",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b837",
    "fullName": "Brandon Boston Jr.",
    "firstName": "Brandon",
    "lastName": "Boston Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b838",
    "fullName": "Amir Coffey",
    "firstName": "Amir",
    "lastName": "Coffey",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b839",
    "fullName": "Kawhi Leonard",
    "firstName": "Kawhi",
    "lastName": "Leonard",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b83a",
    "fullName": "Terance Mann",
    "firstName": "Terance",
    "lastName": "Mann",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b83b",
    "fullName": "Kobe Brown",
    "firstName": "Kobe",
    "lastName": "Brown",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b83c",
    "fullName": "Ivica Zubac",
    "firstName": "Ivica",
    "lastName": "Zubac",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b83d",
    "fullName": "Moussa Diabate",
    "firstName": "Moussa",
    "lastName": "Diabate",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b83e",
    "fullName": "Mason Plumlee",
    "firstName": "Mason",
    "lastName": "Plumlee",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b83f",
    "fullName": "James Harden",
    "firstName": "James",
    "lastName": "Harden",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b840",
    "fullName": "PJ Tucker",
    "firstName": "PJ",
    "lastName": "Tucker",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb7f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b842",
    "fullName": "Jalen Hood-Schifino",
    "firstName": "Jalen",
    "lastName": "Hood-Schifino",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b841",
    "fullName": "Spencer Dinwiddie",
    "firstName": "Spencer",
    "lastName": "Dinwiddie",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b843",
    "fullName": "Austin Reaves",
    "firstName": "Austin",
    "lastName": "Reaves",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b844",
    "fullName": "LeBron James",
    "firstName": "LeBron",
    "lastName": "James",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b845",
    "fullName": "Max Christie",
    "firstName": "Max",
    "lastName": "Christie",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b817",
    "fullName": "Aaron Holiday",
    "firstName": "Aaron",
    "lastName": "Holiday",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb7d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b847",
    "fullName": "Alex Fudge",
    "firstName": "Alex",
    "lastName": "Fudge",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b848",
    "fullName": "Maxwell Lewis",
    "firstName": "Maxwell",
    "lastName": "Lewis",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b849",
    "fullName": "Rui Hachimura",
    "firstName": "Rui",
    "lastName": "Hachimura",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b84a",
    "fullName": "Anthony Davis",
    "firstName": "Anthony",
    "lastName": "Davis",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b84b",
    "fullName": "Jarred Vanderbilt",
    "firstName": "Jarred",
    "lastName": "Vanderbilt",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b84c",
    "fullName": "Jaxson Hayes",
    "firstName": "Jaxson",
    "lastName": "Hayes",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b84d",
    "fullName": "Gabe Vincent",
    "firstName": "Gabe",
    "lastName": "Vincent",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b84e",
    "fullName": "Dylan Windler",
    "firstName": "Dylan",
    "lastName": "Windler",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b84f",
    "fullName": "Kobi Simmons",
    "firstName": "Kobi",
    "lastName": "Simmons",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b850",
    "fullName": "Ja Morant",
    "firstName": "Ja",
    "lastName": "Morant",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b851",
    "fullName": "Derrick Rose",
    "firstName": "Derrick",
    "lastName": "Rose",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b852",
    "fullName": "Jacob Gilyard",
    "firstName": "Jacob",
    "lastName": "Gilyard",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b853",
    "fullName": "Luke Kennard",
    "firstName": "Luke",
    "lastName": "Kennard",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b854",
    "fullName": "John Konchar",
    "firstName": "John",
    "lastName": "Konchar",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b855",
    "fullName": "Desmond Bane",
    "firstName": "Desmond",
    "lastName": "Bane",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b856",
    "fullName": "Ziaire Williams",
    "firstName": "Ziaire",
    "lastName": "Williams",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b857",
    "fullName": "Vince Williams Jr.",
    "firstName": "Vince",
    "lastName": "Williams Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b858",
    "fullName": "Jaren Jackson Jr.",
    "firstName": "Jaren",
    "lastName": "Jackson Jr.",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b859",
    "fullName": "Brandon Clarke",
    "firstName": "Brandon",
    "lastName": "Clarke",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b85a",
    "fullName": "Jake LaRavia",
    "firstName": "Jake",
    "lastName": "LaRavia",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b85b",
    "fullName": "Santi Aldama",
    "firstName": "Santi",
    "lastName": "Aldama",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b85c",
    "fullName": "Marcus Smart",
    "firstName": "Marcus",
    "lastName": "Smart",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b85d",
    "fullName": "Yuta Watanabe",
    "firstName": "Yuta",
    "lastName": "Watanabe",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb81",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b85e",
    "fullName": "Terry Rozier",
    "firstName": "Terry",
    "lastName": "Rozier",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b85f",
    "fullName": "Dru Smith",
    "firstName": "Dru",
    "lastName": "Smith",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b860",
    "fullName": "Tyler Herro",
    "firstName": "Tyler",
    "lastName": "Herro",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b861",
    "fullName": "Josh Richardson",
    "firstName": "Josh",
    "lastName": "Richardson",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b862",
    "fullName": "Duncan Robinson",
    "firstName": "Duncan",
    "lastName": "Robinson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b863",
    "fullName": "Jimmy Butler",
    "firstName": "Jimmy",
    "lastName": "Butler",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b864",
    "fullName": "Jaime Jaquez Jr.",
    "firstName": "Jaime",
    "lastName": "Jaquez Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b865",
    "fullName": "Nikola Jovic",
    "firstName": "Nikola",
    "lastName": "Jovic",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b866",
    "fullName": "Caleb Martin",
    "firstName": "Caleb",
    "lastName": "Martin",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b867",
    "fullName": "Kevin Love",
    "firstName": "Kevin",
    "lastName": "Love",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b868",
    "fullName": "Haywood Highsmith",
    "firstName": "Haywood",
    "lastName": "Highsmith",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b824",
    "fullName": "Andrew Nembhard",
    "firstName": "Andrew",
    "lastName": "Nembhard",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb7e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b86a",
    "fullName": "Thomas Bryant",
    "firstName": "Thomas",
    "lastName": "Bryant",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b86b",
    "fullName": "Orlando Robinson",
    "firstName": "Orlando",
    "lastName": "Robinson",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b86c",
    "fullName": "Victor Oladipo",
    "firstName": "Victor",
    "lastName": "Oladipo",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b86d",
    "fullName": "Micah Potter",
    "firstName": "Micah",
    "lastName": "Potter",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b86e",
    "fullName": "Andre Jackson Jr.",
    "firstName": "Andre",
    "lastName": "Jackson Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b86f",
    "fullName": "Malik Beasley",
    "firstName": "Malik",
    "lastName": "Beasley",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b870",
    "fullName": "Lindell Wigginton",
    "firstName": "Lindell",
    "lastName": "Wigginton",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b871",
    "fullName": "Khris Middleton",
    "firstName": "Khris",
    "lastName": "Middleton",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b872",
    "fullName": "Pat Connaughton",
    "firstName": "Pat",
    "lastName": "Connaughton",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b873",
    "fullName": "MarJon Beauchamp",
    "firstName": "MarJon",
    "lastName": "Beauchamp",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b874",
    "fullName": "Chris Livingston",
    "firstName": "Chris",
    "lastName": "Livingston",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b875",
    "fullName": "Giannis Antetokounmpo",
    "firstName": "Giannis",
    "lastName": "Antetokounmpo",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b876",
    "fullName": "Jae Crowder",
    "firstName": "Jae",
    "lastName": "Crowder",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b877",
    "fullName": "Thanasis Antetokounmpo",
    "firstName": "Thanasis",
    "lastName": "Antetokounmpo",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b878",
    "fullName": "Brook Lopez",
    "firstName": "Brook",
    "lastName": "Lopez",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b879",
    "fullName": "Bobby Portis",
    "firstName": "Bobby",
    "lastName": "Portis",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b87a",
    "fullName": "Robin Lopez",
    "firstName": "Robin",
    "lastName": "Lopez",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b87b",
    "fullName": "Patrick Beverley",
    "firstName": "Patrick",
    "lastName": "Beverley",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b87c",
    "fullName": "Damian Lillard",
    "firstName": "Damian",
    "lastName": "Lillard",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb83",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b87d",
    "fullName": "Monte Morris",
    "firstName": "Monte",
    "lastName": "Morris",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b87e",
    "fullName": "Mike Conley",
    "firstName": "Mike",
    "lastName": "Conley",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b87f",
    "fullName": "Jordan McLaughlin",
    "firstName": "Jordan",
    "lastName": "McLaughlin",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b880",
    "fullName": "Anthony Edwards",
    "firstName": "Anthony",
    "lastName": "Edwards",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b881",
    "fullName": "Wendell Moore Jr.",
    "firstName": "Wendell",
    "lastName": "Moore Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b882",
    "fullName": "Jaylen Clark",
    "firstName": "Jaylen",
    "lastName": "Clark",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b883",
    "fullName": "Jaden McDaniels",
    "firstName": "Jaden",
    "lastName": "McDaniels",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b884",
    "fullName": "Leonard Miller",
    "firstName": "Leonard",
    "lastName": "Miller",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b885",
    "fullName": "Karl-Anthony Towns",
    "firstName": "Karl-Anthony",
    "lastName": "Towns",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b886",
    "fullName": "Kyle Anderson",
    "firstName": "Kyle",
    "lastName": "Anderson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b887",
    "fullName": "Josh Minott",
    "firstName": "Josh",
    "lastName": "Minott",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b888",
    "fullName": "Rudy Gobert",
    "firstName": "Rudy",
    "lastName": "Gobert",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b889",
    "fullName": "Naz Reid",
    "firstName": "Naz",
    "lastName": "Reid",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b88a",
    "fullName": "Luka Garza",
    "firstName": "Luka",
    "lastName": "Garza",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb84",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b88b",
    "fullName": "Jose Alvarado",
    "firstName": "Jose",
    "lastName": "Alvarado",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b88c",
    "fullName": "CJ McCollum",
    "firstName": "CJ",
    "lastName": "McCollum",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b88d",
    "fullName": "Herbert Jones",
    "firstName": "Herbert",
    "lastName": "Jones",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b88e",
    "fullName": "Dyson Daniels",
    "firstName": "Dyson",
    "lastName": "Daniels",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b88f",
    "fullName": "Jordan Hawkins",
    "firstName": "Jordan",
    "lastName": "Hawkins",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b846",
    "fullName": "Taurean Prince",
    "firstName": "Taurean",
    "lastName": "Prince",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb80",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b891",
    "fullName": "Brandon Ingram",
    "firstName": "Brandon",
    "lastName": "Ingram",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b892",
    "fullName": "Trey Murphy",
    "firstName": "Trey",
    "lastName": "Murphy",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b893",
    "fullName": "Naji Marshall",
    "firstName": "Naji",
    "lastName": "Marshall",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b894",
    "fullName": "Zion Williamson",
    "firstName": "Zion",
    "lastName": "Williamson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b895",
    "fullName": "Jonas Valanciunas",
    "firstName": "Jonas",
    "lastName": "Valanciunas",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b896",
    "fullName": "Cody Zeller",
    "firstName": "Cody",
    "lastName": "Zeller",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b897",
    "fullName": "Alec Burks",
    "firstName": "Alec",
    "lastName": "Burks",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b898",
    "fullName": "Bojan Bogdanovic",
    "firstName": "Bojan",
    "lastName": "Bogdanovic",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b899",
    "fullName": "Jalen Brunson",
    "firstName": "Jalen",
    "lastName": "Brunson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b89a",
    "fullName": "Miles McBride",
    "firstName": "Miles",
    "lastName": "McBride",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b89b",
    "fullName": "Donte DiVincenzo",
    "firstName": "Donte",
    "lastName": "DiVincenzo",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b89c",
    "fullName": "DaQuan Jeffries",
    "firstName": "DaQuan",
    "lastName": "Jeffries",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b89d",
    "fullName": "Julius Randle",
    "firstName": "Julius",
    "lastName": "Randle",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b89e",
    "fullName": "Mitchell Robinson",
    "firstName": "Mitchell",
    "lastName": "Robinson",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b89f",
    "fullName": "Isaiah Hartenstein",
    "firstName": "Isaiah",
    "lastName": "Hartenstein",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a0",
    "fullName": "Isaiah Roby",
    "firstName": "Isaiah",
    "lastName": "Roby",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a1",
    "fullName": "Jericho Sims",
    "firstName": "Jericho",
    "lastName": "Sims",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a2",
    "fullName": "Josh Hart",
    "firstName": "Josh",
    "lastName": "Hart",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a3",
    "fullName": "OG Anunoby",
    "firstName": "OG",
    "lastName": "Anunoby",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a4",
    "fullName": "Precious Achiuwa",
    "firstName": "Precious",
    "lastName": "Achiuwa",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb86",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a5",
    "fullName": "Gordon Hayward",
    "firstName": "Gordon",
    "lastName": "Hayward",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b869",
    "fullName": "Bam Adebayo",
    "firstName": "Bam",
    "lastName": "Adebayo",
    "position": "C-F",
    "teamId": "65ca7f417e25757142c1bb82",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a7",
    "fullName": "Josh Giddey",
    "firstName": "Josh",
    "lastName": "Giddey",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a8",
    "fullName": "Shai Gilgeous-Alexander",
    "firstName": "Shai",
    "lastName": "Gilgeous-Alexander",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a9",
    "fullName": "Aaron Wiggins",
    "firstName": "Aaron",
    "lastName": "Wiggins",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8aa",
    "fullName": "Jalen Williams",
    "firstName": "Jalen",
    "lastName": "Williams",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ab",
    "fullName": "Keyontae Johnson",
    "firstName": "Keyontae",
    "lastName": "Johnson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ac",
    "fullName": "Luguentz Dort",
    "firstName": "Luguentz",
    "lastName": "Dort",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ad",
    "fullName": "Cason Wallace",
    "firstName": "Cason",
    "lastName": "Wallace",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ae",
    "fullName": "Kenrich Williams",
    "firstName": "Kenrich",
    "lastName": "Williams",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8af",
    "fullName": "Aleksej Pokusevski",
    "firstName": "Aleksej",
    "lastName": "Pokusevski",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b0",
    "fullName": "Jack White",
    "firstName": "Jack",
    "lastName": "White",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b1",
    "fullName": "Ousmane Dieng",
    "firstName": "Ousmane",
    "lastName": "Dieng",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b2",
    "fullName": "Jaylin Williams",
    "firstName": "Jaylin",
    "lastName": "Williams",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b3",
    "fullName": "Chet Holmgren",
    "firstName": "Chet",
    "lastName": "Holmgren",
    "position": "C-F",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b4",
    "fullName": "Jay Scrubb",
    "firstName": "Jay",
    "lastName": "Scrubb",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b5",
    "fullName": "Cole Anthony",
    "firstName": "Cole",
    "lastName": "Anthony",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b6",
    "fullName": "Anthony Black",
    "firstName": "Anthony",
    "lastName": "Black",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b7",
    "fullName": "Kevon Harris",
    "firstName": "Kevon",
    "lastName": "Harris",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b8",
    "fullName": "Markelle Fultz",
    "firstName": "Markelle",
    "lastName": "Fultz",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8b9",
    "fullName": "Jalen Suggs",
    "firstName": "Jalen",
    "lastName": "Suggs",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8bb",
    "fullName": "Jett Howard",
    "firstName": "Jett",
    "lastName": "Howard",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ba",
    "fullName": "Franz Wagner",
    "firstName": "Franz",
    "lastName": "Wagner",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8bc",
    "fullName": "Gary Harris",
    "firstName": "Gary",
    "lastName": "Harris",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8bd",
    "fullName": "Joe Ingles",
    "firstName": "Joe",
    "lastName": "Ingles",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8be",
    "fullName": "Caleb Houstan",
    "firstName": "Caleb",
    "lastName": "Houstan",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8bf",
    "fullName": "Admiral Schofield",
    "firstName": "Admiral",
    "lastName": "Schofield",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c0",
    "fullName": "Paolo Banchero",
    "firstName": "Paolo",
    "lastName": "Banchero",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c1",
    "fullName": "Chuma Okeke",
    "firstName": "Chuma",
    "lastName": "Okeke",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c2",
    "fullName": "Wendell Carter Jr.",
    "firstName": "Wendell",
    "lastName": "Carter Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c3",
    "fullName": "Moritz Wagner",
    "firstName": "Moritz",
    "lastName": "Wagner",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c4",
    "fullName": "Goga Bitadze",
    "firstName": "Goga",
    "lastName": "Bitadze",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c5",
    "fullName": "Jonathan Isaac",
    "firstName": "Jonathan",
    "lastName": "Isaac",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb88",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c6",
    "fullName": "Buddy Hield",
    "firstName": "Buddy",
    "lastName": "Hield",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c7",
    "fullName": "Nicolas Batum",
    "firstName": "Nicolas",
    "lastName": "Batum",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c8",
    "fullName": "Robert Covington",
    "firstName": "Robert",
    "lastName": "Covington",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8c9",
    "fullName": "Kenneth Lofton Jr.",
    "firstName": "Kenneth",
    "lastName": "Lofton Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ca",
    "fullName": "Tyrese Maxey",
    "firstName": "Tyrese",
    "lastName": "Maxey",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8cb",
    "fullName": "Furkan Korkmaz",
    "firstName": "Furkan",
    "lastName": "Korkmaz",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8cc",
    "fullName": "Ricky Council IV",
    "firstName": "Ricky",
    "lastName": "Council IV",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8cd",
    "fullName": "Tobias Harris",
    "firstName": "Tobias",
    "lastName": "Harris",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ce",
    "fullName": "Danuel House Jr.",
    "firstName": "Danuel",
    "lastName": "House Jr.",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8cf",
    "fullName": "Azuolas Tubelis",
    "firstName": "Azuolas",
    "lastName": "Tubelis",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d0",
    "fullName": "Joel Embiid",
    "firstName": "Joel",
    "lastName": "Embiid",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d1",
    "fullName": "Paul Reed",
    "firstName": "Paul",
    "lastName": "Reed",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d2",
    "fullName": "Mo Bamba",
    "firstName": "Mo",
    "lastName": "Bamba",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b890",
    "fullName": "Dereon Seabron",
    "firstName": "Dereon",
    "lastName": "Seabron",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb85",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d4",
    "fullName": "David Roddy",
    "firstName": "David",
    "lastName": "Roddy",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d5",
    "fullName": "Grayson Allen",
    "firstName": "Grayson",
    "lastName": "Allen",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d6",
    "fullName": "Larry Nance",
    "firstName": "Larry",
    "lastName": "Nance",
    "position": "",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d7",
    "fullName": "Devin Booker",
    "firstName": "Devin",
    "lastName": "Booker",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d8",
    "fullName": "Saben Lee",
    "firstName": "Saben",
    "lastName": "Lee",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d9",
    "fullName": "Bradley Beal",
    "firstName": "Bradley",
    "lastName": "Beal",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8da",
    "fullName": "Damion Lee",
    "firstName": "Damion",
    "lastName": "Lee",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8db",
    "fullName": "Josh Okogie",
    "firstName": "Josh",
    "lastName": "Okogie",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8dc",
    "fullName": "Kevin Durant",
    "firstName": "Kevin",
    "lastName": "Durant",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8de",
    "fullName": "Drew Eubanks",
    "firstName": "Drew",
    "lastName": "Eubanks",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8dd",
    "fullName": "Bol Bol",
    "firstName": "Bol",
    "lastName": "Bol",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e0",
    "fullName": "Nassir Little",
    "firstName": "Nassir",
    "lastName": "Little",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8df",
    "fullName": "Chimezie Metu",
    "firstName": "Chimezie",
    "lastName": "Metu",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e2",
    "fullName": "Malcolm Brogdon",
    "firstName": "Malcolm",
    "lastName": "Brogdon",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e1",
    "fullName": "Jusuf Nurkic",
    "firstName": "Jusuf",
    "lastName": "Nurkic",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8a",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e3",
    "fullName": "Dalano Banton",
    "firstName": "Dalano",
    "lastName": "Banton",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e4",
    "fullName": "Robert Williams III",
    "firstName": "Robert",
    "lastName": "Williams III",
    "position": "C-F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e5",
    "fullName": "Jamaree Bouyea",
    "firstName": "Jamaree",
    "lastName": "Bouyea",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e6",
    "fullName": "Ish Wainright",
    "firstName": "Ish",
    "lastName": "Wainright",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e7",
    "fullName": "Toumani Camara",
    "firstName": "Toumani",
    "lastName": "Camara",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e8",
    "fullName": "Deandre Ayton",
    "firstName": "Deandre",
    "lastName": "Ayton",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8e9",
    "fullName": "Scoot Henderson",
    "firstName": "Scoot",
    "lastName": "Henderson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8a6",
    "fullName": "Isaiah Joe",
    "firstName": "Isaiah",
    "lastName": "Joe",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb87",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8eb",
    "fullName": "Matisse Thybulle",
    "firstName": "Matisse",
    "lastName": "Thybulle",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ed",
    "fullName": "Rayan Rupert",
    "firstName": "Rayan",
    "lastName": "Rupert",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ec",
    "fullName": "Shaedon Sharpe",
    "firstName": "Shaedon",
    "lastName": "Sharpe",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ef",
    "fullName": "Kris Murray",
    "firstName": "Kris",
    "lastName": "Murray",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f0",
    "fullName": "Jabari Walker",
    "firstName": "Jabari",
    "lastName": "Walker",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ee",
    "fullName": "Jerami Grant",
    "firstName": "Jerami",
    "lastName": "Grant",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f1",
    "fullName": "Ibou Badji",
    "firstName": "Ibou",
    "lastName": "Badji",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f2",
    "fullName": "John Butler Jr.",
    "firstName": "John",
    "lastName": "Butler Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f3",
    "fullName": "Gary Trent Jr.",
    "firstName": "Gary",
    "lastName": "Trent Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f5",
    "fullName": "Filip Petrusev",
    "firstName": "Filip",
    "lastName": "Petrusev",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f4",
    "fullName": "JaVale McGee",
    "firstName": "JaVale",
    "lastName": "McGee",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f6",
    "fullName": "Davion Mitchell",
    "firstName": "Davion",
    "lastName": "Mitchell",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f7",
    "fullName": "Kevin Huerter",
    "firstName": "Kevin",
    "lastName": "Huerter",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f8",
    "fullName": "Malik Monk",
    "firstName": "Malik",
    "lastName": "Monk",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8f9",
    "fullName": "Colby Jones",
    "firstName": "Colby",
    "lastName": "Jones",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8fa",
    "fullName": "Keon Ellis",
    "firstName": "Keon",
    "lastName": "Ellis",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8fb",
    "fullName": "Harrison Barnes",
    "firstName": "Harrison",
    "lastName": "Barnes",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8fc",
    "fullName": "Chris Duarte",
    "firstName": "Chris",
    "lastName": "Duarte",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8fd",
    "fullName": "Kessler Edwards",
    "firstName": "Kessler",
    "lastName": "Edwards",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8fe",
    "fullName": "Keegan Murray",
    "firstName": "Keegan",
    "lastName": "Murray",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ff",
    "fullName": "Trey Lyles",
    "firstName": "Trey",
    "lastName": "Lyles",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b900",
    "fullName": "Jalen Slawson",
    "firstName": "Jalen",
    "lastName": "Slawson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b901",
    "fullName": "Domantas Sabonis",
    "firstName": "Domantas",
    "lastName": "Sabonis",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b902",
    "fullName": "Alex Len",
    "firstName": "Alex",
    "lastName": "Len",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8c",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b903",
    "fullName": "Marcus Morris",
    "firstName": "Marcus",
    "lastName": "Morris",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b904",
    "fullName": "Tre Jones",
    "firstName": "Tre",
    "lastName": "Jones",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b905",
    "fullName": "Blake Wesley",
    "firstName": "Blake",
    "lastName": "Wesley",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b906",
    "fullName": "Devin Vassell",
    "firstName": "Devin",
    "lastName": "Vassell",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b907",
    "fullName": "Julian Champagnie",
    "firstName": "Julian",
    "lastName": "Champagnie",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b908",
    "fullName": "Keldon Johnson",
    "firstName": "Keldon",
    "lastName": "Johnson",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b909",
    "fullName": "Cedi Osman",
    "firstName": "Cedi",
    "lastName": "Osman",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b90a",
    "fullName": "Sidy Cissoko",
    "firstName": "Sidy",
    "lastName": "Cissoko",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b90b",
    "fullName": "Jeremy Sochan",
    "firstName": "Jeremy",
    "lastName": "Sochan",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b90c",
    "fullName": "Dominick Barlow",
    "firstName": "Dominick",
    "lastName": "Barlow",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b90d",
    "fullName": "Victor Wembanyama",
    "firstName": "Victor",
    "lastName": "Wembanyama",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b90e",
    "fullName": "Zach Collins",
    "firstName": "Zach",
    "lastName": "Collins",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b90f",
    "fullName": "Khem Birch",
    "firstName": "Khem",
    "lastName": "Birch",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8d",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b910",
    "fullName": "Bruce Brown",
    "firstName": "Bruce",
    "lastName": "Brown",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b911",
    "fullName": "Jordan Nwora",
    "firstName": "Jordan",
    "lastName": "Nwora",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b912",
    "fullName": "Immanuel Quickley",
    "firstName": "Immanuel",
    "lastName": "Quickley",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b913",
    "fullName": "RJ Barrett",
    "firstName": "RJ",
    "lastName": "Barrett",
    "position": "F-G",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b914",
    "fullName": "Markquis Nowell",
    "firstName": "Markquis",
    "lastName": "Nowell",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b915",
    "fullName": "Gradey Dick",
    "firstName": "Gradey",
    "lastName": "Dick",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b916",
    "fullName": "Javon Freeman-Liberty",
    "firstName": "Javon",
    "lastName": "Freeman-Liberty",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b917",
    "fullName": "Scottie Barnes",
    "firstName": "Scottie",
    "lastName": "Barnes",
    "position": "G-F",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b918",
    "fullName": "Jalen McDaniels",
    "firstName": "Jalen",
    "lastName": "McDaniels",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b919",
    "fullName": "Ron Harper Jr.",
    "firstName": "Ron",
    "lastName": "Harper Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b91b",
    "fullName": "Jakob Poeltl",
    "firstName": "Jakob",
    "lastName": "Poeltl",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b91a",
    "fullName": "Thaddeus Young",
    "firstName": "Thaddeus",
    "lastName": "Young",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b91c",
    "fullName": "Chris Boucher",
    "firstName": "Chris",
    "lastName": "Boucher",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b91e",
    "fullName": "Ochai Agbaji",
    "firstName": "Ochai",
    "lastName": "Agbaji",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b91d",
    "fullName": "Christian Koloko",
    "firstName": "Christian",
    "lastName": "Koloko",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b91f",
    "fullName": "Kelly Olynyk",
    "firstName": "Kelly",
    "lastName": "Olynyk",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8e",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b920",
    "fullName": "Jason Preston",
    "firstName": "Jason",
    "lastName": "Preston",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b921",
    "fullName": "Josh Christopher",
    "firstName": "Josh",
    "lastName": "Christopher",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b922",
    "fullName": "Kira Lewis Jr.",
    "firstName": "Kira",
    "lastName": "Lewis Jr.",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b923",
    "fullName": "Otto Porter Jr.",
    "firstName": "Otto",
    "lastName": "Porter Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b924",
    "fullName": "Collin Sexton",
    "firstName": "Collin",
    "lastName": "Sexton",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b925",
    "fullName": "Kris Dunn",
    "firstName": "Kris",
    "lastName": "Dunn",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b926",
    "fullName": "Jordan Clarkson",
    "firstName": "Jordan",
    "lastName": "Clarkson",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b927",
    "fullName": "Talen Horton-Tucker",
    "firstName": "Talen",
    "lastName": "Horton-Tucker",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8d3",
    "fullName": "Montrezl Harrell",
    "firstName": "Montrezl",
    "lastName": "Harrell",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb89",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b8ea",
    "fullName": "Anfernee Simons",
    "firstName": "Anfernee",
    "lastName": "Simons",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8b",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b92a",
    "fullName": "Lauri Markkanen",
    "firstName": "Lauri",
    "lastName": "Markkanen",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b92b",
    "fullName": "Taylor Hendricks",
    "firstName": "Taylor",
    "lastName": "Hendricks",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b92c",
    "fullName": "Walker Kessler",
    "firstName": "Walker",
    "lastName": "Kessler",
    "position": "C",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b92d",
    "fullName": "John Collins",
    "firstName": "John",
    "lastName": "Collins",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b92e",
    "fullName": "Richaun Holmes",
    "firstName": "Richaun",
    "lastName": "Holmes",
    "position": "F-C",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b92f",
    "fullName": "Isaiah Livers",
    "firstName": "Isaiah",
    "lastName": "Livers",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b930",
    "fullName": "Marvin Bagley III",
    "firstName": "Marvin",
    "lastName": "Bagley III",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b931",
    "fullName": "Isaiah Todd",
    "firstName": "Isaiah",
    "lastName": "Todd",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b932",
    "fullName": "Jordan Goodwin",
    "firstName": "Jordan",
    "lastName": "Goodwin",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b933",
    "fullName": "Tyus Jones",
    "firstName": "Tyus",
    "lastName": "Jones",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b934",
    "fullName": "Delon Wright",
    "firstName": "Delon",
    "lastName": "Wright",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b935",
    "fullName": "Ryan Rollins",
    "firstName": "Ryan",
    "lastName": "Rollins",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b936",
    "fullName": "Jared Butler",
    "firstName": "Jared",
    "lastName": "Butler",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b937",
    "fullName": "Jordan Poole",
    "firstName": "Jordan",
    "lastName": "Poole",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b938",
    "fullName": "Landry Shamet",
    "firstName": "Landry",
    "lastName": "Shamet",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b939",
    "fullName": "Eugene Omoruyi",
    "firstName": "Eugene",
    "lastName": "Omoruyi",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b93a",
    "fullName": "Corey Kispert",
    "firstName": "Corey",
    "lastName": "Kispert",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b93b",
    "fullName": "Deni Avdija",
    "firstName": "Deni",
    "lastName": "Avdija",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b93c",
    "fullName": "Bilal Coulibaly",
    "firstName": "Bilal",
    "lastName": "Coulibaly",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b93d",
    "fullName": "Patrick Baldwin Jr.",
    "firstName": "Patrick",
    "lastName": "Baldwin Jr.",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b93e",
    "fullName": "Kyle Kuzma",
    "firstName": "Kyle",
    "lastName": "Kuzma",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b93f",
    "fullName": "Anthony Gill",
    "firstName": "Anthony",
    "lastName": "Gill",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb90",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b928",
    "fullName": "Johnny Juzang",
    "firstName": "Johnny",
    "lastName": "Juzang",
    "position": "G",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  },
  {
    "_id": "65caad0041a034d09007b929",
    "fullName": "Brice Sensabaugh",
    "firstName": "Brice",
    "lastName": "Sensabaugh",
    "position": "F",
    "teamId": "65ca7f417e25757142c1bb8f",
    "__v": 0
  })

    console.log('Synchronized.')


}