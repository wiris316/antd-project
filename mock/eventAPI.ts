/** 
  * Mock event data for event cards.
**/

const events = [

  { title: 'EVENT #1', date: '09/13/23', location: 'New York City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Traditur, inquit, ab Epicuro ratio neglegendi doloris.', image: 'URL1' },

  { title: 'EVENT #2', date: '09/14/23', location: 'Los Angeles', description: 'Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. An hoc usque quaque, aliter in vita?', image: 'URL2' },

  { title: 'EVENT #3', date: '09/15/23', location: 'Los Angeles', description: 'In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. ', image: 'URL3' },
  
  { title: 'EVENT #4', date: '09/16/23', location: 'New York City', description: 'Invidiosum nomen est, infame, suspectum. An hoc usque quaque, aliter in vita?', image: 'URL4' },
  
  { title: 'EVENT #5', date: '09/17/23', location: 'Tokyo', description: 'Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest.', image: 'URL5' },
  
  { title: 'EVENT #6', date: '09/18/23', location: 'Tokyo', description: 'Sed utrum hortandus es nobis, Luci, inquit, an etiam tua sponte propensus es? Quod cum ille dixisset et satis disputatum videretur, in oppidum ad Pomponium perreximus omnes.', image: 'URL6' },
  
  { title: 'EVENT #7', date: '09/18/23', location: 'Seattle', description: 'An hoc usque quaque, aliter in vita? Habent enim et bene longam et satis litigiosam disputationem. Nos paucis ad haec additis finem faciamus aliquando; Quamquam id quidem licebit iis existimare, qui legerint.', image: 'URL6' },
  
  { title: 'EVENT #8', date: '09/18/23', location: 'Chicago', description: 'Eamne rationem igitur sequere, qua tecum ipse et cum tuis utare, profiteri et in medium proferre non audeas? Atque ut a corpore ordiar, videsne ut, si quae in membris prava aut debilitata aut inminuta sint, occultent homines?', image: 'URL6' },
  
  { title: 'EVENT #9', date: '09/18/23', location: 'Seattle', description: 'Summum autem bonum si ignoretur, vivendi rationem ignorari necesse est, ex quo tantus error consequitur, ut quem in portum se recipiant scire non possint. Quid, quod homines infima fortuna, nulla spe rerum gerendarum, opifices denique delectantur historia?', image: 'URL6' },
  
  { title: 'EVENT #10', date: '09/18/23', location: 'Chicago', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi quidem Homerus huius modi quiddam vidisse videatur in ii', image: 'URL6' },
  
  { title: 'EVENT #11', date: '09/18/23', location: 'Seattle', description: 'Summum autem bonum si ignoretur, vivendi rationem ignorari necesse est, ex quo tantus error consequitur, ut quem in portum se recipiant scire non possint. ', image: 'URL6' },
  
  { title: 'EVENT #12', date: '09/18/23', location: 'Seattle', description: 'Cum efficere non possit ut cuiquam, qui ipse sibi notus sit', image: 'URL6' },

];



export default {
  'GET /api/v1/queryEventList': (req: any, res: any) => {
    res.json({
      success: true,
      data: events,
      errorCode: 0,
    });
  },
  'PUT /api/v1/Event/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
