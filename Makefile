serve:
	@docker-compose up

build:
	@docker-compose up --build

shell:
	@docker exec -it app bash