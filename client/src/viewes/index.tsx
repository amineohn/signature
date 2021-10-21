import { useForm } from "react-hook-form";
import { useState, ChangeEvent } from "react";
import PageTransition from "../components/PageTransition";
import axios from "axios";
import FadeIn from "react-fade-in";
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
  const [showModal, setShowModal] = useState(false);
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
    formData.append("FileName", data.FileName);
    formData.append("File", data.File);
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

    console.log(data);
  };
  return (
    <PageTransition>
      <div className="flex justify-center items-center xl:my-56 md:my-60 sm:my-60 my-20">
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">
          <div>
            <h1 className="text-2xl font-bold text-center mb-4">
              Générer une signature <span>&#128079;</span>
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isSubmitSuccessful && (
              <PageTransition>
                <div className="shadow-md p-2 flex flex-row rounded-lg">
                  <div className="bg-green-500 inline-block rounded-lg p-1 mr-1"></div>
                  <b className="p-1">Succès</b>
                  <p className="p-1">
                    La signature a été crée <span>&#128075;</span>
                  </p>
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
                <span className="text-normal leading-normal text-center inline-flex cursor-pointer ml-4">
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
                  className={`py-3 text-normal text-white bg-green-600 hover:bg-green-700 transition rounded-2xl ${
                    isSubmitSuccessful
                      ? `w-28 transition-all`
                      : `w-56 transition-all`
                  }`}
                >
                  Générer
                </button>
              </div>

              {isSubmitSuccessful && (
                <PageTransition>
                  <div className="grid text-center">
                    <a
                      onClick={() => setShowModal(true)}
                      className="py-3 w-28 text-normal text-white bg-gray-700 hover:bg-gray-900 transition rounded-2xl cursor-pointer"
                    >
                      Aperçu
                    </a>
                  </div>
                </PageTransition>
              )}
            </div>
          </form>
        </div>
      </div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <FadeIn>
                <div className="relative w-auto my-6 mx-auto max-w-3xl focus:transition hover:transition">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none focus:transition hover:transition">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t focus:transition hover:transition">
                      <h3 className="text-3xl font-semibold">Aperçu</h3>
                      <button
                        className="z-30 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          width="30"
                          height="30"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="times-circle"
                          className="text-red-600 text-current p-1 rounded-full ease-linear transition-all duration-150 hover:bg-opacity-50 hover:bg-red-300"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="relative p-6 flex-auto overflow-hidden">
                      <iframe
                        src={`http://${window.location.hostname}:3001/api/preview`}
                        className="w-80 h-48"
                      ></iframe>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-gray-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-opacity-50 hover:bg-gray-200 rounded-2xl"
                        type="button"
                      >
                        <span className="inline-flex">
                          <svg
                            width="20"
                            height="20"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="cloud-download-alt"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path
                              fill="currentColor"
                              d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"
                            ></path>
                          </svg>
                          <span className="ml-1">
                            <a
                              href={`http://${window.location.hostname}:3001/download/signature.zip`}
                              download
                            >
                              Télécharger
                            </a>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </PageTransition>
  );
};

export default Index;
