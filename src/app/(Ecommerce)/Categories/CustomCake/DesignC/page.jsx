"use client";

import { Open_Sans, Luckiest_Guy } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
const luckiestguy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });
import React from "react";
import Waves from "@/app/components/WavesComponent/Waves";
import CardC from "@/app/components/CardCustom/Card";
import Image from "next/image";
import pinkCake from "../../../../../../public/customC/pinkCake.webp";
import Cake1 from "../../../../../../public/customC/pinkandGold.webp";
import Cake2 from "../../../../../../public/customC/extrachoco.webp";
import Cake3 from "../../../../../../public/customC/flowerandgold.webp";
import Cake4 from "../../../../../../public/customC/flowerCake.webp";
import Cake5 from "../../../../../../public/customC/watercolorFairy.webp";
import Cake6 from "../../../../../../public/customC/chocoDrip.webp";
import ProgressDiseno from "./Progreso";
import "./styles.css";

export default function diseño() {
  return (
    <>
      <main>
        <div
          className="grid  grid-cols-1 md:grid-cols-2 "
          style={{ paddingBottom: 0 }}
          id="titulo"
        >
          <div className="mt-10">
            <h1
              className={[
                luckiestguy.className +
                  " text-5xl tracking-wide text-center md:text-6xl xl:text-7xl md:pt-16 xl:pt-20",
              ]}
            >
              Vamos a crear tu pastel!
            </h1>
            <h2
              className={[
                opensans.className + " text-3xl mt-2 text-center text-gray-700",
              ]}
            >
              Sigue los pasos
            </h2>
          </div>
          <div>
            <Image
              className=" w-full  h-auto -mb-20 mt-10 md:-mb-30 md:mt-0 xl:w-[500px] xl:mt-16  "
              src={pinkCake}
            ></Image>
          </div>
        </div>
        <div className="relative md:h-10 xl:h-16 -ml-5" id="titulo">
          <Waves color="#FFDDCC"></Waves>
        </div>
        <div className="h-[100px] md:h-[190px] xl:h-[220px]" id="sub1">
          <p
            className={[
              opensans.className +
                " text-3xl text-center text-gray-700 pt-12 md:text-6xl md:pt-24 xl:pt-28",
            ]}
          >
            3. Diseño
          </p>
        </div>
        <div className="relative md:h-10 xl:h-16 -ml-5" id="sub1">
          <Waves color="#ffb0cd"></Waves>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:py-10 md:px-10 bg-[#eef6fb] justify-items-center gap-4 ">
          <div className="mt-20 ">
            <CardC
              img={Cake1}
              text="Buttercream rosa con hojas de oro comestible"
            ></CardC>
          </div>
          <div className="mt-10 md:mt-20">
            <CardC img={Cake2} text="Buttercream de chocolate"></CardC>
          </div>
          <div className=" mt-10  md:mt-20  ">
            <CardC
              img={Cake3}
              text="Flores rosas (Stencil) y oro comestible"
            ></CardC>
          </div>
          <div className=" mt-10  md:mt-20 ">
            <CardC
              img={Cake4}
              text="Buttercream de vainilla con flores de colores"
            ></CardC>
          </div>
          <div className=" mt-10  md:mt-20 ">
            <CardC img={Cake5} text="Diseño de acuarelas"></CardC>
          </div>
          <div className="mb-10 mt-10  md:mt-20 ">
            <CardC img={Cake6} text="Buttercream de cookies n' cream"></CardC>
          </div>
        </div>
        <ProgressDiseno></ProgressDiseno>
      </main>
    </>
  );
}
