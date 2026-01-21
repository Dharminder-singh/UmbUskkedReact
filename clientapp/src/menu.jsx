import { Link } from "react-router";
import { useSelector } from 'react-redux';
function Menu() {
 const { styleData, logo , headerData, loading } = useSelector((state) => state.layout);
 if (loading) return <p>Loading header...</p>;
    return (
        <>
            <header className="flex justify-between align-center py-10">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className='logo text-2xl text-700 bold text-white'>
                        <Link to="/">{logo && logo[0] ? <img src={logo[0].url} alt="Logo" className="" /> : <span>Logo</span>}</Link>
                        </div>
                        <nav>
                            <ul className='flex gap-2 justify-center align-center'>
                                {headerData?.map((block, index) => {
                                    const props = block.content.properties;
                                    const title = props.title;
                                    const link = props.link?.[0];
                                    let finalUrl = "#";
                                    if (link.linkType === "External" && link.url) {
                                        finalUrl = link.url;
                                    }
                                    else if (link.linkType === "Content" && link.route?.path) {
                                        finalUrl = link.route.path;
                                    }
                                    else {
                                        finalUrl = link.url || link.route?.path || "#";
                                    }

                                    return (
                                        <li key={index}>
                                            <Link className="nav-items" to={finalUrl}>{title}</Link>
                                        </li>
                                    );
                                })}

                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Menu