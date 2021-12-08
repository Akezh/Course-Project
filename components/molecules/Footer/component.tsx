import React, { FC } from "react";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <div className="p-5 bg-light tw-mt-20" style={{ height: 360 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12 tw-pr-16">
            <p className="tw-font-bold tw-text-2xl mb-3">Rexar Hotel Chain</p>
            <p className="tw-text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              consectetur dolores est eum, eveniet excepturi expedita facere
              facilis illum ipsam nam non, omnis quia quidem reiciendis saepe
              unde velit veritatis?
            </p>
          </div>
          <div className="col-md-4 col-12 tw-px-16">
            <p className="tw-font-bold tw-text-2xl mb-3">Main links</p>
            <ul>
              <li className="mb-3">
                <Link href="/">
                  <p className="tw-text-xl mb-2 tw-cursor-pointer text-decoration-underline">
                    Home
                  </p>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/search">
                  <p className="tw-text-xl mb-2 tw-cursor-pointer text-decoration-underline">
                    Search hotels
                  </p>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/about">
                  <p className="tw-text-xl mb-2 tw-cursor-pointer text-decoration-underline">
                    About us
                  </p>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/login">
                  <p className="tw-text-xl mb-2 tw-cursor-pointer text-decoration-underline">
                    Sign in
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-12">
            <p className="tw-font-bold tw-text-2xl mb-3">Authors</p>
            <ul>
              <li>
                <p className="tw-text-lg mb-2">💻 Akezhan Rakishev</p>
              </li>
              <li>
                <p className="tw-text-lg mb-2">🖥 Yerkanat Makhayev</p>
              </li>
              <li>
                <p className="tw-text-lg mb-2">💻️ Dilnaz Amanzholova</p>
              </li>
              <li>
                <p className="tw-text-lg mb-2">🖥 Arafat Bauyrzhanuly</p>
              </li>
              <li>
                <p className="tw-text-lg mb-2">💻 Kamila Madaniyatova</p>
              </li>
              <li>
                <p className="tw-text-lg mb-2">🖥 Abay Kappassov </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
