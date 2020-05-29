# Golden Girls Quote API


Base URL:
<https://goldengirlsquotes.herokuapp.com/>


## Quotes
|Method| URL | Description| Requirements|
|:-----:|:-----|:-----|:-----|
|GET| /quotes| get a list of all quotes|
|GET| /quotes/:id| get a quote by id| quote id|
|GET| /quotes/random/random| get a random quote| quote id|
|GET| /quotes/random/:who| get a random quote by golden girl| name of golden girl|
|POST| /quotes| add a new quote | quote object|
|PUT| /quotes/:id| edit a quote | quote id, quote object|
|DELETE| /quotes/:id| delete a quote | quote id|

## Episodes
|Method| URL | Description| Requirements|
|:-----:|:-----|:-----|:-----|
|GET| /episodes| get a list of all episodes|
|POST| /episodes| add a new episode | episode object|
|PUT| /episodes/:id| edit an episode | episode id, episode object|
|DELETE| /episodes/:id| delete an episode | episode id|


## Adding a Quote

|Property| Required? | Type| Possible Values|
|:-----|:-----:|:-----|:-----|
|who| YES| string|dorothy, blanche, sophia, rose|
|quote| YES| string| 
|episode_id| YES| integer| 


### sample quote object
```javascript
{
    who: 'dorothy',
    quote: 'Go to sleep sweetheart, pray for brains.',
    episode_id: 53
}
```

## Adding an Episode

|Property| Required? | Type|
|:-----|:-----:|:-----|
|episode_name| YES| string|
|season_number| YES| integer| 


### sample episode object
```javascript
{
    episode_name: 'The Case of the Libertine Belle',
    season_number: 7
}
```
