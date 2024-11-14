import esClient from './esClient.js';

async function searchWebPages(query) {
    try {
        const result = await esClient.search({
            index: 'pages',
            query: {
                match: {
                    content: {
                        query: query,
                        fuzziness: 'AUTO',
                        operator: 'or'
                    }
                }
            }
        });

        const hits = result.hits.hits.map(hit => ({
            url: hit._source.url,
            contentSnippet: hit._source.content.substring(0, 200) + '...'
        }));

        console.log('Search Results:', hits);
    } catch (error) {
        console.error('Error searching pages:', error);
    }
}

const searchQuery = 'dog';
searchWebPages(searchQuery);
