import "./css/Content.css"
import hotel from "./images/xxx-hotel.png"
import profileImg from "./images/profileImg.png"

export default function Content(props) {
    const activitiesList = props.activities.map(activity => {
        return(
            <li className="content--activitiesList">{activity}</li>
        )
    })

    return (
        <div>
            <div className="content--background">
                <img className="content--backgroundImage" alt="backgroundImage" src="https://cf.bstatic.com/xdata/images/hotel/640x200/254048033.jpg?k=a1662a89b8eddcdadd22ded68653923cdbabe353de63ce16898dd383ed980d36&o="></img>
            </div>
            <div className="content--mainContainer">
                <div className="content--profileHeader">
                    <div className="profileHeader--details">
                        <img className="profileImg" src={profileImg}></img>
                        <div className="profileCreate">
                            Created by
                            <div className="profileName">{props.firstName} {props.lastName}</div>
                        </div>
                    </div>
                    <div className="profileShare">Share</div>
                </div>
                <hr/>
                <h1 className="content--mainHeading">Lorem Ipsum</h1>
                <p className="content--article">{props.description}</p>
                <h2 className="content--activitiesHeading">Activities</h2>
                <ul className="content--activitiesList">
                    {activitiesList}
                </ul>
            </div>
        </div>
    )
}