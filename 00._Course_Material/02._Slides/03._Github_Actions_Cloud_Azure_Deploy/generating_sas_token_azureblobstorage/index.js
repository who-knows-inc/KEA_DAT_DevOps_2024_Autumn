import { BlobServiceClient, StorageSharedKeyCredential, generateBlobSASQueryParameters, BlobSASPermissions } from "@azure/storage-blob";

// Replace these with your Azure Storage account's name and account key
const accountName = "<your_storage_account_name_here>";
const accountKey = "<your_account_key_here>";

// The container and blob for which you want to generate a SAS token
const containerName = "<your_container_name_here>";
const blobName = "<your_file_name_here>";

// Use StorageSharedKeyCredential with account name and key
const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

// Generate SAS token for the blob
async function generateSasToken() {
    const blobServiceClient = new BlobServiceClient(
        `https://${accountName}.blob.core.windows.net`,
        sharedKeyCredential
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);

    const sasOptions = {
        containerName, // Name of the container
        blobName, // Name of the blob
        permissions: BlobSASPermissions.parse("r"), // Permission: "r" for read
        startsOn: new Date(), // Start time for the SAS token
        expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // Expiry time (1 hour from now for example)
    };

    const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();

    return `${blobClient.url}?${sasToken}`;
}

generateSasToken().then((url) => {
    console.log("SAS URL:", url);
}).catch((error) => {
    console.error("Error generating SAS token:", error.message);
});
