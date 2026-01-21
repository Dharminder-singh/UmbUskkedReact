import React from 'react'
import CtaContentBlock from "./ctaContentBlock";
import ImageContentBlock from "./imageContentBlock";
import TextContentBlock from "./textContentBlock";
function Split({ content , setting}) {
    if(setting?.hideFromWebsite == true) return null;
    const leftData = content.left.items
    const rightData = content.right.items
    return (
        <>
            <section>
                <div className="container m-auto">
                    <div className='SpitSection grid grid-cols-2'>
                        <div className="left">
                        {
                            leftData.map((block) => {
                                const key = block.content.id;
                                switch (block.content.contentType) {
                                    case "imageContentBlock":
                                        return <ImageContentBlock key={key} content={block.content.properties} />
                                    case "textContentBlock":
                                        return <TextContentBlock key={key} content={block.content.properties} />
                                    case "ctaContentBlock":
                                        return <CtaContentBlock key={key} content={block.content.properties} />
                                    case "split":
                                        return <Split key={key} content={block.content.properties} />

                                }
                                return null;
                            })}
                    </div>
                    <div className="right">
                        {
                            rightData.map((block) => {
                                const key = block.content.id;
                                switch (block.content.contentType) {
                                    case "imageContentBlock":
                                        return <ImageContentBlock key={key} content={block.content.properties} />
                                    case "textContentBlock":
                                        return <TextContentBlock key={key} content={block.content.properties} />
                                    case "ctaContentBlock":
                                        return <CtaContentBlock key={key} content={block.content.properties} />
                                    case "split":
                                        return <Split key={key} content={block.content.properties} />
                                }
                                return null;
                            }
                            )}
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Split