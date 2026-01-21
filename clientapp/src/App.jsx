import { useEffect, useState } from 'react'
import Menu from './menu';
import { getPage } from './lib/umbracoFetch';
import { useLocation } from 'react-router';
import Blocks from './Blocks';
import { useDispatch } from 'react-redux';
import { fetchLayoutData } from './redux/layoutSlice';
import Footer from './footer';
import { useSelector } from 'react-redux';

function App() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      try {
        const data = await getPage(location.pathname);
        setPageData(data);
      } catch (error) {
        console.error("Failed to fetch page:", error);
      } finally {
        setLoading(false);
      }

    };

    fetchPage();

  }, [location.pathname]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLayoutData());
  }, [dispatch]);


  useEffect(() => {
    const props = pageData?.properties;

    // Hard stop: global scripts explicitly disabled
    if (!props || props.disableGlobalHeaderOpeningScripts === true) {
      return;
    }

    const raw = props.pageHeaderOpeningScripts;
    if (!raw) return;

    const added = [];

    // Inject styles
    raw.match(/<style[^>]*>[\s\S]*?<\/style>/gi)?.forEach(tag => {
      const style = document.createElement("style");
      style.innerHTML = tag.replace(/<\/?style[^>]*>/gi, "");
      document.head.appendChild(style);
      added.push(style);
    });

    // Inject scripts (must be created to execute)
    raw.match(/<script[^>]*>[\s\S]*?<\/script>/gi)?.forEach(tag => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = tag.replace(/<\/?script[^>]*>/gi, "");
      document.body.appendChild(script);
      added.push(script);
    });

    return () => {
      added.forEach(el => el.remove());
    };
  }, [pageData]);



  useEffect(() => {
    if (!pageData?.properties?.headScript) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = pageData.properties.headScript;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [pageData]);

  const { styleData } = useSelector((state) => state.layout);
  useEffect(() => {
    if (!styleData) return;

    const styleTag = document.createElement("style");
    styleTag.type = "text/css";
    styleTag.innerHTML = styleData;

    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [styleData]);

  useEffect(() => {
    const hide = pageData?.properties?.hideFromSearchEngines;

    // Remove any existing robots tag first (important)
    const existing = document.querySelector('meta[name="robots"]');
    if (existing) {
      existing.remove();
    }

    // If hiding is enabled, add noindex/nofollow
    if (hide === true) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex,nofollow";
      document.head.appendChild(meta);
    } else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "index,follow";
      document.head.appendChild(meta);
    }
  }, [pageData]);

  return <>

    <Menu></Menu>

    {loading

      ? <div>Loading...</div>

      : <>

        <title>{pageData?.titleAndDescription?.title}</title>
        <meta name="description" content={pageData?.titleAndDescription?.description} />
        <div className='site-main'>
          <Blocks blocks={pageData?.properties.mainContent?.items}></Blocks>
        </div>

      </>

    }
    <Footer></Footer>
    {pageData?.properties.bodyScript && (
      <script dangerouslySetInnerHTML={{ __html: pageData.properties.bodyScript }} />
    )}
  </>

}



export default App