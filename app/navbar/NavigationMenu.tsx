"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imageSrc from "../../public/conde-nast-logo.jpg";
import styles from "./NavigationMenu.module.css";
import clsx from "clsx";

const NavigationMenu = () => {
  const [activePrimaryMenu, setActivePrimaryMenu] = useState<string>("");
  const [activeSecondaryMenu, setActiveSecondaryMenu] = useState<string>("");
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);

  const handleActivePrimaryMenu = (menu: string) => {
    setActivePrimaryMenu(menu);
  };
  const handleActiveSecondaryMenu = (menu: string) => {
    setActiveSecondaryMenu(menu);
    if (openHamburgerMenu) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    setOpenHamburgerMenu(!openHamburgerMenu);
  };

  return (
    <div>
      <div className={styles.header}>
        <Link href="/" onClick={() => handleActivePrimaryMenu("")}>
          <Image
            src={imageSrc}
            alt="Conde Nast Logo"
            width={100}
            height={100}
            loading="lazy"
          />
        </Link>
        {!openHamburgerMenu && (
          <Link href="#" onClick={() => toggleMenu()}>
            <button className={styles.hamburger} role="button" type="button">
              <div className={styles.navigation}>
                <svg
                  focusable="false"
                  viewBox="0 0 32 32"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Open primary menus</title>
                  <path
                    d="M8 10h16v2H8v-2zm0 5h16v2H8v-2zm0 5h16v2H8v-2z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        )}
      </div>

      <nav
        arial-label="primary menus"
        className={clsx(styles.primaryNavigation, {
          [styles.open]: openHamburgerMenu,
        })}
      >
        {openHamburgerMenu && (
          <Link href="#" onClick={() => toggleMenu()}>
            <button className={styles.hamburger} role="button" type="button">
              <svg
                focusable="false"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                role="none"
              >
                <title>Close primary menus</title>
                <path
                  d="M16 14.586l6.364-6.364 1.414 1.414L17.414 16l6.364 6.364-1.414 1.414L16 17.414l-6.364 6.364-1.414-1.414L14.586 16 8.222 9.636l1.414-1.414z"
                  fillRule="nonzero"
                ></path>
              </svg>
            </button>
          </Link>
        )}
        <ul className={clsx(styles.menus, styles.primaryMenuList)}>
          <li>
            <Link
              href="/mode"
              className={clsx(styles.primaryMenu, {
                [styles.active]: activePrimaryMenu === "mode",
              })}
              onClick={() => handleActivePrimaryMenu("mode")}
            >
              Mode
            </Link>
          </li>
          <li>
            <Link
              href="/tech"
              className={clsx(styles.primaryMenu, {
                [styles.active]: activePrimaryMenu === "tech",
              })}
              onClick={() => handleActivePrimaryMenu("tech")}
            >
              Tech
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.secondaryNavigationContainer}>
        <nav
          arial-label="secondary menus"
          className={styles.secondaryNavigation}
        >
          {activePrimaryMenu === "mode" && (
            <div>
              <h3 className="text-center">MODE</h3>
              <ul className={clsx(styles.menus, styles.secondaryNavigation)}>
                <li>
                  <Link
                    href="/mode"
                    className={clsx(styles.secondaryMenuLink, {
                      [styles.active]:
                        activeSecondaryMenu === "mode-alle-themen",
                    })}
                    onClick={() =>
                      handleActiveSecondaryMenu("mode-alle-themen")
                    }
                  >
                    Alle Themen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mode/mode-news"
                    className={clsx(styles.secondaryMenuLink, {
                      [styles.active]: activeSecondaryMenu === "mode-news",
                    })}
                    onClick={() => handleActiveSecondaryMenu("mode-news")}
                  >
                    Mode News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mode/modetrends"
                    className={clsx(styles.secondaryMenuLink, {
                      [styles.active]:
                        activeSecondaryMenu === "mode-modetrends",
                    })}
                    onClick={() => handleActiveSecondaryMenu("mode-modetrends")}
                  >
                    Modetrends
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mode/uhren"
                    className={clsx(styles.secondaryMenuLink, {
                      [styles.active]: activeSecondaryMenu === "mode-uhren",
                    })}
                    onClick={() => handleActiveSecondaryMenu("mode-uhren")}
                  >
                    Uhren
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {activePrimaryMenu === "tech" && (
            <div>
              <h3 className="text-center">TECH</h3>
              <ul className={clsx(styles.menus, styles.secondaryNavigation)}>
                <li>
                  <Link
                    href="/tech"
                    className={clsx(styles.secondaryMenuLink, {
                      [styles.active]:
                        activeSecondaryMenu === "tech-alle-themen",
                    })}
                    onClick={() =>
                      handleActiveSecondaryMenu("tech-alle-themen")
                    }
                  >
                    Alle Themen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tech/news"
                    className={clsx(styles.secondaryMenuLink, {
                      [styles.active]: activeSecondaryMenu === "tech-news",
                    })}
                    onClick={() => handleActiveSecondaryMenu("tech-news")}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tech/ratgeber"
                    className={clsx(styles.secondaryMenuLink, {
                      [styles.active]: activeSecondaryMenu === "tech-ratgeber",
                    })}
                    onClick={() => handleActiveSecondaryMenu("tech-ratgeber")}
                  >
                    Ratgeber
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavigationMenu;
