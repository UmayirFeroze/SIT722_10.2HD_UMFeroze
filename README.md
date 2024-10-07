# Node.js Azure Key Vault and Kubernetes Example

This project demonstrates how to use Azure Key Vault with a Node.js application deployed to Azure Kubernetes Service (AKS) using GitHub Actions.

## Setup

1. Create an Azure Key Vault and add a secret named `API-KEY`.
2. Create an Azure Container Registry (ACR).
3. Create an Azure Kubernetes Service (AKS) cluster.
4. Set up the following secrets in your GitHub repository:
   - `AZURE_CLIENT_ID`
   - `AZURE_TENANT_ID`
   - `AZURE_SUBSCRIPTION_ID`
   - `AZURE_CREDENTIALS` (JSON object with credentials for AKS)
   - `ACR_USERNAME`
   - `ACR_PASSWORD`
5. Update the following values in `.github/workflows/ci-cd.yml`:
   - `ACR_NAME`
   - `AKS_CLUSTER_NAME`
   - `AKS_RESOURCE_GROUP`
   - `AZURE_KEYVAULT_NAME`

## Local Development

1. Install dependencies: `npm install`
2. Run the app: `npm start`

## Deployment

Push to the `main` branch to trigger the CI/CD pipeline.