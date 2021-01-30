

## About Todo-List

Ce projet avait pour but de m'initier à l'utilisation de graphql.

## Mise en place graphQL

Installer graphql via laravel : 
- composer create-project --prefer-dist laravel/laravel graphql

On crée aussi une base de données et on la configure correctement dans le fichier .env.

Installer lightHouse :
- composer require nuwave/lighthouse

Publier la nouvelle config :
- php artisan vendor:publish --provider="Nuwave\Lighthouse\LighthouseServiceProvider"

On se retrouve avec un schéma de base dans graphql/schema.graphql :

/*"A datetime string with format `Y-m-d H:i:s`, e.g. `2018-01-01 13:00:00`."
scalar DateTime @scalar(class: "Nuwave\\Lighthouse\\Schema\\Types\\Scalars\\DateTime")
"A date string with format `Y-m-d`, e.g. `2011-05-23`."
scalar Date @scalar(class: "Nuwave\\Lighthouse\\Schema\\Types\\Scalars\\Date")
type Query {
    users: [User!]! @paginate(type: "paginator" model: "App\\User")
    user(id: ID @eq): User @find(model: "App\\User")
}
type User {
    id: ID!
    name: String!
    email: String!
    created_at: DateTime!
    updated_at: DateTime!
}*/

Il faut quand même savoir que Lighthouse met par défaut le schéma en cache, alors pour éviter de perdre du temps :
 - php artisan lighthouse:clear-cache

 D’autre part dans la configuration (.env) il vaut mieux désactiver le cache tant qu’on fait des essais :

- LIGHTHOUSE_CACHE_ENABLE=false

Et voilà :). Il ne vous reste plus qu'a bien configurer votre base de donnée pour pouvoir commencer l'aventure graphql !!

- En apprendre d'avantage : https://laravel.sillo.org/graphql-et-laravel/