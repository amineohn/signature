import { useForm } from "react-hook-form";
import { useState, ChangeEvent } from "react";
import PageTransition from "../components/PageTransition";
import axios from "axios";
const Auth = () => {
  const [, setCode] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("code", data.code);
    axios
      .post(`http://${window.location.hostname}:3001/api/auth`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response)
      .then((body) => console.log(body));
  };
  return (
    <PageTransition>
      <div className="flex justify-center items-center xl:my-56 md:my-60 sm:my-60 my-20">
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">
          <div>
            <h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">
              Code d'accès
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isSubmitSuccessful && (
              <PageTransition>
                <div className="shadow-md p-2 flex flex-row rounded-lg">
                  <div className="bg-green-500 inline-block rounded-lg p-1 mr-1"></div>
                  <b className="p-1">Succès</b>
                  <p className="p-1">Redirection vers la génération </p>
                </div>
              </PageTransition>
            )}
            <div
              className={`grid justify-center grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 mb-4 -mx-2 ${
                isSubmitSuccessful && `mt-4`
              }`}
            >
              <div className="grid grid-cols-1">
                <input
                  {...register("code", { required: true })}
                  onChange={onCodeChange}
                  type="text"
                  placeholder="Code d'accès"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.code && `border-green-500`
                  }`}
                />
                {errors.code && (
                  <PageTransition>
                    <span
                      role="alert"
                      className="text-green-500 font-normal text-xs inline-flex mt-2"
                    >
                      Champs obligatoires.
                    </span>
                  </PageTransition>
                )}
              </div>
            </div>
            <div className="flex space-x-2 mt-2 justify-center">
              <div className="grid text-center">
                <button
                  aria-label="Submit"
                  className={`py-3 w-28 text-normal text-white bg-green-600 hover:bg-green-700 transition rounded-2xl`}
                >
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Auth;
