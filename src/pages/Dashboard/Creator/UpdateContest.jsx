import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineUpdate } from "react-icons/md";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateContest = () => {
  const { name, category, fee, prize, deadline, details, instruction, _id } =
    useLoaderData();
  console.log("getting data from useloader",name, category, fee, prize, deadline, _id);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the contest item data to the server with the image url
      const contestItem = {
        name: data.name,
        category: data.category,
        fee: parseFloat(data.fee),
        prize: data.prize,
        deadline: data.deadline,
        details: data.details,
        instruction: data.instruction,
        image: res.data.data.display_url,
      };
      //
      const contestRes = await axiosSecure.patch(
        `/contest/${_id}`,
        contestItem
      );
      console.log(contestRes.data);
      
      if (contestRes.data.modifiedCount > 0) {
        
        // show success popup
        //reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is Updated to the contest.`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/mycontests");
      }
    }
    console.log("with image url", res.data);
  };
  return (
    <div>
      {" "}
      <div className="sm:px-40 py-10 mx-10 bg-violet-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-1">
            <label className="label">
              <span className="label-text"> Contest Name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Contest Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Category/Tags*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option className="capitalize" value="business contest">
                  business contest
                </option>
                <option className="capitalize" value="medical contest">
                  medical contest
                </option>
                <option className="capitalize" value="writing contest">
                writing contest
                </option>
                <option className="capitalize" value="gaming contest">
                  Gaming Contest{" "}
                </option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text"> Participation Fee $*</span>
              </label>
              <input
                type="number"
                defaultValue={fee}
                placeholder="Fee Amount"
                {...register("fee", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* contest Prize */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text"> Contest Prize*</span>
              </label>
              <input
                type="text"
                defaultValue={prize}
                placeholder="Winning Prize"
                {...register("prize", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            {/* DeadLine */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text"> Deadline*</span>
              </label>
              <input
                type="date"
                defaultValue={deadline}
                placeholder="Insert date"
                {...register("deadline", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* contest details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Contest Details</span>
            </label>
            <textarea
              defaultValue={details}
              {...register("details")}
              className="textarea textarea-bordered h-24"
              placeholder="Contest Details Here"
            ></textarea>
          </div>
          {/* Task Submission Instruction */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Task Submission Instruction </span>
            </label>
            <textarea
              defaultValue={instruction}
              {...register("instruction")}
              className="textarea textarea-bordered h-24"
              placeholder="Task Submission Instruction Here"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn btn-warning bg-red-800 text-white ">
            Update Contest <MdOutlineUpdate className="ml-4 text-lg" />
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default UpdateContest;
