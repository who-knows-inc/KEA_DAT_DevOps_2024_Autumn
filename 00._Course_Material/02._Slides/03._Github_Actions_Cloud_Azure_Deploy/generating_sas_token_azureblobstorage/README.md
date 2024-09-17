# Accessing the blob storage files

Azure For Student account no longer give anonymous access to accounts (option 1). 

Here are the thing that can be done: 

1. Enable Anonymous Public Read Access 

2. Using Azure AD (Active Directory)

3. Generate a Shared Access Signature (SAS) URL

## Shared Access Signature (SAS)

### Get Account Key

```bash
$ az storage account list --query "[].{name:name}" -o table
```

Replace <YourStorageAccountName> with the name from the previous result:

```bash
$ az storage account keys list --account-name <YourStorageAccountName> --query '[0].value' -o tsv
```

### Replace values in index.js

Replace all the values that start with `<your`. Here is where to find them either through the portal or CLI. 


1. **Storage Account Name**
   - **Azure Portal:** Navigate to "Storage Accounts" > Select your account.
   - **Azure CLI:** `az storage account list --query "[].name" -o table`

2. **Account Key**
   - **Azure Portal:** Storage account > "Access keys" > Copy `key1` or `key2`.
   - **Azure CLI:** `az storage account keys list --account-name <YourStorageAccountName> --query '[0].value' -o tsv`

3. **Container Name**
   - **Azure Portal:** Storage account > "Containers".
   - **Azure CLI:** `az storage container list --account-name <YourStorageAccountName> --account-key <YourAccountKey> --query "[].name" -o table`

4. **Blob Name**
   - **Azure Portal:** Storage account > "Containers" > Select container > Find blob name.
   - **Azure CLI:** `az storage blob list --container-name <YourContainerName> --account-name <YourStorageAccountName> --account-key <YourAccountKey> --query "[].name" -o table`


### Install and run

```bash
$ npm install
```

Run:

```bash
$ node index.js
```

The URL that follows SAS URL will allow you access to the 