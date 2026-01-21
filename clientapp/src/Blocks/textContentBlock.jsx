function TextContentBlock({ content , setting}) {
    console.log(content);
    return <>
    <section id="text-content-block">
        <div dangerouslySetInnerHTML={{ __html: content.text.markup }} />
    </section>
    </>;
}
export default TextContentBlock;