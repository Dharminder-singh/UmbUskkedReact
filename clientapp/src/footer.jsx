import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLayoutData } from "./redux/layoutSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const { footerData, loading, error } = useSelector((state) => state.layout);

  useEffect(() => {
    dispatch(fetchLayoutData());
  }, [dispatch]);

  if (loading) return <footer className="p-4 text-center">Loading footer…</footer>;
  if (error) return <footer className="p-4 text-center text-red-600">Error: {error}</footer>;
const footerItemsArray = footerData?.footerItems?.items ?? [];  
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Footer Items */}
        {footerItemsArray.map((item, index) => {
          const props = item.content.properties;
          const imageUrl = props.image?.[0]?.url;

          return (
            <div key={index} className="flex flex-col items-start gap-2">
              
              {imageUrl && (
               <div className="footer-logo">
                 <img
                  src={imageUrl}
                  alt={props.heading || "footer image"}
                  className="w-full h-auto rounded-md"
                />
               </div>
              )}

              {props.heading && (
                <h2 className="text-lg font-semibold">{props.heading}</h2>
              )}

              {props.subHeading && (
                <h3 className="text-sm">{props.subHeading}</h3>
              )}

              {props.text?.markup && (
                <div
                  className="text-sm opacity-70"
                  dangerouslySetInnerHTML={{ __html: props.text.markup }}
                />
              )}
            </div>
          );
        })}

        {/* Copyright */}
        {footerData?.copyrightMessage && (
          <p className="text-sm opacity-70 mb-2">
            @{footerData.copyrightMessage} 2025
          </p>
        )}

        {/* Site Credit */}
        {(footerData?.siteCreditLabel || footerData?.siteCreditLink) && (
          <p className="text-sm opacity-70">
            {footerData.siteCreditLabel}{" "}
            {footerData.siteCreditLink && (
              <a
                href={footerData.siteCreditLink}
                className="underline hover:text-gray-300 ml-1"
              >
                {footerData.siteCreditLink}
              </a>
            )}
          </p>
        )}
      </div>
    </footer>
  );
}
