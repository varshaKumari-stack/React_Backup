import React, { useState } from "react";

import Card from "./components/Card";
const App = () => {
  const [postData, setPostData] = useState([
    {
      id: 1,
      name: "Virat Kohli",
      role: "Cricketer",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      likeCount: 0,
    },
    {
      id: 2,
      name: "Deepika Padukone",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      likeCount: 0,
    },
    {
      id: 3,
      name: "Elon Musk",
      role: "Entrepreneur",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      likeCount: 0,
    },
    {
      id: 4,
      name: "Priyanka Chopra",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      likeCount: 0,
    },
    {
      id: 5,
      name: "Cristiano Ronaldo",
      role: "Footballer",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      likeCount: 0,
    },
    {
      id: 6,
      name: "Taylor Swift",
      role: "Singer",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      likeCount: 0,
    },
    {
      id: 7,
      name: "MS Dhoni",
      role: "Cricketer",
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      likeCount: 0,
    },
    {
      id: 8,
      name: "Zendaya",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/8.jpg",
      likeCount: 0,
    },
    {
      id: 9,
      name: "Shah Rukh Khan",
      role: "Actor",
      img: "https://randomuser.me/api/portraits/men/9.jpg",
      likeCount: 0,
    },
    {
      id: 10,
      name: "Selena Gomez",
      role: "Singer",
      img: "https://randomuser.me/api/portraits/women/10.jpg",
      likeCount: 0,
    },
    {
      id: 11,
      name: "Ranbir Kapoor",
      role: "Actor",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      likeCount: 0,
    },
    {
      id: 12,
      name: "Alia Bhatt",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      likeCount: 0,
    },
    {
      id: 13,
      name: "Rohit Sharma",
      role: "Cricketer",
      img: "https://randomuser.me/api/portraits/men/13.jpg",
      likeCount: 0,
    },
    {
      id: 14,
      name: "Kriti Sanon",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/14.jpg",
      likeCount: 0,
    },
    {
      id: 15,
      name: "Tom Holland",
      role: "Actor",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      likeCount: 0,
    },
    {
      id: 16,
      name: "Emma Watson",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/16.jpg",
      likeCount: 0,
    },
    {
      id: 17,
      name: "Hardik Pandya",
      role: "Cricketer",
      img: "https://randomuser.me/api/portraits/men/17.jpg",
      likeCount: 0,
    },
    {
      id: 18,
      name: "Kiara Advani",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/18.jpg",
      likeCount: 0,
    },
    {
      id: 19,
      name: "Leonardo DiCaprio",
      role: "Actor",
      img: "https://randomuser.me/api/portraits/men/19.jpg",
      likeCount: 0,
    },
    {
      id: 20,
      name: "Scarlett Johansson",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/20.jpg",
      likeCount: 0,
    },
    {
      id: 21,
      name: "KL Rahul",
      role: "Cricketer",
      img: "https://randomuser.me/api/portraits/men/21.jpg",
      likeCount: 0,
    },
    {
      id: 22,
      name: "Anushka Sharma",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      likeCount: 0,
    },
    {
      id: 23,
      name: "Chris Hemsworth",
      role: "Actor",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      likeCount: 0,
    },
    {
      id: 24,
      name: "Jennifer Lawrence",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/24.jpg",
      likeCount: 0,
    },
    {
      id: 25,
      name: "Jasprit Bumrah",
      role: "Cricketer",
      img: "https://randomuser.me/api/portraits/men/25.jpg",
      likeCount: 0,
    },
    {
      id: 26,
      name: "Shraddha Kapoor",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/26.jpg",
      likeCount: 0,
    },
    {
      id: 27,
      name: "Robert Downey Jr.",
      role: "Actor",
      img: "https://randomuser.me/api/portraits/men/27.jpg",
      likeCount: 0,
    },
    {
      id: 28,
      name: "Margot Robbie",
      role: "Actress",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
      likeCount: 0,
    },
    {
      id: 29,
      name: "Suryakumar Yadav",
      role: "Cricketer",
      img: "https://randomuser.me/api/portraits/men/29.jpg",
      likeCount: 0,
    },
    {
      id: 30,
      name: "Dua Lipa",
      role: "Singer",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
      likeCount: 0,
    },
  ]);
  const like = (id) => {
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likeCount: item.likeCount + 1 } : item,
      ),
    );
  };
  const disLike = (id) => {
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id && item.likeCount > 0
          ? { ...item, likeCount: item.likeCount - 1 }
          : item,
      ),
    );
  };
  return (
    <div>
      <Card postData={postData} like={like} disLike={disLike} />
    </div>
  );
};

export default App;
