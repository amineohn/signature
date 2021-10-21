import { useForm } from "react-hook-form";
import { useState, ChangeEvent } from "react";
import PageTransition from "../components/PageTransition";
import axios from "axios";
const Index = () => {
  const [, setFristName] = useState("");
  const [, setLastName] = useState("");
  const [, setFunction] = useState("");
  const [, setMail] = useState("");
  const [, setProNumber] = useState("");
  const [, setNumber] = useState("");
  const [, setAdress] = useState("");
  const [, setLink] = useState("");
  const [, setFile] = useState();
  const [, setNameFile] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFristName(e.target.value);
  };
  const onLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const onFunctionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFunction(e.target.value);
  };
  const onMailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const onProNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProNumber(e.target.value);
  };
  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const onAdressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };
  const onLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const onSaveFileChange = (e) => {
    setFile(e.target.files[0]);
    setNameFile(e.target.value);
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("filename", data.filename);
    formData.append("file", data.file);
    formData.append("FirstName", data.FirstName);
    formData.append("LastName", data.LastName);
    formData.append("Function", data.Function);
    formData.append("Mail", data.Mail);
    formData.append("ProNumber", data.ProNumber);
    formData.append("Number", data.Number);
    formData.append("Adress", data.Adress);
    formData.append("Link", data.Link);
    axios
      .post(`http://${window.location.hostname}:3001/generate`, formData, {
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
              Générer une signature
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isSubmitSuccessful && (
              <PageTransition>
                <div className="shadow-md p-2 flex flex-row rounded-lg">
                  <div className="bg-green-500 inline-block rounded-lg p-1 mr-1"></div>
                  <b className="p-1">Succès</b>
                  <p className="p-1">La signature a été créée :)</p>
                </div>
              </PageTransition>
            )}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 mb-4 -mx-2 ${
                isSubmitSuccessful && `mt-4`
              }`}
            >
              <div className="grid grid-cols-1">
                <input
                  type="text"
                  placeholder="Nom"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.FirstName && `border-green-500`
                  }`}
                  {...register("FirstName", { required: true })}
                  onChange={onFirstNameChange}
                />
                {errors.FirstName && (
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
              <div className="grid grid-cols-1">
                <input
                  {...register("LastName", { required: true })}
                  onChange={onLastNameChange}
                  type="text"
                  placeholder="Prénom"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.LastName && `border-green-500`
                  }`}
                />
                {errors.LastName && (
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
              <div className="grid grid-cols-1">
                <input
                  {...register("Function", { required: true })}
                  onChange={onFunctionChange}
                  type="text"
                  placeholder="Fonction"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.Function && `border-green-500`
                  }`}
                />
                {errors.Function && (
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
              <div className="grid grid-cols-1">
                <input
                  {...register("Mail", { required: true })}
                  onChange={onMailChange}
                  type="text"
                  placeholder="Email"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.Mail && `border-green-500`
                  }`}
                />
                {errors.Mail && (
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
              <div className="grid grid-cols-1">
                <input
                  {...register("ProNumber", { required: true })}
                  onChange={onProNumberChange}
                  type="text"
                  placeholder="Numéro Professionel"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.ProNumber && `border-green-500`
                  }`}
                />
                {errors.ProNumber && (
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
              <div className="grid grid-cols-1">
                <input
                  {...register("Number", { required: true })}
                  onChange={onNumberChange}
                  type="text"
                  placeholder="Numéro Personnel (si requis)"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.Number && `border-green-500`
                  }`}
                />
                {errors.Number && (
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
              <div className="grid grid-cols-1">
                <input
                  {...register("Adress", { required: true })}
                  onChange={onAdressChange}
                  type="text"
                  placeholder="Adresse de l'entreprise"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.Adress && `border-green-500`
                  }`}
                />
                {errors.Adress && (
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
              <div className="grid grid-cols-1">
                <input
                  {...register("Link", { required: true })}
                  onChange={onLinkChange}
                  type="text"
                  placeholder="Lien du site"
                  className={`block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:border focus:border-green-500 transition ${
                    errors.Link && `border-green-500`
                  }`}
                />
                {errors.Link && (
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
            <div className="flex justify-center space-x-2">
              <label
                className={`py-3 px-3 w-56 text-sm text-white bg-green-700 hover:bg-green-900 transition rounded-2xl ${
                  errors.file && `animate-bounce`
                }`}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={onSaveFileChange}
                  className="hidden"
                  {...register("file", { required: true })}
                />
                <span className=" text-normal leading-normal text-center inline-flex cursor-pointer ml-4">
                  <svg
                    width="20"
                    height="20"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="cloud-upload-alt"
                    className="svg-inline--fa fa-cloud-upload-alt fa-w-20"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"
                    ></path>
                  </svg>
                  <span className="ml-1">Selectionner une photo</span>
                </span>
              </label>
            </div>
            {errors.file && (
              <div className="flex justify-center">
                <PageTransition>
                  <span
                    role="alert"
                    className="text-green-500 font-normal text-xs inline-flex mt-2"
                  >
                    Champs obligatoires.
                  </span>
                </PageTransition>
              </div>
            )}

            <div className="flex space-x-2 mt-2 justify-center">
              <div className="grid text-center">
                <button
                  aria-label="Submit"
                  className={`py-3 w-28 text-normal text-white bg-green-600 hover:bg-green-700 transition rounded-2xl`}
                >
                  Générer
                </button>
              </div>
              <div className="grid text-center">
                <button
                  aria-label="Submit"
                  className="py-3 w-28 text-normal text-white bg-gray-700 hover:bg-gray-900 transition rounded-2xl"
                >
                  <a
                    href={`http://${window.location.hostname}:3001/preview`}
                    target="_blank"
                  >
                    Aperçu
                  </a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
