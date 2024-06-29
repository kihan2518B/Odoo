// import React, { useState } from "react";

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([
//     {
//       id: 1,
//       author: "John Michael",
//       email: "john@creative-tim.com",
//       function: "Manager",
//       organization: "Organization",
//       status: "ONLINE",
//       employed: "23/04/18",
//     },
//     {
//       id: 2,
//       author: "Alexa Liras",
//       email: "alexa@creative-tim.com",
//       function: "Programator",
//       developer: "Developer",
//       status: "OFFLINE",
//       employed: "11/01/19",
//     },
//     {
//       id: 3,
//       author: "Laurent Perrier",
//       email: "laurent@creative-tim.com",
//       function: "Executive",
//       projects: "Projects",
//       status: "ONLINE",
//       employed: "19/09/17",
//     },
//     {
//       id: 4,
//       author: "Michael Levi",
//       email: "michael@creative-tim.com",
//       function: "Programator",
//       developer: "Developer",
//       status: "ONLINE",
//       employed: "24/12/08",
//     },
//     {
//       id: 5,
//       author: "Richard Gran",
//       email: "richard@creative-tim.com",
//       function: "Manager",
//       executive: "Executive",
//       status: "OFFLINE",
//       employed: "04/10/21",
//     },
//     {
//       id: 6,
//       author: "Miriam Eric",
//       email: "miriam@creative-tim.com",
//       function: "Programtor",
//       developer: "Developer",
//       status: "OFFLINE",
//       employed: "14/09/20",
//     },
//   ]);

//   const handleEdit = (id) => {
//     // Handle edit logic here, e.g., open a modal or redirect to an edit page
//     console.log(`Edit employee with ID: ${id}`);
//   };

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>AUTHOR</th>
//           <th>FUNCTION</th>
//           <th>STATUS</th>
//           <th>EMPLOYED</th>
//           <th>ACTION</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((employee) => (
//           <tr key={employee.id}>
//             <td>
              
//               <div className="info">
//                 <p>{employee.author}</p>
//                 <p>{employee.email}</p>
//               </div>
//             </td>
//             <td>
//               <p>{employee.function}</p>
//               {employee.organization && <p>{employee.organization}</p>}
//               {employee.developer && <p>{employee.developer}</p>}
//               {employee.projects && <p>{employee.projects}</p>}
//               {employee.executive && <p>{employee.executive}</p>}
//             </td>
//             <td>
//               <button
//                 className={`status ${employee.status.toLowerCase()}`}
//                 disabled
//               >
//                 {employee.status}
//               </button>
//             </td>
//             <td>{employee.employed}</td>
//             <td>
//               <button onClick={() => handleEdit(employee.id)}>Edit</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default EmployeeList;

import React, { useState } from "react";
// import "./EmployeeList.css"; // Import your CSS file for styling
import "./member.css"

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      author: "John Michael",
      email: "john@creative-tim.com",
      function: "Manager",
      organization: "Organization",
      status: "ONLINE",
      employed: "23/04/18",
    },
    {
      id: 2,
      author: "Alexa Liras",
      email: "alexa@creative-tim.com",
      function: "Programator",
      developer: "Developer",
      status: "OFFLINE",
      employed: "11/01/19",
    },
    {
      id: 3,
      author: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      function: "Executive",
      projects: "Projects",
      status: "ONLINE",
      employed: "19/09/17",
    },
    {
      id: 4,
      author: "Michael Levi",
      email: "michael@creative-tim.com",
      function: "Programator",
      developer: "Developer",
      status: "ONLINE",
      employed: "24/12/08",
    },
    {
      id: 5,
      author: "Richard Gran",
      email: "richard@creative-tim.com",
      function: "Manager",
      executive: "Executive",
      status: "OFFLINE",
      employed: "04/10/21",
    },
    {
      id: 6,
      author: "Miriam Eric",
      email: "miriam@creative-tim.com",
      function: "Programtor",
      developer: "Developer",
      status: "OFFLINE",
      employed: "14/09/20",
    },
  ]);

  const handleEdit = (id) => {
    // Handle edit logic here, e.g., open a modal or redirect to an edit page
    console.log(`Edit employee with ID: ${id}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>AUTHOR</th>
          <th>FUNCTION</th>
          <th>STATUS</th>
          <th>EMPLOYED</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <div className="info">
                <p>{employee.author}</p>
                <p>{employee.email}</p>
              </div>
            </td>
            <td>
              <p>{employee.function}</p>
              {employee.organization && <p>{employee.organization}</p>}
              {employee.developer && <p>{employee.developer}</p>}
              {employee.projects && <p>{employee.projects}</p>}
              {employee.executive && <p>{employee.executive}</p>}
            </td>
            <td>
              <button
                className={`status ${employee.status.toLowerCase()}`}
                disabled
              >
                {employee.status}
              </button>
            </td>
            <td>{employee.employed}</td>
            <td>
              <button className="edit-button" onClick={() => handleEdit(employee.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;