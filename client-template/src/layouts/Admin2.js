import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import Course from "views/admin/Course.js";
import Sem from "views/admin/Semester.js";
import Session from "views/admin/Session.js";
import CourseAndSession from "views/admin/CourseAndSession.js";
import StudentList from "views/admin/StudentList.js";
export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
      
      
        <div className=" bg-lightBlue-600 md:pt-3 pb-16 ">
        <AdminNavbar />
        </div>
        <br></br>
        <div className="px-6 md:px-12 md:pt-3 pb-16 mx-auto w-full">
          <Switch>
          
            <Route path="/admin2/course" exact component={Course} />
            <Route path="/admin2/sem" exact component={Sem} />
            <Route path="/admin2/session" exact component={Session} />
            <Route path="/admin2/course-session" exact component={CourseAndSession} />
            <Route path="/admin2/student-list" exact component={StudentList} />
          </Switch>
          </div>
          <FooterAdmin />
     
      </div>
    </>
  );
}
