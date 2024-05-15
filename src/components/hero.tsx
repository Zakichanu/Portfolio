import { WavyBackground } from "./aceternityUi/bgWavy/bgWavyComponent";


export function HeroComponent() {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                
                {/* Image with border radius and the same path as above */}
                <img
                    src="/profile.JPG"
                    alt="NextUI Album Cover"
                    className="m-5 rounded-xl"
                    width="400"
                />
                <div>
                    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                        Zakaria's Portfolio
                    </p>
                    <p className="text-base md:text-lg mt-4 text-white font-bold inter-var text-center">
                        CTO, Web full-stack developer, and a passionate learner.
                    </p>
                </div>
            </div>
        </WavyBackground>
    );
}
