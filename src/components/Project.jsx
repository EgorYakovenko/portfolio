// коммандный проект Team project
// Сделано лично Made personally Self-performed
import { useEffect, useState } from "react";

// import "../scss/project.scss";
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
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <div>
                <svg
                // className="card-container__project-icon"
                // class="advantages-icon"
                // aria-label="стратегия"
                // width="32"
                // height="32"
                >
                  <use href="../../public/svg/set.svg#icon-js"></use>
                </svg>
                <p>Individual project</p>
              </div>

              <div>
                <h2>name:{project.name}</h2>
                <p>description:</p>
                <p>technologien:</p>
              </div>
            </li>
          ))}
        </ul>
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
