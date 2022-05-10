const TeamMember = ({role, name_surmame, content}) => {
    return(
        <>
            <div className='role'>{role}</div>
            <div className='name-surname'>{name_surmame}</div>
            <div className='content'>{content}</div>
        </>
    )
}

export default TeamMember