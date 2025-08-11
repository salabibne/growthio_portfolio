

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';


import { teamData } from '../Data/TeamData'
const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl md:max-w-6xl lg:max-w-7xl  mt-36 mb-72 md:mb-12 lg:mb-12 mx-auto  px-2 md:px-4 py-8">
      {/* Introduction Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our <span className='text-indigo-600'>Team</span></h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our talented team is dedicated to building innovative and user-centric solutions.
        </p>
      </div>

      {/* Team Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <Card
              key={member.id}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 "
              cover={<img  alt={member.name} src={member.image} className="h-64 object-contain md:object-contain  md:mt-0 lg-mt-0" />}
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer"> 
                      <GithubOutlined className="text-2xl text-gray-600 hover:text-gray-800" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedinOutlined className="text-2xl text-gray-600 hover:text-gray-800" />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                      <FacebookOutlined className="text-2xl text-gray-600 hover:text-gray-800" />
                    </a>
                  )}
                </div>
                <Button
                  type="primary"
                  className="mt-4"
                  onClick={() => navigate(`/team/${member.name.toLowerCase().replace(' ', '-')}`)}
                >
                  Know More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;






