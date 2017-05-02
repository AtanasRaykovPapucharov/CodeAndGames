# Telerik Academy - "JavaScript Applications" Course Project

# **Games&Code** - JS RESTful SPA

**Games&Code** is a [JavaScript](https://www.javascript.com/ "JavaScript") single-page application with [Navigo](https://github.com/krasimir/navigo "Navigo"), [jQuery](http://jquery.com/"jQuery"), [Handlebars](http://handlebarsjs.com/ "Handlebars") and [SystemJS](https://github.com/systemjs/systemjs "SystemJS").
App works with [NodeJS](https://nodejs.org/ "NodeJS") as a server and [MongoDB](https://www.mongodb.com/ "MongoDB") as a database.

This app is a blog for games and programming. A user could see all blog posts and all games, could play some games, could sign up and sign in. A signed in user has a profile. A signed in user could add new blog post, add a new game, likes, comments and bookmarks.

Inside the database there are three collections: Users, Blogs and Games.

**User**s collection contains objects like this:

```javascript
{
    "name": "",
    "email": "",
    "hashedPassword": "",
    "key": "",
    "imageAvatar": "",
    "age": "",
    "interests": [string],
    "blogs": [
        {
            "title": string,
            "date": date,
            "commentsNumber": number,
            "likes": number
        }
    ],
    "games": [
        {
            "title": string,
            "date": date,
            "likes": number
        }
    ],
    "bookmarks": [string]
}
```

**Blog**s collection contains objects like this:

```javascript
{
    "role": "blog",
    "title": string,
    "image": string,
    "content": string",
    "tags": [string],
    "link": string,
    "author": string,
    "comments": [
        {
            "author": string,
            "content": string,
            "date": string
        }
    ],
    "likes": number,
    "looks": number,
    "bookmarks": number,
    "date": string
}
```

**Game**s collection contains objects like this:
```javascript
{
    "role": "game",
    "title": string,
    "image": string,
    "content": string,
    "tags": [string],
    "link": string,
    "author": string,
    "comments": [
        {
            "author": string,
            "content": string,
            "date": date
        }
    ],
    "likes": number,
    "looks": number,
    "bookmarks": number,
    "date": date
}
```

## Start up's:

- to install node modules: >>npm install
- to run app: >>npm start

App is tested with [Mocha](https://mochajs.org/ "Mocha"), [Chai](http://chaijs.com/ "Chai") and [SinonJS](http://sinonjs.org/ "SinonJS").

- to run tests: >>npm test

Design is supported by [Twitter Bootstrap](http://getbootstrap.com/ "Twitter Bootstrap"), [jQuery-UI](http://jqueryui.com/ "jQuery-UI") and [Sass](http://sass-lang.com/ "Sass").

- to run sass watcher: >>npm run sass


## MVC architecture block-scheme: 
![Block-scheme](./app/public/assets/images/arch-block.png "Block-scheme")

## Server routes:

### Users

* `api/users`
  * GET
    * **Returns** all users
  * POST
    * **Registers** a new user
    * Needs **email**, **username** and **passHash** to be sent in the body of the request
* `api/auth`
  * PUT
    * **Logs in** an user
    * Needs **username** and **passHash** to be sent in the body of the request
	* If the request is valid returns **user** and **authKey**

### Blog

* `api/blogs`
  * GET
    * **Returns** all blogs
  * POST
    * **New blog post** 
	* User must be **logged-in**
    * Needs **authKey** as a header with name: `x-auth-key`
      * `img` is a string to an online image
      * `img` is optional and if not sent, a **default image** will be provided
* `api/blogs/:id`
  * PUT
    * **Likes** a blog post
    * Needs `type` to be sent in the body of the request
      * `type` can only have values 'like'

###	Games

* `api/games`
  * GET
    * **Returns** all games
  * POST
    * **New game** 
	* User must be **logged-in**
    * Needs **authKey** as a header with name: `x-auth-key`
      * `img` is a string to an online image
      * `img` is optional and if not sent, a **default image** will be provided
* `api/games/:id`
  * PUT
    * **Likes** a blog post
    * Needs `type` to be sent in the body of the request
      * `type` can only have values 'like'

###	Tags
*	`api/tags`
	*	GET
		*	**Returns** an array with all tags
