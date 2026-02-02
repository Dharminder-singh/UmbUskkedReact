import { useEffect } from "react";
import { useSelector } from "react-redux";

const ApplyDesign = () => {
    const { design } = useSelector((state) => state.layout);

    useEffect(() => {
        if (!design?.properties) return;

        const root = document.documentElement;
        const p = design.properties;

        /* =========================
           COLORS
           ========================= */
        if (p.primaryColor)
            root.style.setProperty("--color-primary", p.primaryColor);

        if (p.secondaryColor)
            root.style.setProperty("--color-secondary", p.secondaryColor);

        if (p.backgroundColor)
            root.style.setProperty("--color-background", p.backgroundColor);

        /* =========================
           TYPOGRAPHY
           ========================= */
        if (p.fontFamilyPrimary)
            root.style.setProperty("--font-primary", p.fontFamilyPrimary);

        if (p.fontFamilySecondary)
            root.style.setProperty("--font-secondary", p.fontFamilySecondary);

        if (p.baseFontSize)
            root.style.setProperty(
                "--font-size-base",
                `${p.baseFontSize}px`
            );

        /* =========================
           LOGO
           ========================= */
        if (p.logo?.[0]?.url)
            root.style.setProperty(
                "--site-logo",
                `url(${p.logo[0].url})`
            );

    }, [design]);

    return null;
};

export default ApplyDesign;
