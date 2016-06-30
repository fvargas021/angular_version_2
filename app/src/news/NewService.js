(function(){
  'use strict';

  angular.module('news')
         .service('newService', ['$q', NewService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function NewService($q){ 

    /*
    var news = [
    {
      "section": "NYT Now",
      "subsection": "",
      "title": "Istanbul, Donald Trump, Roger Federer: Your Wednesday Evening Briefing",
      "abstract": "Here’s what you need to know at the end of the day.",
      "url": "http://www.nytimes.com/2016/06/29/nytnow/istanbul-donald-trump-roger-federer-your-wednesday-evening-briefing.html",
      "byline": "By KAREN WORKMAN and SANDRA STEVENSON",
      "item_type": "Article",
      "updated_date": "2016-06-29T19:45:42-04:00",
      "created_date": "2016-06-29T17:44:01-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nytnow/29eveningss-slide-7QW5/29eveningss-slide-7QW5-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Ozan Kose/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nytnow/29eveningss-slide-7QW5/29eveningss-slide-7QW5-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Ozan Kose/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nytnow/29eveningss-slide-7QW5/29eveningss-slide-7QW5-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Ozan Kose/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nytnow/29eveningss-slide-7QW5/29eveningss-slide-7QW5-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Ozan Kose/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nytnow/29eveningss-slide-7QW5/29eveningss-slide-7QW5-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1367,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Ozan Kose/Agence France-Presse — Getty Images"
        }
      ],
      "short_url": "http://nyti.ms/29asQM3"
    },
    {
      "section": "World",
      "subsection": "Europe",
      "title": "Victims in Istanbul Airport Attack Reflect City’s International Character",
      "abstract": "Hours after the bombings, a limited number of flights resumed and workers continued clearing debris and replacing shattered windows at the airport.",
      "url": "http://www.nytimes.com/2016/06/30/world/europe/istanbul-airport-attack.html",
      "byline": "By TIM ARANGO, SABRINA TAVERNISE and CEYLAN YEGINSU",
      "item_type": "Article",
      "updated_date": "2016-06-29T13:23:11-04:00",
      "created_date": "2016-06-29T08:38:59-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Istanbul Airport Attack (June 2016)",
        "Terrorism",
        "Airports"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [
        "Istanbul (Turkey)"
      ],
      "multimedia": [],
      "short_url": "http://nyti.ms/29eFt6p"
    },
    {
      "section": "World",
      "subsection": "Europe",
      "title": "Turkey’s Twin Terrorist Threats, Explained",
      "abstract": "The Islamic State and Kurdish militant groups are themselves enemies, but their violence has become part of an overlapping set of problems rooted in Syria.",
      "url": "http://www.nytimes.com/2016/06/30/world/middleeast/turkeys-twin-terrorist-threats-explained.html",
      "byline": "By MAX FISHER",
      "item_type": "Article",
      "updated_date": "2016-06-29T13:48:29-04:00",
      "created_date": "2016-06-29T13:48:33-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Terrorism",
        "Istanbul Airport Attack (June 2016)",
        "Kurds"
      ],
      "org_facet": [
        "Islamic State in Iraq and Syria (ISIS)"
      ],
      "per_facet": [],
      "geo_facet": [
        "Turkey",
        "Syria"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30int-threats-web2/30int-threats-web2-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Shattered glass from Tuesday’s suicide bombings at Istanbul’s main airport. The Turkish government blamed the Islamic State for the attack.",
          "copyright": "Mauricio Lima for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30int-threats-web2/30int-threats-web2-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Shattered glass from Tuesday’s suicide bombings at Istanbul’s main airport. The Turkish government blamed the Islamic State for the attack.",
          "copyright": "Mauricio Lima for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30int-threats-web2/30int-threats-web2-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Shattered glass from Tuesday’s suicide bombings at Istanbul’s main airport. The Turkish government blamed the Islamic State for the attack.",
          "copyright": "Mauricio Lima for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30int-threats-web2/30int-threats-web2-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Shattered glass from Tuesday’s suicide bombings at Istanbul’s main airport. The Turkish government blamed the Islamic State for the attack.",
          "copyright": "Mauricio Lima for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30int-threats-web2/30int-threats-web2-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Shattered glass from Tuesday’s suicide bombings at Istanbul’s main airport. The Turkish government blamed the Islamic State for the attack.",
          "copyright": "Mauricio Lima for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/299CheL"
    },
    {
      "section": "World",
      "subsection": "Europe",
      "title": "As David Cameron Leaves Brussels, E.U. Leaders Chart Future",
      "abstract": "Reeling from Britain’s vote to quit, they agreed the European Union must change, but nothing was decided except to hold another meeting in the fall.",
      "url": "http://www.nytimes.com/2016/06/30/world/europe/david-cameron-eu-referendum.html",
      "byline": "By ANDREW HIGGINS and JAMES KANTER",
      "item_type": "Article",
      "updated_date": "2016-06-29T18:28:02-04:00",
      "created_date": "2016-06-29T10:43:09-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Great Britain Withdrawal from EU (Brexit)"
      ],
      "org_facet": [
        "European Union"
      ],
      "per_facet": [
        "Cameron, David"
      ],
      "geo_facet": [
        "Great Britain"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30europe-web1/30europe-web1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Chancellor Angela Merkel of Germany arrived in Brussels on Wednesday, before a European Union summit meeting.",
          "copyright": "Stephane De Sakutin/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30europe-web1/30europe-web1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Chancellor Angela Merkel of Germany arrived in Brussels on Wednesday, before a European Union summit meeting.",
          "copyright": "Stephane De Sakutin/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30europe-web1/30europe-web1-articleInline.jpg",
          "format": "Normal",
          "height": 126,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Chancellor Angela Merkel of Germany arrived in Brussels on Wednesday, before a European Union summit meeting.",
          "copyright": "Stephane De Sakutin/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30europe-web1/30europe-web1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Chancellor Angela Merkel of Germany arrived in Brussels on Wednesday, before a European Union summit meeting.",
          "copyright": "Stephane De Sakutin/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30europe-web1/30europe-web1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1362,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Chancellor Angela Merkel of Germany arrived in Brussels on Wednesday, before a European Union summit meeting.",
          "copyright": "Stephane De Sakutin/Agence France-Presse — Getty Images"
        }
      ],
      "short_url": "http://nyti.ms/29eWoWb"
    },
    {
      "section": "World",
      "subsection": "Europe",
      "title": "With Both Parties in Turmoil, Britain Weighs a General Election",
      "abstract": "A successor to Prime Minister David Cameron might want to seek his or her own mandate from voters after the decision to exit the European Union.",
      "url": "http://www.nytimes.com/2016/06/30/world/europe/britain-brexit.html",
      "byline": "By STEVEN ERLANGER and STEPHEN CASTLE",
      "item_type": "Article",
      "updated_date": "2016-06-29T09:42:16-04:00",
      "created_date": "2016-06-29T08:56:57-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Great Britain Withdrawal from EU (Brexit)"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30britain-web4/30britain-web4-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "The Labour Party leader, Jeremy Corbyn, speaking at a rally on Wednesday in London.",
          "copyright": "Jeff J Mitchell/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30britain-web4/30britain-web4-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "The Labour Party leader, Jeremy Corbyn, speaking at a rally on Wednesday in London.",
          "copyright": "Jeff J Mitchell/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30britain-web4/30britain-web4-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "The Labour Party leader, Jeremy Corbyn, speaking at a rally on Wednesday in London.",
          "copyright": "Jeff J Mitchell/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30britain-web4/30britain-web4-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "The Labour Party leader, Jeremy Corbyn, speaking at a rally on Wednesday in London.",
          "copyright": "Jeff J Mitchell/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/world/30britain-web4/30britain-web4-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "The Labour Party leader, Jeremy Corbyn, speaking at a rally on Wednesday in London.",
          "copyright": "Jeff J Mitchell/Getty Images"
        }
      ],
      "short_url": "http://nyti.ms/29eNubv"
    },
    {
      "section": "World",
      "subsection": "Europe",
      "title": "Having Won, Boris Johnson and ‘Brexit’ Leaders Fumble",
      "abstract": "One thing has become clear: They had no plan for what comes next.",
      "url": "http://www.nytimes.com/2016/06/29/world/europe/boris-johnson-brexit-leaders-eu.html",
      "byline": "By STEVEN ERLANGER",
      "item_type": "Article",
      "updated_date": "2016-06-28T10:09:34-04:00",
      "created_date": "2016-06-28T10:09:37-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Great Britain Withdrawal from EU (Brexit)",
        "Immigration and Emigration"
      ],
      "org_facet": [
        "European Union",
        "Conservative Party (Great Britain)",
        "National Health Service",
        "United Kingdom Independence Party"
      ],
      "per_facet": [
        "Johnson, Boris"
      ],
      "geo_facet": [
        "Great Britain"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29brexit/29brexit-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Boris Johnson, the former London mayor, on Tuesday. One thing has become especially clear about him and other leaders of the successful campaign to vote Britain out of the European Union: They have no plan for what comes next.",
          "copyright": "Odd Andersen/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29brexit/29brexit-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Boris Johnson, the former London mayor, on Tuesday. One thing has become especially clear about him and other leaders of the successful campaign to vote Britain out of the European Union: They have no plan for what comes next.",
          "copyright": "Odd Andersen/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29brexit/29brexit-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Boris Johnson, the former London mayor, on Tuesday. One thing has become especially clear about him and other leaders of the successful campaign to vote Britain out of the European Union: They have no plan for what comes next.",
          "copyright": "Odd Andersen/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29brexit/29brexit-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Boris Johnson, the former London mayor, on Tuesday. One thing has become especially clear about him and other leaders of the successful campaign to vote Britain out of the European Union: They have no plan for what comes next.",
          "copyright": "Odd Andersen/Agence France-Presse — Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29brexit/29brexit-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1366,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Boris Johnson, the former London mayor, on Tuesday. One thing has become especially clear about him and other leaders of the successful campaign to vote Britain out of the European Union: They have no plan for what comes next.",
          "copyright": "Odd Andersen/Agence France-Presse — Getty Images"
        }
      ],
      "short_url": "http://nyti.ms/295veDL"
    },
    {
      "section": "World",
      "subsection": "Europe",
      "title": "A Blunt Message After ‘Brexit’: Bolting Will Carry a Heavy Price",
      "abstract": "European Union leaders at a summit meeting made it clear to Prime Minister David Cameron that his country would not enjoy the benefits of membership without the responsibilities.",
      "url": "http://www.nytimes.com/2016/06/29/world/europe/brexit.html",
      "byline": "By ANDREW HIGGINS and JAMES KANTER",
      "item_type": "Article",
      "updated_date": "2016-06-28T22:40:33-04:00",
      "created_date": "2016-06-28T07:03:29-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Great Britain Withdrawal from EU (Brexit)"
      ],
      "org_facet": [
        "European Union"
      ],
      "per_facet": [
        "Merkel, Angela",
        "Cameron, David"
      ],
      "geo_facet": [
        "Great Britain"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29BRITAIN-web2/29BRITAIN-web2-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Demonstrators in support of the European Union gathered in Trafalgar Square in London on Tuesday.",
          "copyright": "Andrew Testa for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29BRITAIN-web2/29BRITAIN-web2-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Demonstrators in support of the European Union gathered in Trafalgar Square in London on Tuesday.",
          "copyright": "Andrew Testa for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29BRITAIN-web2/29BRITAIN-web1-1467136916788-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Demonstrators in support of the European Union gathered in Trafalgar Square in London on Tuesday.",
          "copyright": "Andrew Testa for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29BRITAIN-web2/29BRITAIN-web2-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Demonstrators in support of the European Union gathered in Trafalgar Square in London on Tuesday.",
          "copyright": "Andrew Testa for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29BRITAIN-web2/29BRITAIN-web1-1467136916788-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1367,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Demonstrators in support of the European Union gathered in Trafalgar Square in London on Tuesday.",
          "copyright": "Andrew Testa for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/2950Fhx"
    },
    {
      "section": "U.S.",
      "subsection": "Politics",
      "title": "Trump Institute Offered Get-Rich Schemes Using Others’ Ideas",
      "abstract": "The institute, to which Donald J. Trump lent his name in 2005, was owned by a couple accused of fraud, and its educational materials had been lifted from an old real estate manual.",
      "url": "http://www.nytimes.com/2016/06/30/us/politics/donald-trump-institute-plagiarism.html",
      "byline": "By JONATHAN MARTIN",
      "item_type": "Article",
      "updated_date": "2016-06-29T12:04:57-04:00",
      "created_date": "2016-06-29T12:05:00-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Presidential Election of 2016",
        "Plagiarism",
        "Advertising and Marketing"
      ],
      "org_facet": [
        "Trump Institute"
      ],
      "per_facet": [
        "Trump, Donald J"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30PLAGIARISMweb1/30PLAGIARISMweb1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump at a campaign event in Dallas this month. In 2005, he lent his name to a venture, the Trump Institute, that promised falsely that he had handpicked its teachers.",
          "copyright": "Eric Thayer for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30PLAGIARISMweb1/30PLAGIARISMweb1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump at a campaign event in Dallas this month. In 2005, he lent his name to a venture, the Trump Institute, that promised falsely that he had handpicked its teachers.",
          "copyright": "Eric Thayer for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30PLAGIARISMweb1/30PLAGIARISMweb1-articleInline.jpg",
          "format": "Normal",
          "height": 128,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump at a campaign event in Dallas this month. In 2005, he lent his name to a venture, the Trump Institute, that promised falsely that he had handpicked its teachers.",
          "copyright": "Eric Thayer for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30PLAGIARISMweb1/30PLAGIARISMweb1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump at a campaign event in Dallas this month. In 2005, he lent his name to a venture, the Trump Institute, that promised falsely that he had handpicked its teachers.",
          "copyright": "Eric Thayer for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30PLAGIARISMweb1/30PLAGIARISMweb1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1378,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump at a campaign event in Dallas this month. In 2005, he lent his name to a venture, the Trump Institute, that promised falsely that he had handpicked its teachers.",
          "copyright": "Eric Thayer for The New York Times"
        }
      ]
    },
    {
      "section": "U.S.",
      "subsection": "Politics",
      "title": "How Donald Trump Keeps Changing His Mind on Abortion, Torture and Banning Muslims",
      "abstract": "Mr. Trump, whose proposals have often been vague and whose speeches often contradict his off-the-cuff remarks, has shifted on hot-button issues, with few political consequences.",
      "url": "http://www.nytimes.com/2016/06/30/us/politics/donald-trump-flip-flop.html",
      "byline": "By ALAN RAPPEPORT and MAGGIE HABERMAN",
      "item_type": "Article",
      "updated_date": "2016-06-29T10:39:52-04:00",
      "created_date": "2016-06-29T10:39:55-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Presidential Election of 2016",
        "Abortion",
        "Muslim Americans",
        "Minimum Wage",
        "Homosexuality and Bisexuality",
        "Torture"
      ],
      "org_facet": [
        "Republican Party",
        "Islamic State in Iraq and Syria (ISIS)"
      ],
      "per_facet": [
        "Trump, Donald J"
      ],
      "geo_facet": [
        "United States"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30TRUMPSTANCEweb1/30TRUMPSTANCEweb1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump in Monessen, Pa., on Tuesday. His proposals have often been vague, and he has reversed course on campaign issues, sometimes within hours.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30TRUMPSTANCEweb1/30TRUMPSTANCEweb1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump in Monessen, Pa., on Tuesday. His proposals have often been vague, and he has reversed course on campaign issues, sometimes within hours.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30TRUMPSTANCEweb1/30TRUMPSTANCEweb1-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump in Monessen, Pa., on Tuesday. His proposals have often been vague, and he has reversed course on campaign issues, sometimes within hours.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30TRUMPSTANCEweb1/30TRUMPSTANCEweb1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump in Monessen, Pa., on Tuesday. His proposals have often been vague, and he has reversed course on campaign issues, sometimes within hours.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/30TRUMPSTANCEweb1/30TRUMPSTANCEweb1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Donald J. Trump in Monessen, Pa., on Tuesday. His proposals have often been vague, and he has reversed course on campaign issues, sometimes within hours.",
          "copyright": "Hilary Swift for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29eVxFj"
    },
    {
      "section": "The Upshot",
      "subsection": "",
      "title": "How Trump’s Campaign Could Redraw Voter Allegiances",
      "abstract": "A message radically different from what Republicans have advanced has considerable appeal to white working-class Democrats.",
      "url": "http://www.nytimes.com/2016/06/30/upshot/how-trumps-campaign-could-redraw-voter-allegiances.html",
      "byline": "By NATE COHN",
      "item_type": "Article",
      "updated_date": "2016-06-29T05:00:02-04:00",
      "created_date": "2016-06-29T05:00:06-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Presidential Election of 2016",
        "Polls and Public Opinion",
        "United States Economy"
      ],
      "org_facet": [
        "North American Free Trade Agreement",
        "Democratic Party",
        "Republican Party"
      ],
      "per_facet": [
        "Trump, Donald J"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/upshot/up-VOTERS/up-VOTERS-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Waiting for the speech by Donald Trump in Monessen, Pa., on Tuesday.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/upshot/up-VOTERS/up-VOTERS-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Waiting for the speech by Donald Trump in Monessen, Pa., on Tuesday.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/upshot/up-VOTERS/up-VOTERS-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Waiting for the speech by Donald Trump in Monessen, Pa., on Tuesday.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/upshot/up-VOTERS/up-VOTERS-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Waiting for the speech by Donald Trump in Monessen, Pa., on Tuesday.",
          "copyright": "Hilary Swift for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/upshot/up-VOTERS/up-VOTERS-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1367,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Waiting for the speech by Donald Trump in Monessen, Pa., on Tuesday.",
          "copyright": "Hilary Swift for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/298kowF"
    },
    {
      "section": "U.S.",
      "subsection": "Politics",
      "title": "Cleveland Relaxes Rules on Protests Near G.O.P. Convention Site",
      "abstract": "A lawsuit filed by the American Civil Liberties Union led to looser rules on the amount of space to be used by protesters, and the amount of time.",
      "url": "http://www.nytimes.com/2016/06/30/us/politics/cleveland-republican-convention-protests.html",
      "byline": "By YAMICHE ALCINDOR",
      "item_type": "Article",
      "updated_date": "2016-06-29T19:00:28-04:00",
      "created_date": "2016-06-29T13:36:04-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Presidential Election of 2016",
        "Republican National Convention",
        "Demonstrations, Protests and Riots"
      ],
      "org_facet": [
        "American Civil Liberties Union"
      ],
      "per_facet": [],
      "geo_facet": [
        "Cleveland (Ohio)"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/us/30protests-2/30protests-2-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Protesters at the Democratic National Convention in Charlotte, N.C., in 2012.",
          "copyright": "Max Whittaker for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/us/30protests-2/30protests-2-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Protesters at the Democratic National Convention in Charlotte, N.C., in 2012.",
          "copyright": "Max Whittaker for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/us/30protests-2/30protests-2-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Protesters at the Democratic National Convention in Charlotte, N.C., in 2012.",
          "copyright": "Max Whittaker for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/us/30protests-2/30protests-2-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Protesters at the Democratic National Convention in Charlotte, N.C., in 2012.",
          "copyright": "Max Whittaker for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/us/30protests-2/30protests-2-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Protesters at the Democratic National Convention in Charlotte, N.C., in 2012.",
          "copyright": "Max Whittaker for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29fpgxB"
    },
    {
      "section": "Business Day",
      "subsection": "International Business",
      "title": "In Trade Stances Toward China, Clinton and Trump Both Signal a Chill",
      "abstract": "The candidates, grappling with economic populism and increasing concern over China’s military posture, could follow through on campaign pledges to toughen trade policy.",
      "url": "http://www.nytimes.com/2016/06/30/business/international/hillary-clinton-donald-trump-trade-china.html",
      "byline": "By KEITH BRADSHER",
      "item_type": "Article",
      "updated_date": "2016-06-29T11:10:34-04:00",
      "created_date": "2016-06-29T11:10:38-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Presidential Election of 2016",
        "International Trade and World Market",
        "United States International Relations",
        "United States Economy"
      ],
      "org_facet": [],
      "per_facet": [
        "Trump, Donald J",
        "Clinton, Hillary Rodham"
      ],
      "geo_facet": [
        "China"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30trumpasia-web2/30trumpasia-web2-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "A container ship tied up at a Chinese-financed port in Sri Lanka. Millions of jobs in China and across the region rely on the willingness of the United States to buy imports from China.",
          "copyright": "Dinuka Liyanawatte/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30trumpasia-web2/30trumpasia-web2-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "A container ship tied up at a Chinese-financed port in Sri Lanka. Millions of jobs in China and across the region rely on the willingness of the United States to buy imports from China.",
          "copyright": "Dinuka Liyanawatte/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30trumpasia-web2/30trumpasia-web2-articleInline.jpg",
          "format": "Normal",
          "height": 118,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "A container ship tied up at a Chinese-financed port in Sri Lanka. Millions of jobs in China and across the region rely on the willingness of the United States to buy imports from China.",
          "copyright": "Dinuka Liyanawatte/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30trumpasia-web2/30trumpasia-web2-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "A container ship tied up at a Chinese-financed port in Sri Lanka. Millions of jobs in China and across the region rely on the willingness of the United States to buy imports from China.",
          "copyright": "Dinuka Liyanawatte/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30trumpasia-web2/30trumpasia-web2-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1274,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "A container ship tied up at a Chinese-financed port in Sri Lanka. Millions of jobs in China and across the region rely on the willingness of the United States to buy imports from China.",
          "copyright": "Dinuka Liyanawatte/Reuters"
        }
      ],
      "short_url": "http://nyti.ms/2997OgO"
    },
    {
      "section": "U.S.",
      "subsection": "Politics",
      "title": "Gun Control Wall, Bolstered by Republicans, Shows a Crack",
      "abstract": "After the massacre in Orlando, Fla., some Republicans showed a willingness to support gun control if needed in the war against terrorism.",
      "url": "http://www.nytimes.com/2016/06/30/us/politics/gun-control-republicans-congress.html",
      "byline": "By CARL HULSE",
      "item_type": "Article",
      "updated_date": "2016-06-29T05:09:38-04:00",
      "created_date": "2016-06-29T05:09:40-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Gun Control",
        "United States Politics and Government"
      ],
      "org_facet": [
        "National Rifle Assn",
        "Democratic Party",
        "House of Representatives",
        "Republican Party",
        "Senate"
      ],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/29hulse1/29hulse1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "From left, Representatives John Lewis, Joseph Crowley, Nancy Pelosi and Charles B. Rangel rallied with other House Democrats and supporters after a sit-in demanding action on gun control legislation at the Capitol last week.",
          "copyright": "Al Drago/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/29hulse1/29hulse1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "From left, Representatives John Lewis, Joseph Crowley, Nancy Pelosi and Charles B. Rangel rallied with other House Democrats and supporters after a sit-in demanding action on gun control legislation at the Capitol last week.",
          "copyright": "Al Drago/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/29hulse1/29hulse1-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "From left, Representatives John Lewis, Joseph Crowley, Nancy Pelosi and Charles B. Rangel rallied with other House Democrats and supporters after a sit-in demanding action on gun control legislation at the Capitol last week.",
          "copyright": "Al Drago/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/29hulse1/29hulse1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "From left, Representatives John Lewis, Joseph Crowley, Nancy Pelosi and Charles B. Rangel rallied with other House Democrats and supporters after a sit-in demanding action on gun control legislation at the Capitol last week.",
          "copyright": "Al Drago/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/us/29hulse1/29hulse1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "From left, Representatives John Lewis, Joseph Crowley, Nancy Pelosi and Charles B. Rangel rallied with other House Democrats and supporters after a sit-in demanding action on gun control legislation at the Capitol last week.",
          "copyright": "Al Drago/The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29emU2g"
    },
    {
      "section": "Magazine",
      "subsection": "",
      "title": "The Humiliating Practice of Sex-Testing Female Athletes",
      "abstract": "For years, international sports organizations have been policing women for “masculine” qualities — and turning their Olympic dreams into nightmares. But when Dutee Chand appealed her ban, she may have changed the rules.",
      "url": "http://www.nytimes.com/2016/07/03/magazine/the-humiliating-practice-of-sex-testing-female-athletes.html",
      "byline": "By RUTH PADAWER",
      "item_type": "Article",
      "updated_date": "2016-06-28T07:00:17-04:00",
      "created_date": "2016-06-28T07:00:20-04:00",
      "published_date": "2016-07-03T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Intersex",
        "Testosterone",
        "Women and Girls",
        "Tests (Medical)"
      ],
      "org_facet": [
        "International Assn of Athletics Federations",
        "International Olympic Committee"
      ],
      "per_facet": [
        "Dutee Chand",
        "Semenya, Caster"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/07/03/magazine/03intersex1/03intersex1-thumbStandard-v3.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Dutee Chand",
          "copyright": "Sohrab Hura/Magnum, for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/magazine/03intersex1/03intersex1-thumbLarge-v3.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Dutee Chand",
          "copyright": "Sohrab Hura/Magnum, for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/magazine/03intersex1/03intersex1-articleInline-v5.jpg",
          "format": "Normal",
          "height": 167,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Dutee Chand",
          "copyright": "Sohrab Hura/Magnum, for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/magazine/03intersex1/03intersex1-mediumThreeByTwo210-v5.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Dutee Chand",
          "copyright": "Sohrab Hura/Magnum, for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/magazine/03intersex1/03intersex1-superJumbo-v5.jpg",
          "format": "superJumbo",
          "height": 1801,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Dutee Chand",
          "copyright": "Sohrab Hura/Magnum, for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/2950brC"
    },
    {
      "section": "Opinion",
      "subsection": "",
      "title": "Behind the Cruel Attack on Turkey",
      "abstract": "The actions of Turkish leaders have made the country both a home for some foreign fighters and a target for the Islamic State.",
      "url": "http://www.nytimes.com/2016/06/30/opinion/behind-the-cruel-attack-on-turkey.html",
      "byline": "By THE EDITORIAL BOARD",
      "item_type": "Article",
      "updated_date": "2016-06-29T20:03:44-04:00",
      "created_date": "2016-06-29T20:03:46-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Istanbul Airport Attack (June 2016)",
        "Terrorism",
        "United States International Relations"
      ],
      "org_facet": [
        "Islamic State in Iraq and Syria (ISIS)"
      ],
      "per_facet": [
        "Erdogan, Recep Tayyip",
        "Assad, Bashar al-"
      ],
      "geo_facet": [
        "Syria",
        "Turkey"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30thu1/30thu1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Pablo Delcán"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30thu1/30thu1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Pablo Delcán"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30thu1/30thu1-articleInline.jpg",
          "format": "Normal",
          "height": 144,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Pablo Delcán"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30thu1/30thu1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Pablo Delcán"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30thu1/30thu1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1930,
          "width": 1930,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Pablo Delcán"
        }
      ],
      "short_url": "http://nyti.ms/29aTK6j"
    },
    {
      "section": "Opinion",
      "subsection": "",
      "title": "What Comes After the Istanbul Airport Attack?",
      "abstract": "Turkey can’t solve its terrorism problem until the country heals itself.",
      "url": "http://www.nytimes.com/2016/06/30/opinion/what-comes-after-the-istanbul-airport-attack.html",
      "byline": "By MUSTAFA AKYOL",
      "item_type": "Article",
      "updated_date": "2016-06-29T19:13:05-04:00",
      "created_date": "2016-06-29T19:13:07-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Istanbul Airport Attack (June 2016)",
        "Kurds",
        "Terrorism"
      ],
      "org_facet": [
        "Islamic State in Iraq and Syria (ISIS)",
        "Kurdistan Workers' Party"
      ],
      "per_facet": [
        "Erdogan, Recep Tayyip"
      ],
      "geo_facet": [
        "Turkey"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30akyolWeb/30akyolWeb-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Relatives mourn a victim of Tuesday’s attack on Ataturk airport in Istanbul, Turkey.",
          "copyright": "Osman Orsal/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30akyolWeb/30akyolWeb-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Relatives mourn a victim of Tuesday’s attack on Ataturk airport in Istanbul, Turkey.",
          "copyright": "Osman Orsal/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30akyolWeb/30akyolWeb-articleInline.jpg",
          "format": "Normal",
          "height": 136,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Relatives mourn a victim of Tuesday’s attack on Ataturk airport in Istanbul, Turkey.",
          "copyright": "Osman Orsal/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30akyolWeb/30akyolWeb-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Relatives mourn a victim of Tuesday’s attack on Ataturk airport in Istanbul, Turkey.",
          "copyright": "Osman Orsal/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/opinion/30akyolWeb/30akyolWeb-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1461,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Relatives mourn a victim of Tuesday’s attack on Ataturk airport in Istanbul, Turkey.",
          "copyright": "Osman Orsal/Reuters"
        }
      ],
      "short_url": "http://nyti.ms/29aKzmr"
    },
    {
      "section": "Opinion",
      "subsection": "",
      "title": "You Break It, You Own It",
      "abstract": "The British vote by a narrow majority to leave the European Union is not the end of the world — but it does show us how we can get there.",
      "url": "http://www.nytimes.com/2016/06/29/opinion/you-break-it-you-own-it.html",
      "byline": "By THOMAS L. FRIEDMAN",
      "item_type": "Article",
      "updated_date": "2016-06-29T03:21:02-04:00",
      "created_date": "2016-06-29T03:21:04-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Great Britain Withdrawal from EU (Brexit)",
        "Immigration and Emigration",
        "International Relations",
        "Economic Conditions and Trends",
        "Referendums"
      ],
      "org_facet": [
        "European Union"
      ],
      "per_facet": [
        "Trump, Donald J"
      ],
      "geo_facet": [
        "Great Britain"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2014/11/01/opinion/friedman-circular/friedman-circular-thumbStandard-v2.png",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Earl Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2014/11/01/opinion/friedman-circular/friedman-circular-thumbLarge.png",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Earl Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2014/11/01/opinion/friedman-circular/friedman-circular-articleInline-v2.png",
          "format": "Normal",
          "height": 190,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Earl Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2014/11/01/opinion/friedman-circular/friedman-circular-mediumThreeByTwo210-v2.png",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Earl Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2014/11/01/opinion/friedman-circular/friedman-circular-superJumbo-v2.png",
          "format": "superJumbo",
          "height": 228,
          "width": 228,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Earl Wilson/The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29ee4S0"
    },
    {
      "section": "Fashion & Style",
      "subsection": "",
      "title": "Why Can’t My BFF and My New Boyfriend Get Along?",
      "abstract": "Also, how to handle gender ambiguity, friends who are too heavy on the salt, and dinner guests who are only half-thankful.",
      "url": "http://www.nytimes.com/2016/06/05/fashion/social-qs-relationships-gender-low-sodium.html",
      "byline": "By PHILIP GALANES",
      "item_type": "Article",
      "updated_date": "2016-06-02T15:45:06-04:00",
      "created_date": "2016-06-02T15:45:08-04:00",
      "published_date": "2016-06-05T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Customs, Etiquette and Manners",
        "Salt",
        "Gender"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2011/07/28/fashion/social_inline/social_inline-thumbStandard-v3.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Christoph Niemann"
        },
        {
          "url": "https://static01.nyt.com/images/2011/07/28/fashion/social_inline/social_inline-thumbLarge-v3.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Christoph Niemann"
        },
        {
          "url": "https://static01.nyt.com/images/2011/07/28/fashion/social_inline/social_inline-articleInline-v2.jpg",
          "format": "Normal",
          "height": 189,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Christoph Niemann"
        },
        {
          "url": "https://static01.nyt.com/images/2011/07/28/fashion/social_inline/social_inline-mediumThreeByTwo210-v3.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Christoph Niemann"
        },
        {
          "url": "https://static01.nyt.com/images/2011/07/28/fashion/social_inline/social_inline-superJumbo-v2.jpg",
          "format": "superJumbo",
          "height": 923,
          "width": 925,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Christoph Niemann"
        }
      ],
      "short_url": "http://nyti.ms/1X1eIFZ"
    },
    {
      "section": "Travel",
      "subsection": "",
      "title": "10 Free (or Cheap) Travel Apps Worth Downloading",
      "abstract": "Let’s be honest: Most travel apps aren’t very good. These are worth your time (and, in a few cases, your money).",
      "url": "http://www.nytimes.com/2016/07/03/travel/budget-travel-apps.html",
      "byline": "By LUCAS PETERSON",
      "item_type": "Article",
      "updated_date": "2016-06-28T07:36:07-04:00",
      "created_date": "2016-06-28T07:36:09-04:00",
      "published_date": "2016-07-03T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Travel and Vacations",
        "Smartphones",
        "Computers and the Internet"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/07/03/travel/03FRUGAL/03FRUGAL-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Harry Campbell"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/travel/03FRUGAL/03FRUGAL-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Harry Campbell"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/travel/03FRUGAL/03FRUGAL-articleInline.jpg",
          "format": "Normal",
          "height": 144,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Harry Campbell"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/travel/03FRUGAL/03FRUGAL-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Harry Campbell"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/travel/03FRUGAL/03FRUGAL-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1557,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Harry Campbell"
        }
      ],
      "short_url": "http://nyti.ms/2954WRY"
    },
    {
      "section": "Books",
      "subsection": "",
      "title": "Alvin Toffler, Author of ‘Future Shock,’ Dies at 87",
      "abstract": "Mr. Toffler wrote the prophetic 1970 best seller and other books anticipating how people would deal with runaway change and an explosion of information.",
      "url": "http://www.nytimes.com/2016/06/30/books/alvin-toffler-author-of-future-shock-dies-at-87.html",
      "byline": "By KEITH SCHNEIDER",
      "item_type": "Article",
      "updated_date": "2016-06-29T15:05:45-04:00",
      "created_date": "2016-06-29T15:05:47-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Books and Literature",
        "Future Shock (Book)",
        "Deaths (Obituaries)"
      ],
      "org_facet": [],
      "per_facet": [
        "Toffler, Alvin"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/toffler-obit-web03/toffler-obit-web03-thumbStandard-v3.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Alvin Toffler’s prophetic 1970 book, “Future Shock,” sold millions of copies and catapulted the author to international fame.",
          "copyright": "Susan Wood/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/toffler-obit-web03/toffler-obit-web03-thumbLarge-v3.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Alvin Toffler’s prophetic 1970 book, “Future Shock,” sold millions of copies and catapulted the author to international fame.",
          "copyright": "Susan Wood/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/toffler-obit-web03/toffler-obit-web03-articleInline-v2.jpg",
          "format": "Normal",
          "height": 128,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Alvin Toffler’s prophetic 1970 book, “Future Shock,” sold millions of copies and catapulted the author to international fame.",
          "copyright": "Susan Wood/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/toffler-obit-web03/toffler-obit-web03-mediumThreeByTwo210-v2.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Alvin Toffler’s prophetic 1970 book, “Future Shock,” sold millions of copies and catapulted the author to international fame.",
          "copyright": "Susan Wood/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/toffler-obit-web03/toffler-obit-web03-superJumbo-v3.jpg",
          "format": "superJumbo",
          "height": 1374,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Alvin Toffler’s prophetic 1970 book, “Future Shock,” sold millions of copies and catapulted the author to international fame.",
          "copyright": "Susan Wood/Getty Images"
        }
      ],
      "short_url": "http://nyti.ms/29fEy5D"
    },
    {
      "section": "Health",
      "subsection": "",
      "title": "Most Women Prefer to Go Bare, Citing Hygiene (and Baffling Doctors)",
      "abstract": "A new study confirmed the widespread practice of pubic hair grooming, and indicated that the thinking behind the practice is changing.",
      "url": "http://well.blogs.nytimes.com/2016/06/29/most-women-prefer-to-go-bare-citing-hygiene-and-baffling-doctors/",
      "byline": "By JAN HOFFMAN",
      "item_type": "Blogpost",
      "updated_date": "2016-06-29T20:17:53+00:00",
      "created_date": "2016-06-29T12:43:05-04:00",
      "published_date": "2016-06-29T12:43:05-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/health/well_razor/well_razor-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "iStock"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/health/well_razor/well_razor-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "iStock"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/health/well_razor/well_razor-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "iStock"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/health/well_razor/well_razor-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "iStock"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/health/well_razor/well_razor-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "iStock"
        }
      ],
      "short_url": "http://nyti.ms/295ft0d"
    },
    {
      "section": "Food",
      "subsection": "",
      "title": "Fashioning Cast-Iron Pans for Today’s Cooks",
      "abstract": "New companies are making old-fashioned skillets with traditional handwork and modern technology.",
      "url": "http://www.nytimes.com/2016/06/29/dining/cast-iron-skillet-finex-field-company.html",
      "byline": "By JULIA MOSKIN",
      "item_type": "Article",
      "updated_date": "2016-06-28T15:34:34-04:00",
      "created_date": "2016-06-28T15:34:37-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Cookware",
        "Cast Iron",
        "Cooking and Cookbooks"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/dining/29CASTIRON-WEB5/29CASTIRON-WEB5-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Cast-iron skillets from the collection of Chris Muscarella, who has co-founded a company using new technology to produce pans.",
          "copyright": "Cole Wilson for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/dining/29CASTIRON-WEB5/29CASTIRON-WEB5-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Cast-iron skillets from the collection of Chris Muscarella, who has co-founded a company using new technology to produce pans.",
          "copyright": "Cole Wilson for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/dining/29CASTIRON-WEB5/29CASTIRON-WEB5-articleInline.jpg",
          "format": "Normal",
          "height": 136,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Cast-iron skillets from the collection of Chris Muscarella, who has co-founded a company using new technology to produce pans.",
          "copyright": "Cole Wilson for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/dining/29CASTIRON-WEB5/29CASTIRON-WEB5-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Cast-iron skillets from the collection of Chris Muscarella, who has co-founded a company using new technology to produce pans.",
          "copyright": "Cole Wilson for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/dining/29CASTIRON-WEB5/29CASTIRON-WEB5-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1463,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Cast-iron skillets from the collection of Chris Muscarella, who has co-founded a company using new technology to produce pans.",
          "copyright": "Cole Wilson for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/296zMtl"
    },
    {
      "section": "Arts",
      "subsection": "Art & Design",
      "title": "Who Will Tell the Story of Slavery?",
      "abstract": "L. Douglas Wilder, the former governor of Virginia, continues to pursue his dream of a national slavery museum even as a competing proposal moves forward.",
      "url": "http://www.nytimes.com/2016/07/03/arts/design/who-will-tell-the-story-of-slavery.html",
      "byline": "By LORNE MANLY",
      "item_type": "Article",
      "updated_date": "2016-06-29T07:00:28-04:00",
      "created_date": "2016-06-29T07:00:31-04:00",
      "published_date": "2016-07-03T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Slavery (Historical)",
        "Museums"
      ],
      "org_facet": [
        "United States National Slavery Museum"
      ],
      "per_facet": [
        "Wilder, L Douglas"
      ],
      "geo_facet": [
        "Richmond (Va)",
        "Fredericksburg (Va)"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/07/03/arts/03SLAVERYMUSEUM1/03SLAVERYMUSEUM1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "The site in Fredericksburg, Va., where L. Douglas Wilder first wanted to put the United States National Slavery Museum.",
          "copyright": "Chet Strange for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/arts/03SLAVERYMUSEUM1/03SLAVERYMUSEUM1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "The site in Fredericksburg, Va., where L. Douglas Wilder first wanted to put the United States National Slavery Museum.",
          "copyright": "Chet Strange for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/arts/03SLAVERYMUSEUM1/03SLAVERYMUSEUM1-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "The site in Fredericksburg, Va., where L. Douglas Wilder first wanted to put the United States National Slavery Museum.",
          "copyright": "Chet Strange for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/arts/03SLAVERYMUSEUM1/03SLAVERYMUSEUM1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "The site in Fredericksburg, Va., where L. Douglas Wilder first wanted to put the United States National Slavery Museum.",
          "copyright": "Chet Strange for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/07/03/arts/03SLAVERYMUSEUM1/03SLAVERYMUSEUM1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "The site in Fredericksburg, Va., where L. Douglas Wilder first wanted to put the United States National Slavery Museum.",
          "copyright": "Chet Strange for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29ewr9x"
    },
    {
      "section": "Business Day",
      "subsection": "Media",
      "title": "Film Academy Broadens Voting Pool After Oscars Criticism",
      "abstract": "The Academy of Motion Picture Arts and Sciences more than doubled the number of invitations to make good on a promise to increase female and minority membership.",
      "url": "http://www.nytimes.com/2016/06/30/business/media/film-academy-broadens-voting-pool-after-oscars-criticism.html",
      "byline": "By MICHAEL CIEPLY",
      "item_type": "Article",
      "updated_date": "2016-06-29T16:56:33-04:00",
      "created_date": "2016-06-29T16:56:36-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Academy Awards (Oscars)",
        "Blacks",
        "Actors and Actresses",
        "Race and Ethnicity",
        "Movies",
        "Awards, Decorations and Honors"
      ],
      "org_facet": [
        "Academy of Motion Picture Arts and Sciences"
      ],
      "per_facet": [
        "Boseman, Chadwick",
        "Boyega, John (1992- )",
        "Elba, Idris",
        "Coogler, Ryan",
        "Jordan, Michael B",
        "Fox, Vivica A",
        "Larson, Brie"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30ACADEMY1/30ACADEMY1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Idris Elba in “Beasts of No Nation,” a Netflix original film.",
          "copyright": "Netflix, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30ACADEMY1/30ACADEMY1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Idris Elba in “Beasts of No Nation,” a Netflix original film.",
          "copyright": "Netflix, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30ACADEMY1/30ACADEMY1-articleInline.jpg",
          "format": "Normal",
          "height": 96,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Idris Elba in “Beasts of No Nation,” a Netflix original film.",
          "copyright": "Netflix, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30ACADEMY1/30ACADEMY1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Idris Elba in “Beasts of No Nation,” a Netflix original film.",
          "copyright": "Netflix, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/business/30ACADEMY1/30ACADEMY1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1039,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Idris Elba in “Beasts of No Nation,” a Netflix original film.",
          "copyright": "Netflix, via Associated Press"
        }
      ],
      "short_url": "http://nyti.ms/29fYJAr"
    },
    {
      "section": "Sports",
      "subsection": "Tennis",
      "title": "Unlikely Matchup Has Likely Result: Roger Federer Sweeps Marcus Willis",
      "abstract": "Federer, seeded third, beat Willis, ranked 772nd, 6-0, 6-3, 6-4, on Wednesday at Wimbledon in one of biggest mismatches in recent Grand Slam history.",
      "url": "http://www.nytimes.com/2016/06/30/sports/tennis/marcus-willis-wimbledon-roger-federer.html",
      "byline": "By CHRISTOPHER CLAREY",
      "item_type": "Article",
      "updated_date": "2016-06-29T20:13:14-04:00",
      "created_date": "2016-06-29T13:39:29-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Wimbledon Tennis Tournament",
        "Tennis"
      ],
      "org_facet": [],
      "per_facet": [
        "Federer, Roger",
        "Willis, Marcus (1990- )"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/sports/30WILLISliveblog12/30WILLISliveblog12-thumbStandard-v2.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Marcus Willis’s group of chanting friends and fans made it seem more like a soccer game than a tennis match.",
          "copyright": "Julian Finney/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/sports/30WILLISliveblog12/30WILLISliveblog12-thumbLarge-v2.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Marcus Willis’s group of chanting friends and fans made it seem more like a soccer game than a tennis match.",
          "copyright": "Julian Finney/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/sports/30WILLISliveblog12/30WILLISliveblog12-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Marcus Willis’s group of chanting friends and fans made it seem more like a soccer game than a tennis match.",
          "copyright": "Julian Finney/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/sports/30WILLISliveblog12/30WILLISliveblog12-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Marcus Willis’s group of chanting friends and fans made it seem more like a soccer game than a tennis match.",
          "copyright": "Julian Finney/Getty Images"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/sports/30WILLISliveblog12/30WILLISliveblog12-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Marcus Willis’s group of chanting friends and fans made it seem more like a soccer game than a tennis match.",
          "copyright": "Julian Finney/Getty Images"
        }
      ],
      "short_url": "http://nyti.ms/299AHto"
    },
    {
      "section": "Sports",
      "subsection": "Tennis",
      "title": "For Some at Wimbledon, Nike’s Dress Just Doesn’t Do It",
      "abstract": "Nike issued a loosely hanging, short dress for Wimbledon. But it was not exactly performance gear, several players said, and wardrobe changes have ensued.",
      "url": "http://www.nytimes.com/2016/06/29/sports/tennis/nike-wimbledon-premier-slam-dress.html",
      "byline": "By BEN ROTHENBERG",
      "item_type": "Article",
      "updated_date": "2016-06-28T20:43:45-04:00",
      "created_date": "2016-06-28T20:43:47-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Tennis",
        "Dresses",
        "Wimbledon Tennis Tournament"
      ],
      "org_facet": [
        "NIKE Inc"
      ],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/sports/29NIKEDRESS2/29NIKEDRESS2-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Some players criticized the NikeCourt Premier Slam Dress for flying up. Katie Boulter tied a headband around her waist to serve as a belt, which held the fabric somewhat more in place.",
          "copyright": "Cal Sport Media, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/sports/29NIKEDRESS2/29NIKEDRESS2-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Some players criticized the NikeCourt Premier Slam Dress for flying up. Katie Boulter tied a headband around her waist to serve as a belt, which held the fabric somewhat more in place.",
          "copyright": "Cal Sport Media, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/sports/29NIKEDRESS2/29NIKEDRESS2-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Some players criticized the NikeCourt Premier Slam Dress for flying up. Katie Boulter tied a headband around her waist to serve as a belt, which held the fabric somewhat more in place.",
          "copyright": "Cal Sport Media, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/sports/29NIKEDRESS2/29NIKEDRESS2-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Some players criticized the NikeCourt Premier Slam Dress for flying up. Katie Boulter tied a headband around her waist to serve as a belt, which held the fabric somewhat more in place.",
          "copyright": "Cal Sport Media, via Associated Press"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/sports/29NIKEDRESS2/29NIKEDRESS2-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1367,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Some players criticized the NikeCourt Premier Slam Dress for flying up. Katie Boulter tied a headband around her waist to serve as a belt, which held the fabric somewhat more in place.",
          "copyright": "Cal Sport Media, via Associated Press"
        }
      ],
      "short_url": "http://nyti.ms/297tZDQ"
    },
    {
      "section": "Technology",
      "subsection": "",
      "title": "Facebook, a News Giant That Would Rather Show Us Baby Pictures",
      "abstract": "The most powerful force in the news industry just said something that should shock everyone in the media business: Its primary purpose isn’t informing users about the world.",
      "url": "http://www.nytimes.com/2016/06/30/technology/facebook-a-news-giant-that-would-rather-show-us-baby-pictures.html",
      "byline": "By FARHAD MANJOO",
      "item_type": "Article",
      "updated_date": "2016-06-29T10:01:34-04:00",
      "created_date": "2016-06-29T10:01:36-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "News and News Media",
        "Social Media",
        "Computers and the Internet"
      ],
      "org_facet": [
        "Facebook Inc"
      ],
      "per_facet": [
        "Zuckerberg, Mark E",
        "Cox, Chris (1982- )"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/technology/30stateillo-biggercanvas/30stateillo-biggercanvas-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Stuart Goldenberg"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/technology/30stateillo-biggercanvas/30stateillo-biggercanvas-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Stuart Goldenberg"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/technology/30stateillo-biggercanvas/30stateillo-biggercanvas-articleInline.jpg",
          "format": "Normal",
          "height": 125,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Stuart Goldenberg"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/technology/30stateillo-biggercanvas/30stateillo-biggercanvas-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Stuart Goldenberg"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/technology/30stateillo-biggercanvas/30stateillo-biggercanvas-superJumbo.jpg",
          "format": "superJumbo",
          "height": 417,
          "width": 625,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Stuart Goldenberg"
        }
      ],
      "short_url": "http://nyti.ms/298Wlh0"
    },
    {
      "section": "Technology",
      "subsection": "",
      "title": "Facebook to Change News Feed to Focus on Friends and Family",
      "abstract": "News content posted by publishers will show up less prominently, resulting in less traffic to companies that have come to rely on Facebook audiences.",
      "url": "http://www.nytimes.com/2016/06/30/technology/facebook-to-change-news-feed-to-focus-on-friends-and-family.html",
      "byline": "By MIKE ISAAC and SYDNEY EMBER",
      "item_type": "Article",
      "updated_date": "2016-06-29T10:00:16-04:00",
      "created_date": "2016-06-29T10:00:18-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "News and News Media",
        "Social Media"
      ],
      "org_facet": [
        "Facebook Inc"
      ],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/business/30FACEBOOK/30FACEBOOK-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Mark Zuckerberg at an April conference. The company’s news feed is seen by more than 1.65 billion users every month.",
          "copyright": "Jim Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/business/30FACEBOOK/30FACEBOOK-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Mark Zuckerberg at an April conference. The company’s news feed is seen by more than 1.65 billion users every month.",
          "copyright": "Jim Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/business/30FACEBOOK/30FACEBOOK-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Mark Zuckerberg at an April conference. The company’s news feed is seen by more than 1.65 billion users every month.",
          "copyright": "Jim Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/business/30FACEBOOK/30FACEBOOK-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Mark Zuckerberg at an April conference. The company’s news feed is seen by more than 1.65 billion users every month.",
          "copyright": "Jim Wilson/The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/business/30FACEBOOK/30FACEBOOK-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Mark Zuckerberg at an April conference. The company’s news feed is seen by more than 1.65 billion users every month.",
          "copyright": "Jim Wilson/The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/298Vw7Z"
    },
    {
      "section": "Business Day",
      "subsection": "DealBook",
      "title": "Nearly All U.S. Banks Pass Fed’s Stress Test",
      "abstract": "Only Morgan Stanley did not pass unconditionally, and the American subsidiaries of Deutsche Bank and Santander failed outright.",
      "url": "http://www.nytimes.com/2016/06/30/business/dealbook/nearly-all-us-banks-pass-feds-stress-test.html",
      "byline": "By NATHANIEL POPPER and MICHAEL CORKERY",
      "item_type": "Article",
      "updated_date": "2016-06-29T17:04:45-04:00",
      "created_date": "2016-06-29T17:04:47-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Dodd-Frank Wall Street Reform and Consumer Protection Act (2010)",
        "Banking and Financial Institutions"
      ],
      "org_facet": [
        "Morgan Stanley",
        "Deutsche Bank AG",
        "Banco Santander S.A.",
        "Federal Reserve System"
      ],
      "per_facet": [],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/02/12/business/db-morgan-web1/db-morgan-web1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "The headquarters of Morgan Stanley in New York. The Fed gave the bank a conditional passing grade, raising concerns on its internal controls and processes. Morgan was the only United States bank not to receive an unqualified passing grade.",
          "copyright": "Mike Segar/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/02/12/business/db-morgan-web1/db-morgan-web1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "The headquarters of Morgan Stanley in New York. The Fed gave the bank a conditional passing grade, raising concerns on its internal controls and processes. Morgan was the only United States bank not to receive an unqualified passing grade.",
          "copyright": "Mike Segar/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/02/12/business/db-morgan-web1/db-morgan-web1-articleInline.jpg",
          "format": "Normal",
          "height": 122,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "The headquarters of Morgan Stanley in New York. The Fed gave the bank a conditional passing grade, raising concerns on its internal controls and processes. Morgan was the only United States bank not to receive an unqualified passing grade.",
          "copyright": "Mike Segar/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/02/12/business/db-morgan-web1/db-morgan-web1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "The headquarters of Morgan Stanley in New York. The Fed gave the bank a conditional passing grade, raising concerns on its internal controls and processes. Morgan was the only United States bank not to receive an unqualified passing grade.",
          "copyright": "Mike Segar/Reuters"
        },
        {
          "url": "https://static01.nyt.com/images/2016/02/12/business/db-morgan-web1/db-morgan-web1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1319,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "The headquarters of Morgan Stanley in New York. The Fed gave the bank a conditional passing grade, raising concerns on its internal controls and processes. Morgan was the only United States bank not to receive an unqualified passing grade.",
          "copyright": "Mike Segar/Reuters"
        }
      ],
      "short_url": "http://nyti.ms/29g0mxX"
    },
    {
      "section": "N.Y. / Region",
      "subsection": "",
      "title": "Could This Be the End of Paul Simon’s Rhymin’?",
      "abstract": "Mr. Simon, 74, said in an interview that he was ready to give up music, despite the popularity of his latest album, “Stranger to Stranger,” and his current tour.",
      "url": "http://www.nytimes.com/2016/06/29/nyregion/paul-simon-retirement-stranger-to-stranger.html",
      "byline": "By JIM DWYER",
      "item_type": "Article",
      "updated_date": "2016-06-28T20:41:03-04:00",
      "created_date": "2016-06-28T20:41:05-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Music",
        "Pop and Rock Music",
        "Stranger to Stranger (Album)"
      ],
      "org_facet": [],
      "per_facet": [
        "Simon, Paul"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nyregion/29ABOUT/29ABOUT-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Paul Simon, 74, in Vienna, Va. &ldquo;Showbiz doesn&rsquo;t hold any interest for me,&rdquo; he said. &ldquo;None.&rdquo;",
          "copyright": "T.J. Kirkpatrick for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nyregion/29ABOUT/29ABOUT-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Paul Simon, 74, in Vienna, Va. &ldquo;Showbiz doesn&rsquo;t hold any interest for me,&rdquo; he said. &ldquo;None.&rdquo;",
          "copyright": "T.J. Kirkpatrick for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nyregion/29ABOUT/29ABOUT-articleInline.jpg",
          "format": "Normal",
          "height": 239,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Paul Simon, 74, in Vienna, Va. &ldquo;Showbiz doesn&rsquo;t hold any interest for me,&rdquo; he said. &ldquo;None.&rdquo;",
          "copyright": "T.J. Kirkpatrick for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nyregion/29ABOUT/29ABOUT-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Paul Simon, 74, in Vienna, Va. &ldquo;Showbiz doesn&rsquo;t hold any interest for me,&rdquo; he said. &ldquo;None.&rdquo;",
          "copyright": "T.J. Kirkpatrick for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/nyregion/29ABOUT/29ABOUT-superJumbo.jpg",
          "format": "superJumbo",
          "height": 2048,
          "width": 1629,
          "type": "image",
          "subtype": "photo",
          "caption": "Paul Simon, 74, in Vienna, Va. &ldquo;Showbiz doesn&rsquo;t hold any interest for me,&rdquo; he said. &ldquo;None.&rdquo;",
          "copyright": "T.J. Kirkpatrick for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29dylqU"
    },
    {
      "section": "Theater",
      "subsection": "",
      "title": "Shakespeare: Actor. Playwright. Social Climber.",
      "abstract": "Newly discovered documents suggest the playwright cared very much about a coat of arms that reflected his status as a “gentleman.”",
      "url": "http://www.nytimes.com/2016/06/30/theater/shakespeare-coat-of-arms.html",
      "byline": "By JENNIFER SCHUESSLER",
      "item_type": "Article",
      "updated_date": "2016-06-29T16:12:19-04:00",
      "created_date": "2016-06-29T16:12:22-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Theater",
        "Books and Literature",
        "Heraldry"
      ],
      "org_facet": [
        "Folger Shakespeare Library (Washington, DC)"
      ],
      "per_facet": [
        "Shakespeare, William",
        "Wolfe, Heather"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30SHAKESPEARE/30SHAKESPEARE-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Bottom right corner, a recently discovered, if tattered, depiction of the Shakespeare coat of arms.",
          "copyright": "Via the New England Historic Genealogical Society"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30SHAKESPEARE/30SHAKESPEARE-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Bottom right corner, a recently discovered, if tattered, depiction of the Shakespeare coat of arms.",
          "copyright": "Via the New England Historic Genealogical Society"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30SHAKESPEARE/30SHAKESPEARE-articleInline.jpg",
          "format": "Normal",
          "height": 292,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Bottom right corner, a recently discovered, if tattered, depiction of the Shakespeare coat of arms.",
          "copyright": "Via the New England Historic Genealogical Society"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30SHAKESPEARE/30SHAKESPEARE-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Bottom right corner, a recently discovered, if tattered, depiction of the Shakespeare coat of arms.",
          "copyright": "Via the New England Historic Genealogical Society"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30SHAKESPEARE/30SHAKESPEARE-superJumbo.jpg",
          "format": "superJumbo",
          "height": 2029,
          "width": 1318,
          "type": "image",
          "subtype": "photo",
          "caption": "Bottom right corner, a recently discovered, if tattered, depiction of the Shakespeare coat of arms.",
          "copyright": "Via the New England Historic Genealogical Society"
        }
      ],
      "short_url": "http://nyti.ms/29a7tdw"
    },
    {
      "section": "N.Y. / Region",
      "subsection": "",
      "title": "Travelers to Dominican Republic Lead New York City in Positive Zika Tests",
      "abstract": "Results from the latest tests were a stark reminder that many of the most popular destinations for New Yorkers in the Caribbean and Latin America pose a serious health risk.",
      "url": "http://www.nytimes.com/2016/06/30/nyregion/dominicans-lead-among-those-testing-positive-for-zika-in-new-york-city.html",
      "byline": "By MARC SANTORA",
      "item_type": "Article",
      "updated_date": "2016-06-29T16:08:41-04:00",
      "created_date": "2016-06-29T16:08:43-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Zika Virus",
        "Mosquitoes"
      ],
      "org_facet": [
        "Health and Mental Hygiene Department (NYC)"
      ],
      "per_facet": [
        "Bassett, Mary Travis"
      ],
      "geo_facet": [
        "Dominican Republic",
        "New York City"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/nyregion/30ZIKA/30ZIKA-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Pediatrics 2000, a clinic in Harlem where many of the patients have roots in the Dominican Republic, is working to educate patients about the risks of the Zika virus.",
          "copyright": "Joshua Bright for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/nyregion/30ZIKA/30ZIKA-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Pediatrics 2000, a clinic in Harlem where many of the patients have roots in the Dominican Republic, is working to educate patients about the risks of the Zika virus.",
          "copyright": "Joshua Bright for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/nyregion/30ZIKA/30ZIKA-articleInline.jpg",
          "format": "Normal",
          "height": 126,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Pediatrics 2000, a clinic in Harlem where many of the patients have roots in the Dominican Republic, is working to educate patients about the risks of the Zika virus.",
          "copyright": "Joshua Bright for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/nyregion/30ZIKA/30ZIKA-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Pediatrics 2000, a clinic in Harlem where many of the patients have roots in the Dominican Republic, is working to educate patients about the risks of the Zika virus.",
          "copyright": "Joshua Bright for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/nyregion/30ZIKA/30ZIKA-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1359,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Pediatrics 2000, a clinic in Harlem where many of the patients have roots in the Dominican Republic, is working to educate patients about the risks of the Zika virus.",
          "copyright": "Joshua Bright for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29a69Yp"
    },
    {
      "section": "Science",
      "subsection": "",
      "title": "Escape Tunnel, Dug by Hand, Is Found at Holocaust Massacre Site",
      "abstract": "In 1944, 80 captive Jews who were being forced to burn bodies at a Nazi extermination site attempted an escape.",
      "url": "http://www.nytimes.com/2016/06/29/science/holocaust-ponar-tunnel-lithuania.html",
      "byline": "By NICHOLAS ST. FLEUR",
      "item_type": "Article",
      "updated_date": "2016-06-29T01:52:24-04:00",
      "created_date": "2016-06-29T01:52:27-04:00",
      "published_date": "2016-06-29T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Holocaust and the Nazi Era",
        "Archaeology and Anthropology",
        "Prison Escapes",
        "Jews and Judaism"
      ],
      "org_facet": [],
      "per_facet": [],
      "geo_facet": [
        "Ponar (Lithuania)",
        "Lithuania",
        "Vilnius (Lithuania)"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29TUNNEL1/29TUNNEL1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Jewish forced laborers dug a tunnel from this holding pit near Vilnius, Lithuania, into the surrounding forest.",
          "copyright": "Ezra Wolfinger for NOVA"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29TUNNEL1/29TUNNEL1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Jewish forced laborers dug a tunnel from this holding pit near Vilnius, Lithuania, into the surrounding forest.",
          "copyright": "Ezra Wolfinger for NOVA"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29TUNNEL1/29TUNNEL1-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Jewish forced laborers dug a tunnel from this holding pit near Vilnius, Lithuania, into the surrounding forest.",
          "copyright": "Ezra Wolfinger for NOVA"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29TUNNEL1/29TUNNEL1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Jewish forced laborers dug a tunnel from this holding pit near Vilnius, Lithuania, into the surrounding forest.",
          "copyright": "Ezra Wolfinger for NOVA"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/29/world/29TUNNEL1/29TUNNEL1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Jewish forced laborers dug a tunnel from this holding pit near Vilnius, Lithuania, into the surrounding forest.",
          "copyright": "Ezra Wolfinger for NOVA"
        }
      ],
      "short_url": "http://nyti.ms/29e6t62"
    },
    {
      "section": "Arts",
      "subsection": "Television",
      "title": "Jessica Williams Is Leaving ‘The Daily Show’",
      "abstract": "Thursday’s episode will be the last for Ms. Williams, who joined the show in 2012.",
      "url": "http://www.nytimes.com/2016/06/30/arts/television/jessica-williams-is-leaving-the-daily-show.html",
      "byline": "By DAVE ITZKOFF",
      "item_type": "Article",
      "updated_date": "2016-06-29T13:48:46-04:00",
      "created_date": "2016-06-29T13:48:48-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Television",
        "The Daily Show with Trevor Noah (TV Program)"
      ],
      "org_facet": [],
      "per_facet": [
        "Williams, Jessica (1989- )"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30WILLIAMS/30WILLIAMS-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Jessica Williams",
          "copyright": "Comedy Central"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30WILLIAMS/30WILLIAMS-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Jessica Williams",
          "copyright": "Comedy Central"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30WILLIAMS/30WILLIAMS-articleInline.jpg",
          "format": "Normal",
          "height": 132,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Jessica Williams",
          "copyright": "Comedy Central"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30WILLIAMS/30WILLIAMS-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Jessica Williams",
          "copyright": "Comedy Central"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30WILLIAMS/30WILLIAMS-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1080,
          "width": 1558,
          "type": "image",
          "subtype": "photo",
          "caption": "Jessica Williams",
          "copyright": "Comedy Central"
        }
      ],
      "short_url": "http://nyti.ms/299CiPJ"
    },
    {
      "section": "Arts",
      "subsection": "Art & Design",
      "title": "Ronald Perelman Donates $75 Million for Arts Complex at World Trade Center Site",
      "abstract": "The long-stalled performing arts center, which will sit on an emotionally resonant and highly visited spot in the city, will be named for Mr. Perelman.",
      "url": "http://www.nytimes.com/2016/06/30/arts/design/ronald-perelman-donates-75-million-for-arts-complex-at-world-trade-center-site.html",
      "byline": "By MICHAEL COOPER",
      "item_type": "Article",
      "updated_date": "2016-06-29T18:17:31-04:00",
      "created_date": "2016-06-29T18:17:33-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Culture (Arts)",
        "World Trade Center (Manhattan, NY)",
        "Area Planning and Renewal",
        "September 11 (2001)"
      ],
      "org_facet": [],
      "per_facet": [
        "Perelman, Ronald O",
        "Bloomberg, Michael R",
        "Prince-Ramus, Joshua"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30DONOR-WEB/30DONOR-WEB-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "Ronald O. Perelman last year.",
          "copyright": "Dorothy Hong for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30DONOR-WEB/30DONOR-WEB-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Ronald O. Perelman last year.",
          "copyright": "Dorothy Hong for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30DONOR-WEB/30DONOR-WEB-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "Ronald O. Perelman last year.",
          "copyright": "Dorothy Hong for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30DONOR-WEB/30DONOR-WEB-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "Ronald O. Perelman last year.",
          "copyright": "Dorothy Hong for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/arts/30DONOR-WEB/30DONOR-WEB-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1366,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Ronald O. Perelman last year.",
          "copyright": "Dorothy Hong for The New York Times"
        }
      ],
      "short_url": "http://nyti.ms/29azlyl"
    },
    {
      "section": "Fashion & Style",
      "subsection": "",
      "title": "The Gang That Brought High Fashion to Hip-Hop",
      "abstract": "How the Lo Lifes, a crew of Polo-obsessed Brooklyn shoplifters, set hip-hop’s high-fashion obsession in motion.",
      "url": "http://www.nytimes.com/2016/06/30/fashion/lo-lifes-fashion-hip-hop.html",
      "byline": "By JON CARAMANICA",
      "item_type": "Article",
      "updated_date": "2016-06-29T11:06:43-04:00",
      "created_date": "2016-06-28T18:56:43-04:00",
      "published_date": "2016-06-30T00:00:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "Rap and Hip-Hop",
        "Fashion and Apparel",
        "Bury Me With the Lo On (Book)"
      ],
      "org_facet": [
        "Polo Ralph Lauren Corp",
        "Lo Lifes"
      ],
      "per_facet": [
        "Thirstin Howl the 3rd"
      ],
      "geo_facet": [
        "Brooklyn (NYC)"
      ],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2016/06/30/fashion/30LO-LIFES-WEB1/30LO-LIFES-WEB1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "A photo from the book “Bury Me With the Lo On,” a chronicle of the Brooklyn gang that had a Ralph Lauren Polo obsession.",
          "copyright": "Tom Gould"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/fashion/30LO-LIFES-WEB1/30LO-LIFES-WEB1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "A photo from the book “Bury Me With the Lo On,” a chronicle of the Brooklyn gang that had a Ralph Lauren Polo obsession.",
          "copyright": "Tom Gould"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/fashion/30LO-LIFES-WEB1/30LO-LIFES-WEB1-articleInline.jpg",
          "format": "Normal",
          "height": 190,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "A photo from the book “Bury Me With the Lo On,” a chronicle of the Brooklyn gang that had a Ralph Lauren Polo obsession.",
          "copyright": "Tom Gould"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/fashion/30LO-LIFES-WEB1/30LO-LIFES-WEB1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "A photo from the book “Bury Me With the Lo On,” a chronicle of the Brooklyn gang that had a Ralph Lauren Polo obsession.",
          "copyright": "Tom Gould"
        },
        {
          "url": "https://static01.nyt.com/images/2016/06/30/fashion/30LO-LIFES-WEB1/30LO-LIFES-WEB1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 2048,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "A photo from the book “Bury Me With the Lo On,” a chronicle of the Brooklyn gang that had a Ralph Lauren Polo obsession.",
          "copyright": "Tom Gould"
        }
      ],
      "short_url": "http://nyti.ms/29dlDbF"
    }
  ];
  */

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(news);
      }
    };
  }

})();
