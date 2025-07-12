export default function Card({src, isPremium = false}: { src: string, isPremium?: boolean }) {
    return (
        <a href="https://klikfilm.com/v4/watch/49-6322">
            <div className="bscover w-[500] h-full">
                <img className="transition-transform duration-300 ease-in-out transform hover:scale-110" src={`https://posters.cdn.klikfilm.net/1349_405/${src}_1349_405.jpg`}/>
                {
                    isPremium &&
                    <div
                        className="cntPremium">PREMIUM
                    </div>
                }
            </div>
        </a>
    )
};