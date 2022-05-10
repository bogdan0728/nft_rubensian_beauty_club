import React from 'react';
import TeamMember from './TeamMember'

const Team = () => {
    return(
        <div className="team">
            <div className="row">
                <div className="col-lg-12 col-xl-5">
                    <div className="user-avatar">
                        <img src='./union.svg' className="text-img" />
                        <img src='./union_image.svg' className='user-img'/>
                    </div>
                </div>
                <div className="col-lg-12 col-xl-7 owner">
                    <TeamMember role="owner" name_surmame="Name Surname" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
                </div>
            </div>
            <div className="row members">
                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-lg-12 col-xl-4">
                            <div>
                                <img src='./Ellipse1.svg'/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-8 member">
                            <TeamMember role="ceo" name_surmame="Name Surname" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-lg-12 col-xl-4">
                            <div>
                                <img src='./Ellipse2.svg'/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-8 member">
                            <TeamMember role="developer" name_surmame="Name Surname" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;