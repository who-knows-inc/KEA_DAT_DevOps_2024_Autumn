import esClient from './esClient.js';

export async function indexWebPage(url, content) {
    try {
        await esClient.index({
            index: 'pages',
            id: url,
            document: {
                url,
                content
            }
        });

        console.log('Page content indexed successfully');
    } catch (error) {
        console.error('Error indexing page:', error);
    }
}