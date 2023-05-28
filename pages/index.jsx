import Image from "next/image";
import MetamaskSvg from "../public/images/metamaskFox.svg";
import BackgroundImage from "next/image";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  AppContextProps,
  BlockchainContext,
} from "../context/BlockchainContext";
import { AddUser, GetUser, GetUser2 } from "./api/blockchain";

import web3 from "web3";
function Login() {
  const router = useRouter();
  const { getProvider, connectedAccount, connectWallet, disconnect } =
    useContext(BlockchainContext);
  const [ans, setAns] = useState(undefined);
  const [name, setName] = useState("fd");
  const [pan, setPan] = useState("df");
  const [seller, setSeller] = useState(false);
  const [done, setDone] = useState(false);

  async function addUser() {
    let response = await AddUser(getProvider, seller, name, pan);
    if (response !== null) {
      console.log("user made successfully");
    } else {
      console.log("creation error");
    }
    console.log(response);
    checker();
    // router.push("/home");
  }

  async function getUser2() {
    console.log(connectedAccount, " is lol");
    let response = await GetUser(getProvider, connectedAccount);
    return response;
  }

  async function route() {
    if (ans) {
      if (ans[1] === true) {
        console.log("seller");
        router.push("/seller_dashboard");
      } else if (ans[1] === false) {
        console.log("buyer");
        router.push("/user_dashboard");
      } else {
        router.push("/404");
      }
    }
  }

  async function checker() {
    // handlCheck();
    if (connectedAccount && !done) {
      console.log(connectedAccount);
      let resp = await getUser2();
      // console.log(resp, "  sdsdds is the resp");
      console.log(resp);
      console.log(resp[3] !== "", "user already exists");
      setAns(resp);
      setDone(true);
    }
  }

  useEffect(checker);

  console.log(seller, " her");
  console.log(name, "dss her");
  
  return (
    <section className="h-screen ">
       <div className="flex items-center justify-center h-full">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-center bg-no-repeat bg-cover opacity-[0.25]"
          style={{
            backgroundImage: "url('/images/background.webp')",
          }}
        ></div>
        <div className="relative">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="/images/greengrid.webp"
              
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20  xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0" style={{ color: 'black' }}>
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                {!connectedAccount ? (
                  <p className="text-4xl mb-0 text-center" style={{ color: 'black' }}>
                    Login in / Sign up
                  </p>
                ) : (
                  <p className="text-4xl mb-0 text-center text-black-500"style={{ color: 'black' }}>Wallet Connected</p>
                )}
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" style={{ color: 'black' }}>
                <p className="text-center font-semibold mx-4 mb-0 text-black-900" style={{ color: 'black' }}>
                  Let&apos;s go!
                </p>
              </div>

              {connectedAccount ? (
                <>
                  <p className="text-xl mb-0 text-left md:pb-4"style={{ color: 'black' }}>
                    {connectedAccount}
                  </p>

                  {ans && ans[3] > "" ? (
                    <>
                      <p className="block w-4/5 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        Seller : {JSON.stringify(ans[1])}
                      </p>
                      <p className="block w-4/5 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">Name : {ans[2]}</p>
                      <p className="block w-4/5 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">Pan Number : {ans[3]}</p>
                      <br />
                      <button
                        type="button"
                        className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={(e) => {
                          route();
                        }}
                      >
                        Go to Dashboard
                      </button>
                    </>
                  ) : (
                    <form>
                      <div className="mb-6 ">
                        <input
                          type="checkbox"
                          id="exampleFormControlInput2"
                          placeholder="Seller"
                          value={seller}
                          onChange={(e) => {
                            setSeller(e.target.checked);
                          }}
                        />
                        <span className="text-lg ml-2">Become a seller</span>
                      </div>

                      <div className="mb-6 ">
                        <input
                          type="text"
                          className="form-control block w-3/5 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput2"
                          placeholder="Name"
                          onChange={(e) => {
                            e.preventDefault();
                            setName(e.target.value);
                          }}
                        />
                      </div>

                      <div className="mb-6 ">
                        <input
                          type="text"
                          className="form-control block w-3/5 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput2"
                          placeholder="PAN"
                          onChange={(e) => {
                            e.preventDefault();
                            setPan(e.target.value);
                          }}
                        />
                      </div>

                      <div className="text-center lg:text-left">
                        <button
                          type="button"
                          className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                          onClick={(e) => {
                            addUser();
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  )}
                </>
              ) : (
                <>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="text-green-900 bg-white hover:bg-green-100 border border-green-200 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-600 dark:bg-green-800 dark:border-green-700 dark:text-white dark:hover:bg-green-700 mr-2 mb-2"
                      onClick={(e) => {
                        e.preventDefault();
                        connectWallet(true);
                      }}
                    >
                      <Image src={MetamaskSvg} alt={"h"} />
                      Login with MetaMask
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

Login.layout = "L2";
export default Login;
