import { useSelector } from "react-redux";

const Logo = () => {
    const { design } = useSelector((state) => state.layout);
    const logo = design?.properties?.websiteLogo?.[0]?.url;
    if (!logo) return null;

    return <img src={logo} alt="Site Logo" className="site-logo" />;
};

export default Logo;
