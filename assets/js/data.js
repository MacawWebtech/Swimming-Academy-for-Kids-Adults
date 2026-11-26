/* Path prefix to the project root ('' on index.html, '../' inside /pages) */
window.WC_ROOT=(function(){var s=document.currentScript&&document.currentScript.getAttribute('src')||'';var i=s.indexOf('assets/js/');return i>0?s.slice(0,i):''})();
var WC_ROOT=window.WC_ROOT;
window.WavecrestData = {
  programs: [
    {id:'kids',title:'Kids Swimming',group:'Kids',level:'Beginner',age:'4–12 years',duration:'8 weeks',fee:'$180',desc:'A welcoming first step into the water, with confidence, floating, breathing and foundational movement.' ,img:WC_ROOT+'assets/images/programs/kids.jpg'},
    {id:'teens',title:'Teen Technique',group:'Teens',level:'Intermediate',age:'13–17 years',duration:'10 weeks',fee:'$220',desc:'Build stronger technique, coordination and endurance with focused coaching and structured practice.',img:WC_ROOT+'assets/images/programs/teens.jpg'},
    {id:'adult-beginner',title:'Adult Swim Foundations',group:'Adults',level:'Beginner',age:'18+ years',duration:'8 weeks',fee:'$195',desc:'A supportive, step-by-step route to water confidence, breathing control and independent swimming.',img:WC_ROOT+'assets/images/programs/adult-beginner.jpg'},
    {id:'stroke',title:'Stroke Development',group:'Adults',level:'Advanced',age:'16+ years',duration:'8 weeks',fee:'$240',desc:'Refine freestyle and backstroke mechanics, improve body position and build efficient movement.',img:WC_ROOT+'assets/images/programs/stroke.jpg'},
    {id:'competitive',title:'Performance Squad',group:'Teens',level:'Competitive',age:'12–18 years',duration:'12 weeks',fee:'$290',desc:'Structured squad sessions focused on pace, repeatable technique, turns and race preparation.',img:WC_ROOT+'assets/images/programs/competitive.jpg'},
    {id:'water-confidence',title:'Water Confidence',group:'Kids',level:'Beginner',age:'4–8 years',duration:'6 weeks',fee:'$160',desc:'Small, supportive sessions introducing water comfort, safe pool habits and foundational skills.',img:WC_ROOT+'assets/images/programs/water-confidence.jpg'},
    {id:'parent-baby',title:'Parent & Baby Splash',group:'Kids',level:'Beginner',age:'6 months–3 years',duration:'6 weeks',fee:'$140',desc:'Gentle, parent-led sessions with songs and play that introduce babies and toddlers to the water.',img:WC_ROOT+'assets/images/programs/parent-baby.jpg'},
    {id:'junior-stroke',title:'Junior Stroke Builder',group:'Kids',level:'Intermediate',age:'8–12 years',duration:'8 weeks',fee:'$200',desc:'Move beyond the basics with freestyle, backstroke and breathing rhythm in small skill groups.',img:WC_ROOT+'assets/images/programs/junior-stroke.jpg'},
    {id:'teen-beginner',title:'Teen Beginner Start',group:'Teens',level:'Beginner',age:'13–17 years',duration:'8 weeks',fee:'$185',desc:'A relaxed, judgement-free start for teens learning to swim, with confidence and safety built in.',img:WC_ROOT+'assets/images/programs/teen-beginner.jpg'},
    {id:'adult-fitness',title:'Adult Fitness Swim',group:'Adults',level:'Intermediate',age:'18+ years',duration:'10 weeks',fee:'$210',desc:'Coached lane sessions focused on stamina, efficient technique and low-impact fitness.',img:WC_ROOT+'assets/images/programs/adult-fitness.jpg'},
    {id:'junior-race',title:'Junior Race Squad',group:'Kids',level:'Competitive',age:'9–12 years',duration:'12 weeks',fee:'$260',desc:'An introduction to squad training with pacing, starts, turns and fun team-based sets.',img:WC_ROOT+'assets/images/programs/junior-race.jpg'},
    {id:'masters',title:'Masters Endurance Club',group:'Adults',level:'Competitive',age:'18+ years',duration:'12 weeks',fee:'$270',desc:'Structured training for adult swimmers building speed, distance and race-day confidence.',img:WC_ROOT+'assets/images/programs/masters.jpg'}
  ],
  coaches: [
    {name:'Olivia Bennett',role:'Lead Coach',specialty:'Stroke Development',experience:'8 years coaching',img:WC_ROOT+'assets/images/coaches/olivia-bennett.jpg',bio:'Focuses on clear technique cues and steady, individual skill progression.'},
    {name:'Marcus Reed',role:'Kids Coach',specialty:'Kids & Water Confidence',experience:'6 years coaching',img:WC_ROOT+'assets/images/coaches/marcus-reed.jpg',bio:'Creates encouraging sessions that help younger swimmers feel at ease in the water.'},
    {name:'Ava Mitchell',role:'Adult Skills Coach',specialty:'Adult Beginner Training',experience:'7 years coaching',img:WC_ROOT+'assets/images/coaches/ava-mitchell.jpg',bio:'Supports adult swimmers with practical goals and a calm learning environment.'},
    {name:'Noah Williams',role:'Performance Coach',specialty:'Competitive Swimming',experience:'9 years coaching',img:WC_ROOT+'assets/images/coaches/noah-williams.jpg',bio:'Works on repeatable stroke mechanics, pacing, turns and training consistency.'},
    {name:'Sofia Alvarez',role:'Water Safety Coach',specialty:'Water Safety & Lifesaving',experience:'10 years coaching',img:WC_ROOT+'assets/images/coaches/sofia-alvarez.jpg',bio:'Teaches practical water-safety skills, survival floating and confident pool behaviour for every age.'},
    {name:'Daniel Carter',role:'Youth Coach',specialty:'Teen Technique & Stamina',experience:'5 years coaching',img:WC_ROOT+'assets/images/coaches/daniel-carter.jpg',bio:'Helps teenage swimmers sharpen technique, build endurance and stay motivated through clear goals.'},
    {name:'Priya Nair',role:'Early Years Coach',specialty:'Parent & Baby Sessions',experience:'6 years coaching',img:WC_ROOT+'assets/images/coaches/priya-nair.jpg',bio:'Leads gentle, playful sessions that help babies, toddlers and parents enjoy the water together.'},
    {name:'Ethan Brooks',role:'Fitness Swim Coach',specialty:'Masters & Adult Fitness',experience:'8 years coaching',img:WC_ROOT+'assets/images/coaches/ethan-brooks.jpg',bio:'Designs structured lane sets for adults building stamina, speed and long-term swimming fitness.'}
  ],
  batches: [
    {day:'Monday',time:'07:00 – 08:00',program:'Adult Swim Foundations',group:'Adults',coach:'Ava Mitchell',seats:4,status:'Available'},
    {day:'Monday',time:'16:00 – 17:00',program:'Kids Swimming',group:'Kids',coach:'Marcus Reed',seats:3,status:'Limited'},
    {day:'Tuesday',time:'17:00 – 18:00',program:'Teen Technique',group:'Teens',coach:'Olivia Bennett',seats:6,status:'Available'},
    {day:'Wednesday',time:'07:00 – 08:00',program:'Stroke Development',group:'Adults',coach:'Olivia Bennett',seats:2,status:'Limited'},
    {day:'Thursday',time:'16:00 – 17:00',program:'Water Confidence',group:'Kids',coach:'Marcus Reed',seats:3,status:'Limited'},
    {day:'Friday',time:'17:30 – 19:00',program:'Performance Squad',group:'Teens',coach:'Noah Williams',seats:5,status:'Available'},
    {day:'Saturday',time:'09:00 – 10:00',program:'Kids Swimming',group:'Kids',coach:'Marcus Reed',seats:2,status:'Limited'},
    {day:'Sunday',time:'10:00 – 11:00',program:'Adult Swim Foundations',group:'Adults',coach:'Ava Mitchell',seats:7,status:'Available'}
  ],
  articles: [
    {title:'A confident first lesson starts before the water',category:'Beginner Guides',date:'12 Nov 2026',read:'4 min read',img:WC_ROOT+'assets/images/blog/confident-first-lesson.jpg',desc:'Simple ways to prepare for a first swimming session, from what to pack to setting a comfortable pace.'},
    {title:'Why breathing rhythm matters in every stroke',category:'Technique',date:'04 Nov 2026',read:'6 min read',img:WC_ROOT+'assets/images/blog/breathing-rhythm.jpg',desc:'Explore how relaxed exhalation and timing can support more efficient swimming.'},
    {title:'Building water confidence with small milestones',category:'Water Safety',date:'28 Oct 2026',read:'5 min read',img:WC_ROOT+'assets/images/blog/water-confidence-milestones.jpg',desc:'A practical look at gradual learning, encouragement and essential pool habits.'},
    {title:'How swimming can support an active routine',category:'Technique',date:'18 Oct 2026',read:'5 min read',img:WC_ROOT+'assets/images/blog/active-routine.jpg',desc:'Ideas for making regular swimming practice a sustainable part of everyday fitness.'},
    {title:'Understanding the foundations of each stroke',category:'Technique',date:'09 Oct 2026',read:'7 min read',img:WC_ROOT+'assets/images/blog/stroke-foundations.jpg',desc:'A beginner-friendly introduction to the movement patterns behind the main swimming strokes.'},
    {title:'Pool habits that help every swimmer feel prepared',category:'Water Safety',date:'01 Oct 2026',read:'4 min read',img:WC_ROOT+'assets/images/blog/pool-habits.jpg',desc:'Review simple poolside routines, listening skills and awareness before each session.'}
  ]
};
