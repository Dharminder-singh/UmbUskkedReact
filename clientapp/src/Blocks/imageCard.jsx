import React from 'react'

export default function ImageCard({ content, setting }) {
    if (setting?.hideFromWebsite == true) return null;
    if (!content) return null;
    const media = content.image[0];
    console.log('ImageCard content:', content);
    return (
        <>
            <div className="image-card">
                {media?.url && (
                    <img src={media.url} width="100%" alt="" />
                )}

                {content?.heading && (
                    <h3>{content.heading}</h3>
                )}

                {content?.subHeading && (
                    <p className="subHeading">{content.subHeading}</p>
                )}

                {content?.text?.markup && (
                    <div
                        dangerouslySetInnerHTML={{ __html: content.text.markup }}
                    />
                )}
            </div>

        </>
    )
}
