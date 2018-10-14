import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';
import StudentSave from '../imports/ui/StudentSave';
import {Students} from '../imports/api/Students';
import moment from 'moment/moment';
import './main.html';

const renderStudents=(studentList)=>{
  return studentList.map((student)=>{
    return (
    <tr  key={student._id}>
      <td>{student.name}</td>
      <td> {student.email}</td>
      <td> {student.phone}</td>
     <td> {moment(student.date).format("DD/MM/YYYY")}</td>
  </tr>
);
});
}



Meteor.startup(()=>{
    Tracker.autorun(function(){
      let students=Students.find().fetch();
      let jsx=<div><StudentSave /></div>

      let jsx2=(
        <div>
          <div>
            {jsx}
          </div>

          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Name</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Email</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Phone</th>
                    <th className="fw6 bb b--black-20 tl pb3 pr3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {renderStudents(students)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )


      ReactDom.render(jsx2,document.getElementById('app'))
    });


});
