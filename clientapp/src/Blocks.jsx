
import TextContentBlock from "./Blocks/textContentBlock";
import Banner from "./Blocks/BannerBlock";
import PodsBlock from "./Blocks/PodsBlock";
import SubpageListingBlock from "./Blocks/SubpageListingBlock";
const Blocks = ({ blocks }) => {
    if (!blocks) return <div> page Content is missing</div>
    return blocks.map((block) => {
        const key = block.content.id;
        switch (block.content.contentType) {
            case "USN_CB_Text":
                return <TextContentBlock key={key} content={block.content.properties} setting={block.settings.properties} />
            case "USN_CB_Banner":
                return <Banner key={key} block={block} />
            case "USN_CB_Pods":
                return <PodsBlock key={block.content.id} data={{ content: block.content, settings: block.settings }} />
            case "USN_CB_SubpageListing":
                return <SubpageListingBlock key={block.content.id} content={block.content} settings={block.settings} /> 
                  
            default:
                return <div key={key}>No block found for type</div>
        }

    })

}

export default Blocks;