import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  education = [
    { degree: 'B.Tech in Computer Engineering', institution: 'Avanthi’s St. Theressa Institute of Engineering & Technology, JNTUK', cgpa: '6.76' },
    { degree: 'Diploma in Computer Science', institution: 'Sir C. R. Reddy College of Polytechnic, SBTET', percentage: '67.69%' },
    { degree: 'SSC', institution: 'Siddartha High School', gpa: '5.5' }
  ];

  skills = [
    { category: 'Web Development', description: 'Proficient in HTML, CSS, and Bootstrap for building responsive and engaging web pages.' },
    { category: 'Front-End Frameworks', description: 'Skilled in JavaScript and Angular for creating interactive user interfaces.' },
    { category: 'UI/UX Design', description: 'Experienced in designing user-friendly interfaces with a focus on accessibility and user experience.' },
    { category: 'Version Control', description: 'Familiar with Git for collaborative development and version control.' },
    { category: 'Game Testing', description: 'Evaluated various game genres, identified bugs, and provided detailed feedback for improvements.' },
    { category: 'UiPath Tool', description: 'Expertise in automation and workflow management from NIT Data Training.' },
    { category: 'Additional Tools', description: 'Knowledgeable in Adobe Photoshop and Adobe Dreamweaver.' }
  ];

  experience = [
    {
      role: 'UI Developer Intern',
      company: 'X-Yug Technology Pvt Ltd (Hyderabad, India)',
      responsibilities: [
        'Developed responsive websites with Angular 16, HTML5, CSS3, Bootstrap 5.3.1, and TypeScript.',
        'Projects included Matrika, Gold Bharath, Novia, Glory, Diamond Dreams, and an Employee website.'
      ]
    },
    {
      role: 'E.H.S Data Entry Operator',
      company: 'B.S. R Laser ENT & Dental Care Hospital (Vizianagaram, India)',
      responsibilities: [
        'Managed and updated patient treatment details on the E.H.S Government website, improving data management efficiency.'
      ]
    },
    {
      role: 'Computer Hardware Technician',
      company: 'Micro Chip Computer (Eluru, India)',
      responsibilities: [
        'Hands-on experience in hardware assembly, maintenance, and troubleshooting.'
      ]
    },
    {
      role: 'YouTube Channel Creator',
      company: 'Pavankalyan_Wolf',
      responsibilities: [
        'Developed and managed content for a YouTube channel, focusing on audience engagement and channel growth strategies.'
      ]
    },
    {
      role: 'Freelance Game Tester',
      company: 'Game Tester & Antidote',
      responsibilities: [
        'Tested multiple game genres, assessed gameplay mechanics, documented issues, and collaborated with teams to enhance the gaming experience.'
      ]
    }
  ];

  profileDescription = 'As an aspiring UI Developer with a robust foundation in web development and game testing, I am passionate about crafting responsive, visually appealing websites and enhancing user experiences through creative design and problem-solving. My journey has equipped me with the skills to create dynamic user interfaces and evaluate game functionality, all while maintaining a commitment to continuous learning and growth.';
}
