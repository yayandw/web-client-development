export default function Card({src, isPremium = false}: { src: string, isPremium?: boolean }) {
    return (
        <a href="https://klikfilm.com/v4/watch/49-6322">
            <div>
                <div className="bscover"
                     style={{backgroundImage: `url(https://posters.cdn.klikfilm.net/380_543/${src}_600_857.jpg)`}}>
                    {
                        isPremium &&
                        <div
                            className="cntPremium">PREMIUM
                        </div>
                    }
                </div>
                <div>
                    <div>Mayhem</div>
                </div>
            </div>
        </a>
    )
};