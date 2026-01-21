import React from "react";
/* =========================
   UTILITIES
========================= */

const hasValue = (v) =>
  v !== null && v !== undefined && v !== "" && !(Array.isArray(v) && v.length === 0);

const getTextPositionClass = (position) => {
  switch (position) {
    case "Text_TopLeft":
      return "justify-content-start align-content-start";
    case "Text_TopCenter":
      return "justify-content-center align-content-start";
    case "Text_TopRight":
      return "justify-content-end align-content-start";
    case "Text_CenterLeft":
      return "justify-content-start align-content-center";
    case "Text_CenterCenter":
      return "justify-content-center align-content-center";
    case "Text_CenterRight":
      return "justify-content-end align-content-center";
    case "Text_BottomLeft":
      return "justify-content-start align-content-end";
    case "Text_BottomCenter":
      return "justify-content-center align-content-end";
    case "Text_BottomRight":
      return "justify-content-end align-content-end";
    default:
      return "justify-content-center align-content-center";
  }
};

const Banner = ({ block }) => {
  const content = block?.content?.properties;
  const settings = block?.settings?.properties;

  if (!content?.banners?.items?.length || settings?.hideFromWebsite) return null;

  const banners = content.enableRandomOrder
    ? [...content.banners.items].sort(() => Math.random() - 0.5)
    : content.banners.items;

  const carouselEnabled = !settings.disableCarousel;
  const useCarousel = banners.length > 1 && carouselEnabled;

  return (
    <section
      id={settings.anchorName || undefined}
      className={`banner-component ${settings.customClasses || ""}`}
      data-component-name={settings.itemName || ""}
    >
      {useCarousel ? (
        <div className="slides">
          {banners.map((b) => (
            <BannerItem key={b.content.id} banner={b} />
          ))}
        </div>
      ) : (
        banners.map((b) => <BannerItem key={b.content.id} banner={b} />)
      )}
    </section>
  );
};

export default Banner;

const BannerItem = ({ banner }) => {
  const content = banner.content?.properties;
  const settings = banner.settings?.properties;

  if (settings?.hideFromWebsite) return null;

  const bannerStyleMap = {
    bannerSizeShort: "short-banner",
    bannerSizeMedium: "medium-banner",
    bannerSizeTakeover: "takeover-banner",
    bannerSizeScale: "scale-banner"
  };

  const bannerStyle =
    bannerStyleMap[settings.bannerStyle] || "medium-banner";

  const parallaxClass = settings.bannerParallax ? "parallax" : "";

  const opacityClass =
    settings.bannerAddColorOverlay && hasValue(settings.imageOpacity)
      ? `image-opacity-${settings.imageOpacity}`
      : "";

  const textAlignment = settings.bannerTextAlignment || "text-left";
  const textPosition = getTextPositionClass(settings.bannerTextPosition);

  return (
    <div
      id={settings.anchorName || undefined}
      className={`item ${bannerStyle} ${parallaxClass} ${settings.customClasses || ""}`}
    >
      <BannerMedia
        content={content}
        settings={settings}
        opacityClass={opacityClass}
      />

      {(hasValue(content.bannerHeading) ||
        hasValue(content.bannerText) ||
        hasValue(content.bannerButtons) ||
        hasValue(content.bannerSecondaryHeading)) && (
        <div className="inner">
          <div className="container">
            <div className={`row ${textAlignment} ${textPosition}`}>
              <div className="info col">
                <BannerHeadings content={content} />
                <BannerText html={content.bannerText} />
                <BannerButtons buttons={content.bannerButtons} />
              </div>
            </div>
          </div>
        </div>
      )}

      {settings.bannerScrollPrompt && (
        <ScrollPrompt style={settings.bannerScrollStyle} />
      )}
    </div>
  );
};


const BannerMedia = ({ content, settings, opacityClass }) => {
  const image = content.bannerImage?.[0];

  if (
    content.bannerVideoSource === "youtube" ||
    content.bannerVideoSource === "vimeo"
  ) {
    const videoId = content.bannerVideo3rdParty;
    const src =
      content.bannerVideoSource === "youtube"
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&playlist=${videoId}`
        : `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1`;

    return (
      <div className={`image ${opacityClass}`}>
        {image && <img src={image.url} alt={image.name || ""} />}
        <div className="video">
          <iframe src={src} title="Banner video" allow="autoplay; fullscreen" />
        </div>
      </div>
    );
  }

  if (content.bannerVideoSource === "mp4" && content.bannerVideoMP4) {
    return (
      <div className={`image ${opacityClass}`}>
        {image && <img src={image.url} alt={image.name || ""} />}
        <video autoPlay muted loop playsInline>
          <source src={content.bannerVideoMP4} type="video/mp4" />
        </video>
      </div>
    );
  }


  if (image) {
    return settings.bannerStyle === "bannerSizeScale" ? (
      <div className={`image ${opacityClass}`}>
        <img src={image.url} alt={image.name || ""} />
      </div>
    ) : (
      <div
        className={`image lazyload background-image ${opacityClass}`}
        style={{ backgroundImage: `url(${image.url})` }}
        role="img"
        aria-label={image.name || ""}
      />
    );
  }

  return null;
};

/* =========================
   TEXT BLOCKS
========================= */

const BannerHeadings = ({ content }) => {
  if (!content.bannerHeading && !content.bannerSecondaryHeading) return null;

  const Tag = content.bannerHeading?.headingTag || "h2";

  return (
    <>
      {content.bannerHeading && <Tag>{content.bannerHeading.text}</Tag>}
      {content.bannerSecondaryHeading && (
        <p className="secondary-heading">
          {content.bannerSecondaryHeading}
        </p>
      )}
    </>
  );
};

const BannerText = ({ html }) =>
  hasValue(html) ? (
    <div className="text" dangerouslySetInnerHTML={{ __html: html }} />
  ) : null;

const BannerButtons = ({ buttons }) =>
  hasValue(buttons) ? (
    <p className="link">
      {buttons.map((btn, i) => (
        <a
          key={i}
          href={btn.link?.LinkUrl}
          className={`btn ${btn.buttonStyle} ${btn.sizeStyle}`}
          target={btn.link?.LinkTarget}
          rel={btn.rel}
          title={btn.link?.LinkTitle}
        >
          {btn.icon && <span dangerouslySetInnerHTML={{ __html: btn.icon }} />}
          {btn.link?.LinkText}
          {btn.link?.LinkTargetIcon && (
            <span
              dangerouslySetInnerHTML={{ __html: btn.link.LinkTargetIcon }}
            />
          )}
        </a>
      ))}
    </p>
  ) : null;

/* =========================
   SCROLL PROMPT
========================= */

const ScrollPrompt = ({ style }) => (
  <div className={`scroll-prompt ${style || "scroll-prompt-arrow"}`}>
    <button type="button" className="scroll-link" aria-label="Scroll">
      <i className="icon" />
      <div className="mouse-scroll" />
      <span>Scroll</span>
    </button>
  </div>
);
