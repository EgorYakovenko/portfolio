// коммандный проект Team project
// Сделано лично Made personally Self-performed
import { useEffect, useState } from "react";

import "../scss/project.scss";
import { getAllProject } from "../api";

export default function Project() {
  // console.log(getAllProject());
  const [projects, setProject] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getAllProject();
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  console.log(projects);

  return (
    <>
      {/* <p>Project</p> */}
      <section>
        <div className="card">
          <ul className="card__list">
            {projects.map((project) => (
              <li className="card__item" key={project.id}>
                <div className="card__title">
                  <div className="card__name">
                    <h2 className="card__name">{project.name}</h2>
                    <p className="card__status">{project.developer}</p>
                  </div>
                  <div className="card__info">
                    <p className="card__description">{project.description}</p>
                    {/* ссылки  */}
                    <div className="card__link">
                      <a href="">View Project </a>
                      <a href="">View Code </a>
                    </div>
                    {/* технологии  */}
                    <div className="card__tech">
                      {project.technologien.map((tech, index) => (
                        <li key={index}>
                          <p>{tech}</p>
                        </li>
                      ))}
                    </div>
                  </div>

                  {/* <p>technologien:</p> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

//  <div className="card__box_technologien">
//    {project.technologien.map((tech, index) => (
//      <svg
//        key={index}
//        // className="card-container__project-icon"
//        // class="advantages-icon"
//        // aria-label="стратегия"
//        width="32"
//        height="32"
//      >
//        <use href={`${tech}`}></use>
//      </svg>
//    ))}
//  </div>;

//  <div className="card__box_technologien">
//    {project.technologien.map((tech, index) => (
//      <svg key={index} width="32" height="32">
//        <use href={`${tech}`}></use>
//      </svg>
//    ))}
//  </div>;

// return (
//   <>
//     <p className="test">Project</p>
//     <section>
//       <div className="card-container">
//         <div className="card-container__img">
//           <svg
//             className="card-container__project-icon"
//             // class="advantages-icon"
//             // aria-label="стратегия"
//             // width="32"
//             // height="32"
//           >
//             <use href="../../public/svg/set.svg#icon-js"></use>
//           </svg>
//           <p>Individual project</p>
//         </div>
//         <div>
//           <h2> WebStudio</h2>
//           <p>
//             The site is designed with a semantic structure, adaptive layout, and
//             an intuitive interface.
//           </p>
//           <ul className="card-container__technologien-list">
//             <li>
//               <svg
//                 className="card-container__technologien"
//                 // class="advantages-icon"
//                 // aria-label="стратегия"
//                 // width="32"
//                 // height="32"
//               >
//                 <use href="../../public/svg/set.svg#icon-html"></use>
//               </svg>
//             </li>
//             <li>
//               <svg
//                 className="card-container__technologien"
//                 // class="advantages-icon"
//                 // aria-label="стратегия"
//                 // width="32"
//                 // height="32"
//               >
//                 <use href="../../public/svg/set.svg#icon-css"></use>
//               </svg>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   </>
// );
