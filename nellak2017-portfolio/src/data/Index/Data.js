/* eslint-disable max-lines */
import Logo from '../../../public/Nellak2017-Logo.jpg'
import html from '../../../public/html5.svg'
import javascript from '../../../public/javascript.svg'
import css from '../../../public/css3.svg'
import python from '../../../public/python.svg'
import next from '../../../public/next-js.svg'
import git from '../../../public/git.svg'
import github from '../../../public/github.png'
import go from '../../../public/go.svg'
import redux from '../../../public/redux.svg'
import postgres from '../../../public/PostgreSQL_logo.svg'
import jest from '../../../public/jest.svg'
import fastCheck from '../../../public/mug.svg'
import rescript from '../../../public/rescript-brandmark.png'
import docker from '../../../public/Docker_logo.webp'
import nginx from '../../../public/nginx.svg'
import aws from '../../../public/aws.png'
import storybook from '../../../public/storybook.png'
import figma from '../../../public/Figma.svg'
import firebase from '../../../public/firebase.png'
import githubActions from '../../../public/github-actions.svg'

import PlanWeave from '../../../public/Plan-Weave-Logo-Square.png'
import NutriSync from '../../../public/NutriSync-Logo-White-Background-Circle.webp'


import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

export const navLinks = [
	{
		href: '/',
		heading: '#Main Heading',
		displayName: 'Home'
	},
	{
		href: '/#MainProjects',
		heading: '#Main Projects',
		displayName: 'Main Projects'
	},
	{
		href: '/#Tech Experience',
		heading: '#Tech Experience',
		displayName: 'Tech Experience'
	},
	{
		href: '/#About',
		heading: '#About',
		displayName: 'About'
	},
	{
		href: "/Connor's%20Resume.pdf",
		displayName: 'Resume',
		target: '_blank',
	},
]

export const intro = {
	heading: 'Connor Keenum',
	subHeading: 'My Experiences as a Web Developer',
	introImage: {
		src: Logo,
		width: 144,
		height: 144,
		alt: 'Connor Keenum Logo',
		placeholder: 'blur',
		onClickRoute: 'https://github.com/Nellak2017'
	},
	introParagraphs: [
		<p key="Introduction-Section-Paragraph-1">&nbsp;&nbsp;&nbsp;&nbsp;Hello! I&apos;m Connor Keenum, a passionate Web developer with a strong focus on frontend development and functional programming. I love 
		building efficient, scalable, and user-friendly applications that solve real-world problems.</p>,
		<li key="Introduction-Section-Paragraph-2"><b>Location:</b>&nbsp;&nbsp;Edmond, Oklahoma</li>,
		<li key="Introduction-Section-Paragraph-3"><b>Education:</b>&nbsp;&nbsp;B.Sc. in Software Engineering</li>,
		<li key="Introduction-Section-Paragraph-4"><b>Interests:</b>&nbsp;&nbsp;Property Based Testing, Functional Programming, Web Development, UI/UX Design</li>,
	]
}

export const projects = [
	{
		href: "https://planweave.com/",
		text: "Plan Weave",
		text2: "Focus on what is important.",
		logo: PlanWeave,
		alt: "Plan Weave Logo"
	},
	{
		href: "https://www.nutrisync.fit/",
		text: "NutriSync",
		text2: "Master your nutrition.",
		logo: NutriSync,
		alt: "NutriSync Logo"
	},
	// TODO: Add LLM Chatbot site when ready
	// {
	// 	href: "http://example.com",
	// 	text: "LLM ChatBot",
	// 	text2: "LLM ChatBot clone for School project.",
	// 	logo: Logo,
	// 	alt: "LLM ChatBot App"
	// },
]

export const techExperience = [
	{
		href: "https://www.w3.org/html/",
		text: "HTML",
		text2: "6 years experience",
		logo: html,
		alt: "HTML"
	},
	{
		href: "https://www.w3schools.com/css/",
		text: "CSS",
		text2: "6 years experience",
		logo: css,
		alt: "CSS"
	},
	{
		href: "https://git-scm.com/",
		text: "Git",
		text2: "5 years experience",
		logo: git,
		alt: "Git"
	},
	{
		href: "https://github.com/Nellak2017",
		text: "Github",
		text2: "5 years experience",
		logo: github,
		alt: "Github"
	},
	{
		href: "https://jestjs.io/",
		text: "Jest",
		text2: "4 years experience",
		logo: jest,
		alt: "Jest"
	},
	{
		href: "https://nextjs.org/",
		text: "Next",
		text2: "3 years experience",
		logo: next,
		alt: "Next"
	},
	{
		href: "https://storybook.js.org/",
		text: "Storybook",
		text2: "3 years experience",
		logo: storybook,
		alt: "Storybook"
	},
	{
		href: "https://www.figma.com/",
		text: "Figma",
		text2: "3 years experience",
		logo: figma,
		alt: "Figma"
	},
	{
		href: "https://redux.js.org/",
		text: "Redux",
		text2: "3 years experience",
		logo: redux,
		alt: "redux"
	},
	{
		href: "https://firebase.google.com/",
		text: "Firebase",
		text2: "1 year experience",
		logo: firebase,
		alt: "Firebase"
	},
	{
		href: "https://fast-check.dev/",
		text: "Fast-Check",
		text2: "6 months experience",
		logo: fastCheck,
		alt: "fast-check property based testing"
	},
	{
		href: "https://www.postgresql.org/",
		text: "Postgres",
		text2: "3 months experience",
		logo: postgres,
		alt: "postgres"
	},
	{
		href: "https://www.docker.com/",
		text: "Github Actions",
		text2: "1 month experience",
		logo: githubActions,
		alt: "Github Actions"
	},
	{
		href: "https://www.docker.com/",
		text: "Docker",
		text2: "1 month experience",
		logo: docker,
		alt: "Docker"
	},
	{
		href: "https://nginx.org/en/",
		text: "Nginx",
		text2: "1 month experience",
		logo: nginx,
		alt: "Nginx"
	},
	{
		href: "https://aws.amazon.com/free/",
		text: "AWS",
		text2: "1 month experience",
		logo: aws,
		alt: "AWS"
	},
]

export const programmingExperience = [
	{
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		text: "JS",
		text2: "Very Fluent",
		logo: javascript,
		alt: "javascript"
	},
	{
		href: "https://www.python.org",
		text: "Python",
		text2: "Fluent",
		logo: python,
		alt: "python"
	},
	{
		href: "https://go.dev/",
		text: "Go",
		text2: "Proficient",
		logo: go,
		alt: "go"
	},
	{
		href: "https://rescript-lang.org/",
		text: "ReScript",
		text2: "Beginner",
		logo: rescript,
		alt: "ReScript"
	},
]


export const paragraphs = [
	<h3 key='What can I do?'>What can I do?</h3>
	,
	<li key='Front-End Development'><b>Front-End Development</b><br/> I excel in building responsive and dynamic user interfaces 
	using technologies like React.js, Next.js, and modern JavaScript frameworks. My focus 
	is on creating intuitive and accessible user experiences that are both visually appealing 
	and functionally robust.</li>
	,
	<li key='Functional Programming'><b>Functional Programming</b><br/> I have a deep appreciation for functional programming principles 
	and apply them to write clean, maintainable, and bug-resistant code. My approach emphasizes 
	immutability, pure functions, and composability, ensuring that my codebase remains flexible 
	and easy to extend.</li>
	,
	<li key='Testing and Debugging'><b>Testing and Debugging</b><br/> I prioritize writing robust and comprehensive tests to ensure code 
	quality and reliability. From unit tests to end-to-end tests, I use a variety of tools and 
	methodologies to catch bugs early and deliver stable software.</li>
	,
	<li key='Version Control'><b>Version Control and Collaboration</b><br/> I am proficient in using Git for version control, enabling 
	smooth collaboration in team environments. I follow best practices for branching, merging, and 
	code reviews, ensuring that projects progress smoothly and efficiently</li>
	,
	<li key='Project Management'><b>Project Management</b><br/> With a strategic mindset, I am adept at planning and executing software 
	projects from start to finish. I use agile methodologies to keep projects on track, prioritize 
	tasks, and ensure timely delivery.</li>
]

export const footer = {
	socialLinks: [
		{
			href: 'https://github.com/Nellak2017',
			icon: <AiFillGithub />
		},
		{
			href: 'https://www.facebook.com/connor.keenum',
			icon: <FaFacebook />
		},
		{
			href: 'https://www.linkedin.com/in/connor-keenum/',
			icon: <BsLinkedin />
		},
	],
	fullName: 'Connor Keenum',
}