import "../styles/skills.css";

export default function Skills () {
    return (
        <div className="skills-div">

            <div className="skills-content">

                <div className="skills-text">

                    <div className="skills-title">
                        <h1>Technologies I work with</h1>
                    </div>

                    <div className="skills-description">
                        <p>I have a solid foundation in Web Developement, specialing in HTML, CSS and Javascript. My Experience extends to using framework like React and Next.js to create dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute efficiently to projects.</p>
                    </div>
                
                </div>

                <div className="skills-list">
                    <div className="skills-list-coloum">
                        <p>Next.js <br />Typescript <br />React.js</p>
                    </div>

                    <div className="skills-list-coloum">
                        <p>Tailwind <br />CSS <br />Node.js</p>
                    </div>
                </div>

            </div>

            <div className="flex w-1/2"></div>

        </div>
    )
}