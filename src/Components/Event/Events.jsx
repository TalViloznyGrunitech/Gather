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
    title: "Tech Event",
    category: "Technology",
    icon: "💻",
    views: 24,
    name: "Tech Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join us for an evening of networking with fellow tech professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
  },
  {
    id: "tech-2",
    title: "Tech Event",
    category: "Technology",
    icon: "💻",
    views: 24,
    name: "Tech Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join us for an evening of networking with fellow tech professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
 
  },
  {
    id: "tech-3",
    title: "Tech Event",
    category: "Technology",
    icon: "💻",
    views: 24,
    name: "Tech Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join us for an evening of networking with fellow tech professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
    
  },
  {
    id: "tech-4",
    title: "Tech Event",
    category: "Technology",
    icon: "💻",
    views: 24,
    name: "Tech Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join us for an evening of networking with fellow tech professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
    
  },
  {
    id: "tech-5",
    title: "Tech Event",
    category: "Technology",
    icon: "💻",
    views: 24,
    name: "Tech Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join us for an evening of networking with fellow tech professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Tech",
    categoryClassName: "TechnologyCategory",
   
  },
  {
    id: "photo-1",
    title: "Photo Walk",
    category: "Photography",
    icon: "📸",
    views: 5,
    name: "Photography Walk",
    dateTimeLabel: "2024-01-18 at 10:00 AM",
    location: "Haifa Central Park",
    description:
      "Explore the city through your lens with fellow photography enthusiasts. All skill levels welcome.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
  },
  
  {
    id: "photo-2",
    title: "Photo Walk",
    category: "Photography",
    icon: "📸",
    views: 5,
    name: "Photography Walk",
    dateTimeLabel: "2024-01-18 at 10:00 AM",
    location: "Tel Aviv Beach",
    description:
      "Explore the city through your lens with fellow photography enthusiasts. All skill levels welcome.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
   
  },
  {
    id: "photo-3",
    title: "Photo Walk",
    category: "Photography",
    icon: "📸",
    views: 5,
    name: "Photography Walk",
    dateTimeLabel: "2024-01-18 at 10:00 AM",
    location: "Jerusalem Old City",
    description:
      "Explore the city through your lens with fellow photography enthusiasts. All skill levels welcome.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
  },
  {
    id: "photo-4",
    title: "Photo Walk",
    category: "Photography",
    icon: "📸",
    views: 5,
    name: "Photography Walk",
    dateTimeLabel: "2024-01-18 at 10:00 AM",
    location: "Haifa Central Park",
    description:
      "Explore the city through your lens with fellow photography enthusiasts. All skill levels welcome.",
    titleClassName: "Photo",
    categoryClassName: "PhotographyCategory",
  },
  {
    id: "sport-1",
    title: "Sport Event",
    category: "Sports",
    icon: "⚽",
    views: 30,
    name: "After-Work Soccer",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Jerusalem Community Field",
    description:
      "Unwind after a long day with a casual game of 5v5 soccer followed by refreshments. Open to all skill levels—just bring your sneakers and good vibes! Great for meeting new people who love to stay active.",
    titleClassName: "Sport",
    categoryClassName: "SportsCategory",
  },
  {
    id: "sport-2",
    title: "Sport Event",
    category: "Sports",
    icon: "⚽",
    views: 30,
    name: "After-Work Soccer",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Jerusalem Community Field",
    description:
      "Unwind after a long day with a casual game of 5v5 soccer followed by refreshments. Open to all skill levels—just bring your sneakers and good vibes! Great for meeting new people who love to stay active.",
    titleClassName: "Sport",
    categoryClassName: "SportsCategory",
  },
  {
    id: "sport-3",
    title: "Sport Event",
    category: "Sports",
    icon: "⚽",
    views: 30,
    name: "After-Work Soccer",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Jerusalem Community Field",
    description:
      "Unwind after a long day with a casual game of 5v5 soccer followed by refreshments. Open to all skill levels—just bring your sneakers and good vibes! Great for meeting new people who love to stay active.",
    titleClassName: "Sport",
    categoryClassName: "SportsCategory",
  },
  {
    id: "business-1",
    title: "Business Event",
    category: "Business",
    icon: "💼",
    views: 12,
    name: "Startup Pitch & Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join entrepreneurs, investors, and professionals for a night of startup pitches, feedback sessions, and networking. Perfect for anyone building something new or looking to connect in the local startup scene.",
    titleClassName: "Business",
    categoryClassName: "BusinessCategory",
  },
  {
    id: "business-2",
    title: "Business Event",
    category: "Business",
    icon: "💼",
    views: 12,
    name: "Startup Pitch & Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join entrepreneurs, investors, and professionals for a night of startup pitches, feedback sessions, and networking. Perfect for anyone building something new or looking to connect in the local startup scene.",
    titleClassName: "Business",
    categoryClassName: "BusinessCategory",
  },
  {
    id: "business-3",
    title: "Business Event",
    category: "Business",
    icon: "💼",
    views: 12,
    name: "Startup Pitch & Networking Night",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Tel Aviv Tech Hub",
    description:
      "Join entrepreneurs, investors, and professionals for a night of startup pitches, feedback sessions, and networking. Perfect for anyone building something new or looking to connect in the local startup scene.",
    titleClassName: "Business",
    categoryClassName: "BusinessCategory",
  },
  
  

  {
    id: "health-3",
    title: "Health Event",
    category: "Health",
    icon: "🧘",
    views: 12,
    name: "Health Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "North Health Center",
    description:
      "Join us for an evening of networking with fellow health professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Health",
    categoryClassName: "HealthCategory",
  },
  {
    id: "health-2",
    title: "Health Event",
    category: "Health",
    icon: "🧘",
    views: 12,
    name: "Health Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "North Health Center",
    description:
      "Join us for an evening of networking with fellow health professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Health",
    categoryClassName: "HealthCategory",
  },
  {
    id: "health-1",
    title: "Health Event",
    category: "Health",
    icon: "🧘",
    views: 12,
    name: "Health Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "North Health Center",
    description:
      "Join us for an evening of networking with fellow health professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Health",
    categoryClassName: "HealthCategory",
  },
  {
    id: "music-1",
    title: "Music Event",
    category: "Music",
    icon: "🎶",
    views: 12,
    name: "Music Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "South Music Center",
    description:
      "Join us for an evening of networking with fellow music professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Music",
    categoryClassName: "MusicCategory",
  },
  {
    id: "art-1",
    title: "Art Event",
    category: "Art",
    icon: "🎨",
    views: 12,
    name: "Art Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Coastal Art Gallery",
    description:
      "Join us for an evening of networking with fellow art professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Art",
    categoryClassName: "ArtCategory",
  },
  {
    id: "fun-1",
    title: "Fun Event",
    category: "Fun",
    icon: "🎉",
    views: 12,
    name: "Fun Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Galilee Fun Center",
    description:
      "Join us for an evening of networking with fellow fun professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Fun",
    categoryClassName: "FunCategory",
  },
  {
    id: "fun-2",
    title: "Fun Event",
    category: "Fun",
    icon: "🎉",
    views: 12,
    name: "Fun Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Galilee Fun Center",
    description:
      "Join us for an evening of networking with fellow fun professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Fun",
    categoryClassName: "FunCategory",
  },
  {
    id: "fun-3",
    title: "Fun Event",
    category: "Fun",
    icon: "🎉",
    views: 12,
    name: "Fun Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Galilee Fun Center",
    description:
      "Join us for an evening of networking with fellow fun professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Fun",
    categoryClassName: "FunCategory",
  },
  {
    id: "night-life-1",
    title: "Night Life Event",
    category: "Night Life",
    icon: "🌙",
    views: 12,
    name: "Night Life Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Negev Night Club",
    description:
      "Join us for an evening of networking with fellow night life professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Night Life",
    categoryClassName: "NightLifeCategory",
  },
  {
    id: "night-life-2",
    title: "Night Life Event",
    category: "Night Life",
    icon: "🌙",
    views: 12,
    name: "Night Life Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Negev Night Club",
    description:
      "Join us for an evening of networking with fellow night life professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Night Life",
    categoryClassName: "NightLifeCategory",
  },
  {
    id: "night-life-3",
    title: "Night Life Event",
    category: "Night Life",
    icon: "🌙",
    views: 12,
    name: "Night Life Event",
    dateTimeLabel: "2024-01-15 at 7:00 PM",
    location: "Negev Night Club",
    description:
      "Join us for an evening of networking with fellow night life professionals. Great opportunity to share ideas and make connections.",
    titleClassName: "Night Life",
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