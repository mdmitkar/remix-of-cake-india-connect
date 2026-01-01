import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonicalPath?: string;
    keywords?: string;
    image?: string;
    type?: 'website' | 'article';
    schema?: Record<string, any>;
}

export const SEO = ({
    title,
    description,
    canonicalPath,
    keywords,
    image = '/og-image.png', // Default OG image path
    type = 'website',
    schema
}: SEOProps) => {
    const domain = 'https://popinzbakingacademy.com';
    const canonicalUrl = canonicalPath ? `${domain}${canonicalPath}` : domain;
    const imageUrl = image.startsWith('http') ? image : `${domain}${image}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
