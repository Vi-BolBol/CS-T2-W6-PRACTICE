function Statistic({courseResults}){
    const scores = courseResults.map((r) => r.score);
    const avg = scores.reduce((a, r) => a + r, 0) / scores.length;
    const min = scores.reduce((a, i) => a < i ? a : i);
    const max = scores.reduce((a, i) => a > i ? a : i);

    return(
        <>
            <div className="Stat">
                <div>
                    <p className="p1">AVERAGE</p>
                    <p className="p2">{avg.toFixed(0)}</p>
                </div>

                <div>
                    <p className="p1">MIN</p>
                    <p className="p2">{min}</p>
                </div>

                <div>
                    <p className="p1">MAX</p>
                    <p className="p2">{max}</p>
                </div>
            </div>
        </>
    );
}

export default Statistic;