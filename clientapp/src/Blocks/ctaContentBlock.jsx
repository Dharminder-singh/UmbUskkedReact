import { Link } from "react-router";
function CtaContentBlock({ content , setting }) {
    if(setting?.hideFromWebsite == true) return null;
    const link = content.link[0];
    return <section id="cta-content-block">
        <p className="big-text">{content.bigText}</p>
        {link && link.url && <p>
            <Link to={link.url} target={link.target} className="button">{link.title}</Link>
        </p>}
    </section>
}
export default CtaContentBlock;