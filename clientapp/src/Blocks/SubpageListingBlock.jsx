import React from "react";

const SubpageListingBlock = ({ content, settings, pages = [] }) => {
  if (!content?.properties || !settings?.properties) return null;

  const cProps = content.properties;
  const sProps = settings.properties;

  const visiblePages = pages
    .filter((page) =>
      cProps.hideCurrentPageFromList ? !page.isCurrent : true
    )
    .slice(0, cProps.pagesToDisplay || pages.length);

  return (
    <section
      id={sProps.anchorName || undefined}
      className={`subpage-listing ${
        sProps.itemsPerRow8 || ""
      } ${sProps.animate ? `animate ${sProps.animationStyle}` : ""} ${
        sProps.customClasses || ""
      }`}
      style={{
        backgroundColor: sProps.backgroundColor?.value
      }}
    >
      {/* INTRO */}
      {cProps.displayIntro && (
        <div className={`listing-intro ${cProps.introTextAlignment || ""}`}>
          {cProps.introHeading && <h2>{cProps.introHeading}</h2>}
          {cProps.introSecondaryHeading && (
            <h3>{cProps.introSecondaryHeading}</h3>
          )}
          {cProps.introText?.markup && (
            <div
              dangerouslySetInnerHTML={{
                __html: cProps.introText.markup
              }}
            />
          )}
        </div>
      )}

      {/* LIST */}
      <div className="listing-grid">
        {visiblePages.map((page) => (
          <ListingItem
            key={page.id}
            page={page}
            settings={sProps}
          />
        ))}
      </div>

      {/* OUTRO */}
      {cProps.displayOutro && (
        <div className="listing-outro">
          {cProps.outroHeading && <h2>{cProps.outroHeading}</h2>}
          {cProps.outroText?.markup && (
            <div
              dangerouslySetInnerHTML={{
                __html: cProps.outroText.markup
              }}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default SubpageListingBlock;

/* ======================================================
   SINGLE LIST ITEM
====================================================== */

const ListingItem = ({ page, settings }) => {
  return (
    <article
      className={`listing-item ${
        settings.itemTextPosition || ""
      } ${settings.itemTextAlignment || ""}`}
    >
      {!settings.hideImage && page.image && (
        <div className={`listing-image ${settings.imageStyle || ""}`}>
          <img
            src={page.image.url}
            alt={page.image.alt || page.title}
            style={{
              opacity: settings.imageOpacity
                ? settings.imageOpacity / 100
                : 1
            }}
          />
        </div>
      )}

      <div className="listing-content">
        <h3 className={`heading-${settings.itemHeadingSize || "md"}`}>
          {page.title}
        </h3>

        {page.excerpt && (
          <p className="listing-excerpt">{page.excerpt}</p>
        )}

        <a href={page.url} className="listing-link">
          View page →
        </a>
      </div>
    </article>
  );
};
