import React from 'react';
import './Team.css';
import team from './team1.jpg';
import AnimatedPage from '../What we do/Animation/AnimatedPage';
import ZoomInSection from '../../components/Transitions/ZoomIn/ZoomIn';

const Table = () => {
  const data = [
    { name: 'Hoosamuddin S. Bandukwala', position: 'CEO', department: 'Executive', linkedin: <a className='row-link' href="https://www.linkedin.com/in/hoosamuddin-s-bandukwala-a7170648?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> Hoosamuddin S. Bandukwala </a> },
    { name: 'Shahid Kamal Siddique', position: 'Finance/Regulatory Affairs Manager', department: 'Finance', linkedin: <a className='row-link' href="https://www.linkedin.com/in/shahidkamalsiddiqui-gs1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> Shahid Kamal Siddique </a> },
    { name: 'Mohammad Arsalan Mughal', position: 'Lead Industry Engagement', department: 'Marketing', linkedin: <a className='row-link' href="https://www.linkedin.com/in/mohammad-arsalan-mughal-b0986aa6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> Mohammad Arsalan Mughal </a> },
    { name: 'Hassan Ali', position: 'Recovery Officer', department: 'Finance', linkedin: <a className='row-link' href="https://www.linkedin.com/in/hassan-ali-756a28193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> Hassan Ali </a> },
    { name: 'Zayan Malick', position: 'Assistant Data Quality', department: 'I.T', linkedin: <a className='row-link' href="https://www.linkedin.com/in/zayanmalick15?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> Zayan Malick </a> },
    { name: 'Faiq Ali', position: 'Membership Support', department: 'Member Support', linkedin: <a className='row-link' href="https://www.linkedin.com/in/faiq-ali-64a340220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> Faiq Ali </a> },
    { name: 'Ayesha Rashid', position: 'Marketing Assistant', department: 'Marketing', linkedin: <a className='row-link' href="https://www.linkedin.com/in/ayesharashid5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> Ayesha Rashid </a> },
  ];

  return (
    <div className="main">
      <div className="Team-container" style={{ backgroundImage: `url(${team})` }}>
        <div className="Team-overlay"></div>
        <div className="content-Team">
          <AnimatedPage direction="Righttoleft">
            <h1>Meet Our Team</h1>
          </AnimatedPage>
        </div>
      </div>
      <ZoomInSection>
        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Linkedin</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.position}</td>
                  <td>{row.department}</td>

                  <td className='row'>{row.linkedin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ZoomInSection>
    </div>
  );
};

export default Table;