
update:
	git fetch
	git pull


start:	update
	docker compose -f ./lan-compose.yml up --detach --build


stop:
	docker compose -f ./lan-compose.yml down


monitor:
	docker compose -f ./lan-compose.yml stats


del-data:
	-docker volume rm boulderapp_lezeni_db
	-sudo rm -rf ./uploads/*


backup:
	docker exec -i boulderapp-db-1 /usr/bin/mongodump --uri "mongodb://db:password@db:27017/" --archive > ./mongodb.dump


restore:
	docker exec -i boulderapp-db-1 /usr/bin/mongorestore --uri "mongodb://db:password@db:27017/" --archive < ./mongodb.dump


.PHONY: update start stop monitor del-data backup restore
