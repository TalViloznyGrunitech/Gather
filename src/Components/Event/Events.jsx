import React from "react";
import Event from "./Event";
// import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { db } from "../FireBase/FireBase";



// async function joinEvent(eventId, eventData) {
//   const user = auth.currentUser;
//   if (!user) {
//     console.log("User not logged in");
//     return;
//   }

//   try {
//     // Reference to the document for this joined event under the user
//     const joinedEventRef = doc(db, "users", user.uid, "joinedEvents", eventId);

//     // Save event data or just a flag
//     await setDoc(joinedEventRef, eventData);

//     console.log("Event joined successfully!");
//   } catch (error) {
//     console.error("Error joining event: ", error);
//   }
// }



export const events = [
  {
    id: "tech-1",
    title: "AI Conference",
    category: "Technology",
    icon: "💻",
    views: 120,
    name: "AI Innovations Summit",
    dateTimeLabel: "2024-02-10 at 9:00 AM",
    location: "Tel Aviv",
    description:
      "Discover the latest advancements in AI technology and network with industry leaders.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
  },
  {
    id: "tech-2",
    title: "Cloud Computing Workshop",
    category: "Technology",
    icon: "💻",
    views: 85,
    name: "Mastering Cloud Solutions",
    dateTimeLabel: "2024-03-05 at 1:00 PM",
    location: "Haifa",
    description:
      "Hands-on workshop to learn cloud computing essentials and best practices.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
  },
  {
    id: "tech-3",
    title: "Cybersecurity Meetup",
    category: "Technology",
    icon: "💻",
    views: 60,
    name: "Securing the Future",
    dateTimeLabel: "2024-04-12 at 6:00 PM",
    location: "Jerusalem",
    description:
      "Join cybersecurity experts to discuss the latest trends and challenges in the field.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
  },
  {
    id: "tech-4",
    title: "Blockchain Expo",
    category: "Technology",
    icon: "💻",
    views: 95,
    name: "Blockchain Revolution",
    dateTimeLabel: "2024-05-20 at 10:00 AM",
    location: "Center",
    description:
      "Explore the potential of blockchain technology in various industries.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
  },
  {
    id: "tech-5",
    title: "Tech Startup Showcase",
    category: "Technology",
    icon: "💻",
    views: 110,
    name: "Innovators of Tomorrow",
    dateTimeLabel: "2024-06-15 at 3:00 PM",
    location: "Coastal",
    description:
      "Meet the brightest minds behind the most promising tech startups.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
  },
  {
    id: "photo-1",
    title: "Urban Photography Walk",
    category: "Photography",
    icon: "📸",
    views: 45,
    name: "Cityscapes Through the Lens",
    dateTimeLabel: "2024-02-18 at 8:00 AM",
    location: "Tel Aviv",
    description:
      "Capture the beauty of urban landscapes with fellow photography enthusiasts.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
  },
  {
    id: "photo-2",
    title: "Nature Photography Workshop",
    category: "Photography",
    icon: "📸",
    views: 30,
    name: "Into the Wild",
    dateTimeLabel: "2024-03-22 at 7:00 AM",
    location: "Galilee",
    description:
      "Learn techniques for capturing stunning nature shots in a breathtaking setting.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
  },
  {
    id: "photo-3",
    title: "Portrait Photography Session",
    category: "Photography",
    icon: "📸",
    views: 50,
    name: "Faces of the World",
    dateTimeLabel: "2024-04-10 at 2:00 PM",
    location: "Jerusalem",
    description:
      "Enhance your portrait photography skills with expert guidance.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
  },
  {
    id: "photo-4",
    title: "Night Photography Adventure",
    category: "Photography",
    icon: "📸",
    views: 40,
    name: "Stars and City Lights",
    dateTimeLabel: "2024-05-05 at 9:00 PM",
    location: "Negev",
    description:
      "Discover the art of night photography in a vibrant urban setting.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
  },
  {
    id: "sport-1",
    title: "Weekend Soccer League",
    category: "Sports",
    icon: "⚽",
    views: 75,
    name: "Kickoff Challenge",
    dateTimeLabel: "2024-02-25 at 4:00 PM",
    location: "Haifa",
    description:
      "Join a friendly soccer match and connect with local sports enthusiasts.",
    titleClassName: "Sport",
    categoryClassName: "SportsCategory",
  },
  {
    id: "sport-2",
    title: "Basketball Tournament",
    category: "Sports",
    icon: "🏀",
    views: 90,
    name: "Hoops for All",
    dateTimeLabel: "2024-03-15 at 10:00 AM",
    location: "Jerusalem",
    description:
      "Compete in a fun and energetic basketball tournament for all skill levels.",
    titleClassName: "Sport",
    categoryClassName: "SportsCategory",
  },
  {
    id: "sport-3",
    title: "Marathon Training Session",
    category: "Sports",
    icon: "🏃",
    views: 65,
    name: "Run to Success",
    dateTimeLabel: "2024-04-08 at 6:00 AM",
    location: "Tel Aviv",
    description:
      "Prepare for your next marathon with expert tips and group training.",
    titleClassName: "Sport",
    categoryClassName: "SportsCategory",
  },
  {
    id: "business-1",
    title: "Startup Pitch Night",
    category: "Business",
    icon: "💼",
    views: 55,
    name: "Innovate and Connect",
    dateTimeLabel: "2024-02-12 at 6:00 PM",
    location: "Center",
    description:
      "Pitch your startup idea to investors and network with entrepreneurs.",
    titleClassName: "Business",
    categoryClassName: "BusinessCategory",
  },
  {
    id: "business-2",
    title: "Leadership Workshop",
    category: "Business",
    icon: "💼",
    views: 70,
    name: "Leading with Impact",
    dateTimeLabel: "2024-03-20 at 9:00 AM",
    location: "Tel Aviv",
    description:
      "Develop leadership skills to inspire and drive success in your organization.",
    titleClassName: "Business",
    categoryClassName: "BusinessCategory",
  },
  {
    id: "business-3",
    title: "Networking Breakfast",
    category: "Business",
    icon: "💼",
    views: 45,
    name: "Morning Connections",
    dateTimeLabel: "2024-04-05 at 8:00 AM",
    location: "Haifa",
    description: "Start your day with meaningful connections over breakfast.",
    titleClassName: "Business",
    categoryClassName: "BusinessCategory",
  },
  {
    id: "health-1",
    title: "Yoga Retreat",
    category: "Health",
    icon: "🧘",
    views: 35,
    name: "Mind and Body Harmony",
    dateTimeLabel: "2024-02-28 at 7:00 AM",
    location: "Galilee",
    description: "Rejuvenate your mind and body with a peaceful yoga retreat.",
    titleClassName: "Health",
    categoryClassName: "HealthCategory",
  },
  {
    id: "health-2",
    title: "Nutrition Workshop",
    category: "Health",
    icon: "🧘",
    views: 40,
    name: "Healthy Eating Made Easy",
    dateTimeLabel: "2024-03-18 at 11:00 AM",
    location: "Jerusalem",
    description:
      "Learn practical tips for maintaining a balanced and nutritious diet.",
    titleClassName: "Health",
    categoryClassName: "HealthCategory",
  },
  {
    id: "health-3",
    title: "Mental Health Seminar",
    category: "Health",
    icon: "🧘",
    views: 50,
    name: "Wellness for the Mind",
    dateTimeLabel: "2024-04-22 at 2:00 PM",
    location: "Tel Aviv",
    description:
      "Explore strategies for improving mental health and well-being.",
    titleClassName: "Health",
    categoryClassName: "HealthCategory",
  },
  {
    id: "music-1",
    title: "Jazz Night",
    category: "Music",
    icon: "🎶",
    views: 80,
    name: "Smooth Jazz Evening",
    dateTimeLabel: "2024-02-14 at 8:00 PM",
    location: "Jerusalem",
    description:
      "Enjoy a night of live jazz music performed by talented artists.",
    titleClassName: "Music",
    categoryClassName: "MusicCategory",
  },
  {
    id: "art-1",
    title: "Art Exhibition",
    category: "Art",
    icon: "🎨",
    views: 60,
    name: "Colors of the World",
    dateTimeLabel: "2024-03-10 at 5:00 PM",
    location: "Tel Aviv",
    description:
      "Experience a diverse collection of artwork from around the globe.",
    titleClassName: "Art",
    categoryClassName: "ArtCategory",
  },
  {
    id: "fun-1",
    title: "Comedy Night",
    category: "Fun",
    icon: "🎉",
    views: 90,
    name: "Laugh Out Loud",
    dateTimeLabel: "2024-02-20 at 7:00 PM",
    location: "Haifa",
    description: "Unwind with an evening of laughter and entertainment.",
    titleClassName: "Fun",
    categoryClassName: "FunCategory",
  },
  {
    id: "fun-2",
    title: "Board Game Marathon",
    category: "Fun",
    icon: "🎉",
    views: 70,
    name: "Game On!",
    dateTimeLabel: "2024-03-25 at 1:00 PM",
    location: "Jerusalem",
    description: "Challenge your friends to a day of board games and fun.",
    titleClassName: "Fun",
    categoryClassName: "FunCategory",
  },
  {
    id: "fun-3",
    title: "Karaoke Night",
    category: "Fun",
    icon: "🎉",
    views: 85,
    name: "Sing Your Heart Out",
    dateTimeLabel: "2024-04-15 at 9:00 PM",
    location: "Tel Aviv",
    description:
      "Show off your singing skills in a lively and supportive atmosphere.",
    titleClassName: "Fun",
    categoryClassName: "FunCategory",
  },
  {
    id: "night-life-1",
    title: "DJ Party",
    category: "Night Life",
    icon: "🌙",
    views: 100,
    name: "Beats Under the Stars",
    dateTimeLabel: "2024-02-17 at 10:00 PM",
    location: "Coastal",
    description: "Dance the night away with electrifying beats from top DJs.",
    titleClassName: "NightLife",
    categoryClassName: "NightLifeCategory",
  },
  {
    id: "night-life-2",
    title: "Cocktail Mixer",
    category: "Night Life",
    icon: "🌙",
    views: 75,
    name: "Sip and Socialize",
    dateTimeLabel: "2024-03-12 at 8:00 PM",
    location: "Tel Aviv",
    description:
      "Enjoy handcrafted cocktails and meet new people in a chic setting.",
    titleClassName: "NightLife",
    categoryClassName: "NightLifeCategory",
  },
  {
    id: "night-life-3",
    title: "Live Music Night",
    category: "Night Life",
    icon: "🌙",
    views: 95,
    name: "Rhythms of the Night",
    dateTimeLabel: "2024-04-20 at 9:00 PM",
    location: "Jerusalem",
    description:
      "Experience an unforgettable night of live music performances.",
    titleClassName: "NightLife",
    categoryClassName: "NightLifeCategory",
  },
];

export default function Events() {
  return (
    <>
      <div className="Events">
        {events.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}
