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
      <p>Project</p>
      <section>
        <div className="card">
          <ul className="card__list">
            {projects.map((project) => (
              <li className="card__item" key={project.id}>
                {/* логотип проекта */}
                <div>
                  <svg
                    className="card__logo"
                    // class="advantages-icon"
                    // aria-label="стратегия"
                    width="84"
                    height="84"
                  >
                    <use href="../../public/svg/set.svg#icon-js"></use>
                  </svg>

                  <div className="card__box_status_individual">
                    <p className="card__status">Individual</p>
                  </div>
                </div>

                <div className="card__info">
                  <h2 className="card__name">{project.name}</h2>
                  <p className="card__description">{project.description}</p>
                  <div className="card__box_technologien">
                    {project.technologien.map((tech, index) => (
                      <svg
                        key={index}
                        // className="card-container__project-icon"
                        // class="advantages-icon"
                        // aria-label="стратегия"
                        width="32"
                        height="32"
                      >
                        <use href={`${tech}`}></use>
                      </svg>
                    ))}
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
