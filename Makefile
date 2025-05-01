APP_NAME=voting-front
DOCKERHUB_USERNAME=201809mohmerhy
DOCKERHUB_REPO=$(DOCKERHUB_USERNAME)/$(APP_NAME)
IMAGE_TAG=latest
DOCKER_IMAGE=$(DOCKERHUB_REPO):$(IMAGE_TAG)

.PHONY: all docker-build push-hub

all: docker-build push-hub

docker-build:
	@echo "Building Docker image..."
	docker build -t $(DOCKER_IMAGE) .

# Push Docker image to Docker Hub
push-hub:
	@echo "Pushing Docker image to Docker Hub..."
	echo "$$DOCKERHUB_TOKEN" | docker login -u $(DOCKERHUB_USERNAME) --password-stdin
	docker push $(DOCKER_IMAGE)
