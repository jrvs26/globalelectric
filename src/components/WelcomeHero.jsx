import heroBg from "../assets/bg.jpg";
import { EncryptedText } from "../ui/encrypted-text";
function WelcomeHero() {
    return (
        <main className="relative min-h-[110vh] flex items-center justify-center text-white text-3xl overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute top-22 left-16 z-10">
                {/* Your content here */}
                <EncryptedText
                    text="Engineering Renewable Energy Infrastructure for a Sustainable Future"
                    encryptedClassName="text-white uppercase tracking-[0.25em] font-semibold text-sm"
                    revealedClassName="text-yellow-500 uppercase tracking-[0.20em] text-md font-semibold mb-4"
                    revealDelayMs={50}
                />
            </div>

            {/* V Shape Bottom Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 200"
                    className="block w-full h-[120px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 L720,200 L1440,0 L1440,200 L0,200 Z"
                        className="fill-white"
                    />
                </svg>
            </div>

        </main>
    );
}

export default WelcomeHero;