
import React, { useEffect } from "react";
import rightArrow from '../../assite/images/right-arrow3.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPolicy } from "../state/questions";
import { useParams } from "react-router-dom";


const PolicyDetailsRight = () => {
	const policyList = useSelector(state=>state?.questionsReducer?.data ?? []);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	 useEffect(() => {
 dispatch(fetchAllPolicy());
  }, []);

  return (
    <div className='policy-detais-rigth-box'>
		{policyList.map((e) => (
				<div className='policy-main-card' key={e.id}>
				
				<p>{e.text1}</p>
				
				<button>
				<Link to={`/policy/${e._id}`} className='question-title-link'>
					SeeMore
				</Link>
					<img src={rightArrow} alt='arrow' />
				</button>
			</div>
			))}
		
	

				{/* <div className='policy-main-card'>
					<p>Workolace Health and Seftey</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Employee code of conduct policy</p>
                    <button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Attendance & vacation policies</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Employee disciplinary action policy</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Employee complaint policies</p>
                    <button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Substance abuse policies</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Workplace security policies</p>
                    <button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Bring your own device policies</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Compensation and benifits policy</p>
                    <button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Travel policies</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Emoloyee Fraternization policy</p>
                    <button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Inclement Weather Policies</p>
                    <button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Employee face Mask policy</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div>

				<div className='policy-main-card'>
					<p>Remote work Policy</p>
					<button>
						See More
						<img src={rightArrow} alt='arrow' />
					</button>
				</div> */}

    </div>
  )
}

export default PolicyDetailsRight