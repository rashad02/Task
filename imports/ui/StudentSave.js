import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Students} from '../api/Students';
 import 'tachyons';

class StudentSave extends Component{


	handleSubmit(event) {
		event.preventDefault();
		let namePart = ReactDOM.findDOMNode(this.refs['name']).value;
		let email = ReactDOM.findDOMNode(this.refs['email']).value;
		let phone = ReactDOM.findDOMNode(this.refs['phone']).value;
		let birthDatePart = ReactDOM.findDOMNode(this.refs['dateOfBirth']).value;
		let name=namePart+birthDatePart;

		 ReactDOM.findDOMNode(this.refs['name']).value="";
		  ReactDOM.findDOMNode(this.refs['email']).value="";
			 ReactDOM.findDOMNode(this.refs['phone']).value="";
			  ReactDOM.findDOMNode(this.refs['dateOfBirth']).value

		Students.insert({
			name: name,
			email: email,
			phone: phone,
			date: new Date()
		});
	}



  render(){
	return(

		<div className="aic mt-6">
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
				<main className="pa4 black-80">
					<form className="measure center"
						onSubmit={this.handleSubmit.bind(this)}>
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f5 fw6 ph0 mh0 tc">Save Student</legend>
							<div className="mt3">
								<label
									className="db fw6 lh-copy f6 tc"
									htmlFor="Name">
									Name
								</label>
								<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="name"
									ref="name"
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6 tc"
									htmlFor="email-address">
									Email
								</label>
								<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="email"
									ref="email"
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6 tc"
									htmlFor="contactNo">
									Phone
								</label>
								<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="phone"
									ref="phone"
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6 tc"
									htmlFor="date">
									Date of Birth
								</label>
								<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
									type="date"

									ref="dateOfBirth"
								/>
							</div>
						</fieldset>
						<div className=" tc">
							<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
								type="submit"
								value="Save"
							/>
						</div>
					</form>
				</main>
			</article>
		</div>
	);
	}
}


export default StudentSave;
