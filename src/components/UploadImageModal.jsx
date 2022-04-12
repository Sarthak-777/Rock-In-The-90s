import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
import { uploadFiles } from "../services/firebase";
import useUser from "../hooks/use-user";

function UploadImageModal({ show, setShow }) {
  const { user } = useUser();
  const [progress, setProgress] = useState(0);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const formHandler = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file, user.userId, user.username, user.docId, setProgress);
  };

  return (
    <div
      id="defaultModal"
      tabindex="-1"
      // aria-hidden="true"
      class={`${
        show ? "null" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center transition-all ease-in bg-zinc-800 bg-opacity-50`}
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              Terms of Service
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={handleClose}
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form onSubmit={formHandler} className="">
            <div class="p-6 space-y-6">
              <input type="file" className="" />

              <div className="flex justify-center my-2">
                <h1 className="text-sm font-semibold text-zinc-600">
                  Uploaded:
                </h1>

                <h1 className="text-sm font-semibold text-zinc-500 ml-3">
                  {progress} %
                </h1>
              </div>
            </div>

            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleClose}
              >
                Upload
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div>
    //   <Modal show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Upload Your Profile Picture</Modal.Title>
    //     </Modal.Header>
    //     <form onSubmit={formHandler} className="">
    //       <Modal.Body>
    //         <input type="file" className="" />
    //         <div className="flex justify-center my-2">
    //           <h1 className="text-sm font-semibold text-zinc-600">
    //             Uploaded:{" "}
    //           </h1>
    //           <h1 className="text-sm font-semibold text-zinc-500 ml-3">
    //             {progress} %
    //           </h1>
    //         </div>
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={handleClose}>
    //           Close
    //         </Button>
    //         <Button type="submit" variant="primary" onClick={handleClose}>
    //           Upload Image
    //         </Button>
    //       </Modal.Footer>
    //     </form>
    //   </Modal>
    // </div>
  );
}

export default UploadImageModal;
