function MissionCard({mission}) {
    const {title, description} = mission
    return(
        <div>
            <h1>{title}</h1>
            <p> Mission: {description}</p>
        </div>
    )
}

export default MissionCard