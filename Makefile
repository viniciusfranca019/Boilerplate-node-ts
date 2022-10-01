serve:
	@docker-compose -f "docker-compose.yml" up

build:
	@docker-compose -f "docker-compose.yml" up --build

shell:
	@docker exec -it boilerplate bash

dev:
	@docker-compose -f "docker-compose-dev.yml" up --build