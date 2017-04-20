## Server routes

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
	* If the request is valid returns **username** and **authKey**

### Blog

* `api/blogs`
  * GET
    * **Returns** all blogs
  * POST
    * **New blog post** 
	* User must be **logged-in**
    * Needs **text**, **category**, **img** to be sent in the body of the request and the current user's **authKey** as a header with name: `x-auth-key`
      * `img` is a string to an online image
      * `img` is optional and if not sent, a **default batman** image will be provided
* `api/blogs/:id`
  * PUT
    * **Likes** a blog post
    * Needs `type` to be sent in the body of the request
      * `type` can only have values 'like'

###	My Blog

* `api/my-blog`
	* User must be **logged-in**
  * GET
    * **Returns** user blogs
    

###	Games

* `api/games`
  * GET
    * **Returns** all games
  * POST
    * **New game** 
	* User must be **logged-in**
    * Needs **text**, **category**, **img** to be sent in the body of the request and the current user's **authKey** as a header with name: `x-auth-key`
      * `img` is a string to an online image
      * `img` is optional and if not sent, a **default image** will be provided
* `api/games/:id`
  * PUT
    * **Likes** a blog post
    * Needs `type` to be sent in the body of the request
      * `type` can only have values 'like'

###	My Games

* `api/my-games`
	* User must be **logged-in**
  * GET
    * **Returns** user games
    
###	Categories
*	`api/categories`
	*	GET
		*	**Returns** an array with all categories
