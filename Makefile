serve:
	@docker-compose -f "docker-compose.yml" up

build:
	@docker-compose -f "docker-compose.yml" up --build

shell:
	@docker exec -it food_place_app bash

dev:
	@docker-compose -f "docker-compose-dev.yml" up --build