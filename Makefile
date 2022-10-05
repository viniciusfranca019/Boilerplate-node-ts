serve:
	@sudo docker-compose -f "docker-compose.yml" up

build:
	@sudo docker-compose -f "docker-compose.yml" up --build

shell:
	@docker exec -it boilerplate bash

dev:
	@sudo docker-compose -f "docker-compose-dev.yml" up --build