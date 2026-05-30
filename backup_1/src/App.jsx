import React from "react";
import Card from "./component/Card";

const App = () => {
  const users = [
    {
      name: "Aarav Sharma",
      age: 22,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description: "Frontend developer who loves JavaScript and UI design.",
      isFollowed: true,
    },
    {
      name: "Priya Singh",
      age: 24,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "Creative graphic designer and photography enthusiast.",
      isFollowed: false,
    },
    {
      name: "Rohan Verma",
      age: 21,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      description: "College student learning full stack web development.",
      isFollowed: true,
    },
    {
      name: "Ananya Gupta",
      age: 23,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description: "Content writer who enjoys traveling and blogging.",
      isFollowed: false,
    },
    {
      name: "Kabir Mehta",
      age: 25,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      description: "Fitness trainer and part-time mobile app developer.",
      isFollowed: true,
    },
    {
      name: "Sneha Kapoor",
      age: 20,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      description: "UI/UX designer passionate about minimal interfaces.",
      isFollowed: false,
    },
    {
      name: "Vivaan Joshi",
      age: 26,
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
      description: "Backend developer working with Node.js and MongoDB.",
      isFollowed: true,
    },
    {
      name: "Ishita Roy",
      age: 22,
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
      description: "Digital marketer who enjoys social media campaigns.",
      isFollowed: false,
    },
    {
      name: "Aditya Malhotra",
      age: 27,
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
      description: "Software engineer and open-source contributor.",
      isFollowed: true,
    },
    {
      name: "Meera Nair",
      age: 23,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      description: "Fashion blogger with a love for modern styling.",
      isFollowed: false,
    },
    {
      name: "Arjun Patel",
      age: 24,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "React developer building interactive web apps.",
      isFollowed: true,
    },
    {
      name: "Diya Khanna",
      age: 21,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      description: "Student exploring AI and machine learning projects.",
      isFollowed: false,
    },
    {
      name: "Rahul Yadav",
      age: 28,
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
      description: "Tech enthusiast and cybersecurity learner.",
      isFollowed: true,
    },
    {
      name: "Kriti Sinha",
      age: 22,
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      description: "Photographer capturing street and nature moments.",
      isFollowed: false,
    },
    {
      name: "Yash Thakur",
      age: 25,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      description: "Full stack developer working on SaaS applications.",
      isFollowed: true,
    },
    {
      name: "Pooja Verma",
      age: 23,
      image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
      description: "Teacher who enjoys creating educational content.",
      isFollowed: false,
    },
    {
      name: "Manav Arora",
      age: 27,
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
      description: "Cloud engineer learning DevOps and AWS services.",
      isFollowed: true,
    },
    {
      name: "Riya Choudhary",
      age: 20,
      image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942",
      description: "Music lover and aspiring mobile app designer.",
      isFollowed: false,
    },
    {
      name: "Dev Malviya",
      age: 26,
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
      description: "Entrepreneur building innovative startup ideas.",
      isFollowed: true,
    },
    {
      name: "Tanya Bhatia",
      age: 24,
      image: "https://images.unsplash.com/photo-1521119989659-a83eee488004",
      description: "Video editor passionate about cinematic storytelling.",
      isFollowed: false,
    },
  ];

  return (
    <div className="cardData">
      {users.map((user) => {
        return (
          <div>
            <Card data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
