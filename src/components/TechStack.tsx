import styles from '../app/page.module.css'
import formatTitle from '../utils/formatTitle'

interface Tech {
    languages: string[],
    front_end: string[],
    back_end: string[],
    data_engineering: string[],
    cloud: string[],
    [key: string]: string[]
}

const TechStack = () => {
    const tech: Tech = {
        languages: ['JavaScript', 'TypeScript', 'Python'],
        front_end: ['React', 'Vue', 'Next.js'],
        back_end: ['Express.js', 'PSQL'],
        data_engineering: ['scraPy', 'spaCy'],
        cloud: ['AWS', 'Azure', 'Terraform']
    }

    return (
        <div className={styles.container}>
            <h2>Tech Stack</h2>
            {Object.keys(tech).map((title) => {
                return (
                    <div key={title}>
                        <h3>{formatTitle(title)}</h3>
                        <ul>
                            {tech[title].map((item) => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default TechStack;