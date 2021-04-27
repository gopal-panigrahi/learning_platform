import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import AllCoursesCards from './components/Courlistpage/AllCoursesCards';
import CourseContent from './components/course_content/courseContent'
import DashBoard from './components/ProfilePageComponents/dashboard';
import OngoingCourses from './components/ProfilePageComponents/ongoingCourses'
import CompletedCourses from './components/ProfilePageComponents/CompletedCourses'
import ChatBotButton from './components/ChatbotComponents/chatbotButton'
import Body from './components/course_enrollment_component/body'

function Main() {
    return (
        <div>
            <Header />
            <Switch>
            {/* <Route path="/" exact component={LoginSignUp}/>
            <Route path="/auth" exact component={LoginSignUp}/> */}
            <Route path="/homepage" exact component={Homepage}/>
            <Route path="/domain/:id" component={AllCoursesCards}/>      
            <Route path="/course/:id" component={CourseContent}/>      
            <Route path="/course-content/:id" component={Body}/>  
            <Route path="/user-dashboard" component={DashBoard}/>      
            <Route path="/ongoing-courses" component={OngoingCourses}/>      
            <Route path="/completed-courses" component={CompletedCourses}/>  
            </Switch>
            <ChatBotButton/>
            <Footer/> 
        </div>
    )
}

export default Main
