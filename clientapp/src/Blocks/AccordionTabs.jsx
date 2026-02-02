import React, { useMemo } from "react";

/**
 * JS equivalent of SiteBuilderService.GetAccordionTabOpen
 */
const shouldAccordionBeOpen = (index, total, accordionOptions) => {
  if (!accordionOptions) return index === 0;

  switch (accordionOptions) {
    case "accordionClosed":
      return false;

    case "accordionOpenFirst":
      return index === 0;

    case "accordionOpenAll":
      return true;

    default:
      return index === 0;
  }
};

const AccordionTab = ({ block, siteBuilderService }) => {
  if (!block?.content || !block?.settings) return null;

  const content = block.content.properties;
  const settings = block.settings.properties;

  if (settings.hideFromWebsite) return null;

  const accordionTabs = useMemo(() => {
    return (
      content.accordionTabs?.items?.filter(
        (x) => !x.settings?.properties?.hideFromWebsite
      ) || []
    );
  }, [content]);

  if (!accordionTabs.length) return null;

  // Generate ONCE – critical for Bootstrap tabs
  const uniqueID = useMemo(() => crypto.randomUUID(), []);

  const tabStyle = settings.accordionTabStyle || "tab-basic";
  const animationClass = settings.animate ? "os-animation" : "";

  /* =====================================================
     ACCORDION LAYOUT
     ===================================================== */
  if (settings.repeaterStyle === "layoutAccordion") {
    const itemTotal = accordionTabs.length;

    return (
      <div
        className={`repeatable accordion ${tabStyle} ${animationClass}`}
        data-os-animation={settings.animationStyle}
        data-os-animation-delay={settings.animationDelay}
        data-os-animation-duration={settings.animationDuration}
      >
        {accordionTabs.map((item, index) => {
          const itemContent = item.content.properties;
          const itemSettings = item.settings.properties;

          const openAccordion = shouldAccordionBeOpen(
            index,
            itemTotal,
            settings.accordionOptions
          );

          const openClass = openAccordion ? "show" : "";
          const collapseClass = openAccordion ? "" : "collapsed";

          const anchor = itemSettings.anchorName
            ? siteBuilderService?.makeAnchorSafe(
                itemSettings.anchorName
              )
            : null;

          return (
            <React.Fragment key={item.content.id}>
              <p
                className={`tab ${itemSettings.customClasses || ""}`}
                {...(anchor ? { id: anchor } : {})}
              >
                <a
                  className={`nav-link nav-button-link ${collapseClass}`}
                  data-bs-toggle="collapse"
                  href={`#collapse_${uniqueID}_${index + 1}`}
                  role="button"
                  aria-expanded={openAccordion}
                  aria-controls={`collapse_${uniqueID}_${index + 1}`}
                >
                  {itemContent.itemHeading}
                </a>
              </p>

              <div
                id={`collapse_${uniqueID}_${index + 1}`}
                className={`info repeatable-content collapse ${itemSettings.customClasses || ""} ${openClass}`}
              >
                <div
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: itemContent.repeaterText?.markup || "",
                  }}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  /* =====================================================
     TABBED LAYOUT
     ===================================================== */
  return (
    <div
      className={`repeatable tabbed ${tabStyle} ${animationClass}`}
      data-os-animation={settings.animationStyle}
      data-os-animation-delay={settings.animationDelay}
      data-os-animation-duration={settings.animationDuration}
    >
      {/* Tabs */}
      <nav className="tabs">
        <ul className="nav" role="tablist">
          {accordionTabs.map((item, index) => {
            const itemContent = item.content.properties;
            const itemSettings = item.settings.properties;
            const isActive = index === 0;

            return (
              <li
                key={item.content.id}
                className={`tab ${itemSettings.customClasses || ""}`}
                role="presentation"
              >
                <a
                  className={`nav-item nav-button-link nav-link ${
                    isActive ? "active" : ""
                  }`}
                  id={`nav_tab_${uniqueID}_${index + 1}`}
                  data-bs-toggle="tab"
                  href={`#nav_${uniqueID}_${index + 1}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`nav_${uniqueID}_${index + 1}`}
                >
                  {itemContent.itemHeading}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Tab Content */}
      <div className="repeatable-content tab-content">
        {accordionTabs.map((item, index) => {
          const itemContent = item.content.properties;
          const itemSettings = item.settings.properties;
          const isActive = index === 0;

          return (
            <div
              key={item.content.id}
              className={`info tab-pane fade ${
                itemSettings.customClasses || ""
              } ${isActive ? "show active" : ""}`}
              id={`nav_${uniqueID}_${index + 1}`}
              role="tabpanel"
              aria-labelledby={`nav_tab_${uniqueID}_${index + 1}`}
            >
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: itemContent.repeaterText?.markup || "",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionTab;
