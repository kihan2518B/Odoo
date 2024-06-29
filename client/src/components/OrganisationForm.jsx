

// export default function App() {

//     // const {user} = useClerk()


//     return (
//         <header>

//             <div className="text-black">
//                 <div>
//                     <h1 className="text-primary text-center text-4xl mb-2">
//                         Profile section
//                     </h1>
//                     <div className="container max-w-screen-lg mx-auto">
//                         <form
//                             className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
//                         >
//                             <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
//                                 <div className="lg:col-span-2">
//                                     <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//                                         <div className="md:col-span-5">
//                                             <label>Organization Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                                 placeholder="Organization Name"
//                                             />
//                                         </div>

//                                         <div className="md:col-span-5">
//                                             <label>Email Address</label>
//                                             <input
//                                                 type="text"
//                                                 name="email"
//                                                 id="email"
//                                                 className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                                 disabled={true}
//                                                 placeholder="email@domain.com"
//                                             />
//                                         </div>

//                                         <div className="md:col-span-3">
//                                             <label>Team Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                                 placeholder="Team Name"
//                                             />
//                                         </div>

//                                         <div className="md:col-span-2">
//                                             <label>No of members</label>
//                                             <input
//                                                 type="number"
//                                                 className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                                 placeholder="Ex:- 5"
//                                             />
//                                         </div>

//                                         <div>
//                                             <label className="p-2 inline-flex items-center gap-2">
//                                                 <input id="adm" type="checkbox" className="" value={'1'}  //true false 1 and 0
//                                                 // checked={admin}
//                                                 // onChange={ev => setAdmin(ev.target.checked)}
//                                                 />
//                                                 <span>Admin</span>
//                                             </label>
//                                         </div>


//                                         <div className="md:col-span-5 text-right">
//                                             <div className="inline-flex items-end mt-4">
//                                                 <button className="bg-red-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
//                                                     Submit
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }


import { useState } from "react";
import axios from "axios";

export default function App() {
    const [organizationName, setOrganizationName] = useState("");
    const [email, setEmail] = useState("");
    const [teamName, setTeamName] = useState("");
    const [numberOfMembers, setNumberOfMembers] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/organisation", {
                name: organizationName,
                email,
                address: teamName,
                phone: numberOfMembers,
            });

            console.log("Organization created:", response.data);
        } catch (error) {
            console.error("Error creating organization:", error);
        }
    };

    return (
        <header>
            <div className="text-black">
                <div>
                    <h1 className="text-primary text-center text-4xl mb-2">
                        Profile section
                    </h1>
                    <div className="container max-w-screen-lg mx-auto">
                        <form
                            className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label>Organization Name</label>
                                            <input
                                                type="text"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Organization Name"
                                                value={organizationName}
                                                onChange={(e) => setOrganizationName(e.target.value)}
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label>Email Address</label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                // disabled={true}
                                                placeholder="email@domain.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>


                                        <div className="md:col-span-3">
                                            <label>Team Name</label>
                                            <input
                                                type="text"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Team Name"
                                                value={teamName}
                                                onChange={(e) => setTeamName(e.target.value)}
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label>No of members</label>
                                            <input
                                                type="number"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="Ex:- 5"
                                                value={numberOfMembers}
                                                onChange={(e) => setNumberOfMembers(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="p-2 inline-flex items-center gap-2">
                                                <input
                                                    id="adm"
                                                    type="checkbox"
                                                    value={isAdmin}
                                                    checked={isAdmin}
                                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                                />
                                                <span>Admin</span>
                                            </label>
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end mt-4">
                                                <button
                                                    type="submit"
                                                    className="bg-red-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
