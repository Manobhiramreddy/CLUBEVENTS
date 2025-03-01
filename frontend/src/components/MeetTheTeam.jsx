import React, { useState } from 'react';
import '../styles/MeetTheTeam.css';

const team = [
  {
    id: 1,
    name: "Dr. John Doe",
    role: "Chairperson",
    image: "/src/images/pk.png", // Replace with your image path
    children: [
      {
        id: 2,
        name: "Jane Smith",
        role: "Vice Chairperson",
        image: "/src/images/pk.png", // Replace with your image path
        children: [
          {
            id: 3,
            name: "Alice Brown",
            role: "Event Coordinator",
            image: "/src/images/pk.png", // Replace with your image path
          },
          {
            id: 4,
            name: "Bob White",
            role: "Technical Lead",
            image: "/src/images/pk.png", // Replace with your image path
          },
        ],
      },
      {
        id: 5,
        name: "Charlie Green",
        role: "Finance Head",
        image: "/src/images/pk.png", // Replace with your image path
        children: [
            {
              id: 6,
              name: "Alice Brown",
              role: "Event Coordinator",
              image: "/src/images/pk.png", // Replace with your image path
            },
            {
              id: 7,
              name: "Bob White",
              role: "Technical Lead",
              image: "/src/images/pk.png", // Replace with your image path
            },
          ]
      },
    ],
  },
];

const MeetTheTeam = () => {
  const [activeMember, setActiveMember] = useState(null);

  const renderTeam = (members) => {
    return (
      <div className="team-level">
        {members.map((member) => (
          <div
            key={member.id}
            className={`team-member ${activeMember === member.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveMember(member.id)}
            onMouseLeave={() => setActiveMember(null)}
          >
            <img src={member.image} alt={member.name} className="member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {member.children && <div className="children">{renderTeam(member.children)}</div>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="meet-the-team">
      <h1>Meet the Team</h1>
      <p>Explore the hierarchy structure of our committee and meet the amazing team members behind this event.</p>
      <div className="team-hierarchy">{renderTeam(team)}</div>
    </div>
  );
};

export default MeetTheTeam;
