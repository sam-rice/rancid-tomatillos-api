const movies = [
  {
    id: 436270,
    poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    title: "Black Adam",
    average_rating: 4,
    release_date: "2022-10-19"
  },
  {
    id: 724495,
    poster_path: "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
    title: "The Woman King",
    average_rating: 4,
    release_date: "2022-09-15"
  },
  {
    id: 1013860,
    poster_path: "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
    title: "R.I.P.D. 2: Rise of the Damned",
    average_rating: 7,
    release_date: "2022-11-15"
  },
  {
    id: 505642,
    poster_path: "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    title: "Black Panther: Wakanda Forever",
    average_rating: 4,
    release_date: "2022-11-09"
  },
  {
    id: 934641,
    poster_path: "https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
    title: "The Minute You Wake Up Dead",
    average_rating: 5,
    release_date: "2022-11-04"
  },
  {
    id: 829799,
    poster_path: "https://image.tmdb.org/t/p/original//xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
    title: "Paradise City",
    average_rating: 1,
    release_date: "2022-11-11"
  },
  {
    id: 972313,
    poster_path: "https://image.tmdb.org/t/p/original//fHQHC32dhom8u0OxC2hs2gYQh0M.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//s65RPy7DiBS4PXvUR3fiTw5f725.jpg",
    title: "Blowback",
    average_rating: 2,
    release_date: "2022-06-17"
  },
  {
    id: 882598,
    poster_path: "https://image.tmdb.org/t/p/original//aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
    title: "Smile",
    average_rating: 8,
    release_date: "2022-09-23"
  },
  {
    id: 830784,
    poster_path: "https://image.tmdb.org/t/p/original//irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//c1bz69r0v065TGFA5nqBiKzPDys.jpg",
    title: "Lyle, Lyle, Crocodile",
    average_rating: 6,
    release_date: "2022-10-07"
  },
  {
    id: 982620,
    poster_path: "https://image.tmdb.org/t/p/original//pwf3DGuWB1AptvIzHhlGxDUNnQX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//jHKNqz0LjM2dOUv5XDPmcSoYPEW.jpg",
    title: "Maneater",
    average_rating: 7,
    release_date: "2022-08-26"
  },
  {
    id: 663712,
    poster_path: "https://image.tmdb.org/t/p/original//8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
    title: "Terrifier 2",
    average_rating: 1,
    release_date: "2022-10-06"
  },
  {
    id: 985939,
    poster_path: "https://image.tmdb.org/t/p/original//v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
    title: "Fall",
    average_rating: 8,
    release_date: "2022-08-11"
  },
  {
    id: 551271,
    poster_path: "https://image.tmdb.org/t/p/original//4njdAkiBdC5LnFApeXSkFQ78GdT.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//aQOWnw3HydsCQZ10O0wvxFOaWc3.jpg",
    title: "Medieval",
    average_rating: 4,
    release_date: "2022-09-08"
  },
  {
    id: 1037858,
    poster_path: "https://image.tmdb.org/t/p/original//sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//sqVxhRkPwOo6jogWZjE99V1HRE1.jpg",
    title: "The Soccer Football Movie",
    average_rating: 9,
    release_date: "2022-11-09"
  },
  {
    id: 979924,
    poster_path: "https://image.tmdb.org/t/p/original//a14BbSHvLgzCdbDD6tAL8OBVKL1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//vTDsdu7RoaMQhvyL6073spQMjQW.jpg",
    title: "On the Line",
    average_rating: 10,
    release_date: "2022-10-31"
  },
  {
    id: 49046,
    poster_path: "https://image.tmdb.org/t/p/original//hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
    title: "All Quiet on the Western Front",
    average_rating: 8,
    release_date: "2022-10-07"
  },
  {
    id: 899112,
    poster_path: "https://image.tmdb.org/t/p/original//1CHp8QQjGwqWaPZWjzcRidlt5Xs.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//wZBWrIl6miAmhn8io5qTLSMecNH.jpg",
    title: "Violent Night",
    average_rating: 2,
    release_date: "2022-11-30"
  },
  {
    id: 676701,
    poster_path: "https://image.tmdb.org/t/p/original//jvIVl8zdNSOAJImw1elQEzxStMN.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg",
    title: "Tad the Lost Explorer and the Curse of the Mummy",
    average_rating: 7,
    release_date: "2022-08-24"
  },
  {
    id: 829280,
    poster_path: "https://image.tmdb.org/t/p/original//tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//rjlG7C5GZfXutoVoE3BJaYGUhk4.jpg",
    title: "Enola Holmes 2",
    average_rating: 9,
    release_date: "2022-11-04"
  },
  {
    id: 760204,
    poster_path: "https://image.tmdb.org/t/p/original//ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//fMymfWwgTfXh9RkBCFuaZrdn8Of.jpg",
    title: "The Lair",
    average_rating: 9,
    release_date: "2022-10-28"
  },
  {
    id: 361743,
    poster_path: "https://image.tmdb.org/t/p/original//62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    title: "Top Gun: Maverick",
    average_rating: 6,
    release_date: "2022-05-24"
  },
  {
    id: 844396,
    poster_path: "https://image.tmdb.org/t/p/original//qXaJkaVTNMhrOylFi6xrWnBQGE8.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//729a5iDNxr5l2Zbc8lcwndlJavN.jpg",
    title: "The Friendship Game",
    average_rating: 5,
    release_date: "2022-11-11"
  },
  {
    id: 897192,
    poster_path: "https://image.tmdb.org/t/p/original//iW6ixzkrvdrcxk0umiLZMtlSl9L.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//94QHrTXnxdmIyXWGUpOPe7PU8DL.jpg",
    title: "Diary of a Wimpy Kid: Rodrick Rules",
    average_rating: 9,
    release_date: "2022-12-02"
  },
  {
    id: 593643,
    poster_path: "https://image.tmdb.org/t/p/original//v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//GFq9kYUnpRCnlbIbjPzNA96e0j.jpg",
    title: "The Menu",
    average_rating: 2,
    release_date: "2022-11-17"
  },
  {
    id: 632856,
    poster_path: "https://image.tmdb.org/t/p/original//h3zAzTMs5EP3cKusOxFNGSFE1WI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//fHDvGGPFry65ou79WLi6JsjCZrM.jpg",
    title: "Spirited",
    average_rating: 10,
    release_date: "2022-11-10"
  },
  {
    id: 820067,
    poster_path: "https://image.tmdb.org/t/p/original//sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//jBIMZ0AlUYuFNsKbd4L6FojWMoy.jpg",
    title: "The Quintessential Quintuplets Movie",
    average_rating: 6,
    release_date: "2022-05-20"
  },
  {
    id: 916605,
    poster_path: "https://image.tmdb.org/t/p/original//bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
    title: "The Infernal Machine",
    average_rating: 4,
    release_date: "2022-09-23"
  },
  {
    id: 560052,
    poster_path: "https://image.tmdb.org/t/p/original//6hgEe1w0An5fKi3ZqIUBwOyIN2y.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//gJESrIalQkXe7bh9ckyQvgCSlhq.jpg",
    title: "My Father's Dragon",
    average_rating: 2,
    release_date: "2022-11-04"
  },
  {
    id: 848058,
    poster_path: "https://image.tmdb.org/t/p/original//8EIQAvJjXdbNDMmBtHtgGqbc09V.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//2iGUavwv86Hubv3V5Iq4qEQXDfE.jpg",
    title: "Piggy",
    average_rating: 1,
    release_date: "2022-10-07"
  },
  {
    id: 807356,
    poster_path: "https://image.tmdb.org/t/p/original//dXCjoI3jdtBrwPHgVsyNLkl8Rvs.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//2cQMVHBaP1wK0UBX5SGDahB3lp3.jpg",
    title: "Watcher",
    average_rating: 9,
    release_date: "2022-06-03"
  },
  {
    id: 635302,
    poster_path: "https://image.tmdb.org/t/p/original//h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//qjGrUmKW78MCFG8PTLDBp67S27p.jpg",
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    average_rating: 7,
    release_date: "2020-10-16"
  },
  {
    id: 315162,
    poster_path: "https://image.tmdb.org/t/p/original//1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//cP8YNG3XUeBmO8Jk7Skzq3vwHy1.jpg",
    title: "Puss in Boots: The Last Wish",
    average_rating: 5,
    release_date: "2022-12-07"
  },
  {
    id: 566466,
    poster_path: "https://image.tmdb.org/t/p/original//pgffCA82hmBhavW23nbipzsmYf5.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//qlbNi4qOA9eXto0DDzCdtUOICFy.jpg",
    title: "Laid-Back Camp The Movie",
    average_rating: 5,
    release_date: "2022-07-01"
  },
  {
    id: 955644,
    poster_path: "https://image.tmdb.org/t/p/original//a3ZpDsvNCQUOD7ApAs9y3mFwVU4.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//a6OX0pzbcPHstcNPK3FSJGq8Sxp.jpg",
    title: "Mia and Me: The Hero of Centopia",
    average_rating: 4,
    release_date: "2022-05-26"
  },
  {
    id: 900667,
    poster_path: "https://image.tmdb.org/t/p/original//m80kPdrmmtEh9wlLroCp0bwUGH0.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//54PmeEzQMvpojpJBku61ZGQnWUX.jpg",
    title: "One Piece Film Red",
    average_rating: 8,
    release_date: "2022-08-06"
  },
  {
    id: 664469,
    poster_path: "https://image.tmdb.org/t/p/original//6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//79PcXPpbDWql74h8Y00mNwbYMbS.jpg",
    title: "Amsterdam",
    average_rating: 1,
    release_date: "2022-09-27"
  },
  {
    id: 1001835,
    poster_path: "https://image.tmdb.org/t/p/original//tea2gDZPxw0wfKC2S2VRWHagtt4.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//3xvdNyZ9WsVJpyeGhm85fukeZz4.jpg",
    title: "Wifelike",
    average_rating: 6,
    release_date: "2022-08-12"
  },
  {
    id: 924482,
    poster_path: "https://image.tmdb.org/t/p/original//S99eCSnRFfeZJmDaIGIZF58H7w.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//jazlkwXfw4KdF6fVTRsolOvRCmu.jpg",
    title: "The Ledge",
    average_rating: 6,
    release_date: "2022-02-18"
  },
  {
    id: 877269,
    poster_path: "https://image.tmdb.org/t/p/original//4H7dRko04LGUaDLHiVwSh4gv61S.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//5wDBVictj4wUYZ31gR5WzCM9dLD.jpg",
    title: "Strange World",
    average_rating: 1,
    release_date: "2022-11-23"
  },
  {
    id: 760104,
    poster_path: "https://image.tmdb.org/t/p/original//woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//70Rm9ItxKuEKN8iu6rNjfwAYUCJ.jpg",
    title: "X",
    average_rating: 1,
    release_date: "2022-03-17"
  }
]

module.exports = movies