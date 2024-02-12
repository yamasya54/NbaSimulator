"use strict"



module.exports = async function () {


    /* Team */
    const Team = require('../models/team')
    await Team.deleteMany()
    await Team.create({
      "_id": 1,
      "abbreviation": "ATL",
      "city": "Atlanta",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Atlanta Hawks",
      "name": "Hawks"
    },
    {
      "_id": 2,
      "abbreviation": "BOS",
      "city": "Boston",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Boston Celtics",
      "name": "Celtics"
    },
    {
      "_id": 3,
      "abbreviation": "BKN",
      "city": "Brooklyn",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Brooklyn Nets",
      "name": "Nets"
    },
    {
      "_id": 4,
      "abbreviation": "CHA",
      "city": "Charlotte",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Charlotte Hornets",
      "name": "Hornets"
    },
    {
      "_id": 5,
      "abbreviation": "CHI",
      "city": "Chicago",
      "conference": "East",
      "division": "Central",
      "full_name": "Chicago Bulls",
      "name": "Bulls"
    },
    {
      "_id": 6,
      "abbreviation": "CLE",
      "city": "Cleveland",
      "conference": "East",
      "division": "Central",
      "full_name": "Cleveland Cavaliers",
      "name": "Cavaliers"
    },
    {
      "_id": 7,
      "abbreviation": "DAL",
      "city": "Dallas",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Dallas Mavericks",
      "name": "Mavericks"
    },
    {
      "_id": 8,
      "abbreviation": "DEN",
      "city": "Denver",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Denver Nuggets",
      "name": "Nuggets"
    },
    {
      "_id": 9,
      "abbreviation": "DET",
      "city": "Detroit",
      "conference": "East",
      "division": "Central",
      "full_name": "Detroit Pistons",
      "name": "Pistons"
    },
    {
      "_id": 10,
      "abbreviation": "GSW",
      "city": "Golden State",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Golden State Warriors",
      "name": "Warriors"
    },
    {
      "_id": 11,
      "abbreviation": "HOU",
      "city": "Houston",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Houston Rockets",
      "name": "Rockets"
    },
    {
      "_id": 12,
      "abbreviation": "IND",
      "city": "Indiana",
      "conference": "East",
      "division": "Central",
      "full_name": "Indiana Pacers",
      "name": "Pacers"
    },
    {
      "_id": 13,
      "abbreviation": "LAC",
      "city": "LA",
      "conference": "West",
      "division": "Pacific",
      "full_name": "LA Clippers",
      "name": "Clippers"
    },
    {
      "_id": 14,
      "abbreviation": "LAL",
      "city": "Los Angeles",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Los Angeles Lakers",
      "name": "Lakers"
    },
    {
      "_id": 15,
      "abbreviation": "MEM",
      "city": "Memphis",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Memphis Grizzlies",
      "name": "Grizzlies"
    },
    {
      "_id": 16,
      "abbreviation": "MIA",
      "city": "Miami",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Miami Heat",
      "name": "Heat"
    },
    {
      "_id": 17,
      "abbreviation": "MIL",
      "city": "Milwaukee",
      "conference": "East",
      "division": "Central",
      "full_name": "Milwaukee Bucks",
      "name": "Bucks"
    },
    {
      "_id": 18,
      "abbreviation": "MIN",
      "city": "Minnesota",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Minnesota Timberwolves",
      "name": "Timberwolves"
    },
    {
      "_id": 19,
      "abbreviation": "NOP",
      "city": "New Orleans",
      "conference": "West",
      "division": "Southwest",
      "full_name": "New Orleans Pelicans",
      "name": "Pelicans"
    },
    {
      "_id": 20,
      "abbreviation": "NYK",
      "city": "New York",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "New York Knicks",
      "name": "Knicks"
    },
    {
      "_id": 21,
      "abbreviation": "OKC",
      "city": "Oklahoma City",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Oklahoma City Thunder",
      "name": "Thunder"
    },
    {
      "_id": 22,
      "abbreviation": "ORL",
      "city": "Orlando",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Orlando Magic",
      "name": "Magic"
    },
    {
      "_id": 23,
      "abbreviation": "PHI",
      "city": "Philadelphia",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Philadelphia 76ers",
      "name": "76ers"
    },
    {
      "_id": 24,
      "abbreviation": "PHX",
      "city": "Phoenix",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Phoenix Suns",
      "name": "Suns"
    },
    {
      "_id": 25,
      "abbreviation": "POR",
      "city": "Portland",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Portland Trail Blazers",
      "name": "Trail Blazers"
    },
    {
      "_id": 26,
      "abbreviation": "SAC",
      "city": "Sacramento",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Sacramento Kings",
      "name": "Kings"
    },
    {
      "_id": 27,
      "abbreviation": "SAS",
      "city": "San Antonio",
      "conference": "West",
      "division": "Southwest",
      "full_name": "San Antonio Spurs",
      "name": "Spurs"
    },
    {
      "_id": 28,
      "abbreviation": "TOR",
      "city": "Toronto",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Toronto Raptors",
      "name": "Raptors"
    },
    {
      "_id": 29,
      "abbreviation": "UTA",
      "city": "Utah",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Utah Jazz",
      "name": "Jazz"
    },
    {
      "_id": 30,
      "abbreviation": "WAS",
      "city": "Washington",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Washington Wizards",
      "name": "Wizards"
    })
    
  
    // /* player */
    const Player = require('../models/player')
    await Player.deleteMany()
    await Player.create({
      "_id": 490,
      "fullName": "Trae Young",
      "firstName": "Trae",
      "lastName": "Young",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 319,
      "fullName": "Patty Mills",
      "firstName": "Patty",
      "lastName": "Mills",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 56677838,
      "fullName": "Kobe Bufkin",
      "firstName": "Kobe",
      "lastName": "Bufkin",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 4197387,
      "fullName": "Vit Krejci",
      "firstName": "Vit",
      "lastName": "Krejci",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 334,
      "fullName": "Dejounte Murray",
      "firstName": "Dejounte",
      "lastName": "Murray",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 53,
      "fullName": "Bogdan Bogdanovic",
      "firstName": "Bogdan",
      "lastName": "Bogdanovic",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 666754,
      "fullName": "Garrison Mathews",
      "firstName": "Garrison",
      "lastName": "Mathews",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 56677855,
      "fullName": "Seth Lundy",
      "firstName": "Seth",
      "lastName": "Lundy",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 3547256,
      "fullName": "Saddiq Bey",
      "firstName": "Saddiq",
      "lastName": "Bey",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 56677806,
      "fullName": "Mouhamed Gueye",
      "firstName": "Mouhamed",
      "lastName": "Gueye",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 56677875,
      "fullName": "Miles Norris",
      "firstName": "Miles",
      "lastName": "Norris",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 83,
      "fullName": "Clint Capela",
      "firstName": "Clint",
      "lastName": "Capela",
      "position": "C",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 3547244,
      "fullName": "Onyeka Okongwu",
      "firstName": "Onyeka",
      "lastName": "Okongwu",
      "position": "F-C",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 666564,
      "fullName": "Bruno Fernando",
      "firstName": "Bruno",
      "lastName": "Fernando",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 17896040,
      "fullName": "Jalen Johnson",
      "firstName": "Jalen",
      "lastName": "Johnson",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 38017689,
      "fullName": "AJ Griffin",
      "firstName": "AJ",
      "lastName": "Griffin",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "__v": 0
    },
    {
      "_id": 3547276,
      "fullName": "Payton Pritchard",
      "firstName": "Payton",
      "lastName": "Pritchard",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 38017707,
      "fullName": "JD Davison",
      "firstName": "JD",
      "lastName": "Davison",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 434,
      "fullName": "Jayson Tatum",
      "firstName": "Jayson",
      "lastName": "Tatum",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 17896060,
      "fullName": "Sam Hauser",
      "firstName": "Sam",
      "lastName": "Hauser",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 56677864,
      "fullName": "Jordan Walsh",
      "firstName": "Jordan",
      "lastName": "Walsh",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 378,
      "fullName": "Kristaps Porzingis",
      "firstName": "Kristaps",
      "lastName": "Porzingis",
      "position": "F-C",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 666468,
      "fullName": "Oshae Brissett",
      "firstName": "Oshae",
      "lastName": "Brissett",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 261,
      "fullName": "Luke Kornet",
      "firstName": "Luke",
      "lastName": "Kornet",
      "position": "F-C",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 219,
      "fullName": "Al Horford",
      "firstName": "Al",
      "lastName": "Horford",
      "position": "C-F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 70,
      "fullName": "Jaylen Brown",
      "firstName": "Jaylen",
      "lastName": "Brown",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 473,
      "fullName": "Derrick White",
      "firstName": "Derrick",
      "lastName": "White",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 3547285,
      "fullName": "Xavier Tillman",
      "firstName": "Xavier",
      "lastName": "Tillman",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 214,
      "fullName": "Jrue Holiday",
      "firstName": "Jrue",
      "lastName": "Holiday",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 3547295,
      "fullName": "Nathan Knight",
      "firstName": "Nathan",
      "lastName": "Knight",
      "position": "F-C",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "__v": 0
    },
    {
      "_id": 421,
      "fullName": "Dennis Smith Jr.",
      "firstName": "Dennis",
      "lastName": "Smith Jr.",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 61,
      "fullName": "Mikal Bridges",
      "firstName": "Mikal",
      "lastName": "Bridges",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 9051997,
      "fullName": "Armoni Brooks",
      "firstName": "Armoni",
      "lastName": "Brooks",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 17896048,
      "fullName": "Cam Thomas",
      "firstName": "Cam",
      "lastName": "Thomas",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 464,
      "fullName": "Lonnie Walker IV",
      "firstName": "Lonnie",
      "lastName": "Walker IV",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 56677841,
      "fullName": "Dariq Whitehead",
      "firstName": "Dariq",
      "lastName": "Whitehead",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 56677722,
      "fullName": "Jalen Wilson",
      "firstName": "Jalen",
      "lastName": "Wilson",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 158,
      "fullName": "Dorian Finney-Smith",
      "firstName": "Dorian",
      "lastName": "Finney-Smith",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 666429,
      "fullName": "Darius Bazley",
      "firstName": "Darius",
      "lastName": "Bazley",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 56677843,
      "fullName": "Noah Clowney",
      "firstName": "Noah",
      "lastName": "Clowney",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 666508,
      "fullName": "Nicolas Claxton",
      "firstName": "Nicolas",
      "lastName": "Claxton",
      "position": "F-C",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 417,
      "fullName": "Ben Simmons",
      "firstName": "Ben",
      "lastName": "Simmons",
      "position": "G-F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 790,
      "fullName": "Duane Washington",
      "firstName": "Duane",
      "lastName": "Washington",
      "position": "",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 32,
      "fullName": "Keita Bates-Diop",
      "firstName": "Keita",
      "lastName": "Bates-Diop",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 345,
      "fullName": "Nerlens Noel",
      "firstName": "Nerlens",
      "lastName": "Noel",
      "position": "F-C",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 17896041,
      "fullName": "Keon Johnson",
      "firstName": "Keon",
      "lastName": "Johnson",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "__v": 0
    },
    {
      "_id": 56677848,
      "fullName": "Amari Bailey",
      "firstName": "Amari",
      "lastName": "Bailey",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 3547239,
      "fullName": "LaMelo Ball",
      "firstName": "LaMelo",
      "lastName": "Ball",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 666748,
      "fullName": "Cody Martin",
      "firstName": "Cody",
      "lastName": "Martin",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 17896037,
      "fullName": "James Bouknight",
      "firstName": "James",
      "lastName": "Bouknight",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 56677823,
      "fullName": "Brandon Miller",
      "firstName": "Brandon",
      "lastName": "Miller",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 17895994,
      "fullName": "Xavier Sneed",
      "firstName": "Xavier",
      "lastName": "Sneed",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 38017708,
      "fullName": "Bryce McGowens",
      "firstName": "Bryce",
      "lastName": "McGowens",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 62,
      "fullName": "Miles Bridges",
      "firstName": "Miles",
      "lastName": "Bridges",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 56677866,
      "fullName": "Leaky Black",
      "firstName": "Leaky",
      "lastName": "Black",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 17896032,
      "fullName": "Kai Jones",
      "firstName": "Kai",
      "lastName": "Jones",
      "position": "F-C",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 17957861,
      "fullName": "JT Thor",
      "firstName": "JT",
      "lastName": "Thor",
      "position": "",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 38017698,
      "fullName": "Mark Williams",
      "firstName": "Mark",
      "lastName": "Williams",
      "position": "C",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 56677846,
      "fullName": "Nick Smith Jr.",
      "firstName": "Nick",
      "lastName": "Smith Jr.",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 3547282,
      "fullName": "Nick Richards",
      "firstName": "Nick",
      "lastName": "Richards",
      "position": "C",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 114,
      "fullName": "Seth Curry",
      "firstName": "Seth",
      "lastName": "Curry",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 666965,
      "fullName": "Grant Williams",
      "firstName": "Grant",
      "lastName": "Williams",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 286,
      "fullName": "Kyle Lowry",
      "firstName": "Kyle",
      "lastName": "Lowry",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 17896036,
      "fullName": "Tre Mann",
      "firstName": "Tre",
      "lastName": "Mann",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 4197029,
      "fullName": "Vasilije Micic",
      "firstName": "Vasilije",
      "lastName": "Micic",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 44,
      "fullName": "Davis Bertans",
      "firstName": "Davis",
      "lastName": "Bertans",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "__v": 0
    },
    {
      "_id": 666956,
      "fullName": "Coby White",
      "firstName": "Coby",
      "lastName": "White",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 17896099,
      "fullName": "Carlik Jones",
      "firstName": "Carlik",
      "lastName": "Jones",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 27,
      "fullName": "Lonzo Ball",
      "firstName": "Lonzo",
      "lastName": "Ball",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 268,
      "fullName": "Zach LaVine",
      "firstName": "Zach",
      "lastName": "LaVine",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 89,
      "fullName": "Alex Caruso",
      "firstName": "Alex",
      "lastName": "Caruso",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 56677874,
      "fullName": "Onuralp Bitim",
      "firstName": "Onuralp",
      "lastName": "Bitim",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 125,
      "fullName": "DeMar DeRozan",
      "firstName": "DeMar",
      "lastName": "DeRozan",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 38017719,
      "fullName": "Dalen Terry",
      "firstName": "Dalen",
      "lastName": "Terry",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 3547248,
      "fullName": "Patrick Williams",
      "firstName": "Patrick",
      "lastName": "Williams",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 110,
      "fullName": "Torrey Craig",
      "firstName": "Torrey",
      "lastName": "Craig",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 460,
      "fullName": "Nikola Vucevic",
      "firstName": "Nikola",
      "lastName": "Vucevic",
      "position": "C",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 137,
      "fullName": "Andre Drummond",
      "firstName": "Andre",
      "lastName": "Drummond",
      "position": "C",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 56677860,
      "fullName": "Adama Sanogo",
      "firstName": "Adama",
      "lastName": "Sanogo",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 87,
      "fullName": "Jevon Carter",
      "firstName": "Jevon",
      "lastName": "Carter",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "__v": 0
    },
    {
      "_id": 666676,
      "fullName": "Ty Jerome",
      "firstName": "Ty",
      "lastName": "Jerome",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 56677872,
      "fullName": "Craig Porter",
      "firstName": "Craig",
      "lastName": "Porter",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 322,
      "fullName": "Donovan Mitchell",
      "firstName": "Donovan",
      "lastName": "Mitchell",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 277,
      "fullName": "Caris LeVert",
      "firstName": "Caris",
      "lastName": "LeVert",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 3547299,
      "fullName": "Sam Merrill",
      "firstName": "Sam",
      "lastName": "Merrill",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 3547247,
      "fullName": "Isaac Okoro",
      "firstName": "Isaac",
      "lastName": "Okoro",
      "position": "F-G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 344,
      "fullName": "Georges Niang",
      "firstName": "Georges",
      "lastName": "Niang",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 666908,
      "fullName": "Max Strus",
      "firstName": "Max",
      "lastName": "Strus",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 56677847,
      "fullName": "Emoni Bates",
      "firstName": "Emoni",
      "lastName": "Bates",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 17896076,
      "fullName": "Evan Mobley",
      "firstName": "Evan",
      "lastName": "Mobley",
      "position": "F-C",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 666940,
      "fullName": "Dean Wade",
      "firstName": "Dean",
      "lastName": "Wade",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 9,
      "fullName": "Jarrett Allen",
      "firstName": "Jarrett",
      "lastName": "Allen",
      "position": "C",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 38017662,
      "fullName": "Isaiah Mobley",
      "firstName": "Isaiah",
      "lastName": "Mobley",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 248,
      "fullName": "Damian Jones",
      "firstName": "Damian",
      "lastName": "Jones",
      "position": "C",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 666581,
      "fullName": "Darius Garland",
      "firstName": "Darius",
      "lastName": "Garland",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 404,
      "fullName": "Ricky Rubio",
      "firstName": "Ricky",
      "lastName": "Rubio",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "__v": 0
    },
    {
      "_id": 228,
      "fullName": "Kyrie Irving",
      "firstName": "Kyrie",
      "lastName": "Irving",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 151,
      "fullName": "Dante Exum",
      "firstName": "Dante",
      "lastName": "Exum",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 38017679,
      "fullName": "Jaden Hardy",
      "firstName": "Jaden",
      "lastName": "Hardy",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 191,
      "fullName": "Tim Hardaway Jr.",
      "firstName": "Tim",
      "lastName": "Hardaway Jr.",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 3547258,
      "fullName": "Josh Green",
      "firstName": "Josh",
      "lastName": "Green",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 17554004,
      "fullName": "AJ Lawson",
      "firstName": "AJ",
      "lastName": "Lawson",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 257,
      "fullName": "Maxi Kleber",
      "firstName": "Maxi",
      "lastName": "Kleber",
      "position": "F",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 379,
      "fullName": "Dwight Powell",
      "firstName": "Dwight",
      "lastName": "Powell",
      "position": "F-C",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 56677840,
      "fullName": "Dereck Lively II",
      "firstName": "Dereck",
      "lastName": "Lively II",
      "position": "C",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 132,
      "fullName": "Luka Doncic",
      "firstName": "Luka",
      "lastName": "Doncic",
      "position": "F-G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 666577,
      "fullName": "Daniel Gafford",
      "firstName": "Daniel",
      "lastName": "Gafford",
      "position": "F",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "__v": 0
    },
    {
      "_id": 335,
      "fullName": "Jamal Murray",
      "firstName": "Jamal",
      "lastName": "Murray",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 236,
      "fullName": "Reggie Jackson",
      "firstName": "Reggie",
      "lastName": "Jackson",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 56677582,
      "fullName": "Jalen Pickett",
      "firstName": "Jalen",
      "lastName": "Pickett",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 38017727,
      "fullName": "Collin Gillespie",
      "firstName": "Collin",
      "lastName": "Gillespie",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 81,
      "fullName": "Kentavious Caldwell-Pope",
      "firstName": "Kentavious",
      "lastName": "Caldwell-Pope",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 38017709,
      "fullName": "Christian Braun",
      "firstName": "Christian",
      "lastName": "Braun",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 38017721,
      "fullName": "Peyton Watson",
      "firstName": "Peyton",
      "lastName": "Watson",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 375,
      "fullName": "Michael Porter Jr.",
      "firstName": "Michael",
      "lastName": "Porter Jr.",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 56677776,
      "fullName": "Julian Strawther",
      "firstName": "Julian",
      "lastName": "Strawther",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 177,
      "fullName": "Aaron Gordon",
      "firstName": "Aaron",
      "lastName": "Gordon",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 56677871,
      "fullName": "Hunter Tyson",
      "firstName": "Hunter",
      "lastName": "Tyson",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 666489,
      "fullName": "Vlatko Cancar",
      "firstName": "Vlatko",
      "lastName": "Cancar",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 17896007,
      "fullName": "Braxton Key",
      "firstName": "Braxton",
      "lastName": "Key",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 246,
      "fullName": "Nikola Jokic",
      "firstName": "Nikola",
      "lastName": "Jokic",
      "position": "C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 250,
      "fullName": "DeAndre Jordan",
      "firstName": "DeAndre",
      "lastName": "Jordan",
      "position": "C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 3547268,
      "fullName": "Zeke Nnaji",
      "firstName": "Zeke",
      "lastName": "Nnaji",
      "position": "F-C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 215,
      "fullName": "Justin Holiday",
      "firstName": "Justin",
      "lastName": "Holiday",
      "position": "F-G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 17896103,
      "fullName": "Jay Huff",
      "firstName": "Jay",
      "lastName": "Huff",
      "position": "F-C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "__v": 0
    },
    {
      "_id": 17896075,
      "fullName": "Cade Cunningham",
      "firstName": "Cade",
      "lastName": "Cunningham",
      "position": "G-F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 3547241,
      "fullName": "Killian Hayes",
      "firstName": "Killian",
      "lastName": "Hayes",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 38017682,
      "fullName": "Jaden Ivey",
      "firstName": "Jaden",
      "lastName": "Ivey",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 56677792,
      "fullName": "Marcus Sasser",
      "firstName": "Marcus",
      "lastName": "Sasser",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 42097199,
      "fullName": "Jared Rhoden",
      "firstName": "Jared",
      "lastName": "Rhoden",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 56677826,
      "fullName": "Ausar Thompson",
      "firstName": "Ausar",
      "lastName": "Thompson",
      "position": "G-F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 197,
      "fullName": "Joe Harris",
      "firstName": "Joe",
      "lastName": "Harris",
      "position": "F-G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 56677729,
      "fullName": "Malcolm Cazalon",
      "firstName": "Malcolm",
      "lastName": "Cazalon",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 38017694,
      "fullName": "Jalen Duren",
      "firstName": "Jalen",
      "lastName": "Duren",
      "position": "C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 3547240,
      "fullName": "James Wiseman",
      "firstName": "James",
      "lastName": "Wiseman",
      "position": "C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 3547267,
      "fullName": "Isaiah Stewart",
      "firstName": "Isaiah",
      "lastName": "Stewart",
      "position": "F-C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 17553987,
      "fullName": "Zavier Simpson",
      "firstName": "Zavier",
      "lastName": "Simpson",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 320,
      "fullName": "Shake Milton",
      "firstName": "Shake",
      "lastName": "Milton",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 68,
      "fullName": "Troy Brown Jr.",
      "firstName": "Troy",
      "lastName": "Brown Jr.",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 160,
      "fullName": "Evan Fournier",
      "firstName": "Evan",
      "lastName": "Fournier",
      "position": "G-F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 17895858,
      "fullName": "Quentin Grimes",
      "firstName": "Quentin",
      "lastName": "Grimes",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 259,
      "fullName": "Kevin Knox",
      "firstName": "Kevin",
      "lastName": "Knox",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 3547275,
      "fullName": "Malachi Flynn",
      "firstName": "Malachi",
      "lastName": "Flynn",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 38017739,
      "fullName": "Simone Fontecchio",
      "firstName": "Simone",
      "lastName": "Fontecchio",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 167,
      "fullName": "Danilo Gallinari",
      "firstName": "Danilo",
      "lastName": "Gallinari",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 337,
      "fullName": "Mike Muscala",
      "firstName": "Mike",
      "lastName": "Muscala",
      "position": "F-C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "__v": 0
    },
    {
      "_id": 115,
      "fullName": "Stephen Curry",
      "firstName": "Stephen",
      "lastName": "Curry",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 367,
      "fullName": "Chris Paul",
      "firstName": "Chris",
      "lastName": "Paul",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 251,
      "fullName": "Cory Joseph",
      "firstName": "Cory",
      "lastName": "Joseph",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 2189,
      "fullName": "Gary Payton II",
      "firstName": "Gary",
      "lastName": "Payton II",
      "position": "",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 56677858,
      "fullName": "Brandin Podziemski",
      "firstName": "Brandin",
      "lastName": "Podziemski",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 475,
      "fullName": "Andrew Wiggins",
      "firstName": "Andrew",
      "lastName": "Wiggins",
      "position": "F-G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 45658838,
      "fullName": "Lester Quinones",
      "firstName": "Lester",
      "lastName": "Quinones",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 17553992,
      "fullName": "Moses Moody",
      "firstName": "Moses",
      "lastName": "Moody",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 407,
      "fullName": "Dario Saric",
      "firstName": "Dario",
      "lastName": "Saric",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 185,
      "fullName": "Draymond Green",
      "firstName": "Draymond",
      "lastName": "Green",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 17553979,
      "fullName": "Jonathan Kuminga",
      "firstName": "Jonathan",
      "lastName": "Kuminga",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 282,
      "fullName": "Kevon Looney",
      "firstName": "Kevon",
      "lastName": "Looney",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 56677799,
      "fullName": "Trayce Jackson-Davis",
      "firstName": "Trayce",
      "lastName": "Jackson-Davis",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 443,
      "fullName": "Klay Thompson",
      "firstName": "Klay",
      "lastName": "Thompson",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 17896070,
      "fullName": "Usman Garuba",
      "firstName": "Usman",
      "lastName": "Garuba",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "__v": 0
    },
    {
      "_id": 458,
      "fullName": "Fred VanVleet",
      "firstName": "Fred",
      "lastName": "VanVleet",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 56677825,
      "fullName": "Amen Thompson",
      "firstName": "Amen",
      "lastName": "Thompson",
      "position": "G-F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 213,
      "fullName": "Aaron Holiday",
      "firstName": "Aaron",
      "lastName": "Holiday",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 17895966,
      "fullName": "Jalen Green",
      "firstName": "Jalen",
      "lastName": "Green",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 38017737,
      "fullName": "Trevor Hudgins",
      "firstName": "Trevor",
      "lastName": "Hudgins",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 666849,
      "fullName": "Kevin Porter Jr.",
      "firstName": "Kevin",
      "lastName": "Porter Jr.",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 56677831,
      "fullName": "Cam Whitmore",
      "firstName": "Cam",
      "lastName": "Whitmore",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 38017684,
      "fullName": "Jabari Smith Jr.",
      "firstName": "Jabari",
      "lastName": "Smith Jr.",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 66,
      "fullName": "Dillon Brooks",
      "firstName": "Dillon",
      "lastName": "Brooks",
      "position": "G-F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 38017665,
      "fullName": "Darius Days",
      "firstName": "Darius",
      "lastName": "Days",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 19465326,
      "fullName": "Jock Landale",
      "firstName": "Jock",
      "lastName": "Landale",
      "position": "C",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 188,
      "fullName": "Jeff Green",
      "firstName": "Jeff",
      "lastName": "Green",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 3,
      "fullName": "Steven Adams",
      "firstName": "Steven",
      "lastName": "Adams",
      "position": "C",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 75,
      "fullName": "Reggie Bullock",
      "firstName": "Reggie",
      "lastName": "Bullock",
      "position": "G-F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "__v": 0
    },
    {
      "_id": 3547245,
      "fullName": "Tyrese Haliburton",
      "firstName": "Tyrese",
      "lastName": "Haliburton",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 38017507,
      "fullName": "Andrew Nembhard",
      "firstName": "Andrew",
      "lastName": "Nembhard",
      "position": "G-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 38017686,
      "fullName": "Bennedict Mathurin",
      "firstName": "Bennedict",
      "lastName": "Mathurin",
      "position": "G-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 56677861,
      "fullName": "Ben Sheppard",
      "firstName": "Ben",
      "lastName": "Sheppard",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 56677794,
      "fullName": "Isaiah Wong",
      "firstName": "Isaiah",
      "lastName": "Wong",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 3547250,
      "fullName": "Aaron Nesmith",
      "firstName": "Aaron",
      "lastName": "Nesmith",
      "position": "G-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 38017701,
      "fullName": "Kendall Brown",
      "firstName": "Kendall",
      "lastName": "Brown",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 56677832,
      "fullName": "Jarace Walker",
      "firstName": "Jarace",
      "lastName": "Walker",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 3547243,
      "fullName": "Obi Toppin",
      "firstName": "Obi",
      "lastName": "Toppin",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 3547264,
      "fullName": "Jalen Smith",
      "firstName": "Jalen",
      "lastName": "Smith",
      "position": "F-C",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 452,
      "fullName": "Myles Turner",
      "firstName": "Myles",
      "lastName": "Turner",
      "position": "C-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 17896035,
      "fullName": "Isaiah Jackson",
      "firstName": "Isaiah",
      "lastName": "Jackson",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 56677778,
      "fullName": "Oscar Tshiebwe",
      "firstName": "Oscar",
      "lastName": "Tshiebwe",
      "position": "F-C",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 305,
      "fullName": "Doug McDermott",
      "firstName": "Doug",
      "lastName": "McDermott",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 416,
      "fullName": "Pascal Siakam",
      "firstName": "Pascal",
      "lastName": "Siakam",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 2336,
      "fullName": "Johnny Davis",
      "firstName": "Johnny",
      "lastName": "Davis",
      "position": "",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "__v": 0
    },
    {
      "_id": 439,
      "fullName": "Daniel Theis",
      "firstName": "Daniel",
      "lastName": "Theis",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 472,
      "fullName": "Russell Westbrook",
      "firstName": "Russell",
      "lastName": "Westbrook",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 172,
      "fullName": "Paul George",
      "firstName": "Paul",
      "lastName": "George",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 380,
      "fullName": "Norman Powell",
      "firstName": "Norman",
      "lastName": "Powell",
      "position": "F-G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 17896022,
      "fullName": "Brandon Boston Jr.",
      "firstName": "Brandon",
      "lastName": "Boston Jr.",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 666511,
      "fullName": "Amir Coffey",
      "firstName": "Amir",
      "lastName": "Coffey",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 274,
      "fullName": "Kawhi Leonard",
      "firstName": "Kawhi",
      "lastName": "Leonard",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 666743,
      "fullName": "Terance Mann",
      "firstName": "Terance",
      "lastName": "Mann",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 56677849,
      "fullName": "Kobe Brown",
      "firstName": "Kobe",
      "lastName": "Brown",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 493,
      "fullName": "Ivica Zubac",
      "firstName": "Ivica",
      "lastName": "Zubac",
      "position": "C",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 38017725,
      "fullName": "Moussa Diabate",
      "firstName": "Moussa",
      "lastName": "Diabate",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 371,
      "fullName": "Mason Plumlee",
      "firstName": "Mason",
      "lastName": "Plumlee",
      "position": "F-C",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 192,
      "fullName": "James Harden",
      "firstName": "James",
      "lastName": "Harden",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 450,
      "fullName": "PJ Tucker",
      "firstName": "PJ",
      "lastName": "Tucker",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "__v": 0
    },
    {
      "_id": 130,
      "fullName": "Spencer Dinwiddie",
      "firstName": "Spencer",
      "lastName": "Dinwiddie",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 56677835,
      "fullName": "Jalen Hood-Schifino",
      "firstName": "Jalen",
      "lastName": "Hood-Schifino",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 17553995,
      "fullName": "Austin Reaves",
      "firstName": "Austin",
      "lastName": "Reaves",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 237,
      "fullName": "LeBron James",
      "firstName": "LeBron",
      "lastName": "James",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 38017697,
      "fullName": "Max Christie",
      "firstName": "Max",
      "lastName": "Christie",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 383,
      "fullName": "Taurean Prince",
      "firstName": "Taurean",
      "lastName": "Prince",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 56677867,
      "fullName": "Alex Fudge",
      "firstName": "Alex",
      "lastName": "Fudge",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 56677836,
      "fullName": "Maxwell Lewis",
      "firstName": "Maxwell",
      "lastName": "Lewis",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 666609,
      "fullName": "Rui Hachimura",
      "firstName": "Rui",
      "lastName": "Hachimura",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 117,
      "fullName": "Anthony Davis",
      "firstName": "Anthony",
      "lastName": "Davis",
      "position": "F-C",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 457,
      "fullName": "Jarred Vanderbilt",
      "firstName": "Jarred",
      "lastName": "Vanderbilt",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 666626,
      "fullName": "Jaxson Hayes",
      "firstName": "Jaxson",
      "lastName": "Hayes",
      "position": "C",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 1603383,
      "fullName": "Gabe Vincent",
      "firstName": "Gabe",
      "lastName": "Vincent",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 666971,
      "fullName": "Dylan Windler",
      "firstName": "Dylan",
      "lastName": "Windler",
      "position": "G-F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "__v": 0
    },
    {
      "_id": 2202,
      "fullName": "Kobi Simmons",
      "firstName": "Kobi",
      "lastName": "Simmons",
      "position": "",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 666786,
      "fullName": "Ja Morant",
      "firstName": "Ja",
      "lastName": "Morant",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 401,
      "fullName": "Derrick Rose",
      "firstName": "Derrick",
      "lastName": "Rose",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 48248287,
      "fullName": "Jacob Gilyard",
      "firstName": "Jacob",
      "lastName": "Gilyard",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 254,
      "fullName": "Luke Kennard",
      "firstName": "Luke",
      "lastName": "Kennard",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 666703,
      "fullName": "John Konchar",
      "firstName": "John",
      "lastName": "Konchar",
      "position": "G-F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 3547287,
      "fullName": "Desmond Bane",
      "firstName": "Desmond",
      "lastName": "Bane",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 17896027,
      "fullName": "Ziaire Williams",
      "firstName": "Ziaire",
      "lastName": "Williams",
      "position": "G-F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 38017731,
      "fullName": "Vince Williams Jr.",
      "firstName": "Vince",
      "lastName": "Williams Jr.",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 231,
      "fullName": "Jaren Jackson Jr.",
      "firstName": "Jaren",
      "lastName": "Jackson Jr.",
      "position": "F-C",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 666505,
      "fullName": "Brandon Clarke",
      "firstName": "Brandon",
      "lastName": "Clarke",
      "position": "F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 38017728,
      "fullName": "Jake LaRavia",
      "firstName": "Jake",
      "lastName": "LaRavia",
      "position": "F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 17896067,
      "fullName": "Santi Aldama",
      "firstName": "Santi",
      "lastName": "Aldama",
      "position": "F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 420,
      "fullName": "Marcus Smart",
      "firstName": "Marcus",
      "lastName": "Smart",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 470,
      "fullName": "Yuta Watanabe",
      "firstName": "Yuta",
      "lastName": "Watanabe",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "__v": 0
    },
    {
      "_id": 403,
      "fullName": "Terry Rozier",
      "firstName": "Terry",
      "lastName": "Rozier",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 17553942,
      "fullName": "Dru Smith",
      "firstName": "Dru",
      "lastName": "Smith",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 666633,
      "fullName": "Tyler Herro",
      "firstName": "Tyler",
      "lastName": "Herro",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 391,
      "fullName": "Josh Richardson",
      "firstName": "Josh",
      "lastName": "Richardson",
      "position": "G-F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 397,
      "fullName": "Duncan Robinson",
      "firstName": "Duncan",
      "lastName": "Robinson",
      "position": "F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 79,
      "fullName": "Jimmy Butler",
      "firstName": "Jimmy",
      "lastName": "Butler",
      "position": "G-F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 56677785,
      "fullName": "Jaime Jaquez Jr.",
      "firstName": "Jaime",
      "lastName": "Jaquez Jr.",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 38017696,
      "fullName": "Nikola Jovic",
      "firstName": "Nikola",
      "lastName": "Jovic",
      "position": "F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 666747,
      "fullName": "Caleb Martin",
      "firstName": "Caleb",
      "lastName": "Martin",
      "position": "F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 285,
      "fullName": "Kevin Love",
      "firstName": "Kevin",
      "lastName": "Love",
      "position": "F-C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 3092,
      "fullName": "Haywood Highsmith",
      "firstName": "Haywood",
      "lastName": "Highsmith",
      "position": "",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 4,
      "fullName": "Bam Adebayo",
      "firstName": "Bam",
      "lastName": "Adebayo",
      "position": "C-F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 74,
      "fullName": "Thomas Bryant",
      "firstName": "Thomas",
      "lastName": "Bryant",
      "position": "C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 39398582,
      "fullName": "Orlando Robinson",
      "firstName": "Orlando",
      "lastName": "Robinson",
      "position": "C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 357,
      "fullName": "Victor Oladipo",
      "firstName": "Victor",
      "lastName": "Oladipo",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 17553941,
      "fullName": "Micah Potter",
      "firstName": "Micah",
      "lastName": "Potter",
      "position": "F-C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "__v": 0
    },
    {
      "_id": 56677852,
      "fullName": "Andre Jackson Jr.",
      "firstName": "Andre",
      "lastName": "Jackson Jr.",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 38,
      "fullName": "Malik Beasley",
      "firstName": "Malik",
      "lastName": "Beasley",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 666960,
      "fullName": "Lindell Wigginton",
      "firstName": "Lindell",
      "lastName": "Wigginton",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 315,
      "fullName": "Khris Middleton",
      "firstName": "Khris",
      "lastName": "Middleton",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 105,
      "fullName": "Pat Connaughton",
      "firstName": "Pat",
      "lastName": "Connaughton",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 38017676,
      "fullName": "MarJon Beauchamp",
      "firstName": "MarJon",
      "lastName": "Beauchamp",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 56677854,
      "fullName": "Chris Livingston",
      "firstName": "Chris",
      "lastName": "Livingston",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 15,
      "fullName": "Giannis Antetokounmpo",
      "firstName": "Giannis",
      "lastName": "Antetokounmpo",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 112,
      "fullName": "Jae Crowder",
      "firstName": "Jae",
      "lastName": "Crowder",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 2148,
      "fullName": "Thanasis Antetokounmpo",
      "firstName": "Thanasis",
      "lastName": "Antetokounmpo",
      "position": "",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 283,
      "fullName": "Brook Lopez",
      "firstName": "Brook",
      "lastName": "Lopez",
      "position": "C",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 377,
      "fullName": "Bobby Portis",
      "firstName": "Bobby",
      "lastName": "Portis",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 284,
      "fullName": "Robin Lopez",
      "firstName": "Robin",
      "lastName": "Lopez",
      "position": "C",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 45,
      "fullName": "Patrick Beverley",
      "firstName": "Patrick",
      "lastName": "Beverley",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 278,
      "fullName": "Damian Lillard",
      "firstName": "Damian",
      "lastName": "Lillard",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "__v": 0
    },
    {
      "_id": 330,
      "fullName": "Monte Morris",
      "firstName": "Monte",
      "lastName": "Morris",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 104,
      "fullName": "Mike Conley",
      "firstName": "Mike",
      "lastName": "Conley",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 666767,
      "fullName": "Jordan McLaughlin",
      "firstName": "Jordan",
      "lastName": "McLaughlin",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 3547238,
      "fullName": "Anthony Edwards",
      "firstName": "Anthony",
      "lastName": "Edwards",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 38017700,
      "fullName": "Wendell Moore Jr.",
      "firstName": "Wendell",
      "lastName": "Moore Jr.",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 56677851,
      "fullName": "Jaylen Clark",
      "firstName": "Jaylen",
      "lastName": "Clark",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 3547259,
      "fullName": "Jaden McDaniels",
      "firstName": "Jaden",
      "lastName": "McDaniels",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 56677782,
      "fullName": "Leonard Miller",
      "firstName": "Leonard",
      "lastName": "Miller",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 447,
      "fullName": "Karl-Anthony Towns",
      "firstName": "Karl-Anthony",
      "lastName": "Towns",
      "position": "C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 12,
      "fullName": "Kyle Anderson",
      "firstName": "Kyle",
      "lastName": "Anderson",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 38017715,
      "fullName": "Josh Minott",
      "firstName": "Josh",
      "lastName": "Minott",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 176,
      "fullName": "Rudy Gobert",
      "firstName": "Rudy",
      "lastName": "Gobert",
      "position": "C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 667378,
      "fullName": "Naz Reid",
      "firstName": "Naz",
      "lastName": "Reid",
      "position": "F-C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 17896056,
      "fullName": "Luka Garza",
      "firstName": "Luka",
      "lastName": "Garza",
      "position": "C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "__v": 0
    },
    {
      "_id": 17896097,
      "fullName": "Jose Alvarado",
      "firstName": "Jose",
      "lastName": "Alvarado",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 303,
      "fullName": "CJ McCollum",
      "firstName": "CJ",
      "lastName": "McCollum",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 17896024,
      "fullName": "Herbert Jones",
      "firstName": "Herbert",
      "lastName": "Jones",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 38017677,
      "fullName": "Dyson Daniels",
      "firstName": "Dyson",
      "lastName": "Daniels",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 56677837,
      "fullName": "Jordan Hawkins",
      "firstName": "Jordan",
      "lastName": "Hawkins",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 38017726,
      "fullName": "Dereon Seabron",
      "firstName": "Dereon",
      "lastName": "Seabron",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 227,
      "fullName": "Brandon Ingram",
      "firstName": "Brandon",
      "lastName": "Ingram",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 17951082,
      "fullName": "Trey Murphy",
      "firstName": "Trey",
      "lastName": "Murphy",
      "position": "",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 3547293,
      "fullName": "Naji Marshall",
      "firstName": "Naji",
      "lastName": "Marshall",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 666969,
      "fullName": "Zion Williamson",
      "firstName": "Zion",
      "lastName": "Williamson",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 455,
      "fullName": "Jonas Valanciunas",
      "firstName": "Jonas",
      "lastName": "Valanciunas",
      "position": "C",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 491,
      "fullName": "Cody Zeller",
      "firstName": "Cody",
      "lastName": "Zeller",
      "position": "C",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "__v": 0
    },
    {
      "_id": 77,
      "fullName": "Alec Burks",
      "firstName": "Alec",
      "lastName": "Burks",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 54,
      "fullName": "Bojan Bogdanovic",
      "firstName": "Bojan",
      "lastName": "Bogdanovic",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 73,
      "fullName": "Jalen Brunson",
      "firstName": "Jalen",
      "lastName": "Brunson",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 17896033,
      "fullName": "Miles McBride",
      "firstName": "Miles",
      "lastName": "McBride",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 131,
      "fullName": "Donte DiVincenzo",
      "firstName": "Donte",
      "lastName": "DiVincenzo",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 666675,
      "fullName": "DaQuan Jeffries",
      "firstName": "DaQuan",
      "lastName": "Jeffries",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 387,
      "fullName": "Julius Randle",
      "firstName": "Julius",
      "lastName": "Randle",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 399,
      "fullName": "Mitchell Robinson",
      "firstName": "Mitchell",
      "lastName": "Robinson",
      "position": "C",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 201,
      "fullName": "Isaiah Hartenstein",
      "firstName": "Isaiah",
      "lastName": "Hartenstein",
      "position": "F-C",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 666873,
      "fullName": "Isaiah Roby",
      "firstName": "Isaiah",
      "lastName": "Roby",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 17896063,
      "fullName": "Jericho Sims",
      "firstName": "Jericho",
      "lastName": "Sims",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 202,
      "fullName": "Josh Hart",
      "firstName": "Josh",
      "lastName": "Hart",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 18,
      "fullName": "OG Anunoby",
      "firstName": "OG",
      "lastName": "Anunoby",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 3547249,
      "fullName": "Precious Achiuwa",
      "firstName": "Precious",
      "lastName": "Achiuwa",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "__v": 0
    },
    {
      "_id": 204,
      "fullName": "Gordon Hayward",
      "firstName": "Gordon",
      "lastName": "Hayward",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 3547272,
      "fullName": "Isaiah Joe",
      "firstName": "Isaiah",
      "lastName": "Joe",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 17896065,
      "fullName": "Josh Giddey",
      "firstName": "Josh",
      "lastName": "Giddey",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 175,
      "fullName": "Shai Gilgeous-Alexander",
      "firstName": "Shai",
      "lastName": "Gilgeous-Alexander",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 17896078,
      "fullName": "Aaron Wiggins",
      "firstName": "Aaron",
      "lastName": "Wiggins",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 38017703,
      "fullName": "Jalen Williams",
      "firstName": "Jalen",
      "lastName": "Williams",
      "position": "G-F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 56677853,
      "fullName": "Keyontae Johnson",
      "firstName": "Keyontae",
      "lastName": "Johnson",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 666541,
      "fullName": "Luguentz Dort",
      "firstName": "Luguentz",
      "lastName": "Dort",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 56677833,
      "fullName": "Cason Wallace",
      "firstName": "Cason",
      "lastName": "Wallace",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 480,
      "fullName": "Kenrich Williams",
      "firstName": "Kenrich",
      "lastName": "Williams",
      "position": "G-F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 3547271,
      "fullName": "Aleksej Pokusevski",
      "firstName": "Aleksej",
      "lastName": "Pokusevski",
      "position": "C",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 38017735,
      "fullName": "Jack White",
      "firstName": "Jack",
      "lastName": "White",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 38017716,
      "fullName": "Ousmane Dieng",
      "firstName": "Ousmane",
      "lastName": "Dieng",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 38017706,
      "fullName": "Jaylin Williams",
      "firstName": "Jaylin",
      "lastName": "Williams",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 38017685,
      "fullName": "Chet Holmgren",
      "firstName": "Chet",
      "lastName": "Holmgren",
      "position": "C-F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "__v": 0
    },
    {
      "_id": 3547280,
      "fullName": "Jay Scrubb",
      "firstName": "Jay",
      "lastName": "Scrubb",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 3547251,
      "fullName": "Cole Anthony",
      "firstName": "Cole",
      "lastName": "Anthony",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 56677827,
      "fullName": "Anthony Black",
      "firstName": "Anthony",
      "lastName": "Black",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 38017607,
      "fullName": "Kevon Harris",
      "firstName": "Kevon",
      "lastName": "Harris",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 165,
      "fullName": "Markelle Fultz",
      "firstName": "Markelle",
      "lastName": "Fultz",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 17896073,
      "fullName": "Jalen Suggs",
      "firstName": "Jalen",
      "lastName": "Suggs",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 17896026,
      "fullName": "Franz Wagner",
      "firstName": "Franz",
      "lastName": "Wagner",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 56677839,
      "fullName": "Jett Howard",
      "firstName": "Jett",
      "lastName": "Howard",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 196,
      "fullName": "Gary Harris",
      "firstName": "Gary",
      "lastName": "Harris",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 226,
      "fullName": "Joe Ingles",
      "firstName": "Joe",
      "lastName": "Ingles",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 38017724,
      "fullName": "Caleb Houstan",
      "firstName": "Caleb",
      "lastName": "Houstan",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 666885,
      "fullName": "Admiral Schofield",
      "firstName": "Admiral",
      "lastName": "Schofield",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 38017683,
      "fullName": "Paolo Banchero",
      "firstName": "Paolo",
      "lastName": "Banchero",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 666818,
      "fullName": "Chuma Okeke",
      "firstName": "Chuma",
      "lastName": "Okeke",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 85,
      "fullName": "Wendell Carter Jr.",
      "firstName": "Wendell",
      "lastName": "Carter Jr.",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 462,
      "fullName": "Moritz Wagner",
      "firstName": "Moritz",
      "lastName": "Wagner",
      "position": "C",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 666442,
      "fullName": "Goga Bitadze",
      "firstName": "Goga",
      "lastName": "Bitadze",
      "position": "C",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 229,
      "fullName": "Jonathan Isaac",
      "firstName": "Jonathan",
      "lastName": "Isaac",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "__v": 0
    },
    {
      "_id": 210,
      "fullName": "Buddy Hield",
      "firstName": "Buddy",
      "lastName": "Hield",
      "position": "G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 33,
      "fullName": "Nicolas Batum",
      "firstName": "Nicolas",
      "lastName": "Batum",
      "position": "F-G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 108,
      "fullName": "Robert Covington",
      "firstName": "Robert",
      "lastName": "Covington",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 38017732,
      "fullName": "Kenneth Lofton Jr.",
      "firstName": "Kenneth",
      "lastName": "Lofton Jr.",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 3547254,
      "fullName": "Tyrese Maxey",
      "firstName": "Tyrese",
      "lastName": "Maxey",
      "position": "G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 260,
      "fullName": "Furkan Korkmaz",
      "firstName": "Furkan",
      "lastName": "Korkmaz",
      "position": "G-F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 56913527,
      "fullName": "Ricky Council IV",
      "firstName": "Ricky",
      "lastName": "Council IV",
      "position": "G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 200,
      "fullName": "Tobias Harris",
      "firstName": "Tobias",
      "lastName": "Harris",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 2175,
      "fullName": "Danuel House Jr.",
      "firstName": "Danuel",
      "lastName": "House Jr.",
      "position": "",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 56677863,
      "fullName": "Azuolas Tubelis",
      "firstName": "Azuolas",
      "lastName": "Tubelis",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 145,
      "fullName": "Joel Embiid",
      "firstName": "Joel",
      "lastName": "Embiid",
      "position": "F-C",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 3547270,
      "fullName": "Paul Reed",
      "firstName": "Paul",
      "lastName": "Reed",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 28,
      "fullName": "Mo Bamba",
      "firstName": "Mo",
      "lastName": "Bamba",
      "position": "C",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 194,
      "fullName": "Montrezl Harrell",
      "firstName": "Montrezl",
      "lastName": "Harrell",
      "position": "F-C",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "__v": 0
    },
    {
      "_id": 38017729,
      "fullName": "David Roddy",
      "firstName": "David",
      "lastName": "Roddy",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 8,
      "fullName": "Grayson Allen",
      "firstName": "Grayson",
      "lastName": "Allen",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 510,
      "fullName": "Larry Nance",
      "firstName": "Larry",
      "lastName": "Nance",
      "position": "",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 57,
      "fullName": "Devin Booker",
      "firstName": "Devin",
      "lastName": "Booker",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 3547298,
      "fullName": "Saben Lee",
      "firstName": "Saben",
      "lastName": "Lee",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 37,
      "fullName": "Bradley Beal",
      "firstName": "Bradley",
      "lastName": "Beal",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 272,
      "fullName": "Damion Lee",
      "firstName": "Damion",
      "lastName": "Lee",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 356,
      "fullName": "Josh Okogie",
      "firstName": "Josh",
      "lastName": "Okogie",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 140,
      "fullName": "Kevin Durant",
      "firstName": "Kevin",
      "lastName": "Durant",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 666451,
      "fullName": "Bol Bol",
      "firstName": "Bol",
      "lastName": "Bol",
      "position": "C",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 147,
      "fullName": "Drew Eubanks",
      "firstName": "Drew",
      "lastName": "Eubanks",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 314,
      "fullName": "Chimezie Metu",
      "firstName": "Chimezie",
      "lastName": "Metu",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 666729,
      "fullName": "Nassir Little",
      "firstName": "Nassir",
      "lastName": "Little",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 349,
      "fullName": "Jusuf Nurkic",
      "firstName": "Jusuf",
      "lastName": "Nurkic",
      "position": "C",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "__v": 0
    },
    {
      "_id": 65,
      "fullName": "Malcolm Brogdon",
      "firstName": "Malcolm",
      "lastName": "Brogdon",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 17896094,
      "fullName": "Dalano Banton",
      "firstName": "Dalano",
      "lastName": "Banton",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 476,
      "fullName": "Robert Williams III",
      "firstName": "Robert",
      "lastName": "Williams III",
      "position": "C-F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 44477062,
      "fullName": "Jamaree Bouyea",
      "firstName": "Jamaree",
      "lastName": "Bouyea",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 17896120,
      "fullName": "Ish Wainright",
      "firstName": "Ish",
      "lastName": "Wainright",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 56677850,
      "fullName": "Toumani Camara",
      "firstName": "Toumani",
      "lastName": "Camara",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 22,
      "fullName": "Deandre Ayton",
      "firstName": "Deandre",
      "lastName": "Ayton",
      "position": "C",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 56677747,
      "fullName": "Scoot Henderson",
      "firstName": "Scoot",
      "lastName": "Henderson",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 419,
      "fullName": "Anfernee Simons",
      "firstName": "Anfernee",
      "lastName": "Simons",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 666923,
      "fullName": "Matisse Thybulle",
      "firstName": "Matisse",
      "lastName": "Thybulle",
      "position": "G-F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 38017690,
      "fullName": "Shaedon Sharpe",
      "firstName": "Shaedon",
      "lastName": "Sharpe",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 56677829,
      "fullName": "Rayan Rupert",
      "firstName": "Rayan",
      "lastName": "Rupert",
      "position": "G-F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 182,
      "fullName": "Jerami Grant",
      "firstName": "Jerami",
      "lastName": "Grant",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 56677791,
      "fullName": "Kris Murray",
      "firstName": "Kris",
      "lastName": "Murray",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 38017711,
      "fullName": "Jabari Walker",
      "firstName": "Jabari",
      "lastName": "Walker",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 39613724,
      "fullName": "Ibou Badji",
      "firstName": "Ibou",
      "lastName": "Badji",
      "position": "C",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 38124126,
      "fullName": "John Butler Jr.",
      "firstName": "John",
      "lastName": "Butler Jr.",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 448,
      "fullName": "Gary Trent Jr.",
      "firstName": "Gary",
      "lastName": "Trent Jr.",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "__v": 0
    },
    {
      "_id": 306,
      "fullName": "JaVale McGee",
      "firstName": "JaVale",
      "lastName": "McGee",
      "position": "C",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 17895941,
      "fullName": "Filip Petrusev",
      "firstName": "Filip",
      "lastName": "Petrusev",
      "position": "C",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 17553994,
      "fullName": "Davion Mitchell",
      "firstName": "Davion",
      "lastName": "Mitchell",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 221,
      "fullName": "Kevin Huerter",
      "firstName": "Kevin",
      "lastName": "Huerter",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 324,
      "fullName": "Malik Monk",
      "firstName": "Malik",
      "lastName": "Monk",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 56677845,
      "fullName": "Colby Jones",
      "firstName": "Colby",
      "lastName": "Jones",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 38017714,
      "fullName": "Keon Ellis",
      "firstName": "Keon",
      "lastName": "Ellis",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 30,
      "fullName": "Harrison Barnes",
      "firstName": "Harrison",
      "lastName": "Barnes",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 17896030,
      "fullName": "Chris Duarte",
      "firstName": "Chris",
      "lastName": "Duarte",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 17896044,
      "fullName": "Kessler Edwards",
      "firstName": "Kessler",
      "lastName": "Edwards",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 38017688,
      "fullName": "Keegan Murray",
      "firstName": "Keegan",
      "lastName": "Murray",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 290,
      "fullName": "Trey Lyles",
      "firstName": "Trey",
      "lastName": "Lyles",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 56677862,
      "fullName": "Jalen Slawson",
      "firstName": "Jalen",
      "lastName": "Slawson",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 406,
      "fullName": "Domantas Sabonis",
      "firstName": "Domantas",
      "lastName": "Sabonis",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 273,
      "fullName": "Alex Len",
      "firstName": "Alex",
      "lastName": "Len",
      "position": "C",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "__v": 0
    },
    {
      "_id": 328,
      "fullName": "Marcus Morris",
      "firstName": "Marcus",
      "lastName": "Morris",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 3547274,
      "fullName": "Tre Jones",
      "firstName": "Tre",
      "lastName": "Jones",
      "position": "G",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 38017693,
      "fullName": "Blake Wesley",
      "firstName": "Blake",
      "lastName": "Wesley",
      "position": "G",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 3547246,
      "fullName": "Devin Vassell",
      "firstName": "Devin",
      "lastName": "Vassell",
      "position": "G-F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 38017649,
      "fullName": "Julian Champagnie",
      "firstName": "Julian",
      "lastName": "Champagnie",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 666682,
      "fullName": "Keldon Johnson",
      "firstName": "Keldon",
      "lastName": "Johnson",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 359,
      "fullName": "Cedi Osman",
      "firstName": "Cedi",
      "lastName": "Osman",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 56677817,
      "fullName": "Sidy Cissoko",
      "firstName": "Sidy",
      "lastName": "Cissoko",
      "position": "G",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 38017699,
      "fullName": "Jeremy Sochan",
      "firstName": "Jeremy",
      "lastName": "Sochan",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 38017730,
      "fullName": "Dominick Barlow",
      "firstName": "Dominick",
      "lastName": "Barlow",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 56677822,
      "fullName": "Victor Wembanyama",
      "firstName": "Victor",
      "lastName": "Wembanyama",
      "position": "F-C",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 102,
      "fullName": "Zach Collins",
      "firstName": "Zach",
      "lastName": "Collins",
      "position": "F-C",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 46,
      "fullName": "Khem Birch",
      "firstName": "Khem",
      "lastName": "Birch",
      "position": "C",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "__v": 0
    },
    {
      "_id": 69,
      "fullName": "Bruce Brown",
      "firstName": "Bruce",
      "lastName": "Brown",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 3547207,
      "fullName": "Jordan Nwora",
      "firstName": "Jordan",
      "lastName": "Nwora",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 3547269,
      "fullName": "Immanuel Quickley",
      "firstName": "Immanuel",
      "lastName": "Quickley",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 666423,
      "fullName": "RJ Barrett",
      "firstName": "RJ",
      "lastName": "Barrett",
      "position": "F-G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 56677869,
      "fullName": "Markquis Nowell",
      "firstName": "Markquis",
      "lastName": "Nowell",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 56677828,
      "fullName": "Gradey Dick",
      "firstName": "Gradey",
      "lastName": "Dick",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 56677805,
      "fullName": "Javon Freeman-Liberty",
      "firstName": "Javon",
      "lastName": "Freeman-Liberty",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 17896055,
      "fullName": "Scottie Barnes",
      "firstName": "Scottie",
      "lastName": "Barnes",
      "position": "G-F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 666762,
      "fullName": "Jalen McDaniels",
      "firstName": "Jalen",
      "lastName": "McDaniels",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 38017717,
      "fullName": "Ron Harper Jr.",
      "firstName": "Ron",
      "lastName": "Harper Jr.",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 489,
      "fullName": "Thaddeus Young",
      "firstName": "Thaddeus",
      "lastName": "Young",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 373,
      "fullName": "Jakob Poeltl",
      "firstName": "Jakob",
      "lastName": "Poeltl",
      "position": "C",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 58,
      "fullName": "Chris Boucher",
      "firstName": "Chris",
      "lastName": "Boucher",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 38017710,
      "fullName": "Christian Koloko",
      "firstName": "Christian",
      "lastName": "Koloko",
      "position": "C",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 38017620,
      "fullName": "Ochai Agbaji",
      "firstName": "Ochai",
      "lastName": "Agbaji",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 358,
      "fullName": "Kelly Olynyk",
      "firstName": "Kelly",
      "lastName": "Olynyk",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "__v": 0
    },
    {
      "_id": 17896042,
      "fullName": "Jason Preston",
      "firstName": "Jason",
      "lastName": "Preston",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 17896023,
      "fullName": "Josh Christopher",
      "firstName": "Josh",
      "lastName": "Christopher",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 3547260,
      "fullName": "Kira Lewis Jr.",
      "firstName": "Kira",
      "lastName": "Lewis Jr.",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 376,
      "fullName": "Otto Porter Jr.",
      "firstName": "Otto",
      "lastName": "Porter Jr.",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 413,
      "fullName": "Collin Sexton",
      "firstName": "Collin",
      "lastName": "Sexton",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 139,
      "fullName": "Kris Dunn",
      "firstName": "Kris",
      "lastName": "Dunn",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 100,
      "fullName": "Jordan Clarkson",
      "firstName": "Jordan",
      "lastName": "Clarkson",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 666650,
      "fullName": "Talen Horton-Tucker",
      "firstName": "Talen",
      "lastName": "Horton-Tucker",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 38017630,
      "fullName": "Johnny Juzang",
      "firstName": "Johnny",
      "lastName": "Juzang",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 56677842,
      "fullName": "Brice Sensabaugh",
      "firstName": "Brice",
      "lastName": "Sensabaugh",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 297,
      "fullName": "Lauri Markkanen",
      "firstName": "Lauri",
      "lastName": "Markkanen",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 56677824,
      "fullName": "Taylor Hendricks",
      "firstName": "Taylor",
      "lastName": "Hendricks",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 38017705,
      "fullName": "Walker Kessler",
      "firstName": "Walker",
      "lastName": "Kessler",
      "position": "C",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 101,
      "fullName": "John Collins",
      "firstName": "John",
      "lastName": "Collins",
      "position": "F-C",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "__v": 0
    },
    {
      "_id": 217,
      "fullName": "Richaun Holmes",
      "firstName": "Richaun",
      "lastName": "Holmes",
      "position": "F-C",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 17896071,
      "fullName": "Isaiah Livers",
      "firstName": "Isaiah",
      "lastName": "Livers",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 24,
      "fullName": "Marvin Bagley III",
      "firstName": "Marvin",
      "lastName": "Bagley III",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 17895967,
      "fullName": "Isaiah Todd",
      "firstName": "Isaiah",
      "lastName": "Todd",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 17895726,
      "fullName": "Jordan Goodwin",
      "firstName": "Jordan",
      "lastName": "Goodwin",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 249,
      "fullName": "Tyus Jones",
      "firstName": "Tyus",
      "lastName": "Jones",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 487,
      "fullName": "Delon Wright",
      "firstName": "Delon",
      "lastName": "Wright",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 38017712,
      "fullName": "Ryan Rollins",
      "firstName": "Ryan",
      "lastName": "Rollins",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 18677954,
      "fullName": "Jared Butler",
      "firstName": "Jared",
      "lastName": "Butler",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 666848,
      "fullName": "Jordan Poole",
      "firstName": "Jordan",
      "lastName": "Poole",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 414,
      "fullName": "Landry Shamet",
      "firstName": "Landry",
      "lastName": "Shamet",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 17896106,
      "fullName": "Eugene Omoruyi",
      "firstName": "Eugene",
      "lastName": "Omoruyi",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 17896045,
      "fullName": "Corey Kispert",
      "firstName": "Corey",
      "lastName": "Kispert",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 3547242,
      "fullName": "Deni Avdija",
      "firstName": "Deni",
      "lastName": "Avdija",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 56677844,
      "fullName": "Bilal Coulibaly",
      "firstName": "Bilal",
      "lastName": "Coulibaly",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 38017704,
      "fullName": "Patrick Baldwin Jr.",
      "firstName": "Patrick",
      "lastName": "Baldwin Jr.",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 265,
      "fullName": "Kyle Kuzma",
      "firstName": "Kyle",
      "lastName": "Kuzma",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    },
    {
      "_id": 3547302,
      "fullName": "Anthony Gill",
      "firstName": "Anthony",
      "lastName": "Gill",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "__v": 0
    })
 



    
   /* -------------------------------------------------------
    player objeleri
{
      "_id": 490,
      "firstName": "Trae",
      "lastName": "Young",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Trae Young",
      "__v": 0
    },
    {
      "_id": 319,
      "firstName": "Patty",
      "lastName": "Mills",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Patty Mills",
      "__v": 0
    },
    {
      "_id": 56677838,
      "firstName": "Kobe",
      "lastName": "Bufkin",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Kobe Bufkin",
      "__v": 0
    },
    {
      "_id": 4197387,
      "firstName": "Vit",
      "lastName": "Krejci",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Vit Krejci",
      "__v": 0
    },
    {
      "_id": 334,
      "firstName": "Dejounte",
      "lastName": "Murray",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Dejounte Murray",
      "__v": 0
    },
    {
      "_id": 53,
      "firstName": "Bogdan",
      "lastName": "Bogdanovic",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Bogdan Bogdanovic",
      "__v": 0
    },
    {
      "_id": 666754,
      "firstName": "Garrison",
      "lastName": "Mathews",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Garrison Mathews",
      "__v": 0
    },
    {
      "_id": 56677855,
      "firstName": "Seth",
      "lastName": "Lundy",
      "position": "G",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Seth Lundy",
      "__v": 0
    },
    {
      "_id": 3547256,
      "firstName": "Saddiq",
      "lastName": "Bey",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Saddiq Bey",
      "__v": 0
    },
    {
      "_id": 38017689,
      "firstName": "AJ",
      "lastName": "Griffin",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "AJ Griffin",
      "__v": 0
    },
    {
      "_id": 17896040,
      "firstName": "Jalen",
      "lastName": "Johnson",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Jalen Johnson",
      "__v": 0
    },
    {
      "_id": 56677806,
      "firstName": "Mouhamed",
      "lastName": "Gueye",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Mouhamed Gueye",
      "__v": 0
    },
    {
      "_id": 56677875,
      "firstName": "Miles",
      "lastName": "Norris",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Miles Norris",
      "__v": 0
    },
    {
      "_id": 83,
      "firstName": "Clint",
      "lastName": "Capela",
      "position": "C",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Clint Capela",
      "__v": 0
    },
    {
      "_id": 3547244,
      "firstName": "Onyeka",
      "lastName": "Okongwu",
      "position": "F-C",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Onyeka Okongwu",
      "__v": 0
    },
    {
      "_id": 666564,
      "firstName": "Bruno",
      "lastName": "Fernando",
      "position": "F",
      "teamId": 1,
      "teamName": "Atlanta Hawks",
      "fullName": "Bruno Fernando",
      "__v": 0
    },
    {
      "_id": 65,
      "firstName": "Malcolm",
      "lastName": "Brogdon",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Malcolm Brogdon",
      "__v": 0
    },
    {
      "_id": 3547276,
      "firstName": "Payton",
      "lastName": "Pritchard",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Payton Pritchard",
      "__v": 0
    },
    {
      "_id": 17896094,
      "firstName": "Dalano",
      "lastName": "Banton",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Dalano Banton",
      "__v": 0
    },
    {
      "_id": 38017707,
      "firstName": "JD",
      "lastName": "Davison",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "JD Davison",
      "__v": 0
    },
    {
      "_id": 70,
      "firstName": "Jaylen",
      "lastName": "Brown",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Jaylen Brown",
      "__v": 0
    },
    {
      "_id": 473,
      "firstName": "Derrick",
      "lastName": "White",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Derrick White",
      "__v": 0
    },
    {
      "_id": 3547280,
      "firstName": "Jay",
      "lastName": "Scrubb",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Jay Scrubb",
      "__v": 0
    },
    {
      "_id": 434,
      "firstName": "Jayson",
      "lastName": "Tatum",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Jayson Tatum",
      "__v": 0
    },
    {
      "_id": 17896060,
      "firstName": "Sam",
      "lastName": "Hauser",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Sam Hauser",
      "__v": 0
    },
    {
      "_id": 56677864,
      "firstName": "Jordan",
      "lastName": "Walsh",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Jordan Walsh",
      "__v": 0
    },
    {
      "_id": 378,
      "firstName": "Kristaps",
      "lastName": "Porzingis",
      "position": "F-C",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Kristaps Porzingis",
      "__v": 0
    },
    {
      "_id": 666468,
      "firstName": "Oshae",
      "lastName": "Brissett",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Oshae Brissett",
      "__v": 0
    },
    {
      "_id": 476,
      "firstName": "Robert",
      "lastName": "Williams III",
      "position": "C-F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Robert Williams III",
      "__v": 0
    },
    {
      "_id": 219,
      "firstName": "Al",
      "lastName": "Horford",
      "position": "C-F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Al Horford",
      "__v": 0
    },
    {
      "_id": 261,
      "firstName": "Luke",
      "lastName": "Kornet",
      "position": "F-C",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Luke Kornet",
      "__v": 0
    },
    {
      "_id": 130,
      "firstName": "Spencer",
      "lastName": "Dinwiddie",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Spencer Dinwiddie",
      "__v": 0
    },
    {
      "_id": 417,
      "firstName": "Ben",
      "lastName": "Simmons",
      "position": "G-F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Ben Simmons",
      "__v": 0
    },
    {
      "_id": 421,
      "firstName": "Dennis",
      "lastName": "Smith Jr.",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Dennis Smith Jr.",
      "__v": 0
    },
    {
      "_id": 9051997,
      "firstName": "Armoni",
      "lastName": "Brooks",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Armoni Brooks",
      "__v": 0
    },
    {
      "_id": 61,
      "firstName": "Mikal",
      "lastName": "Bridges",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Mikal Bridges",
      "__v": 0
    },
    {
      "_id": 17896048,
      "firstName": "Cam",
      "lastName": "Thomas",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Cam Thomas",
      "__v": 0
    },
    {
      "_id": 464,
      "firstName": "Lonnie",
      "lastName": "Walker IV",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Lonnie Walker IV",
      "__v": 0
    },
    {
      "_id": 56677841,
      "firstName": "Dariq",
      "lastName": "Whitehead",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Dariq Whitehead",
      "__v": 0
    },
    {
      "_id": 56677722,
      "firstName": "Jalen",
      "lastName": "Wilson",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Jalen Wilson",
      "__v": 0
    },
    {
      "_id": 158,
      "firstName": "Dorian",
      "lastName": "Finney-Smith",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Dorian Finney-Smith",
      "__v": 0
    },
    {
      "_id": 666429,
      "firstName": "Darius",
      "lastName": "Bazley",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Darius Bazley",
      "__v": 0
    },
    {
      "_id": 56677843,
      "firstName": "Noah",
      "lastName": "Clowney",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Noah Clowney",
      "__v": 0
    },
    {
      "_id": 666508,
      "firstName": "Nicolas",
      "lastName": "Claxton",
      "position": "F-C",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Nicolas Claxton",
      "__v": 0
    },
    {
      "_id": 403,
      "firstName": "Terry",
      "lastName": "Rozier",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Terry Rozier",
      "__v": 0
    },
    {
      "_id": 56677846,
      "firstName": "Nick",
      "lastName": "Smith Jr.",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Nick Smith Jr.",
      "__v": 0
    },
    {
      "_id": 2202,
      "firstName": "Kobi",
      "lastName": "Simmons",
      "position": "",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Kobi Simmons",
      "__v": 0
    },
    {
      "_id": 56677848,
      "firstName": "Amari",
      "lastName": "Bailey",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Amari Bailey",
      "__v": 0
    },
    {
      "_id": 3547239,
      "firstName": "LaMelo",
      "lastName": "Ball",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "LaMelo Ball",
      "__v": 0
    },
    {
      "_id": 666748,
      "firstName": "Cody",
      "lastName": "Martin",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Cody Martin",
      "__v": 0
    },
    {
      "_id": 17896037,
      "firstName": "James",
      "lastName": "Bouknight",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "James Bouknight",
      "__v": 0
    },
    {
      "_id": 17895994,
      "firstName": "Xavier",
      "lastName": "Sneed",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Xavier Sneed",
      "__v": 0
    },
    {
      "_id": 56677823,
      "firstName": "Brandon",
      "lastName": "Miller",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Brandon Miller",
      "__v": 0
    },
    {
      "_id": 204,
      "firstName": "Gordon",
      "lastName": "Hayward",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Gordon Hayward",
      "__v": 0
    },
    {
      "_id": 38017708,
      "firstName": "Bryce",
      "lastName": "McGowens",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Bryce McGowens",
      "__v": 0
    },
    {
      "_id": 56677866,
      "firstName": "Leaky",
      "lastName": "Black",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Leaky Black",
      "__v": 0
    },
    {
      "_id": 62,
      "firstName": "Miles",
      "lastName": "Bridges",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Miles Bridges",
      "__v": 0
    },
    {
      "_id": 17896032,
      "firstName": "Kai",
      "lastName": "Jones",
      "position": "F-C",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Kai Jones",
      "__v": 0
    },
    {
      "_id": 17957861,
      "firstName": "JT",
      "lastName": "Thor",
      "position": "",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "JT Thor",
      "__v": 0
    },
    {
      "_id": 38017698,
      "firstName": "Mark",
      "lastName": "Williams",
      "position": "C",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Mark Williams",
      "__v": 0
    },
    {
      "_id": 3547282,
      "firstName": "Nick",
      "lastName": "Richards",
      "position": "C",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Nick Richards",
      "__v": 0
    },
    {
      "_id": 666956,
      "firstName": "Coby",
      "lastName": "White",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Coby White",
      "__v": 0
    },
    {
      "_id": 87,
      "firstName": "Jevon",
      "lastName": "Carter",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Jevon Carter",
      "__v": 0
    },
    {
      "_id": 17896099,
      "firstName": "Carlik",
      "lastName": "Jones",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Carlik Jones",
      "__v": 0
    },
    {
      "_id": 27,
      "firstName": "Lonzo",
      "lastName": "Ball",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Lonzo Ball",
      "__v": 0
    },
    {
      "_id": 268,
      "firstName": "Zach",
      "lastName": "LaVine",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Zach LaVine",
      "__v": 0
    },
    {
      "_id": 89,
      "firstName": "Alex",
      "lastName": "Caruso",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Alex Caruso",
      "__v": 0
    },
    {
      "_id": 56677874,
      "firstName": "Onuralp",
      "lastName": "Bitim",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Onuralp Bitim",
      "__v": 0
    },
    {
      "_id": 125,
      "firstName": "DeMar",
      "lastName": "DeRozan",
      "position": "G",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "DeMar DeRozan",
      "__v": 0
    },
    {
      "_id": 38017719,
      "firstName": "Dalen",
      "lastName": "Terry",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Dalen Terry",
      "__v": 0
    },
    {
      "_id": 3547248,
      "firstName": "Patrick",
      "lastName": "Williams",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Patrick Williams",
      "__v": 0
    },
    {
      "_id": 110,
      "firstName": "Torrey",
      "lastName": "Craig",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Torrey Craig",
      "__v": 0
    },
    {
      "_id": 460,
      "firstName": "Nikola",
      "lastName": "Vucevic",
      "position": "C",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Nikola Vucevic",
      "__v": 0
    },
    {
      "_id": 137,
      "firstName": "Andre",
      "lastName": "Drummond",
      "position": "C",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Andre Drummond",
      "__v": 0
    },
    {
      "_id": 56677860,
      "firstName": "Adama",
      "lastName": "Sanogo",
      "position": "F",
      "teamId": 5,
      "teamName": "Chicago Bulls",
      "fullName": "Adama Sanogo",
      "__v": 0
    },
    {
      "_id": 666581,
      "firstName": "Darius",
      "lastName": "Garland",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Darius Garland",
      "__v": 0
    },
    {
      "_id": 404,
      "firstName": "Ricky",
      "lastName": "Rubio",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Ricky Rubio",
      "__v": 0
    },
    {
      "_id": 666676,
      "firstName": "Ty",
      "lastName": "Jerome",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Ty Jerome",
      "__v": 0
    },
    {
      "_id": 56677872,
      "firstName": "Craig",
      "lastName": "Porter",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Craig Porter",
      "__v": 0
    },
    {
      "_id": 322,
      "firstName": "Donovan",
      "lastName": "Mitchell",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Donovan Mitchell",
      "__v": 0
    },
    {
      "_id": 277,
      "firstName": "Caris",
      "lastName": "LeVert",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Caris LeVert",
      "__v": 0
    },
    {
      "_id": 3547299,
      "firstName": "Sam",
      "lastName": "Merrill",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Sam Merrill",
      "__v": 0
    },
    {
      "_id": 3547247,
      "firstName": "Isaac",
      "lastName": "Okoro",
      "position": "F-G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Isaac Okoro",
      "__v": 0
    },
    {
      "_id": 666908,
      "firstName": "Max",
      "lastName": "Strus",
      "position": "G",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Max Strus",
      "__v": 0
    },
    {
      "_id": 344,
      "firstName": "Georges",
      "lastName": "Niang",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Georges Niang",
      "__v": 0
    },
    {
      "_id": 56677847,
      "firstName": "Emoni",
      "lastName": "Bates",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Emoni Bates",
      "__v": 0
    },
    {
      "_id": 17896076,
      "firstName": "Evan",
      "lastName": "Mobley",
      "position": "F-C",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Evan Mobley",
      "__v": 0
    },
    {
      "_id": 666940,
      "firstName": "Dean",
      "lastName": "Wade",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Dean Wade",
      "__v": 0
    },
    {
      "_id": 38017662,
      "firstName": "Isaiah",
      "lastName": "Mobley",
      "position": "F",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Isaiah Mobley",
      "__v": 0
    },
    {
      "_id": 9,
      "firstName": "Jarrett",
      "lastName": "Allen",
      "position": "C",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Jarrett Allen",
      "__v": 0
    },
    {
      "_id": 248,
      "firstName": "Damian",
      "lastName": "Jones",
      "position": "C",
      "teamId": 6,
      "teamName": "Cleveland Cavaliers",
      "fullName": "Damian Jones",
      "__v": 0
    },
    {
      "_id": 228,
      "firstName": "Kyrie",
      "lastName": "Irving",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Kyrie Irving",
      "__v": 0
    },
    {
      "_id": 151,
      "firstName": "Dante",
      "lastName": "Exum",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Dante Exum",
      "__v": 0
    },
    {
      "_id": 132,
      "firstName": "Luka",
      "lastName": "Doncic",
      "position": "F-G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Luka Doncic",
      "__v": 0
    },
    {
      "_id": 114,
      "firstName": "Seth",
      "lastName": "Curry",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Seth Curry",
      "__v": 0
    },
    {
      "_id": 38017679,
      "firstName": "Jaden",
      "lastName": "Hardy",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Jaden Hardy",
      "__v": 0
    },
    {
      "_id": 191,
      "firstName": "Tim",
      "lastName": "Hardaway Jr.",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Tim Hardaway Jr.",
      "__v": 0
    },
    {
      "_id": 3547258,
      "firstName": "Josh",
      "lastName": "Green",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Josh Green",
      "__v": 0
    },
    {
      "_id": 17554004,
      "firstName": "AJ",
      "lastName": "Lawson",
      "position": "G",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "AJ Lawson",
      "__v": 0
    },
    {
      "_id": 666965,
      "firstName": "Grant",
      "lastName": "Williams",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Grant Williams",
      "__v": 0
    },
    {
      "_id": 257,
      "firstName": "Maxi",
      "lastName": "Kleber",
      "position": "F",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Maxi Kleber",
      "__v": 0
    },
    {
      "_id": 379,
      "firstName": "Dwight",
      "lastName": "Powell",
      "position": "F-C",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Dwight Powell",
      "__v": 0
    },
    {
      "_id": 56677840,
      "firstName": "Dereck",
      "lastName": "Lively II",
      "position": "C",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Dereck Lively II",
      "__v": 0
    },
    {
      "_id": 306,
      "firstName": "JaVale",
      "lastName": "McGee",
      "position": "C",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "JaVale McGee",
      "__v": 0
    },
    {
      "_id": 217,
      "firstName": "Richaun",
      "lastName": "Holmes",
      "position": "F-C",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Richaun Holmes",
      "__v": 0
    },
    {
      "_id": 335,
      "firstName": "Jamal",
      "lastName": "Murray",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Jamal Murray",
      "__v": 0
    },
    {
      "_id": 236,
      "firstName": "Reggie",
      "lastName": "Jackson",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Reggie Jackson",
      "__v": 0
    },
    {
      "_id": 56677582,
      "firstName": "Jalen",
      "lastName": "Pickett",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Jalen Pickett",
      "__v": 0
    },
    {
      "_id": 38017727,
      "firstName": "Collin",
      "lastName": "Gillespie",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Collin Gillespie",
      "__v": 0
    },
    {
      "_id": 81,
      "firstName": "Kentavious",
      "lastName": "Caldwell-Pope",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Kentavious Caldwell-Pope",
      "__v": 0
    },
    {
      "_id": 38017709,
      "firstName": "Christian",
      "lastName": "Braun",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Christian Braun",
      "__v": 0
    },
    {
      "_id": 38017721,
      "firstName": "Peyton",
      "lastName": "Watson",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Peyton Watson",
      "__v": 0
    },
    {
      "_id": 375,
      "firstName": "Michael",
      "lastName": "Porter Jr.",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Michael Porter Jr.",
      "__v": 0
    },
    {
      "_id": 215,
      "firstName": "Justin",
      "lastName": "Holiday",
      "position": "F-G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Justin Holiday",
      "__v": 0
    },
    {
      "_id": 56677776,
      "firstName": "Julian",
      "lastName": "Strawther",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Julian Strawther",
      "__v": 0
    },
    {
      "_id": 56677871,
      "firstName": "Hunter",
      "lastName": "Tyson",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Hunter Tyson",
      "__v": 0
    },
    {
      "_id": 177,
      "firstName": "Aaron",
      "lastName": "Gordon",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Aaron Gordon",
      "__v": 0
    },
    {
      "_id": 666489,
      "firstName": "Vlatko",
      "lastName": "Cancar",
      "position": "F",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Vlatko Cancar",
      "__v": 0
    },
    {
      "_id": 17896007,
      "firstName": "Braxton",
      "lastName": "Key",
      "position": "G",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Braxton Key",
      "__v": 0
    },
    {
      "_id": 246,
      "firstName": "Nikola",
      "lastName": "Jokic",
      "position": "C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Nikola Jokic",
      "__v": 0
    },
    {
      "_id": 250,
      "firstName": "DeAndre",
      "lastName": "Jordan",
      "position": "C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "DeAndre Jordan",
      "__v": 0
    },
    {
      "_id": 3547268,
      "firstName": "Zeke",
      "lastName": "Nnaji",
      "position": "F-C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Zeke Nnaji",
      "__v": 0
    },
    {
      "_id": 17896103,
      "firstName": "Jay",
      "lastName": "Huff",
      "position": "F-C",
      "teamId": 8,
      "teamName": "Denver Nuggets",
      "fullName": "Jay Huff",
      "__v": 0
    },
    {
      "_id": 17896075,
      "firstName": "Cade",
      "lastName": "Cunningham",
      "position": "G-F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Cade Cunningham",
      "__v": 0
    },
    {
      "_id": 330,
      "firstName": "Monte",
      "lastName": "Morris",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Monte Morris",
      "__v": 0
    },
    {
      "_id": 3547241,
      "firstName": "Killian",
      "lastName": "Hayes",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Killian Hayes",
      "__v": 0
    },
    {
      "_id": 17553987,
      "firstName": "Zavier",
      "lastName": "Simpson",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Zavier Simpson",
      "__v": 0
    },
    {
      "_id": 38017682,
      "firstName": "Jaden",
      "lastName": "Ivey",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Jaden Ivey",
      "__v": 0
    },
    {
      "_id": 77,
      "firstName": "Alec",
      "lastName": "Burks",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Alec Burks",
      "__v": 0
    },
    {
      "_id": 56677792,
      "firstName": "Marcus",
      "lastName": "Sasser",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Marcus Sasser",
      "__v": 0
    },
    {
      "_id": 42097199,
      "firstName": "Jared",
      "lastName": "Rhoden",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Jared Rhoden",
      "__v": 0
    },
    {
      "_id": 56677826,
      "firstName": "Ausar",
      "lastName": "Thompson",
      "position": "G-F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Ausar Thompson",
      "__v": 0
    },
    {
      "_id": 197,
      "firstName": "Joe",
      "lastName": "Harris",
      "position": "F-G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Joe Harris",
      "__v": 0
    },
    {
      "_id": 56677729,
      "firstName": "Malcolm",
      "lastName": "Cazalon",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Malcolm Cazalon",
      "__v": 0
    },
    {
      "_id": 54,
      "firstName": "Bojan",
      "lastName": "Bogdanovic",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Bojan Bogdanovic",
      "__v": 0
    },
    {
      "_id": 17896071,
      "firstName": "Isaiah",
      "lastName": "Livers",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Isaiah Livers",
      "__v": 0
    },
    {
      "_id": 24,
      "firstName": "Marvin",
      "lastName": "Bagley III",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Marvin Bagley III",
      "__v": 0
    },
    {
      "_id": 38017694,
      "firstName": "Jalen",
      "lastName": "Duren",
      "position": "C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Jalen Duren",
      "__v": 0
    },
    {
      "_id": 3547240,
      "firstName": "James",
      "lastName": "Wiseman",
      "position": "C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "James Wiseman",
      "__v": 0
    },
    {
      "_id": 3547267,
      "firstName": "Isaiah",
      "lastName": "Stewart",
      "position": "F-C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Isaiah Stewart",
      "__v": 0
    },
    {
      "_id": 115,
      "firstName": "Stephen",
      "lastName": "Curry",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Stephen Curry",
      "__v": 0
    },
    {
      "_id": 367,
      "firstName": "Chris",
      "lastName": "Paul",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Chris Paul",
      "__v": 0
    },
    {
      "_id": 251,
      "firstName": "Cory",
      "lastName": "Joseph",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Cory Joseph",
      "__v": 0
    },
    {
      "_id": 443,
      "firstName": "Klay",
      "lastName": "Thompson",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Klay Thompson",
      "__v": 0
    },
    {
      "_id": 2189,
      "firstName": "Gary",
      "lastName": "Payton II",
      "position": "",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Gary Payton II",
      "__v": 0
    },
    {
      "_id": 56677858,
      "firstName": "Brandin",
      "lastName": "Podziemski",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Brandin Podziemski",
      "__v": 0
    },
    {
      "_id": 45658838,
      "firstName": "Lester",
      "lastName": "Quinones",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Lester Quinones",
      "__v": 0
    },
    {
      "_id": 475,
      "firstName": "Andrew",
      "lastName": "Wiggins",
      "position": "F-G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Andrew Wiggins",
      "__v": 0
    },
    {
      "_id": 17553992,
      "firstName": "Moses",
      "lastName": "Moody",
      "position": "G",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Moses Moody",
      "__v": 0
    },
    {
      "_id": 185,
      "firstName": "Draymond",
      "lastName": "Green",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Draymond Green",
      "__v": 0
    },
    {
      "_id": 407,
      "firstName": "Dario",
      "lastName": "Saric",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Dario Saric",
      "__v": 0
    },
    {
      "_id": 17553979,
      "firstName": "Jonathan",
      "lastName": "Kuminga",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Jonathan Kuminga",
      "__v": 0
    },
    {
      "_id": 282,
      "firstName": "Kevon",
      "lastName": "Looney",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Kevon Looney",
      "__v": 0
    },
    {
      "_id": 56677799,
      "firstName": "Trayce",
      "lastName": "Jackson-Davis",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Trayce Jackson-Davis",
      "__v": 0
    },
    {
      "_id": 458,
      "firstName": "Fred",
      "lastName": "VanVleet",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Fred VanVleet",
      "__v": 0
    },
    {
      "_id": 56677825,
      "firstName": "Amen",
      "lastName": "Thompson",
      "position": "G-F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Amen Thompson",
      "__v": 0
    },
    {
      "_id": 213,
      "firstName": "Aaron",
      "lastName": "Holiday",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Aaron Holiday",
      "__v": 0
    },
    {
      "_id": 38017737,
      "firstName": "Trevor",
      "lastName": "Hudgins",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Trevor Hudgins",
      "__v": 0
    },
    {
      "_id": 17895966,
      "firstName": "Jalen",
      "lastName": "Green",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Jalen Green",
      "__v": 0
    },
    {
      "_id": 666849,
      "firstName": "Kevin",
      "lastName": "Porter Jr.",
      "position": "G",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Kevin Porter Jr.",
      "__v": 0
    },
    {
      "_id": 66,
      "firstName": "Dillon",
      "lastName": "Brooks",
      "position": "G-F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Dillon Brooks",
      "__v": 0
    },
    {
      "_id": 56677831,
      "firstName": "Cam",
      "lastName": "Whitmore",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Cam Whitmore",
      "__v": 0
    },
    {
      "_id": 38017684,
      "firstName": "Jabari",
      "lastName": "Smith Jr.",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Jabari Smith Jr.",
      "__v": 0
    },
    {
      "_id": 188,
      "firstName": "Jeff",
      "lastName": "Green",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Jeff Green",
      "__v": 0
    },
    {
      "_id": 38017665,
      "firstName": "Darius",
      "lastName": "Days",
      "position": "F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Darius Days",
      "__v": 0
    },
    {
      "_id": 19465326,
      "firstName": "Jock",
      "lastName": "Landale",
      "position": "C",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Jock Landale",
      "__v": 0
    },
    {
      "_id": 3547245,
      "firstName": "Tyrese",
      "lastName": "Haliburton",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Tyrese Haliburton",
      "__v": 0
    },
    {
      "_id": 38017507,
      "firstName": "Andrew",
      "lastName": "Nembhard",
      "position": "G-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Andrew Nembhard",
      "__v": 0
    },
    {
      "_id": 38017686,
      "firstName": "Bennedict",
      "lastName": "Mathurin",
      "position": "G-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Bennedict Mathurin",
      "__v": 0
    },
    {
      "_id": 69,
      "firstName": "Bruce",
      "lastName": "Brown",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Bruce Brown",
      "__v": 0
    },
    {
      "_id": 56677861,
      "firstName": "Ben",
      "lastName": "Sheppard",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Ben Sheppard",
      "__v": 0
    },
    {
      "_id": 56677794,
      "firstName": "Isaiah",
      "lastName": "Wong",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Isaiah Wong",
      "__v": 0
    },
    {
      "_id": 210,
      "firstName": "Buddy",
      "lastName": "Hield",
      "position": "G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Buddy Hield",
      "__v": 0
    },
    {
      "_id": 3547250,
      "firstName": "Aaron",
      "lastName": "Nesmith",
      "position": "G-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Aaron Nesmith",
      "__v": 0
    },
    {
      "_id": 3547207,
      "firstName": "Jordan",
      "lastName": "Nwora",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Jordan Nwora",
      "__v": 0
    },
    {
      "_id": 38017701,
      "firstName": "Kendall",
      "lastName": "Brown",
      "position": "G",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Kendall Brown",
      "__v": 0
    },
    {
      "_id": 56677832,
      "firstName": "Jarace",
      "lastName": "Walker",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Jarace Walker",
      "__v": 0
    },
    {
      "_id": 3547243,
      "firstName": "Obi",
      "lastName": "Toppin",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Obi Toppin",
      "__v": 0
    },
    {
      "_id": 3547264,
      "firstName": "Jalen",
      "lastName": "Smith",
      "position": "F-C",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Jalen Smith",
      "__v": 0
    },
    {
      "_id": 452,
      "firstName": "Myles",
      "lastName": "Turner",
      "position": "C-F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Myles Turner",
      "__v": 0
    },
    {
      "_id": 439,
      "firstName": "Daniel",
      "lastName": "Theis",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Daniel Theis",
      "__v": 0
    },
    {
      "_id": 17896035,
      "firstName": "Isaiah",
      "lastName": "Jackson",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Isaiah Jackson",
      "__v": 0
    },
    {
      "_id": 56677778,
      "firstName": "Oscar",
      "lastName": "Tshiebwe",
      "position": "F-C",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Oscar Tshiebwe",
      "__v": 0
    },
    {
      "_id": 472,
      "firstName": "Russell",
      "lastName": "Westbrook",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Russell Westbrook",
      "__v": 0
    },
    {
      "_id": 17896042,
      "firstName": "Jason",
      "lastName": "Preston",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Jason Preston",
      "__v": 0
    },
    {
      "_id": 172,
      "firstName": "Paul",
      "lastName": "George",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Paul George",
      "__v": 0
    },
    {
      "_id": 380,
      "firstName": "Norman",
      "lastName": "Powell",
      "position": "F-G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Norman Powell",
      "__v": 0
    },
    {
      "_id": 17896022,
      "firstName": "Brandon",
      "lastName": "Boston Jr.",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Brandon Boston Jr.",
      "__v": 0
    },
    {
      "_id": 666511,
      "firstName": "Amir",
      "lastName": "Coffey",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Amir Coffey",
      "__v": 0
    },
    {
      "_id": 274,
      "firstName": "Kawhi",
      "lastName": "Leonard",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Kawhi Leonard",
      "__v": 0
    },
    {
      "_id": 666743,
      "firstName": "Terance",
      "lastName": "Mann",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Terance Mann",
      "__v": 0
    },
    {
      "_id": 108,
      "firstName": "Robert",
      "lastName": "Covington",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Robert Covington",
      "__v": 0
    },
    {
      "_id": 33,
      "firstName": "Nicolas",
      "lastName": "Batum",
      "position": "F-G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Nicolas Batum",
      "__v": 0
    },
    {
      "_id": 328,
      "firstName": "Marcus",
      "lastName": "Morris",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Marcus Morris",
      "__v": 0
    },
    {
      "_id": 56677849,
      "firstName": "Kobe",
      "lastName": "Brown",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Kobe Brown",
      "__v": 0
    },
    {
      "_id": 493,
      "firstName": "Ivica",
      "lastName": "Zubac",
      "position": "C",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Ivica Zubac",
      "__v": 0
    },
    {
      "_id": 371,
      "firstName": "Mason",
      "lastName": "Plumlee",
      "position": "F-C",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Mason Plumlee",
      "__v": 0
    },
    {
      "_id": 38017725,
      "firstName": "Moussa",
      "lastName": "Diabate",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "Moussa Diabate",
      "__v": 0
    },
    {
      "_id": 1603383,
      "firstName": "Gabe",
      "lastName": "Vincent",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Gabe Vincent",
      "__v": 0
    },
    {
      "_id": 56677835,
      "firstName": "Jalen",
      "lastName": "Hood-Schifino",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Jalen Hood-Schifino",
      "__v": 0
    },
    {
      "_id": 17553995,
      "firstName": "Austin",
      "lastName": "Reaves",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Austin Reaves",
      "__v": 0
    },
    {
      "_id": 38017697,
      "firstName": "Max",
      "lastName": "Christie",
      "position": "G",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Max Christie",
      "__v": 0
    },
    {
      "_id": 237,
      "firstName": "LeBron",
      "lastName": "James",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "LeBron James",
      "__v": 0
    },
    {
      "_id": 383,
      "firstName": "Taurean",
      "lastName": "Prince",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Taurean Prince",
      "__v": 0
    },
    {
      "_id": 56677836,
      "firstName": "Maxwell",
      "lastName": "Lewis",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Maxwell Lewis",
      "__v": 0
    },
    {
      "_id": 56677867,
      "firstName": "Alex",
      "lastName": "Fudge",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Alex Fudge",
      "__v": 0
    },
    {
      "_id": 666609,
      "firstName": "Rui",
      "lastName": "Hachimura",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Rui Hachimura",
      "__v": 0
    },
    {
      "_id": 457,
      "firstName": "Jarred",
      "lastName": "Vanderbilt",
      "position": "F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Jarred Vanderbilt",
      "__v": 0
    },
    {
      "_id": 117,
      "firstName": "Anthony",
      "lastName": "Davis",
      "position": "F-C",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Anthony Davis",
      "__v": 0
    },
    {
      "_id": 666626,
      "firstName": "Jaxson",
      "lastName": "Hayes",
      "position": "C",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Jaxson Hayes",
      "__v": 0
    },
    {
      "_id": 666786,
      "firstName": "Ja",
      "lastName": "Morant",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Ja Morant",
      "__v": 0
    },
    {
      "_id": 401,
      "firstName": "Derrick",
      "lastName": "Rose",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Derrick Rose",
      "__v": 0
    },
    {
      "_id": 48248287,
      "firstName": "Jacob",
      "lastName": "Gilyard",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Jacob Gilyard",
      "__v": 0
    },
    {
      "_id": 420,
      "firstName": "Marcus",
      "lastName": "Smart",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Marcus Smart",
      "__v": 0
    },
    {
      "_id": 254,
      "firstName": "Luke",
      "lastName": "Kennard",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Luke Kennard",
      "__v": 0
    },
    {
      "_id": 666703,
      "firstName": "John",
      "lastName": "Konchar",
      "position": "G-F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "John Konchar",
      "__v": 0
    },
    {
      "_id": 17896023,
      "firstName": "Josh",
      "lastName": "Christopher",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Josh Christopher",
      "__v": 0
    },
    {
      "_id": 3547287,
      "firstName": "Desmond",
      "lastName": "Bane",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Desmond Bane",
      "__v": 0
    },
    {
      "_id": 38017729,
      "firstName": "David",
      "lastName": "Roddy",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "David Roddy",
      "__v": 0
    },
    {
      "_id": 17896027,
      "firstName": "Ziaire",
      "lastName": "Williams",
      "position": "G-F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Ziaire Williams",
      "__v": 0
    },
    {
      "_id": 38017731,
      "firstName": "Vince",
      "lastName": "Williams Jr.",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Vince Williams Jr.",
      "__v": 0
    },
    {
      "_id": 231,
      "firstName": "Jaren",
      "lastName": "Jackson Jr.",
      "position": "F-C",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Jaren Jackson Jr.",
      "__v": 0
    },
    {
      "_id": 666505,
      "firstName": "Brandon",
      "lastName": "Clarke",
      "position": "F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Brandon Clarke",
      "__v": 0
    },
    {
      "_id": 38017728,
      "firstName": "Jake",
      "lastName": "LaRavia",
      "position": "F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Jake LaRavia",
      "__v": 0
    },
    {
      "_id": 17895967,
      "firstName": "Isaiah",
      "lastName": "Todd",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Isaiah Todd",
      "__v": 0
    },
    {
      "_id": 3,
      "firstName": "Steven",
      "lastName": "Adams",
      "position": "C",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Steven Adams",
      "__v": 0
    },
    {
      "_id": 3547285,
      "firstName": "Xavier",
      "lastName": "Tillman",
      "position": "F",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Xavier Tillman",
      "__v": 0
    },
    {
      "_id": 17896067,
      "firstName": "Santi",
      "lastName": "Aldama",
      "position": "F",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Santi Aldama",
      "__v": 0
    },
    {
      "_id": 38017732,
      "firstName": "Kenneth",
      "lastName": "Lofton Jr.",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Kenneth Lofton Jr.",
      "__v": 0
    },
    {
      "_id": 286,
      "firstName": "Kyle",
      "lastName": "Lowry",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Kyle Lowry",
      "__v": 0
    },
    {
      "_id": 44477062,
      "firstName": "Jamaree",
      "lastName": "Bouyea",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Jamaree Bouyea",
      "__v": 0
    },
    {
      "_id": 17553942,
      "firstName": "Dru",
      "lastName": "Smith",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Dru Smith",
      "__v": 0
    },
    {
      "_id": 666633,
      "firstName": "Tyler",
      "lastName": "Herro",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Tyler Herro",
      "__v": 0
    },
    {
      "_id": 391,
      "firstName": "Josh",
      "lastName": "Richardson",
      "position": "G-F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Josh Richardson",
      "__v": 0
    },
    {
      "_id": 397,
      "firstName": "Duncan",
      "lastName": "Robinson",
      "position": "F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Duncan Robinson",
      "__v": 0
    },
    {
      "_id": 79,
      "firstName": "Jimmy",
      "lastName": "Butler",
      "position": "G-F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Jimmy Butler",
      "__v": 0
    },
    {
      "_id": 56677785,
      "firstName": "Jaime",
      "lastName": "Jaquez Jr.",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Jaime Jaquez Jr.",
      "__v": 0
    },
    {
      "_id": 38017696,
      "firstName": "Nikola",
      "lastName": "Jovic",
      "position": "F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Nikola Jovic",
      "__v": 0
    },
    {
      "_id": 666747,
      "firstName": "Caleb",
      "lastName": "Martin",
      "position": "F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Caleb Martin",
      "__v": 0
    },
    {
      "_id": 285,
      "firstName": "Kevin",
      "lastName": "Love",
      "position": "F-C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Kevin Love",
      "__v": 0
    },
    {
      "_id": 3092,
      "firstName": "Haywood",
      "lastName": "Highsmith",
      "position": "",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Haywood Highsmith",
      "__v": 0
    },
    {
      "_id": 4,
      "firstName": "Bam",
      "lastName": "Adebayo",
      "position": "C-F",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Bam Adebayo",
      "__v": 0
    },
    {
      "_id": 74,
      "firstName": "Thomas",
      "lastName": "Bryant",
      "position": "C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Thomas Bryant",
      "__v": 0
    },
    {
      "_id": 39398582,
      "firstName": "Orlando",
      "lastName": "Robinson",
      "position": "C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Orlando Robinson",
      "__v": 0
    },
    {
      "_id": 214,
      "firstName": "Jrue",
      "lastName": "Holiday",
      "position": "G",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Jrue Holiday",
      "__v": 0
    },
    {
      "_id": 56677852,
      "firstName": "Andre",
      "lastName": "Jackson Jr.",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Andre Jackson Jr.",
      "__v": 0
    },
    {
      "_id": 8,
      "firstName": "Grayson",
      "lastName": "Allen",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Grayson Allen",
      "__v": 0
    },
    {
      "_id": 38,
      "firstName": "Malik",
      "lastName": "Beasley",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Malik Beasley",
      "__v": 0
    },
    {
      "_id": 666960,
      "firstName": "Lindell",
      "lastName": "Wigginton",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Lindell Wigginton",
      "__v": 0
    },
    {
      "_id": 315,
      "firstName": "Khris",
      "lastName": "Middleton",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Khris Middleton",
      "__v": 0
    },
    {
      "_id": 105,
      "firstName": "Pat",
      "lastName": "Connaughton",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Pat Connaughton",
      "__v": 0
    },
    {
      "_id": 38017676,
      "firstName": "MarJon",
      "lastName": "Beauchamp",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "MarJon Beauchamp",
      "__v": 0
    },
    {
      "_id": 56677854,
      "firstName": "Chris",
      "lastName": "Livingston",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Chris Livingston",
      "__v": 0
    },
    {
      "_id": 15,
      "firstName": "Giannis",
      "lastName": "Antetokounmpo",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Giannis Antetokounmpo",
      "__v": 0
    },
    {
      "_id": 112,
      "firstName": "Jae",
      "lastName": "Crowder",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Jae Crowder",
      "__v": 0
    },
    {
      "_id": 2148,
      "firstName": "Thanasis",
      "lastName": "Antetokounmpo",
      "position": "",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Thanasis Antetokounmpo",
      "__v": 0
    },
    {
      "_id": 283,
      "firstName": "Brook",
      "lastName": "Lopez",
      "position": "C",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Brook Lopez",
      "__v": 0
    },
    {
      "_id": 377,
      "firstName": "Bobby",
      "lastName": "Portis",
      "position": "F",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Bobby Portis",
      "__v": 0
    },
    {
      "_id": 284,
      "firstName": "Robin",
      "lastName": "Lopez",
      "position": "C",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Robin Lopez",
      "__v": 0
    },
    {
      "_id": 104,
      "firstName": "Mike",
      "lastName": "Conley",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Mike Conley",
      "__v": 0
    },
    {
      "_id": 320,
      "firstName": "Shake",
      "lastName": "Milton",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Shake Milton",
      "__v": 0
    },
    {
      "_id": 666767,
      "firstName": "Jordan",
      "lastName": "McLaughlin",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Jordan McLaughlin",
      "__v": 0
    },
    {
      "_id": 3547238,
      "firstName": "Anthony",
      "lastName": "Edwards",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Anthony Edwards",
      "__v": 0
    },
    {
      "_id": 38017700,
      "firstName": "Wendell",
      "lastName": "Moore Jr.",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Wendell Moore Jr.",
      "__v": 0
    },
    {
      "_id": 56677851,
      "firstName": "Jaylen",
      "lastName": "Clark",
      "position": "G",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Jaylen Clark",
      "__v": 0
    },
    {
      "_id": 3547259,
      "firstName": "Jaden",
      "lastName": "McDaniels",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Jaden McDaniels",
      "__v": 0
    },
    {
      "_id": 68,
      "firstName": "Troy",
      "lastName": "Brown Jr.",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Troy Brown Jr.",
      "__v": 0
    },
    {
      "_id": 56677782,
      "firstName": "Leonard",
      "lastName": "Miller",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Leonard Miller",
      "__v": 0
    },
    {
      "_id": 447,
      "firstName": "Karl-Anthony",
      "lastName": "Towns",
      "position": "C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Karl-Anthony Towns",
      "__v": 0
    },
    {
      "_id": 12,
      "firstName": "Kyle",
      "lastName": "Anderson",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Kyle Anderson",
      "__v": 0
    },
    {
      "_id": 38017715,
      "firstName": "Josh",
      "lastName": "Minott",
      "position": "F",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Josh Minott",
      "__v": 0
    },
    {
      "_id": 176,
      "firstName": "Rudy",
      "lastName": "Gobert",
      "position": "C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Rudy Gobert",
      "__v": 0
    },
    {
      "_id": 667378,
      "firstName": "Naz",
      "lastName": "Reid",
      "position": "F-C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Naz Reid",
      "__v": 0
    },
    {
      "_id": 17896056,
      "firstName": "Luka",
      "lastName": "Garza",
      "position": "C",
      "teamId": 18,
      "teamName": "Minnesota Timberwolves",
      "fullName": "Luka Garza",
      "__v": 0
    },
    {
      "_id": 303,
      "firstName": "CJ",
      "lastName": "McCollum",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "CJ McCollum",
      "__v": 0
    },
    {
      "_id": 17896097,
      "firstName": "Jose",
      "lastName": "Alvarado",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Jose Alvarado",
      "__v": 0
    },
    {
      "_id": 3547260,
      "firstName": "Kira",
      "lastName": "Lewis Jr.",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Kira Lewis Jr.",
      "__v": 0
    },
    {
      "_id": 17896024,
      "firstName": "Herbert",
      "lastName": "Jones",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Herbert Jones",
      "__v": 0
    },
    {
      "_id": 38017677,
      "firstName": "Dyson",
      "lastName": "Daniels",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Dyson Daniels",
      "__v": 0
    },
    {
      "_id": 56677837,
      "firstName": "Jordan",
      "lastName": "Hawkins",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Jordan Hawkins",
      "__v": 0
    },
    {
      "_id": 38017726,
      "firstName": "Dereon",
      "lastName": "Seabron",
      "position": "G",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Dereon Seabron",
      "__v": 0
    },
    {
      "_id": 227,
      "firstName": "Brandon",
      "lastName": "Ingram",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Brandon Ingram",
      "__v": 0
    },
    {
      "_id": 17951082,
      "firstName": "Trey",
      "lastName": "Murphy",
      "position": "",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Trey Murphy",
      "__v": 0
    },
    {
      "_id": 3547293,
      "firstName": "Naji",
      "lastName": "Marshall",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Naji Marshall",
      "__v": 0
    },
    {
      "_id": 666969,
      "firstName": "Zion",
      "lastName": "Williamson",
      "position": "F",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Zion Williamson",
      "__v": 0
    },
    {
      "_id": 510,
      "firstName": "Larry",
      "lastName": "Nance",
      "position": "",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Larry Nance",
      "__v": 0
    },
    {
      "_id": 455,
      "firstName": "Jonas",
      "lastName": "Valanciunas",
      "position": "C",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Jonas Valanciunas",
      "__v": 0
    },
    {
      "_id": 491,
      "firstName": "Cody",
      "lastName": "Zeller",
      "position": "C",
      "teamId": 19,
      "teamName": "New Orleans Pelicans",
      "fullName": "Cody Zeller",
      "__v": 0
    },
    {
      "_id": 73,
      "firstName": "Jalen",
      "lastName": "Brunson",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Jalen Brunson",
      "__v": 0
    },
    {
      "_id": 3547269,
      "firstName": "Immanuel",
      "lastName": "Quickley",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Immanuel Quickley",
      "__v": 0
    },
    {
      "_id": 17896033,
      "firstName": "Miles",
      "lastName": "McBride",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Miles McBride",
      "__v": 0
    },
    {
      "_id": 666423,
      "firstName": "RJ",
      "lastName": "Barrett",
      "position": "F-G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "RJ Barrett",
      "__v": 0
    },
    {
      "_id": 131,
      "firstName": "Donte",
      "lastName": "DiVincenzo",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Donte DiVincenzo",
      "__v": 0
    },
    {
      "_id": 666675,
      "firstName": "DaQuan",
      "lastName": "Jeffries",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "DaQuan Jeffries",
      "__v": 0
    },
    {
      "_id": 790,
      "firstName": "Duane",
      "lastName": "Washington",
      "position": "",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Duane Washington",
      "__v": 0
    },
    {
      "_id": 202,
      "firstName": "Josh",
      "lastName": "Hart",
      "position": "G",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Josh Hart",
      "__v": 0
    },
    {
      "_id": 17895858,
      "firstName": "Quentin",
      "lastName": "Grimes",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Quentin Grimes",
      "__v": 0
    },
    {
      "_id": 160,
      "firstName": "Evan",
      "lastName": "Fournier",
      "position": "G-F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Evan Fournier",
      "__v": 0
    },
    {
      "_id": 666971,
      "firstName": "Dylan",
      "lastName": "Windler",
      "position": "G-F",
      "teamId": 14,
      "teamName": "Los Angeles Lakers",
      "fullName": "Dylan Windler",
      "__v": 0
    },
    {
      "_id": 387,
      "firstName": "Julius",
      "lastName": "Randle",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Julius Randle",
      "__v": 0
    },
    {
      "_id": 666873,
      "firstName": "Isaiah",
      "lastName": "Roby",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Isaiah Roby",
      "__v": 0
    },
    {
      "_id": 399,
      "firstName": "Mitchell",
      "lastName": "Robinson",
      "position": "C",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Mitchell Robinson",
      "__v": 0
    },
    {
      "_id": 201,
      "firstName": "Isaiah",
      "lastName": "Hartenstein",
      "position": "F-C",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Isaiah Hartenstein",
      "__v": 0
    },
    {
      "_id": 17896063,
      "firstName": "Jericho",
      "lastName": "Sims",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Jericho Sims",
      "__v": 0
    },
    {
      "_id": 3547295,
      "firstName": "Nathan",
      "lastName": "Knight",
      "position": "F-C",
      "teamId": 2,
      "teamName": "Boston Celtics",
      "fullName": "Nathan Knight",
      "__v": 0
    },
    {
      "_id": 17896065,
      "firstName": "Josh",
      "lastName": "Giddey",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Josh Giddey",
      "__v": 0
    },
    {
      "_id": 4197029,
      "firstName": "Vasilije",
      "lastName": "Micic",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Vasilije Micic",
      "__v": 0
    },
    {
      "_id": 17896036,
      "firstName": "Tre",
      "lastName": "Mann",
      "position": "G",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Tre Mann",
      "__v": 0
    },
    {
      "_id": 3547272,
      "firstName": "Isaiah",
      "lastName": "Joe",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Isaiah Joe",
      "__v": 0
    },
    {
      "_id": 56677833,
      "firstName": "Cason",
      "lastName": "Wallace",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Cason Wallace",
      "__v": 0
    },
    {
      "_id": 175,
      "firstName": "Shai",
      "lastName": "Gilgeous-Alexander",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Shai Gilgeous-Alexander",
      "__v": 0
    },
    {
      "_id": 357,
      "firstName": "Victor",
      "lastName": "Oladipo",
      "position": "G",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Victor Oladipo",
      "__v": 0
    },
    {
      "_id": 17896078,
      "firstName": "Aaron",
      "lastName": "Wiggins",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Aaron Wiggins",
      "__v": 0
    },
    {
      "_id": 56677853,
      "firstName": "Keyontae",
      "lastName": "Johnson",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Keyontae Johnson",
      "__v": 0
    },
    {
      "_id": 38017703,
      "firstName": "Jalen",
      "lastName": "Williams",
      "position": "G-F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Jalen Williams",
      "__v": 0
    },
    {
      "_id": 666541,
      "firstName": "Luguentz",
      "lastName": "Dort",
      "position": "G",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Luguentz Dort",
      "__v": 0
    },
    {
      "_id": 480,
      "firstName": "Kenrich",
      "lastName": "Williams",
      "position": "G-F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Kenrich Williams",
      "__v": 0
    },
    {
      "_id": 38017735,
      "firstName": "Jack",
      "lastName": "White",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Jack White",
      "__v": 0
    },
    {
      "_id": 3547271,
      "firstName": "Aleksej",
      "lastName": "Pokusevski",
      "position": "C",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Aleksej Pokusevski",
      "__v": 0
    },
    {
      "_id": 44,
      "firstName": "Davis",
      "lastName": "Bertans",
      "position": "F",
      "teamId": 4,
      "teamName": "Charlotte Hornets",
      "fullName": "Davis Bertans",
      "__v": 0
    },
    {
      "_id": 38017716,
      "firstName": "Ousmane",
      "lastName": "Dieng",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Ousmane Dieng",
      "__v": 0
    },
    {
      "_id": 38017685,
      "firstName": "Chet",
      "lastName": "Holmgren",
      "position": "C-F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Chet Holmgren",
      "__v": 0
    },
    {
      "_id": 38017706,
      "firstName": "Jaylin",
      "lastName": "Williams",
      "position": "F",
      "teamId": 21,
      "teamName": "Oklahoma City Thunder",
      "fullName": "Jaylin Williams",
      "__v": 0
    },
    {
      "_id": 17896070,
      "firstName": "Usman",
      "lastName": "Garuba",
      "position": "F",
      "teamId": 10,
      "teamName": "Golden State Warriors",
      "fullName": "Usman Garuba",
      "__v": 0
    },
    {
      "_id": 165,
      "firstName": "Markelle",
      "lastName": "Fultz",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Markelle Fultz",
      "__v": 0
    },
    {
      "_id": 3547251,
      "firstName": "Cole",
      "lastName": "Anthony",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Cole Anthony",
      "__v": 0
    },
    {
      "_id": 56677827,
      "firstName": "Anthony",
      "lastName": "Black",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Anthony Black",
      "__v": 0
    },
    {
      "_id": 17896073,
      "firstName": "Jalen",
      "lastName": "Suggs",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Jalen Suggs",
      "__v": 0
    },
    {
      "_id": 196,
      "firstName": "Gary",
      "lastName": "Harris",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Gary Harris",
      "__v": 0
    },
    {
      "_id": 56677839,
      "firstName": "Jett",
      "lastName": "Howard",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Jett Howard",
      "__v": 0
    },
    {
      "_id": 38017607,
      "firstName": "Kevon",
      "lastName": "Harris",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Kevon Harris",
      "__v": 0
    },
    {
      "_id": 17896026,
      "firstName": "Franz",
      "lastName": "Wagner",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Franz Wagner",
      "__v": 0
    },
    {
      "_id": 226,
      "firstName": "Joe",
      "lastName": "Ingles",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Joe Ingles",
      "__v": 0
    },
    {
      "_id": 38017724,
      "firstName": "Caleb",
      "lastName": "Houstan",
      "position": "G",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Caleb Houstan",
      "__v": 0
    },
    {
      "_id": 666885,
      "firstName": "Admiral",
      "lastName": "Schofield",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Admiral Schofield",
      "__v": 0
    },
    {
      "_id": 38017683,
      "firstName": "Paolo",
      "lastName": "Banchero",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Paolo Banchero",
      "__v": 0
    },
    {
      "_id": 229,
      "firstName": "Jonathan",
      "lastName": "Isaac",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Jonathan Isaac",
      "__v": 0
    },
    {
      "_id": 666818,
      "firstName": "Chuma",
      "lastName": "Okeke",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Chuma Okeke",
      "__v": 0
    },
    {
      "_id": 85,
      "firstName": "Wendell",
      "lastName": "Carter Jr.",
      "position": "F",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Wendell Carter Jr.",
      "__v": 0
    },
    {
      "_id": 462,
      "firstName": "Moritz",
      "lastName": "Wagner",
      "position": "C",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Moritz Wagner",
      "__v": 0
    },
    {
      "_id": 666442,
      "firstName": "Goga",
      "lastName": "Bitadze",
      "position": "C",
      "teamId": 22,
      "teamName": "Orlando Magic",
      "fullName": "Goga Bitadze",
      "__v": 0
    },
    {
      "_id": 192,
      "firstName": "James",
      "lastName": "Harden",
      "position": "G",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "James Harden",
      "__v": 0
    },
    {
      "_id": 45,
      "firstName": "Patrick",
      "lastName": "Beverley",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Patrick Beverley",
      "__v": 0
    },
    {
      "_id": 3547254,
      "firstName": "Tyrese",
      "lastName": "Maxey",
      "position": "G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Tyrese Maxey",
      "__v": 0
    },
    {
      "_id": 260,
      "firstName": "Furkan",
      "lastName": "Korkmaz",
      "position": "G-F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Furkan Korkmaz",
      "__v": 0
    },
    {
      "_id": 56913527,
      "firstName": "Ricky",
      "lastName": "Council IV",
      "position": "G",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Ricky Council IV",
      "__v": 0
    },
    {
      "_id": 200,
      "firstName": "Tobias",
      "lastName": "Harris",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Tobias Harris",
      "__v": 0
    },
    {
      "_id": 2175,
      "firstName": "Danuel",
      "lastName": "House Jr.",
      "position": "",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Danuel House Jr.",
      "__v": 0
    },
    {
      "_id": 450,
      "firstName": "PJ",
      "lastName": "Tucker",
      "position": "F",
      "teamId": 13,
      "teamName": "LA Clippers",
      "fullName": "PJ Tucker",
      "__v": 0
    },
    {
      "_id": 17895941,
      "firstName": "Filip",
      "lastName": "Petrusev",
      "position": "C",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Filip Petrusev",
      "__v": 0
    },
    {
      "_id": 56677863,
      "firstName": "Azuolas",
      "lastName": "Tubelis",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Azuolas Tubelis",
      "__v": 0
    },
    {
      "_id": 145,
      "firstName": "Joel",
      "lastName": "Embiid",
      "position": "F-C",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Joel Embiid",
      "__v": 0
    },
    {
      "_id": 3547270,
      "firstName": "Paul",
      "lastName": "Reed",
      "position": "F",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Paul Reed",
      "__v": 0
    },
    {
      "_id": 28,
      "firstName": "Mo",
      "lastName": "Bamba",
      "position": "C",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Mo Bamba",
      "__v": 0
    },
    {
      "_id": 194,
      "firstName": "Montrezl",
      "lastName": "Harrell",
      "position": "F-C",
      "teamId": 23,
      "teamName": "Philadelphia 76ers",
      "fullName": "Montrezl Harrell",
      "__v": 0
    },
    {
      "_id": 57,
      "firstName": "Devin",
      "lastName": "Booker",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Devin Booker",
      "__v": 0
    },
    {
      "_id": 17895726,
      "firstName": "Jordan",
      "lastName": "Goodwin",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Jordan Goodwin",
      "__v": 0
    },
    {
      "_id": 3547298,
      "firstName": "Saben",
      "lastName": "Lee",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Saben Lee",
      "__v": 0
    },
    {
      "_id": 37,
      "firstName": "Bradley",
      "lastName": "Beal",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Bradley Beal",
      "__v": 0
    },
    {
      "_id": 272,
      "firstName": "Damion",
      "lastName": "Lee",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Damion Lee",
      "__v": 0
    },
    {
      "_id": 356,
      "firstName": "Josh",
      "lastName": "Okogie",
      "position": "G",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Josh Okogie",
      "__v": 0
    },
    {
      "_id": 470,
      "firstName": "Yuta",
      "lastName": "Watanabe",
      "position": "G",
      "teamId": 15,
      "teamName": "Memphis Grizzlies",
      "fullName": "Yuta Watanabe",
      "__v": 0
    },
    {
      "_id": 17896120,
      "firstName": "Ish",
      "lastName": "Wainright",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Ish Wainright",
      "__v": 0
    },
    {
      "_id": 140,
      "firstName": "Kevin",
      "lastName": "Durant",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Kevin Durant",
      "__v": 0
    },
    {
      "_id": 32,
      "firstName": "Keita",
      "lastName": "Bates-Diop",
      "position": "F",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Keita Bates-Diop",
      "__v": 0
    },
    {
      "_id": 666451,
      "firstName": "Bol",
      "lastName": "Bol",
      "position": "C",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Bol Bol",
      "__v": 0
    },
    {
      "_id": 56677850,
      "firstName": "Toumani",
      "lastName": "Camara",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Toumani Camara",
      "__v": 0
    },
    {
      "_id": 22,
      "firstName": "Deandre",
      "lastName": "Ayton",
      "position": "C",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Deandre Ayton",
      "__v": 0
    },
    {
      "_id": 147,
      "firstName": "Drew",
      "lastName": "Eubanks",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Drew Eubanks",
      "__v": 0
    },
    {
      "_id": 314,
      "firstName": "Chimezie",
      "lastName": "Metu",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Chimezie Metu",
      "__v": 0
    },
    {
      "_id": 278,
      "firstName": "Damian",
      "lastName": "Lillard",
      "position": "G",
      "teamId": 17,
      "teamName": "Milwaukee Bucks",
      "fullName": "Damian Lillard",
      "__v": 0
    },
    {
      "_id": 56677747,
      "firstName": "Scoot",
      "lastName": "Henderson",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Scoot Henderson",
      "__v": 0
    },
    {
      "_id": 419,
      "firstName": "Anfernee",
      "lastName": "Simons",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Anfernee Simons",
      "__v": 0
    },
    {
      "_id": 666923,
      "firstName": "Matisse",
      "lastName": "Thybulle",
      "position": "G-F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Matisse Thybulle",
      "__v": 0
    },
    {
      "_id": 17896041,
      "firstName": "Keon",
      "lastName": "Johnson",
      "position": "G",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Keon Johnson",
      "__v": 0
    },
    {
      "_id": 38017690,
      "firstName": "Shaedon",
      "lastName": "Sharpe",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Shaedon Sharpe",
      "__v": 0
    },
    {
      "_id": 666729,
      "firstName": "Nassir",
      "lastName": "Little",
      "position": "F",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Nassir Little",
      "__v": 0
    },
    {
      "_id": 259,
      "firstName": "Kevin",
      "lastName": "Knox",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Kevin Knox",
      "__v": 0
    },
    {
      "_id": 56677829,
      "firstName": "Rayan",
      "lastName": "Rupert",
      "position": "G-F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Rayan Rupert",
      "__v": 0
    },
    {
      "_id": 182,
      "firstName": "Jerami",
      "lastName": "Grant",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Jerami Grant",
      "__v": 0
    },
    {
      "_id": 56677791,
      "firstName": "Kris",
      "lastName": "Murray",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Kris Murray",
      "__v": 0
    },
    {
      "_id": 38017711,
      "firstName": "Jabari",
      "lastName": "Walker",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Jabari Walker",
      "__v": 0
    },
    {
      "_id": 349,
      "firstName": "Jusuf",
      "lastName": "Nurkic",
      "position": "C",
      "teamId": 24,
      "teamName": "Phoenix Suns",
      "fullName": "Jusuf Nurkic",
      "__v": 0
    },
    {
      "_id": 39613724,
      "firstName": "Ibou",
      "lastName": "Badji",
      "position": "C",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Ibou Badji",
      "__v": 0
    },
    {
      "_id": 38124126,
      "firstName": "John",
      "lastName": "Butler Jr.",
      "position": "F",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "John Butler Jr.",
      "__v": 0
    },
    {
      "_id": 17553994,
      "firstName": "Davion",
      "lastName": "Mitchell",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Davion Mitchell",
      "__v": 0
    },
    {
      "_id": 221,
      "firstName": "Kevin",
      "lastName": "Huerter",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Kevin Huerter",
      "__v": 0
    },
    {
      "_id": 324,
      "firstName": "Malik",
      "lastName": "Monk",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Malik Monk",
      "__v": 0
    },
    {
      "_id": 56677845,
      "firstName": "Colby",
      "lastName": "Jones",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Colby Jones",
      "__v": 0
    },
    {
      "_id": 38017714,
      "firstName": "Keon",
      "lastName": "Ellis",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Keon Ellis",
      "__v": 0
    },
    {
      "_id": 30,
      "firstName": "Harrison",
      "lastName": "Barnes",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Harrison Barnes",
      "__v": 0
    },
    {
      "_id": 17896030,
      "firstName": "Chris",
      "lastName": "Duarte",
      "position": "G",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Chris Duarte",
      "__v": 0
    },
    {
      "_id": 17896044,
      "firstName": "Kessler",
      "lastName": "Edwards",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Kessler Edwards",
      "__v": 0
    },
    {
      "_id": 38017688,
      "firstName": "Keegan",
      "lastName": "Murray",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Keegan Murray",
      "__v": 0
    },
    {
      "_id": 290,
      "firstName": "Trey",
      "lastName": "Lyles",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Trey Lyles",
      "__v": 0
    },
    {
      "_id": 56677862,
      "firstName": "Jalen",
      "lastName": "Slawson",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Jalen Slawson",
      "__v": 0
    },
    {
      "_id": 406,
      "firstName": "Domantas",
      "lastName": "Sabonis",
      "position": "F",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Domantas Sabonis",
      "__v": 0
    },
    {
      "_id": 273,
      "firstName": "Alex",
      "lastName": "Len",
      "position": "C",
      "teamId": 26,
      "teamName": "Sacramento Kings",
      "fullName": "Alex Len",
      "__v": 0
    },
    {
      "_id": 345,
      "firstName": "Nerlens",
      "lastName": "Noel",
      "position": "F-C",
      "teamId": 3,
      "teamName": "Brooklyn Nets",
      "fullName": "Nerlens Noel",
      "__v": 0
    },
    {
      "_id": 3547274,
      "firstName": "Tre",
      "lastName": "Jones",
      "position": "G",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Tre Jones",
      "__v": 0
    },
    {
      "_id": 38017693,
      "firstName": "Blake",
      "lastName": "Wesley",
      "position": "G",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Blake Wesley",
      "__v": 0
    },
    {
      "_id": 3547246,
      "firstName": "Devin",
      "lastName": "Vassell",
      "position": "G-F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Devin Vassell",
      "__v": 0
    },
    {
      "_id": 38017649,
      "firstName": "Julian",
      "lastName": "Champagnie",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Julian Champagnie",
      "__v": 0
    },
    {
      "_id": 666682,
      "firstName": "Keldon",
      "lastName": "Johnson",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Keldon Johnson",
      "__v": 0
    },
    {
      "_id": 359,
      "firstName": "Cedi",
      "lastName": "Osman",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Cedi Osman",
      "__v": 0
    },
    {
      "_id": 75,
      "firstName": "Reggie",
      "lastName": "Bullock",
      "position": "G-F",
      "teamId": 11,
      "teamName": "Houston Rockets",
      "fullName": "Reggie Bullock",
      "__v": 0
    },
    {
      "_id": 56677817,
      "firstName": "Sidy",
      "lastName": "Cissoko",
      "position": "G",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Sidy Cissoko",
      "__v": 0
    },
    {
      "_id": 38017699,
      "firstName": "Jeremy",
      "lastName": "Sochan",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Jeremy Sochan",
      "__v": 0
    },
    {
      "_id": 305,
      "firstName": "Doug",
      "lastName": "McDermott",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Doug McDermott",
      "__v": 0
    },
    {
      "_id": 38017730,
      "firstName": "Dominick",
      "lastName": "Barlow",
      "position": "F",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Dominick Barlow",
      "__v": 0
    },
    {
      "_id": 56677822,
      "firstName": "Victor",
      "lastName": "Wembanyama",
      "position": "F-C",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Victor Wembanyama",
      "__v": 0
    },
    {
      "_id": 102,
      "firstName": "Zach",
      "lastName": "Collins",
      "position": "F-C",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Zach Collins",
      "__v": 0
    },
    {
      "_id": 46,
      "firstName": "Khem",
      "lastName": "Birch",
      "position": "C",
      "teamId": 27,
      "teamName": "San Antonio Spurs",
      "fullName": "Khem Birch",
      "__v": 0
    },
    {
      "_id": 3547275,
      "firstName": "Malachi",
      "lastName": "Flynn",
      "position": "G",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Malachi Flynn",
      "__v": 0
    },
    {
      "_id": 56677869,
      "firstName": "Markquis",
      "lastName": "Nowell",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Markquis Nowell",
      "__v": 0
    },
    {
      "_id": 18,
      "firstName": "OG",
      "lastName": "Anunoby",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "OG Anunoby",
      "__v": 0
    },
    {
      "_id": 448,
      "firstName": "Gary",
      "lastName": "Trent Jr.",
      "position": "G",
      "teamId": 25,
      "teamName": "Portland Trail Blazers",
      "fullName": "Gary Trent Jr.",
      "__v": 0
    },
    {
      "_id": 56677828,
      "firstName": "Gradey",
      "lastName": "Dick",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Gradey Dick",
      "__v": 0
    },
    {
      "_id": 56677805,
      "firstName": "Javon",
      "lastName": "Freeman-Liberty",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Javon Freeman-Liberty",
      "__v": 0
    },
    {
      "_id": 17896055,
      "firstName": "Scottie",
      "lastName": "Barnes",
      "position": "G-F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Scottie Barnes",
      "__v": 0
    },
    {
      "_id": 376,
      "firstName": "Otto",
      "lastName": "Porter Jr.",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Otto Porter Jr.",
      "__v": 0
    },
    {
      "_id": 666762,
      "firstName": "Jalen",
      "lastName": "McDaniels",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Jalen McDaniels",
      "__v": 0
    },
    {
      "_id": 38017717,
      "firstName": "Ron",
      "lastName": "Harper Jr.",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Ron Harper Jr.",
      "__v": 0
    },
    {
      "_id": 416,
      "firstName": "Pascal",
      "lastName": "Siakam",
      "position": "F",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Pascal Siakam",
      "__v": 0
    },
    {
      "_id": 3547249,
      "firstName": "Precious",
      "lastName": "Achiuwa",
      "position": "F",
      "teamId": 20,
      "teamName": "New York Knicks",
      "fullName": "Precious Achiuwa",
      "__v": 0
    },
    {
      "_id": 489,
      "firstName": "Thaddeus",
      "lastName": "Young",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Thaddeus Young",
      "__v": 0
    },
    {
      "_id": 373,
      "firstName": "Jakob",
      "lastName": "Poeltl",
      "position": "C",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Jakob Poeltl",
      "__v": 0
    },
    {
      "_id": 58,
      "firstName": "Chris",
      "lastName": "Boucher",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Chris Boucher",
      "__v": 0
    },
    {
      "_id": 38017710,
      "firstName": "Christian",
      "lastName": "Koloko",
      "position": "C",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Christian Koloko",
      "__v": 0
    },
    {
      "_id": 413,
      "firstName": "Collin",
      "lastName": "Sexton",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Collin Sexton",
      "__v": 0
    },
    {
      "_id": 139,
      "firstName": "Kris",
      "lastName": "Dunn",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Kris Dunn",
      "__v": 0
    },
    {
      "_id": 100,
      "firstName": "Jordan",
      "lastName": "Clarkson",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Jordan Clarkson",
      "__v": 0
    },
    {
      "_id": 666650,
      "firstName": "Talen",
      "lastName": "Horton-Tucker",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Talen Horton-Tucker",
      "__v": 0
    },
    {
      "_id": 38017630,
      "firstName": "Johnny",
      "lastName": "Juzang",
      "position": "G",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Johnny Juzang",
      "__v": 0
    },
    {
      "_id": 38017620,
      "firstName": "Ochai",
      "lastName": "Agbaji",
      "position": "G",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Ochai Agbaji",
      "__v": 0
    },
    {
      "_id": 38017739,
      "firstName": "Simone",
      "lastName": "Fontecchio",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Simone Fontecchio",
      "__v": 0
    },
    {
      "_id": 56677842,
      "firstName": "Brice",
      "lastName": "Sensabaugh",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Brice Sensabaugh",
      "__v": 0
    },
    {
      "_id": 297,
      "firstName": "Lauri",
      "lastName": "Markkanen",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Lauri Markkanen",
      "__v": 0
    },
    {
      "_id": 101,
      "firstName": "John",
      "lastName": "Collins",
      "position": "F-C",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "John Collins",
      "__v": 0
    },
    {
      "_id": 56677824,
      "firstName": "Taylor",
      "lastName": "Hendricks",
      "position": "F",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Taylor Hendricks",
      "__v": 0
    },
    {
      "_id": 38017705,
      "firstName": "Walker",
      "lastName": "Kessler",
      "position": "C",
      "teamId": 29,
      "teamName": "Utah Jazz",
      "fullName": "Walker Kessler",
      "__v": 0
    },
    {
      "_id": 358,
      "firstName": "Kelly",
      "lastName": "Olynyk",
      "position": "F",
      "teamId": 28,
      "teamName": "Toronto Raptors",
      "fullName": "Kelly Olynyk",
      "__v": 0
    },
    {
      "_id": 17553941,
      "firstName": "Micah",
      "lastName": "Potter",
      "position": "F-C",
      "teamId": 16,
      "teamName": "Miami Heat",
      "fullName": "Micah Potter",
      "__v": 0
    },
    {
      "_id": 249,
      "firstName": "Tyus",
      "lastName": "Jones",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Tyus Jones",
      "__v": 0
    },
    {
      "_id": 487,
      "firstName": "Delon",
      "lastName": "Wright",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Delon Wright",
      "__v": 0
    },
    {
      "_id": 38017712,
      "firstName": "Ryan",
      "lastName": "Rollins",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Ryan Rollins",
      "__v": 0
    },
    {
      "_id": 18677954,
      "firstName": "Jared",
      "lastName": "Butler",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Jared Butler",
      "__v": 0
    },
    {
      "_id": 666848,
      "firstName": "Jordan",
      "lastName": "Poole",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Jordan Poole",
      "__v": 0
    },
    {
      "_id": 2336,
      "firstName": "Johnny",
      "lastName": "Davis",
      "position": "",
      "teamId": 12,
      "teamName": "Indiana Pacers",
      "fullName": "Johnny Davis",
      "__v": 0
    },
    {
      "_id": 414,
      "firstName": "Landry",
      "lastName": "Shamet",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Landry Shamet",
      "__v": 0
    },
    {
      "_id": 17896106,
      "firstName": "Eugene",
      "lastName": "Omoruyi",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Eugene Omoruyi",
      "__v": 0
    },
    {
      "_id": 17896045,
      "firstName": "Corey",
      "lastName": "Kispert",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Corey Kispert",
      "__v": 0
    },
    {
      "_id": 3547242,
      "firstName": "Deni",
      "lastName": "Avdija",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Deni Avdija",
      "__v": 0
    },
    {
      "_id": 56677844,
      "firstName": "Bilal",
      "lastName": "Coulibaly",
      "position": "G",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Bilal Coulibaly",
      "__v": 0
    },
    {
      "_id": 38017704,
      "firstName": "Patrick",
      "lastName": "Baldwin Jr.",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Patrick Baldwin Jr.",
      "__v": 0
    },
    {
      "_id": 265,
      "firstName": "Kyle",
      "lastName": "Kuzma",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Kyle Kuzma",
      "__v": 0
    },
    {
      "_id": 167,
      "firstName": "Danilo",
      "lastName": "Gallinari",
      "position": "F",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Danilo Gallinari",
      "__v": 0
    },
    {
      "_id": 3547302,
      "firstName": "Anthony",
      "lastName": "Gill",
      "position": "F",
      "teamId": 30,
      "teamName": "Washington Wizards",
      "fullName": "Anthony Gill",
      "__v": 0
    },
    {
      "_id": 666577,
      "firstName": "Daniel",
      "lastName": "Gafford",
      "position": "F",
      "teamId": 7,
      "teamName": "Dallas Mavericks",
      "fullName": "Daniel Gafford",
      "__v": 0
    },
    {
      "_id": 337,
      "firstName": "Mike",
      "lastName": "Muscala",
      "position": "F-C",
      "teamId": 9,
      "teamName": "Detroit Pistons",
      "fullName": "Mike Muscala",
      "__v": 0
    }
------------------------------------------------------- */
    

    // /* Reservation */
    // const Reservation = require('../models/team')
    // await Reservation.deleteMany()
    // await Reservation.create({
    //     "_id": "653536ab40b4ec24bc562001",
    //     "userId": "65343222b67e9681f937f001",
    //     "carId": "65352f518a9ea121b1ca5001",
    //     "startDate": "2023-10-10",
    //     "endDate": "2023-10-16"
    // })
    // await Reservation.create({
    //     "_id": "653536ab40b4ec24bc562002",
    //     "userId": "65343222b67e9681f937f002",
    //     "carId": "65352f518a9ea121b1ca5002",
    //     "startDate": "2023-10-14",
    //     "endDate": "2023-10-20"
    // })

    /* Finished */
    console.log('Synchronized.')


}