import React from "react";
import "../Style/podsBlock.css";
/**
 * ROOT COMPONENT
 */
const PodsBlock = ({ data }) => {
  if (!data?.content || !data?.settings) return null;

  const { content, settings } = data;
  const cProps = content.properties;
  const sProps = settings.properties;

  const sectionStyle = {
    backgroundColor: sProps?.backgroundColor?.value || "transparent",
    backgroundImage: sProps?.backgroundImage
      ? `url(${sProps.backgroundImage.url})`
      : undefined,
    opacity: sProps?.backgroundImageOpacity / 100
  };

  return (
    <section
      id={sProps?.anchorName || undefined}
      className={`pods-block ${sProps?.itemsPerRow || ""} ${
        sProps?.animate ? `animate ${sProps.animationStyle}` : ""
      } ${sProps?.customClasses || ""}`}
      style={sectionStyle}
    >
      {/* INTRO */}
      {cProps.displayIntro && (
        <IntroBlock
          heading={cProps.introHeading}
          secondary={cProps.introSecondaryHeading}
          text={cProps.introText}
          alignment={cProps.introTextAlignment}
        />
      )}

      {/* PODS */}
      <div className="pods-grid">
        {cProps.pods?.items?.map((item) => (
          <PodRenderer key={item.content.id} item={item} />
        ))}
      </div>

      {/* OUTRO */}
      {cProps.displayOutro && (
        <OutroBlock
          heading={cProps.outroHeading}
          secondary={cProps.outroSecondaryHeading}
          text={cProps.outroText}
          alignment={cProps.outroTextAlignment}
        />
      )}
    </section>
  );
};

export default PodsBlock;

/* ======================================================
   POD SWITCHER
====================================================== */

const PodRenderer = ({ item }) => {
  const { content, settings } = item;

  switch (content.contentType) {
    case "USN_PB_TextImage":
      return (
        <TextImagePod
          content={content.properties}
          settings={settings.properties}
        />
      );

    case "USN_PB_RelatedContent":
      return (
        <RelatedContentPod
          content={content.properties}
          settings={settings.properties}
        />
      );

    case "USN_PB_Form":
      return (
        <FormPod
          content={content.properties}
          settings={settings.properties}
        />
      );

    default:
      return null;
  }
};

/* ======================================================
   INTRO / OUTRO
====================================================== */

const IntroBlock = ({ heading, secondary, text, alignment }) => (
  <div className={`pods-intro ${alignment || ""}`}>
    {heading && <h2>{heading}</h2>}
    {secondary && <h3>{secondary}</h3>}
    {text?.markup && (
      <div dangerouslySetInnerHTML={{ __html: text.markup }} />
    )}
  </div>
);

const OutroBlock = ({ heading, secondary, text, alignment }) => (
  <div className={`pods-outro ${alignment || ""}`}>
    {heading && <h2>{heading}</h2>}
    {secondary && <h3>{secondary}</h3>}
    {text?.markup && (
      <div dangerouslySetInnerHTML={{ __html: text.markup }} />
    )}
  </div>
);

/* ======================================================
   TEXT + IMAGE POD
====================================================== */

const TextImagePod = ({ content, settings }) => {
  const image = content.podImage?.[0];

  return (
    <article
      className={`pod text-image ${
        settings?.textPosition || ""
      } ${settings?.animate ? settings.animationStyle : ""}`}
    >
      {!settings?.hideImage && image && (
        <div className="pod-image">
          <img
            src={image.url}
            alt={image.name || ""}
            style={{
              opacity: settings?.imageOpacity
                ? settings.imageOpacity / 100
                : 1
            }}
          />
        </div>
      )}

      <div
        className={`pod-content ${
          settings?.textAlignment || ""
        } ${settings?.overlayTextPosition || ""}`}
        style={{
          backgroundColor: settings?.addBackgroundColor
            ? settings?.overlayBackgroundColor?.value
            : "transparent"
        }}
      >
        {content.podHeading?.text && (
          <p className="pod-heading">
            {content.podHeading.text}
          </p>
        )}

        {content.podSecondaryHeading && (
          <p className="pod-subheading">
            {content.podSecondaryHeading}
          </p>
        )}

        {content.podText?.markup && (
          <div
            className="pod-text"
            dangerouslySetInnerHTML={{
              __html: content.podText.markup
            }}
          />
        )}
      </div>
    </article>
  );
};

/* ======================================================
   RELATED CONTENT POD
====================================================== */

const RelatedContentPod = ({ content }) => {
  if (!content.relatedContent?.length) {
    return (
      <article className="pod related-content empty">
        <p>No related content available.</p>
      </article>
    );
  }

  return (
    <article className="pod related-content">
      {content.relatedContent.map((item, i) => (
        <div key={i} className="related-item">
          <p>{item.name}</p>
        </div>
      ))}
    </article>
  );
};

/* ======================================================
   FORM POD
====================================================== */

const FormPod = ({ content, settings }) => {
  return (
    <article
      className={`pod form-pod ${
        settings?.animate ? settings.animationStyle : ""
      }`}
      style={{
        backgroundColor:
          settings?.formContainerBackgroundColor?.value
      }}
    >
      {content.formHeading?.text && (
        <p className="form-heading">
          {content.formHeading.text}
        </p>
      )}

      {content.formSecondaryHeading && (
        <p className="form-subheading">
          {content.formSecondaryHeading}
        </p>
      )}

      {content.formIntroduction?.markup && (
        <div
          className="form-intro"
          dangerouslySetInnerHTML={{
            __html: content.formIntroduction.markup
          }}
        />
      )}

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted");
        }}
      >
        {!content.hideFields && (
          <input
            type="email"
            placeholder="Your email"
            required
          />
        )}

        <button
          type="submit"
          style={{
            backgroundColor:
              settings?.formButtonColor?.value
          }}
        >
          {content.formButtonText || "Submit"}
        </button>
      </form>
    </article>
  );
};
