# [Optional] Whoknows variations - Continuous Deployment

**Type**: Individual

**Motivation**: Use your acquired skills to quickly provision infrastructure and achieve continuous deployment.

---

# The task

1. Fork the repository. 

https://github.com/who-knows-inc/whoknows_variations/tree/continuous_deployment

2. Change `infrastructure/terraform.tfvars_copy` to `inffrastructure/terraform.tfvars` and fill in the variables.

3. Provision the infrastructure using Terraform with the following commands:

```bash
$ cd infrastructure
$ terraform init
$ terraform apply
```

4. Once the infrastructure is provisioned, run the `setup.sh` script to add the necessary values to Github Secret. (Requires Container Registry Personal Access Token).

5. Trigger the Github Actions workflow to deploy the application.

