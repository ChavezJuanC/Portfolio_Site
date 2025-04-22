import React, { useEffect } from "react";

function About() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
    return (
        <section className="bg-[#FAFAFA] text-[#2E2E2E] px-6 md:py-32 py-16 md:px-20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4 border-b border-[#D1D1D1] pb-2">
                    Who I am
                </h2>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                    Hey, I'm Juan! I've always been fascinated by computers
                    since I was a kid, but I used to think that coding was
                    something only the “super smart” could do. Over the years, I
                    realized that anyone can learn to code, and that's one of
                    the things I love most about the tech world. We've come so
                    far that anyone, anywhere, can access the resources to build
                    anything — and I'm all about that idea.
                </p>
                <p className="text-[#6E6E6E] mb-6 leading-relaxed">
                    After years of working in call centers, I decided to swap my
                    headset for a code editor. I spent a year self-teaching,
                    diving deep into everything from web development to game and
                    hardware projects. It's been an amazing journey, and I'm now
                    ready to take the next step into the professional world.
                </p>
                <p className="text-[#6E6E6E] mb-6 leading-relaxed">
                    While I enjoy working on a variety of projects, building
                    games and Arduino-powered creations are some of my favorite
                    things. There's no feeling quite like seeing a circuit come
                    to life with code or imagining a video game world and making
                    it real. But what I love most is how coding allows me to
                    create something that can make an impact, whether it's for a
                    user on the web or a new tech prototype.
                </p>
                <p className="text-[#6E6E6E] mb-6 leading-relaxed">
                    When I'm not coding, you'll find me diving into video games,
                    exploring new music, or sipping on a strong coffee — it
                    fuels my creativity. I'm excited to continue learning and
                    growing in this field, and I'm ready for the next
                    opportunity to build something that people will use and
                    love.
                </p>
            </div>
        </section>
    );
}

export default About;
