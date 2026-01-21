function ImageContentBlock({ content , setting}) {
    if(setting?.hideFromWebsite == true) return null;
    const media = content.image[0];

    return <section id="image-content-block">

        <img src={`${media.url}`} width="100%" />

    </section>

}
export default ImageContentBlock;