import formatTitle from '../utils/formatTitle'
import Tag from './Tag'
import SecondaryTitle from './typography/SecondaryTitle'

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
        <div id='tech' className='pb-10'>
            <SecondaryTitle>Tech Stack</SecondaryTitle>
            {Object.keys(tech).map((title) => {
                return (
                    <div key={title}>
                        <p className='inline-block'>{formatTitle(title)}</p>
                            {tech[title].map((item) => {
                                return (
                                    <Tag key={item}>{item}</Tag>
                                )
                            })}
                    </div>
                )
            })}
        </div>
    )
}

export default TechStack;