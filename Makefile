APP_NAME=voting-frontend
REGION=eu-north-1
IMAGE_TAG=latest
ECR_REPO=850995549906.dkr.ecr.eu-north-1.amazonaws.com/voting-app/$(APP_NAME)
DOCKER_IMAGE=$(ECR_REPO):$(IMAGE_TAG)

.PHONY: all docker-build push-ecr

all: docker-build push-ecr

# Build Docker image
docker-build:
	@echo "Building Docker image..."
	docker build -t $(DOCKER_IMAGE) .

# Push Docker image to ECR
push-ecr:
	@echo "Pushing Docker image to ECR..."
	aws ecr get-login-password --region $(REGION) | docker login --username AWS --password-stdin $(ECR_REPO)
	docker push $(DOCKER_IMAGE)

