
export async function getPage(handle) {
    const res = await umbracoFetch({
        method: 'GET',
        path: `/content/item${handle}`
    });
    return convertToPage(res.body);
}
export async function getPagenav(handle) {
const nav = await umbracoFetch({
        method: 'GET',
        path: `/content/item/${handle}`
    });
    return convertToPage(nav.body);
}
 
async function umbracoFetch(opts) {
    const options = {
        method: opts.method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const result = await fetch('/umbraco/delivery/api/v2' + opts.path, options);
    const body = await result.json();
    return {
        status: result.status,
        body
    };
}

const convertToPage = (node) => {
    return {
        id: node.id,
        handle: node.route.path,
        title: node.name,
        properties: node.properties,
        seo: {
            title: node.properties['seoPageTitle']?.toString() || node.name,
            description: node.properties['seoDescription']?.toString()
        },
        contentType: node.contentType
    };
};