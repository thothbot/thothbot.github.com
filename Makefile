.PHONY: build dev start stop shell clean build-prod

IMAGE_NAME = thothbot-site
CONTAINER_NAME = thothbot-dev

# Build Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Start dev server (with hot reload via volume mount)
dev: build
	docker run -it --rm \
		--name $(CONTAINER_NAME) \
		-p 4321:4321 \
		-v $(PWD)/src:/app/src \
		-v $(PWD)/public:/app/public \
		$(IMAGE_NAME)

# Start dev server in background
start: build
	docker run -d --rm \
		--name $(CONTAINER_NAME) \
		-p 4321:4321 \
		-v $(PWD)/src:/app/src \
		-v $(PWD)/public:/app/public \
		$(IMAGE_NAME)

# Stop dev server
stop:
	docker stop $(CONTAINER_NAME) || true

# Shell into container
shell: build
	docker run -it --rm \
		-v $(PWD):/app \
		$(IMAGE_NAME) sh

# Test production build
build-prod: build
	docker run --rm \
		-v $(PWD)/dist:/app/dist \
		$(IMAGE_NAME) npm run build

# Clean up
clean:
	docker rmi $(IMAGE_NAME) || true
	rm -rf dist node_modules
