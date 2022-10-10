import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const clientConfig = {
    projectId: 'v9k641ov',
    dataset: 'production',
}

export const client = sanityClient({
    projectId: clientConfig.projectId,
    dataset: clientConfig.dataset,
    apiVersion: '2022-10-10', // use current UTC date - see "specifying API version"!
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);