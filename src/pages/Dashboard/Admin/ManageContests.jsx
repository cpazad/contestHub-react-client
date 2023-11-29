import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { MdApproval } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
// import useAuth from "../../../Hooks/useAuth";

const ManageContests = () => {
  // const {user} = useAuth()
  const pending = <div className="flex items-center">
  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
  Pending
</div>;
  const [approval, setApproval] = useState(pending);
  const axiosSecure = useAxiosSecure();
  const { data: contest = [], refetch } = useQuery({
    queryKey: ["contest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contest");
      return res.data;
    },
  });

  const handleApproval = ({item}) => {
    const approved = <div className="flex items-center">
    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
    Approved
  </div>;
    setApproval(approved);
  };

  const handleDeleteContest = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/contest/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      {" "}
      <h2 className="text-3xl bg-slate-800 text-white py-3 mb-5 rounded-md">
        Manage Contests
      </h2>{" "}
      <div className="overflow-x-auto ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="px-5">
              <th scope="col" className="p-4">
                <div className="flex items-center ml-5">SL</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Approval Status
              </th>
              <th scope="col" className="px-6 py-3">
                Confirm
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {contest.map((item, index) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 px-5"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center ml-5">{index + 1}</div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold"> {item.name}</div>
                    <div className="font-normal text-gray-500">
                      {item.categroy}
                    </div>
                  </div>
                </th>
                {/* <td className="px-6 py-4">{item.deadline}</td> */}
                <td className="px-6 py-4">
                {item.approvalStatus === 'Pending' ? (
                      <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                      Pending
                    </div>
                    ) : (
                      <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Approved
                  </div>
                    )}
                    {item.approvalStatus}
                </td>
                <td className="px-6 py-4">
                  <button
                   onClick={() => handleApproval(item)}
                    className="btn bg-violet-400 btn-sm text-white "
                  >
                    <MdApproval />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteContest(item)}
                    className="btn bg-red-500 btn-sm"
                  >
                    <FaTrashAlt className="text-white text-lg"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContests;
