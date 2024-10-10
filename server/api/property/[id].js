export default defineEventHandler(async (event) => {
    // Access runtimeConfig values
    const config = useRuntimeConfig();

    // Extract `id` parameter from the request URL
    const { id } = event.context.params;

    // Fetch property detailsusing the íd
    const res = await fetch(`${config.fundaBaseUrl}detail/${config.fundaApiKey}/koop/${id}`);
    const property = await res.json();

    // Return the fetched property data
    return property;
}) 
