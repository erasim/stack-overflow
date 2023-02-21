/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PolicyDetailsLeft = () => {
	
	const policiesList = useSelector((state) => state.questionsReducer.data);
	const { id } = useParams();
	console.log('policiesList=>', policiesList);
	return (
		<div className='policy-details-left-box'>
			<h1>Company Policies</h1>
			{policiesList && policiesList.filter((list) => list._id === id)
						.map((list) => (<div key={list._id}>
							<h3>{list.text1}</h3>
						</div>

						))}
			{/* <h3>P001- Equal Opportunity Policy</h3> */}
			<p>
				The Government of India has enacted the Rights of Persons with
				Disabilities Act, 2016 (RPwD, Act) and Rights of Persons with
				Disabilities Rules, 2017 to give effect to the principles enshrined in
				the United Nations Convention on Rights of Persons with Disabilities
				(2006). In pursuance of the mandate given in Section 21(1) of the RPwD,
				Act 2016 read with Rule 8 of RPwD Rules, 2017 the Equal Opportunity
				Policy is adopted by the CBIC.
			</p>
			<h3>PREAMBLE</h3>
			<p>
				The Central Board of Indirect Taxes and Customs (hereinafter referred as
				CBIC) recognises the value of a diverse work force and the need to
				provide an inclusive and enabling work environment. We are committed to
				ensuring equal opportunities for people with disabilities and to provide
				an environment and work culture which is inclusive of them. We seek to
				act proactively to facilitate their full participation in the work of
				the Department. We are also committed to ensuring that individuals with
				disabilities can interact with the Department in an environment which is
				optimal for their needs.
			</p>
			<h3>SCOPE</h3>
			<p>
				The Policy shall apply to all the employees of Central Board of Indirect
				Taxes and Customs (CBIC). This policy shall apply to all properties and
				buildings under the ownership and/or functional control of this Board,
				located both within and outside India
			</p>
			<h3>PURPOSE</h3>
			<p>
				The Equal Opportunity Policy of CBIC is to provide equal opportunities
				to the specially-abled employees without any discrimination, on the
				ground of disability and shall strive to maintain a working environment
				that is conducive for specially abled employees. This Equal Opportunity
				Policy is subject to applicable regulations, qualifications, and merit
				of the individuals concerned.
			</p>
			<h3>DEFINITION</h3>
			<p>
				The definitions of different terms used in this Policy will be as
				prescribed under the Rights of Persons with Disabilities Act, 2016 and
				the Rights of Persons with Disabilities Rules, 2017.
			</p>
			<h3>Grievance Redressal</h3>
			<p>
				As per the mandate of the RPwD Act, 2016 CBIC shall appoint a Grievance
				Redressal Officer. An officer not below the rank of Commissioner shall
				be appointed as Grievance Redressal Officer at Group ‘A’ level and an
				officer not below the rank of Additional /Joint Commissioner shall be
				appointed as Grievance Redressal Officer in respect of Group ‘B’ /’C’
				(Gazetted/Non-gazetted) officers, by all the Cadre Controlling
				Authorities of CBIC.{" "}
			</p>
            <h3>RIGHTS AND ENTITLEMENTS:</h3>
            <p>The CBIC is committed to provide the following for the persons with disabilities:-<br/>
<b>(I)</b> CBIC shall ensure that the persons with disabilities enjoy the right to equality, life with dignity and respect for their integrity equally with others.<br/> 
<b>(iI)</b> CBIC will ensure a work environment free from any discrimination against persons with disabilities.<br/>
<b>(III)</b> Placement/Posting of Officers with disabilities.</p>
		</div>
	);
};

export default PolicyDetailsLeft;
