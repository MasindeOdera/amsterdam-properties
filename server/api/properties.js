export default defineEventHandler(async (e) => {
    // Access runtimeConfig values
    const config = useRuntimeConfig();

    const res = await fetch(`${config.fundaBaseUrl}${config.fundaApiKey}/?type=koop&zo=/amsterdam/tuin/video/`);

    const data = await res.json();

    // Extract only the necessary fields
    const filteredData = data.Objects.map((property) => ({
        Id: property.Id, // Get the property id
        Address: property.Adres, // Get the address 
        Image: property.FotoLarge, // Get the image
        Availability: property.AangebodenSindsTekst, // Get the availability text
    }));

    const title = data.Metadata.Titel;
    const subtitle = data.Metadata.ObjectType;

    return { data: filteredData, title, subtitle }
}) 
