/* eslint-disable max-lines */
import Logo from '../../../public/Nellak2017-Logo.jpg'
import html from '../../../public/html5.svg'
import javascript from '../../../public/javascript.svg'
import css from '../../../public/css3.svg'
import python from '../../../public/python.svg'
import next from '../../../public/next-js.svg'
import java from '../../../public/java.svg'
import git from '../../../public/git.svg'
import go from '../../../public/go.svg'
import redux from '../../../public/redux.svg'
import postgres from '../../../public/PostgreSQL_logo.svg'
import ts from '../../../public/TS.svg'
import jest from '../../../public/jest.svg'
import dynamo from '../../../public/dynamodb.svg'

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
		href: '/Resume',
		displayName: 'Resume'
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
		`Hi there! I'm Connor Keenum, a passionate and driven software developer with a strong focus on creating 
		elegant and efficient solutions. With a Bachelor's Degree in Software Engineering and years of hands-on 
		experience, I've honed my skills in programming, web development, and strategic problem-solving.`,
		`My journey in tech is fueled by a love for continuous learning and a deep interest in how software can transform 
		ideas into reality. Whether I'm diving into complex algorithms or fine-tuning the user experience of a web 
		app, I approach every challenge with enthusiasm and a dedication to excellence and quality assurance.`
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
	{
		href: "http://example.com",
		text: "lorem ipsum",
		text2: "",
		logo: Logo,
		alt: "logo"
	},
]

export const experience = [
	{
		href: "https://www.w3.org/html/",
		text: "HTML",
		text2: "Intermediate Developer Level",
		logo: html,
		alt: "html"
	},
	{
		href: "https://www.w3schools.com/css/",
		text: "CSS",
		text2: "Junior Developer Level",
		logo: css,
		alt: "css"
	},
	{
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		text: "JS",
		text2: "Junior Developer Level",
		logo: javascript,
		alt: "javascript"
	},
	{
		href: "https://www.python.org",
		text: "Python",
		text2: "Junior Developer Level",
		logo: python,
		alt: "python"
	},
	{
		href: "https://nextjs.org/",
		text: "Next",
		text2: "Advanced Beginner Level",
		logo: next,
		alt: "next"
	},
	{
		href: "https://www.java.com/en/",
		text: "Java",
		text2: "Advanced Beginner Level",
		logo: java,
		alt: "java"
	},
	{
		href: "https://git-scm.com/",
		text: "Github",
		text2: "Advanced Beginner Level",
		logo: git,
		alt: "git"
	},
	{
		href: "https://go.dev/",
		text: "Go",
		text2: "Advanced Beginner Level",
		logo: go,
		alt: "go"
	},
	{
		href: "https://redux.js.org/",
		text: "Redux",
		text2: "Advanced Beginner Level",
		logo: redux,
		alt: "redux"
	},
	{
		href: "https://www.postgresql.org/",
		text: "Postgres",
		text2: "Beginner Level",
		logo: postgres,
		alt: "postgres"
	},
	{
		href: "https://www.typescriptlang.org/",
		text: "TypeScript",
		text2: "Beginner Level",
		logo: ts,
		alt: "ts"
	},
	{
		href: "https://jestjs.io/",
		text: "Jest",
		text2: "Beginner Level",
		logo: jest,
		alt: "jest"
	},
	{
		href: "https://aws.amazon.com/dynamodb/",
		text: "DynamoDB",
		text2: "Beginner Level",
		logo: dynamo,
		alt: "dynamodb"
	}
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