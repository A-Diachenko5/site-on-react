import Project from '../components/project/Project'
import projects from '../helpers/projectsList.js'

const Projects = ({title}) => {
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                
                {projects.map((project, index)=>{
                    return <Project title={project.title} img={project.img} key={index} id={index}/>
                    
                })}


                
            </ul>
        </div>
    </main>
     );
}
 
export default Projects;