import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";

const Navigation = () => {
  const { navigation, design } = useSelector((state) => state.layout);

  if (!navigation) return null;

  const {
    hideMainNavigation,
    mainNavigation,
    hideSecondaryNavigation,
    secondaryNavigation,
    hideLanguageNavigation,
    languageHeading,
    languageHeadingIconImage,
  } = navigation.properties;

  const logoUrl = design?.properties?.logo?.[0]?.url;

  return (
    <header className="site-header">
      <div className="nav-wrapper">
        {/* =========================
            LOGO
           ========================= */}
        <Logo></Logo>

        {/* =========================
            MAIN NAVIGATION
           ========================= */}
        {!hideMainNavigation && Array.isArray(mainNavigation) && (
          <nav className="main-navigation">
            <ul className="nav">
              {mainNavigation.map((item, index) => {
                const link = item.link;
                if (!link) return null;

                const isModal =
                  link.linkTarget &&
                  link.linkTarget.includes("data-bs-toggle");

                return (
                  <li key={index} className="nav-item">
                    <a
                      href={link.linkUrl || "#"}
                      className="nav-link"
                      {...(isModal ? { "data-bs-toggle": "modal" } : {})}
                      {...(link.linkNewWindow
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {item.icon && <i className={item.icon} />}
                      {link.linkText}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        {/* =========================
            SECONDARY NAVIGATION (CTA)
           ========================= */}
        {!hideSecondaryNavigation &&
          Array.isArray(secondaryNavigation) &&
          secondaryNavigation.length > 0 && (
            <div className="secondary-navigation">
              {secondaryNavigation.map((btn, index) => {
                const link = btn.link;
                if (!link) return null;

                return (
                  <a
                    key={index}
                    href={link.linkUrl || "#"}
                    className={[
                      "btn",
                      btn.buttonStyle,
                      btn.sizeStyle,
                      btn.color?.label,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    {...(link.linkNewWindow
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                  >
                    {btn.icon && <i className={btn.icon} />}
                    {link.linkText}
                  </a>
                );
              })}
            </div>
          )}

        {/* =========================
            LANGUAGE NAVIGATION
           ========================= */}
        {!hideLanguageNavigation && (
          <div className="language-navigation">
            {languageHeadingIconImage?.[0]?.url && (
              <img
                src={languageHeadingIconImage[0].url}
                alt={languageHeading || "Language"}
                className="language-flag"
              />
            )}
            {languageHeading && (
              <span className="language-label">
                {languageHeading}
              </span>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
