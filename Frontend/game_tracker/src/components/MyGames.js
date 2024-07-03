export default function myGames(props) {
    // const displayGames = props.packages.map((eachPackage) => <li>{eachPackage}</li>)

    return (
        <div>
            <div className="gameCardList">
                <div className="gameCard">
                    <div className="gameTitle">
                        <h2>Game Title</h2>
                    </div>
                    <div className="gamePlatform">
                        <h3>Platform</h3>
                    </div>
                    <div className="GameReview">
                        <p>Review: 5 Stars</p>
                    </div>
                    <div className="gameInfo">
                        <div className="gameStatus">
                            <p>Status: Completed</p>
                        </div>
                        <div className="gameReleaseDate">
                            <p>Release Date: 1/1/2001</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}