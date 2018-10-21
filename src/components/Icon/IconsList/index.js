import React from 'react'
import Arrow from './Arrow'
import ArrowWoStem from './ArrowWoStem'
import Article from './Article'
import Asset from './Asset'
import Basket from './Basket'
import Bookmark from './Bookmark'
import BookmarkFill from './BookmarkFill'
import Close from './Close'
import Community from './Community'
import Course from './Course'
import Crisis from './Crisis'
import CustomersAttraction from './CustomersAttraction'
import CustomersService from './CustomersService'
import Denied from './Denied'
import Development from './Development'
import Doc from './Doc'
import Dropdown from './Dropdown'
import Edit from './Edit'
import Efficiency from './Efficiency'
import Event from './Event'
import Facebook from './Facebook'
import FacebookFrame from './FacebookFrame'
import Feed from './Feed'
import Finance from './Finance'
import Fullscreen from './Fullscreen'
import G from './G'
import Linkedin from './Linkedin'
import Information from './Information'
import Inspiration from './Inspiration'
import Jpg from './Jpg'
import Law from './Law'
import Logo from './Logo'
import Management from './Management'
import NewTab from './NewTab'
import Notebook from './Notebook'
import Odnoklassniki from './Odnoklassniki'
import Ok from './Ok'
import Pause from './Pause'
import Pdf from './Pdf'
import Phone from './Phone'
import Play from './Play'
import Podcast from './Podcast'
import Refresh from './Refresh'
import Risks from './Risks'
import Search from './Search'
import Seervice from './Seervice'
import SoundOff from './SoundOff'
import SoundOn from './SoundOn'
import Staff from './Staff'
import Star from './Star'
import StartBusiness from './StartBusiness'
import SlickLeftArrow from './SlickLeftArrow'
import SlickRightArrow from './SlickRightArrow'
import LebedevLogo from './LebedevLogo'
import Test from './Test'
import Time from './Time'
import Trainer from './Trainer'
import Trajectory from './Trajectory'
import Twitter from './Twitter'
import Video from './Video'
import Vk from './Vk'
import Wait from './Wait'
import Xls from './Xls'
import Tick from './Tick'
import RateStar from './RateStar'
import Tag from './Tag'
import Dots from './Dots'
import Message from './Message'
import ArrowDown from './ArrowDown'
import ArrowLeft from './ArrowLeft'
import Eye from './Eye'
import EyeClosed from './EyeClosed'

export const iconsList = {
	logo: (className, size) => <Logo className={className} size={size} />,
	basket: (className, size) => <Basket className={className} size={size} />,
	bookmark: (className, size) => <Bookmark className={className} size={size} />,
	bookmarkFill: (className, size) => <BookmarkFill className={className} size={size} />,
	search: (className, size) => <Search className={className} size={size} />,
	information: (className, size) => <Information className={className} size={size} />,
	inspiration: (className, size, grad) => (
		<Inspiration className={className} size={size} grad={grad} />
	),
	startBusiness: (className, size, grad) => (
		<StartBusiness className={className} size={size} grad={grad} />
	),
	management: (className, size) => <Management className={className} size={size} />,
	staff: (className, size, grad) => <Staff className={className} size={size} grad={grad} />,
	finance: (className, size, grad) => <Finance className={className} size={size} grad={grad} />,
	customersAttraction: (className, size) => (
		<CustomersAttraction className={className} size={size} />
	),
	customerService: (className, size) => <CustomersService className={className} size={size} />,
	efficiency: (className, size) => <Efficiency className={className} size={size} />,
	risks: (className, size, grad) => <Risks className={className} size={size} grad={grad} />,
	law: (className, size) => <Law className={className} size={size} />,
	development: (className, size, grad) => (
		<Development className={className} size={size} grad={grad} />
	),
	crisis: (className, size) => <Crisis className={className} size={size} />,
	feed: (className, size) => <Feed className={className} size={size} />,
	time: (className, size) => <Time className={className} size={size} />,
	trajectory: (className, size) => <Trajectory className={className} size={size} />,
	video: (className, size) => <Video className={className} size={size} />,
	course: (className, size) => <Course className={className} size={size} />,
	seervice: (className, size) => <Seervice className={className} size={size} />,
	community: (className, size) => <Community className={className} size={size} />,
	event: (className, size) => <Event className={className} size={size} />,
	article: (className, size) => <Article className={className} size={size} />,
	podcast: (className, size) => <Podcast className={className} size={size} />,
	test: (className, size) => <Test className={className} size={size} />,
	trainer: (className, size) => <Trainer className={className} size={size} />,
	play: (className, size) => <Play className={className} size={size} />,
	pause: (className, size) => <Pause className={className} size={size} />,
	soundOn: (className, size) => <SoundOn className={className} size={size} />,
	soundOff: (className, size) => <SoundOff className={className} size={size} />,
	fullScreen: (className, size) => <Fullscreen className={className} size={size} />,
	star: (className, size) => <Star className={className} size={size} />,
	ok: (className, size) => <Ok className={className} size={size} />,
	facebook: (className, size) => <Facebook className={className} size={size} />,
	facebookFrame: (className, size) => <FacebookFrame className={className} size={size} />,
	twitter: (className, size) => <Twitter className={className} size={size} />,
	vk: (className, size) => <Vk className={className} size={size} />,
	odnoklassniki: (className, size) => <Odnoklassniki className={className} size={size} />,
	google: (className, size) => <G className={className} size={size} />,
	linkedin: (className, size) => <Linkedin className={className} size={size} />,
	doc: (className, size) => <Doc className={className} size={size} />,
	pdf: (className, size) => <Pdf className={className} size={size} />,
	xls: (className, size) => <Xls className={className} size={size} />,
	jpg: (className, size) => <Jpg className={className} size={size} />,
	arrow: (className, size) => <Arrow className={className} size={size} />,
	arrowDown: (className, size) => <ArrowDown className={className} size={size} />,
	arrowLeft: (className, size) => <ArrowLeft className={className} size={size} />,
	arrowWoStem: (className, size) => <ArrowWoStem className={className} size={size} />,
	newtab: (className, size) => <NewTab className={className} size={size} />,
	refresh: (className, size) => <Refresh className={className} size={size} />,
	edit: (className, size) => <Edit className={className} size={size} />,
	close: (className, size, grad) => <Close className={className} size={size} grad={grad} />,
	dropdown: (classname, size) => <Dropdown className={classname} size={size} />,
	notebook: (className, size) => <Notebook className={className} size={size} />,
	phone: (className, size) => <Phone className={className} size={size} />,
	wait: (className, size) => <Wait className={className} size={size} />,
	denied: (className, size) => <Denied className={className} size={size} />,
	slickLeftArrow: (className, size) => <SlickLeftArrow className={className} size={size} />,
	slickRightArrow: (className, size) => <SlickRightArrow className={className} size={size} />,
	lebedevLogo: (className, size) => <LebedevLogo className={className} size={size} />,
	tick: (className, size) => <Tick className={className} size={size} />,
	rateStar: (className, size) => <RateStar className={className} size={size} />,
	tag: (className, size) => <Tag className={className} size={size} />,
	dots: (className, size) => <Dots className={className} size={size} />,
	message: (className, size, grad) => <Message className={className} size={size} grad={grad} />,
	asset: (className, size) => <Asset className={className} size={size} />,
	eye: (className, size) => <Eye className={className} size={size} />,
	eyeClosed: (className, size) => <EyeClosed className={className} size={size} />,
}


export function getIcon(type, className, size, grad) {
	return iconsList[type](className, size, grad)
}
